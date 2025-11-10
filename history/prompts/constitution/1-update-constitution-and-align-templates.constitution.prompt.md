---
id: 1
title: Update constitution and align templates
stage: constitution
date: 2025-11-10
surface: agent
model: gemini-1.5-flash
feature: none
branch: master
user: unknown
command: update @.specify/memory/constitution.md to improve code Quality standards following instructions...
labels: [constitution, documentation, template]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
- .specify/templates/plan-template.md
tests:

---

## Prompt

update @.specify/memory/constitution.md to improve code Quality standards following instructions:
# Join Quran – Website Project Constitution
> Version: 1.0
> Date: ‎{YYYY-MM-DD}
> Python version: 3.13

## 1. Mission & Vision
**Mission:**
To empower learners of all ages (children, youth, adults) around the world to connect deeply with the Holy Qur’an — through correct recitation (Tajweed), Qirāʾah, memorization (Ḥifẓ), and understanding — by leveraging modern technology, quality tutors, and AI-enabled support.
**Vision:**
A world where every learner— regardless of location or age — can access personalized, interactive Qur’anic learning, making the Qur’an alive in their life and practice.

## 2. Core Values
- Authenticity: Upholding the rules of Tajweed, Qirāʾah and classical recitation traditions.
- Accessibility: Learning available for all ages, flexible scheduling, online global reach.
- Excellence: Qualified tutors, interactive tools, responsive UI/UX.
- Innovation: Leveraging AI & modern web frameworks to enhance learning and engagement.
- Integrity: Transparent in pricing, respectful of students’ needs, maintaining high standards.

## 3. Scope & Features
### 3.1 Target Audience
- Kids (age ~4+)
- Teens and Young Adults
- Adults and Seniors (lifelong learners)
- Tutors & Administrators
### 3.2 Primary Features
- Course catalogue (Tajweed, reading, memorization, tafsīr)
- Tutor profiles (male/female, multilingual)
- Online scheduling & live sessions
- Learner dashboards: progress tracking, recitation feedback
- AI-Agent support: e.g., chatbot for questions, automated recitation feedback using speech recognition
- APIs/endpoints for tutor and student management
- Admin panel: course management, user management, payments & billing
- Responsive web UI (mobile + desktop)
### 3.3 Technology Stack
- Backend: Python 3.13 (minimum)
- Web Framework: e.g., FastAPI (or Flask + FastAPI hybrid)
- ASGI server: e.g., Uvicorn (to be initialised via `uv init`)
- AI/Agent SDK: e.g., OpenAI Agent SDK
- Database: Local PostgreSQL in future
- Frontend: React + TailwindCSS for UI
- Deployment: vercel and local server first
- CI/CD: GitHub Actions or GitLab CI
### 3.4 Dependencies & Packages
Example list (to be expanded):
```text
python>=3.13,<4.0
fastapi
uvicorn
openai-agent-sdk  # placeholder name — exact package name to confirm
sqlalchemy
asyncpg
pydantic
redis
alembic
jinja2
aiohttp
rich
readchar
platformdirs
httpx
typer
```

## Response snapshot

I have successfully pushed the changes to the GitHub repository.

## Outcome

- ✅ Impact: The project constitution has been updated with more details and the plan template has been aligned with the new constitution.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
- 🔁 Next prompts: The user can now proceed with the project development.
- 🧠 Reflection: The process of updating the constitution and aligning the templates was successful. The new constitution provides a much clearer guide for the project.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
