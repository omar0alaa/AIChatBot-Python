# AI Chatbot with Python and LM Studio

A web-based AI chatbot built with Python Flask and LM Studio for local LLM inference.

## Features

- Web interface for chatting with the AI
- Backend API built with Flask
- Integration with LM Studio for local LLM inference
- Responsive UI with modern design
- No API keys or cloud services required

## Prerequisites

1. Install [LM Studio](https://lmstudio.ai/) on your computer
2. Download a language model through LM Studio
3. Start the local server in LM Studio

## LM Studio Setup

1. Download and install LM Studio from [lmstudio.ai](https://lmstudio.ai/)
2. Open LM Studio and download a language model (e.g., Llama 2, Mistral, or similar)
3. Select the downloaded model
4. Go to the "Local Server" tab
5. Click "Start Server" to launch the local API server
6. The server should be running on http://localhost:1234 by default

## Chatbot Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/AIChatBot-Python.git
   cd AIChatBot-Python
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. (Optional) Create a `.env` file to customize the LM Studio API endpoint:
   ```
   LM_STUDIO_API_URL=http://localhost:1234/v1/chat/completions
   ```

5. Run the application:
   ```
   python app.py
   ```

6. Open your browser and navigate to `http://127.0.0.1:5000`

## Project Structure

- `app.py`: Main Flask application
- `templates/index.html`: Chat interface
- `requirements.txt`: Project dependencies

## Customization

You can customize the AI behavior by modifying the system prompt in `app.py`:

```python
"messages": [
    {"role": "system", "content": "[Your description of the AI personality.]"},
    {"role": "user", "content": user_message}
]
```

You can also adjust the generation parameters:

```python
payload = {
    "messages": [...],
    "temperature": 0.7,  # Controls randomness (lower is more deterministic)
    "max_tokens": 500    # Maximum response length
}
```

## Deployment

This application is designed to work with a local LM Studio server. For production use, consider running both the Flask application and LM Studio on the same server.

## License

See the LICENSE file for details. 