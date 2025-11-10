# Join Quran

**To run the project locally, use the following command:**
```bash
uvicorn main:app --reload
```

## About the Project

Join Quran is an online platform dedicated to helping people learn the Quran with Tajweed and Qirath. Our mission is to empower learners of all ages to connect deeply with the Holy Qur’an through correct recitation, memorization, and understanding. We leverage modern technology, quality tutors, and AI-enabled support to make Quranic education accessible to everyone, everywhere.

## Technology Stack

-   **Backend:** Python 3.13, FastAPI
-   **Frontend:** React, TailwindCSS
-   **AI/Agent SDK:** OpenAI Agent SDK
-   **Database:** PostgreSQL
-   **Development Environment:** uv

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Python 3.13 or higher
-   [uv](https://github.com/astral-sh/uv)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Shafqatsarwar/join_quran_1st.git
    ```
2.  Navigate to the project directory
    ```sh
    cd join_quran_1st
    ```
3.  Create a virtual environment
    ```sh
    uv venv
    ```
4.  Activate the virtual environment
    ```sh
    source .venv/bin/activate
    ```
5.  Install the dependencies
    ```sh
    uv pip install -r requirements.txt
    ```

### Running the Application

Once the dependencies are installed, you can run the application using the following command:

```bash
uvicorn main:app --reload
```
