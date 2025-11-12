from chatbot import get_chatbot_response

def test_get_chatbot_response():
    message = "Hello, Gemini!"
    expected_response = f"This is a placeholder response to your message: '{message}'"
    actual_response = get_chatbot_response(message)
    assert actual_response == expected_response

def test_get_chatbot_response_empty_message():
    message = ""
    expected_response = f"This is a placeholder response to your message: '{message}'"
    actual_response = get_chatbot_response(message)
    assert actual_response == expected_response

def test_get_chatbot_response_special_characters():
    message = "Test with !@#$%^&*()_+"
    expected_response = f"This is a placeholder response to your message: '{message}'"
    actual_response = get_chatbot_response(message)
    assert actual_response == expected_response
