from flask import Flask, Blueprint
from view.seqAlignmentView import seqAlignmentView
from view.homologySearchView import homologySearchView

app = Flask(__name__)

app.register_blueprint(seqAlignmentView)
app.register_blueprint(homologySearchView)