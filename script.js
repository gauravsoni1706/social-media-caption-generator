const captions = {
  travel: [
    "Wander often, wonder always ✈️",
    "Catching flights, not feelings.",
    "Adventures are the best way to learn."
  ],
  fitness: [
    "Train insane or remain the same 💪",
    "Sweat. Smile. Repeat.",
    "Your only limit is you."
  ],
  love: [
    "Love is the answer 💖",
    "Falling for you more every day.",
    "You + Me = ❤️"
  ],
  food: [
    "Eat, sleep, eat again 🍕",
    "Good food = Good mood.",
    "Calories don’t count on weekends."
  ],
  fashion: [
    "Dress like you're already famous 💃",
    "Style is a way to say who you are without speaking.",
    "Sassy, classy, and a bit bad-assy."
  ]
};

const emojis = {
  travel: "🌍✈️🏝️📸",
  fitness: "🏋️‍♂️💪🔥🥗",
  love: "💖❤️😍💌",
  food: "🍕🍩🍔🍣",
  fashion: "👗👜👠💄"
};

const hashtags = {
  travel: "#wanderlust #travelgram #explore #vacation",
  fitness: "#fitlife #workoutmotivation #gymgoals #nopainnogain",
  love: "#loveyou #relationshipgoals #romance #couplevibes",
  food: "#foodie #yum #instafood #foodstagram",
  fashion: "#style #fashionista #ootd #trendsetter"
};

function generateContent() {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const captionBox = document.getElementById("caption");
  const hashtagsBox = document.getElementById("hashtags");
  const emojiBox = document.getElementById("emojis");

  if (captions[keyword]) {
    const randomIndex = Math.floor(Math.random() * captions[keyword].length);
    captionBox.innerText = captions[keyword][randomIndex];
    hashtagsBox.innerText = hashtags[keyword];
    emojiBox.innerText = emojis[keyword];
  } else {
    captionBox.innerText = "Oops! Theme not found. Try: travel, fitness, love, food, fashion.";
    hashtagsBox.innerText = "";
    emojiBox.innerText = "";
  }
}
