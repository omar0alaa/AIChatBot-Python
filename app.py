from flask import Flask, request, jsonify, render_template
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='static')

# LM Studio API endpoint (default for local server)
LM_STUDIO_API_URL = os.getenv("LM_STUDIO_API_URL", "http://localhost:1234/v1/chat/completions")

@app.route('/')
def index():
    """Render the chat interface."""
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    """Process user messages and get AI responses."""
    data = request.json
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        # Call LM Studio API for completion
        payload = {
            "messages": [
                {"role": "system", "content": "Your name is Proto AI. You are a helpful, friendly AI assistant powered by the Gemma model, but users should see you as 'Proto AI'. You have a slightly playful and enthusiastic personality. You're knowledgeable, curious, and always willing to help."},
                {"role": "user", "content": user_message}
            ],
            "temperature": 0.7,
            "max_tokens": 500
        }
        
        response = requests.post(LM_STUDIO_API_URL, json=payload)
        response.raise_for_status()
        response_data = response.json()
        
        # Extract the assistant's reply
        ai_message = response_data['choices'][0]['message']['content']
        
        return jsonify({
            'message': ai_message
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 