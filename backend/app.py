# app.py
from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

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

if __name__ == '__main__':
    app.run(port=5000)