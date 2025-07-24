from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

# Run this once to create the table:
# from app import db
# db.create_all()
