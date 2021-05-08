from app.api import app
from app.model.schema import create_schema

if __name__ == "__main__":
	create_schema()
	app.run()
