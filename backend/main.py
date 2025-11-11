import json
from fastapi import FastAPI
from chatbot import get_chatbot_response

app = FastAPI()

@app.get("/api/courses")
def get_courses():
    with open("courses.json", "r") as f:
        courses = json.load(f)
    return courses

@app.post("/api/chatbot")
def chatbot(message: str):
    response = get_chatbot_response(message)
    return {"response": response}

@app.get("/")
def read_root():
    return {"Hello": "World"}