from flask import Blueprint
from app.controller import taskTableController
import threading

taskTableView = Blueprint('taskTableView', __name__)


@taskTableView.route('/getAlignTable')
def getAlignTable():
    return taskTableController.getAlignTable()

@taskTableView.route('/getHomologySearchTable')
def getHomologySearchTable():
    return taskTableController.getHomologySearchTable()

@taskTableView.route('/getHomologySearchOutputTable/<homologySearchId>')
def getHomologySearchOutputTable(homologySearchId):
    return taskTableController.getHomologySearchOutputTable(homologySearchId)