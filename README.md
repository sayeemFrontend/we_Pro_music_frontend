## Prerequisites

Before running this application, ensure you have the following installed on your machine:

- Node.js: https://nodejs.org/
- npm (Node.js package manager, usually comes with Node.js installation)

## Getting Started

Follow these steps to get the application running on your local machine:

1.  Clone this repository to your local machine:

    git clone https://github.com/sayeemFrontend/we_gro_music_frontend.git

2.  Navigate to the project directory:

    cd we_gro_music_frontend

3.  Install dependencies:

    npm install

4.  Environment Setup

    # Create .env file in base directory

    # define following variables in .env file

        VITE_APP_BASE_URL_DEV='http://localhost:5001/api'
        VITE_APP_BASE_URL_PROD='https://wegro-music-api.onrender.com/api'


5.  For development mode start the application by running the following  command..

        npm run dev

6.  open browser http://localhost:5001 to view thw application

7.  For production mode start the application by running the following command and serve dist folder.
        
        npm run build   

8.  This generates a dist folder. Server this folder for production view
