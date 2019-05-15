import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData
import decimal
import flask
from flask import Flask, jsonify, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from googlesearch import search_news

import pymysql
pymysql.install_as_MySQLdb()

is_prod = os.environ.get('IS_HEROKU', None)	


if is_prod:	
    endpoint = os.environ.get('endpoint')	
    instance = os.environ.get('instance')	
    password = os.environ.get('password')	
    port = os.environ.get('port')	
    username = os.environ.get('username')	
else:	
    from config import endpoint, username, password, instance, port

dburl = f'mysql://{username}:{password}@{endpoint}:{port}/{instance}'


app = Flask(__name__)




app.config["SQLALCHEMY_DATABASE_URI"] = dburl
app.config['JSON_SORT_KEYS'] = False    

db = SQLAlchemy(app)
engine = create_engine(f"mysql://{username}:{password}@{endpoint}:{port}/{instance}")
conn = engine.connect()
# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(db.engine, reflect=True)

metadata = MetaData(engine, reflect=True)

# Save references to each table
birth_control = metadata.tables["birth_control_all"]
side_effects = metadata.tables["side_effects_db"]
#print(birth_control)
model = None
def load_outcomes():
    global model
    model = pd.read_csv('combo_pd.csv')
load_outcomes()

@app.route("/mlm/<input_tuple>")
def find_output(input_tuple):
    
    try:   
        output = model.loc[model['Input'] == input_tuple]
        returned_output = output.iloc[0,2]
        output_str = str(returned_output)
    except:
        return jsonify({"data": '99'})

    
    return jsonify({"data": output_str})

@app.route("/predictions")
def predictions():
    """Render Side Effect Page."""
    return render_template("predict.html")

@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


@app.route("/table")
def table():
    """Render Home Page."""
    return render_template("table.html")


@app.route("/side_effects")
def effectreview():
    """Render Side Effect Page."""
    return render_template("sideeffect_viz.html")


@app.route("/birthcontrol_db")
def birthcontrol():
    conn = engine.connect()
    #create list of column names
    BC_df = pd.read_sql("SELECT Method, Birth_Control, Star_Rating, Vader_Scale, Review, `Use`, `Publish_Date`, `Source` FROM birth_control_all", conn)
    BC_json = BC_df.to_dict(orient="records")
    return jsonify(BC_json)

@app.route("/wordcount/<wordcount_method>")
def wordcount_method(wordcount_method):
    #Options: wc_all, wc_shot, wc_hormonal_iud,
    # wc_non_hormonal_iud, wc_progestin_pill, wc_combination_pill,
    #wc_implant, wc, wc_ring
    wordcount_method = pd.read_sql(f"SELECT * FROM {wordcount_method}", conn)
    wordcount_method_json = wordcount_method.to_dict(orient="records")
    return jsonify(wordcount_method_json)

@app.route("/sentiment/<sentiment_method>")
def sentiment_method(sentiment_method):
    #Options: sentiment_all, sentiment_shot, sentiment_hormonal_iud,
    # sentiment_non_hormonal_iud, sentiment_progestin_pill, sentiment_combination_pill,
    # sentiment_implant, sentiment_patch, sentiment_ring
    conn = engine.connect()
    sentiment_method = pd.read_sql(f"SELECT * FROM {sentiment_method}", conn)
    sentiment_method_json = sentiment_method.to_dict(orient="records")
    return jsonify(sentiment_method_json)



@app.route("/vader/<vader_method>")
def vader_method(vader_method):
    #Options: Shot, Ring, Patch, Implant, Hormonal IUD, Non-hormonal IUD, Combination Pill, Progestin Pill

    conn = engine.connect()


    review_effects = pd.read_sql("SELECT * FROM review_effects", conn)

    if vader_method != 'All':
        vader_count = review_effects.loc[review_effects['method'] == vader_method]
        vader_count = pd.DataFrame(vader_count['sentiment'].value_counts())
        vader_count.index.name = 'Category'
        vader_count['Category'] = vader_count.index
    else:
        vader_count = pd.DataFrame(review_effects['sentiment'].value_counts())
        vader_count.index.name = 'Category'
        vader_count['Category'] = vader_count.index

    vader_method_json = vader_count.to_json(orient="records")
    return vader_method_json

@app.route("/birthcontrol_db/<choice>")
def birthcontrolmethod(choice):

    # Filter the data based on the choice
    #Shot, Ring, Patch, Implant, Hormonal IUD, Non-hormonal IUD, Combination Pill, Progestin Pill
    BC_df = pd.read_sql("SELECT * FROM birth_control_all", conn)
    choice_data = BC_df.loc[BC_df["Method"] == choice]
    choice_json = choice_data.to_json(orient="records")

    return jsonify(choice_json)

@app.route("/side_effects_db")
def sideeffects():
    #create list of column names
    side_effects_df = pd.read_sql("SELECT * FROM side_effects_db", conn)
    side_effects_json = side_effects_df.to_dict(orient="records")
    return jsonify(side_effects_json)

@app.route("/side_effects_db/<choice>")
def sideeffectsmethod(choice):

    # Filter the data based on the choice
    #Shot, Ring, Patch, Implant, Hormonal IUD, Non-hormonal IUD, Combination Pill, Progestin Pill
    SE_df = pd.read_sql("SELECT * FROM side_effects_db", conn)
    se_data = SE_df.loc[SE_df["Method"] == choice]
    se_json = se_data.to_json(orient="records")

    return jsonify(se_json)


@app.route("/bc_table")
def user_review_():
    conn = engine.connect()
    #create list of columns
    bc_table = pd.read_sql("SELECT Method, Birth_Control, Star_Rating, Vader_Scale, Review, `Use`, `Publish_Date`, `Source` FROM birth_control_all", conn)
    bc_table_json = bc_table.to_dict(orient="records")
    return jsonify(bc_table_json)


@app.route("/team")
def team():
    """Render Home Page."""
    return render_template("Team.html")

# @app.route("/news")
# def news():
#     """Render Home Page."""
#     return render_template("News.html")

    
@app.route("/alyza")
def alyza():
    """Render Home Page."""
    return render_template("alyza.html")



@app.route("/news")
def scrape_news():
    query = "Male Contraception"

    news=[]

    for j in search_news(query, tld='com',lang='en', num=10, start=0, stop=10, pause=2.0):
        news.append(j)

    # Get the news sites
    site1 = news[0]
    site2 = news[1]
    site3 = news[2]
    site4 = news[3]
    site5 = news[4]
    site6 = news[5]
    site7 = news[6]
    site8 = news[7]

    # Store data in a dictionary
    news_data = {
        "site1": site1,
        "site2": site2,
        "site3": site3,
        "site4": site4,
        "site5": site5,
        "site6": site6,
        "site7": site7,
        "site8": site8
    }

    return render_template("newsscrape.html", recentNews=news_data)

if __name__ == '__main__':
    app.run(debug=True)




