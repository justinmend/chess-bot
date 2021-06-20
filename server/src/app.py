from flask import Flask
from game import ChessGame
from flask_socketio import SocketIO, emit, send

app = Flask(__name__)
# To-do:
# Move app configuration to it's own dedicated file.
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app, cors_allowed_origins="*")

# To-do:
# Not sure if I need these. Remove?
app.debug = True
app.host = 'localhost'

# Initialize game here
game = ChessGame()

@socketio.on('connect')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    emit('my response', {'data': 'Disconnected'})

@socketio.on("message")
def handleMessage(msg):
    print("Handling Message: ", msg)
    # To-do:
    # How does socket.io send() work?
    # This sends "msg" to the client side.
    # The message will be sent to every client listening to our server.
    send(msg, broadcast=True)
    return None

if __name__ == '__main__':
    socketio.run(app)