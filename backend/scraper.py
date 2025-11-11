import requests
import json
from bs4 import BeautifulSoup

def scrape_courses():
    URL = "https://www.joinquran.com/"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")

    course_elements = soup.find_all("div", class_="card-body")

    courses = []
    for course_element in course_elements:
        title = course_element.find("h5", class_="card-title").text
        description = course_element.find("p", class_="card-text").text
        
        courses.append({"title": title, "description": description})
    
    with open("courses.json", "w") as f:
        json.dump(courses, f, indent=4)

if __name__ == "__main__":
    scrape_courses()
