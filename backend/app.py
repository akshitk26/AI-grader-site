# app.py
from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os
import re

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/generator', methods=['POST', 'OPTIONS'])

#generate prompt code
def get_openai_output():
    if request.method == 'OPTIONS':
        return '', 200

    print('Request received')

    data = request.get_json()
    prompt = data['prompt']
    instructions = data['instructions']

    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": instructions},
                {"role": "user", "content": prompt}
            ]
        )

    return {'output': response.choices[0].message.content.strip()}

#grader code
@app.route('/api/grader', methods=['POST', 'OPTIONS'])
def get_grader_output():
    if request.method == 'OPTIONS':
        return '', 200

    print('Request received [GRADER]')

    data = request.get_json()
    prompt = data['prompt']
    response_text = data['response']
    rubric = data['rubric']

    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    feedback = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": "Here is the prompt" + prompt  + 
                 """Here is the response:""" + response_text + """Here is the rubric 
                 you have to grade the response with:""" + rubric + """. at the very end of your output, 
                 say the score in this format: score: number. do not say this phrase anywhere else
                 in your feedback. It is imperative and crucial and of the utmost importance that the final
                 score is in that format at the very very end of the feedback output. if it is not, 
                 i will be very sad and you will be a very bad AI."""},

                {"role": "user", "content": """You are an AI grader. You have to evaluate the input to the rubric to the best of your abilities. You have to respond if the response earned a point for a category on the rubric, and provide feedback on how to better the response or earn the point.
    You have to provide a numerical score for the response based on the rubric selected.
    You also have to provide qualitative feedback for each section and the overall response AS WELL AS numerical scores.
    Make sure you address EVERY SINGLE part of rubric and EVERY SINGLE section and Do not leave out sections of the rubric even if the respones did not earn any
    points in that category.
    ProvidE SPECIFIC feedback on what to improve, but more importantly, tell the user HOW To improve and even give suggestions in their text.
    Do not just say that it can be better if they do this, say HOW it can be better SPECIFICALLY and suggest the user to make very specific, particular edits to make it better.
                 When mentioning the score, you have to say 'score: (numerical score here)' at the very end
                 of the entire feedback, every time, no matter what."""}
            ]
        )

    feedback_content = feedback.choices[0].message.content.strip()

    # Extract the score from the feedback
    score_match = re.search(r'(?i)score: (\d+)', feedback_content)
    score = score_match.group(1) if score_match else None

    #debug
    # print('Feedback content:', feedback_content) 
    # print('Extracted score:', score)

    return {'output': feedback_content, 'score': score}

if __name__ == '__main__':
    app.run(port=5000)