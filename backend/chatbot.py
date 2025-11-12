import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-2.5-flash')

def get_chatbot_response(user_message: str):
    # try:
    #     response = model.generate_content(user_message)
    #     return response.text
    # except Exception as e:
    #     return f"An error occurred: {e}"
    return f"This is a placeholder response to your message: '{user_message}'"

