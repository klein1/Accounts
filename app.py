from flask import *
from flask_socketio import SocketIO

from blueprints import sample
from sockets import comment

app = Flask(__name__)
app.config['SECRET_KEY'] = '45fg!2@erw#$0#hao'

@app.route('/')
def index():
    return redirect(url_for("utils.cut"))

app.register_blueprint(sample.bp_cut)

socketio = SocketIO(app)
comment.register_comment(socketio)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=8090, debug=True)
