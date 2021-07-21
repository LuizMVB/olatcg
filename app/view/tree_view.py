from flask import Blueprint
from app.controller import tree_controller

tree_view = Blueprint('tree_view', __name__)


@tree_view.route('/get_tree_from_upload', methods=['POST'])
def get_tree_from_uoload():
    if request.method == 'POST':
        return tree_controller.get_tree(request.files['fasta_file'])