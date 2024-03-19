## Prerequisites

Before running this application, ensure you have the following installed on your machine:

- Node.js: https://nodejs.org/
- npm (Node.js package manager, usually comes with Node.js installation)

## Getting Started

Follow these steps to get the application running on your local machine:

1.  Clone this repository to your local machine:

    git clone https://github.com/sayeemFrontend/weGro_backend.git

2.  Navigate to the project directory:

    cd weGro_backend

3.  Install dependencies:

    npm install

4.  Environment Setup

# Create .env file in base directory

# define following variables in .env file

        S_KEY= 'secret_key'
        PORT=5001

5.  Start the application:

    npm start

6.  open postman to check following apis

    POST: http://localhost:5001/api/login
    POST: http://localhost:5001/api/register
    GET: http://localhost:5001/api/musics

# if you have set a different PORT replace 5001 by your PORT and check.

## To check api in product you can use

    POST: https://wegro-music-api.onrender.com/api/login
    POST: https://wegro-music-api.onrender.com/api/register
    GET: https://wegro-music-api.onrender.com/api/musics
