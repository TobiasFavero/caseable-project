# Caseable Project

## Instructions:

Install Python ^3.10.4

Instal Node ^v18.1.0

Locate .env in src/backend

Install dependencies:

Frontend:

> go to src/frontend

> npm i

Backend:

> go to src/backend

> python -m venv venv

> ./venv/Scripts/activate

> pip install -r requirements.txt

Run:

Backend:

If it is being opened in VSCode in the root of the project, just press F5 (Locate the .env in the root of the project in that case)

From console:

> go to src/backend

> $env:FLASK_ENV = "development"

> ./venv/Scripts/activate

> flask run

Frontend:

> go to src/frontend

> npm start

Run Tests:

> go to src/backend

> pytest
