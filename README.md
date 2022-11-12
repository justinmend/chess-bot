# README
## Getting Started:
###### Terminal Commands:
* How to start the client side development server?
    * In the terminal, “cd” into the client directory and run “yarn start” to start the server. This should start the server at http://localhost:3000/
* How to start the server side?
    1. Create a python virtual environment to run this project
        * https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/
        * Run “py -m venv env”
            * Note: This will install a venv with the latest python/python3 version that you have if you have more than one version installed in your system.
        * Activate py venv
            * Windows command prompt: “. ~/venv/Scripts/activate”
            * Unix/macOS or bash terminal(Windows): "source env/Scripts/activate"
    2. Install flask
        * https://phoenixnap.com/kb/install-flask
        * Run command “Pip install Flask”
    3. Start server
        * In the terminal, “cd” into the server/src directory and run “FLASK_APP=app.py python -m flask run”
        * Note: You will need to activate/start your python virtual environment where you have the flask installed in order to start the server with flask.


###### TO-DO: