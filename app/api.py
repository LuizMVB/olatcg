from flask import Flask, Blueprint
from app.view.seqAlignmentView import seqAlignmentView
from app.view.homologySearchView import homologySearchView
from app.view.taskTableView import taskTableView
from app.view.tree_view import tree_view

from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.register_blueprint(seqAlignmentView)
app.register_blueprint(homologySearchView)
app.register_blueprint(taskTableView)
app.register_blueprint(tree_view)