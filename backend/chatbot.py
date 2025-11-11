import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# This is commented out to prevent errors if the API key is not set.
# The user will need to add their API key to the .env file.
# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
# model = genai.GenerativeModel('gemini-1.5-flash')

def get_chatbot_response(user_message: str):
    # try:
    #     response = model.generate_content(user_message)
    #     return response.text
    # except Exception as e:
    #     return f"An error occurred: {e}"
    return f"This is a placeholder response to your message: '{user_message}'"

