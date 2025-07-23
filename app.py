from flask import Flask, render_template, request
import random

app = Flask(__name__)

captions = {
    'travel': [
        "Wander often, wonder always ✈️",
        "Catching flights, not feelings.",
        "Adventures are the best way to learn."
    ],
    'fitness': [
        "Train insane or remain the same 💪",
        "Sweat. Smile. Repeat.",
        "Your only limit is you."
    ],
    'love': [
        "Love is the answer 💖",
        "Falling for you more every day.",
        "You + Me = ❤️"
    ],
    'food': [
        "Eat, sleep, eat again 🍕",
        "Good food = Good mood.",
        "Calories don’t count on weekends."
    ],
    'fashion': [
        "Dress like you're already famous 💃",
        "Style is a way to say who you are without speaking.",
        "Sassy, classy, and a bit bad-assy."
    ]
}

emojis = {
    'travel': "🌍✈️🏝️📸",
    'fitness': "🏋️‍♂️💪🔥🥗",
    'love': "💖❤️😍💌",
    'food': "🍕🍩🍔🍣",
    'fashion': "👗👜👠💄"
}

hashtags = {
    'travel': "#wanderlust #travelgram #explore #vacation",
    'fitness': "#fitlife #workoutmotivation #gymgoals #nopainnogain",
    'love': "#loveyou #relationshipgoals #romance #couplevibes",
    'food': "#foodie #yum #instafood #foodstagram",
    'fashion': "#style #fashionista #ootd #trendsetter"
}


@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    if request.method == 'POST':
        keyword = request.form['keyword'].lower()
        if keyword in captions:
            result = {
                'caption': random.choice(captions[keyword]),
                'hashtags': hashtags[keyword],
                'emojis': emojis[keyword]
            }
        else:
            result = {
                'caption': "Theme not found. Try: travel, fitness, love, food, fashion.",
                'hashtags': "",
                'emojis': ""
            }
    return render_template("index.html", result=result)

if __name__ == '__main__':
    app.run(debug=True)
