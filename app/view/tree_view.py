from flask import Blueprint
from app.controller import tree_controller
from flask import request

tree_view = Blueprint('tree_view', __name__)


@tree_view.route('/create_tree', methods=['POST'])
def create_tree():
    if request.method == 'POST':
        return tree_controller.create_tree(request.files['annotated_seq_file'])

@tree_view.route('/get_trees')
def get_trees():
    return tree_controller.get_trees()