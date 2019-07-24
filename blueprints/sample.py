from flask import *
from utils.func import *
from utils.config import *
from utils.cut import run

bp_cut = Blueprint('utils',__name__,url_prefix="/utils")

@bp_cut.route('/cut', methods=['GET'])
def cut():
    id = random_name()
    return render_template('cut/file.html')

@bp_cut.route('/doupload', methods=['POST'])
def doupload():
    id = random_name()
    file = request.files['img']
    path = 'c:/Accounts/cut/' + id + '/'
    os.makedirs(path, exist_ok=True)
    file.save(path + file.filename)

    run(path + file.filename, path)

    return render_template('cut/cut.html', path=IMG_ROOT + '/' + id)