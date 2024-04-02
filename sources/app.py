from flask import Flask, render_template
app = Flask(__name__)

@app.route("/connexion")
def connexion():
    return render_template("1-page-connexion-1.html")

@app.route("/inscription")
def suite():
    return render_template("2-page-inscription-1.html")

@app.route("/")
def index():
    return render_template("index.html")
if __name__ == "__main__":
    app.run(host="0.0.0.0")