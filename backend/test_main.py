from fastapi.testclient import TestClient
from main import app
from unittest.mock import patch

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_get_courses():
    response = client.get("/api/courses")
    assert response.status_code == 200
    assert isinstance(response.json(), list) # Assuming courses.json returns a list

@patch('main.get_chatbot_response')
def test_chatbot_endpoint(mock_get_chatbot_response):
    mock_get_chatbot_response.return_value = "Mocked chatbot response"
    response = client.post("/api/chatbot", params={"message": "Hello"})
    assert response.status_code == 200
    assert response.json() == {"response": "Mocked chatbot response"}
    mock_get_chatbot_response.assert_called_once_with("Hello")
