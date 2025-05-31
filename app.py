from flask import Flask, request, jsonify, render_template
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='static')

# OLLAMA API endpoint (default for local server)
OLLAMA_API_URL = os.getenv("OLLAMA_API_URL", "http://localhost:11434/api/chat")

@app.route('/')
def index():
    """Render the chat interface."""
    return render_template('index.html')

@app.route('/widget')
def widget():
    """Render the widget chat interface."""
    return render_template('widget.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    """Process user messages and get AI responses from Ollama."""
    data = request.json
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        # Call Ollama API for completion
        payload = {
            "model": "llama3",
            "messages": [
                {"role": "system", "content": "Your name is Proto AI. You are a helpful, friendly AI assistant, but users should see you as 'Proto AI'. You have a slightly playful and enthusiastic personality. You're knowledgeable, curious, and always willing to help."},
                {"role": "user", "content": user_message}
            ]
        }
        response = requests.post(OLLAMA_API_URL, json=payload)
        response.raise_for_status()
        response_data = response.json()
        # Extract the assistant's reply (Ollama returns 'message' in 'message' key)
        ai_message = response_data['message']['content']
        return jsonify({
            'message': ai_message
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)