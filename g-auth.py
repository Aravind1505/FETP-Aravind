from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/home")
@app.route("/home/<name>")
def hello_world(name=None):
    return render_template('entry.html', name=name)