# app.py
from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/openai', methods=['POST', 'OPTIONS'])
def get_openai_output():
    if request.method == 'OPTIONS':
        return '', 200

    print('Request received')
    data = request.get_json()
    prompt = data['prompt']

    client = OpenAI(
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

    return {'output': response.choices[0].message.content.strip()}

if __name__ == '__main__':
    app.run(port=5000)
