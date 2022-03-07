// adding the titans information
let titans = {
  armored: {
    name: "Armored Titan",
    height: "15 meters",
    description: "A powerful Titan with armor all over its body",
    currentUser: "Reiner Braun",
    imgUrl: "https://pbs.twimg.com/profile_images/1476934103589171202/r99ktW6q_400x400.jpg",
  },
  female: {
    name: "Female Titan",
    height: "15 meters",
    description:
      "This Titan possesses the ability to easily mimic the attributes of the other Titans. It could also selectively harden parts of its skin and attract Pure Titans with its screams",
    currentUser: "Annie Leonhart",
  },
  cart: {
    name: "Cart Titan",
    height: "6 meters",
    description:
      "The Cart Titan's main ability is its endurance. Its body proportions also make it easy and effective to put weapons on it",
    currentUser: "Pieck Finger",
  },
  jaw: {
    name: "Jaw Titan",
    height: "5 meters",
    description:
      "A Titan with a ferociously powerful set of jaws and claws that were able to tear through almost anything. Due to its small size, it was also known to be the fastest out of the Nine Titans",
    currentUser: "Porco Galliard",
  },
  beast: {
    name: "Beast Titan",
    height: "17 meters",
    description:
      "As the name implies, the Beast Titan resembles qualities of an animal",
    currentUser: "Zeke Yeager",
  },
  colossal: {
    name: "Colossal Titan",
    height: "60 meters",
    description:
      "The God of desctruction. The Colossal Titan is the most massive of them all. With its abiility to explode like a nuke upon transformation, it deserves its title",
    currentUser: "Armin Arlert",
  },
  attack: {
    name: "Attack Titan",
    height: "15 meters",
    description:
      "The Attack Titan is exceptionally excellent in combat, but what makes its special is its constant longing for freedom and ability to see the memories of previous and future inheritors",
    currentUser: "Eren Yeager",
  },
  founding: {
    name: "Founding Titan",
    height: "15 meters",
    description:
      "The most powerful Titan of all. The Founding Titan posesses godlike powers",
    currentUser: "Eren Yeager",
  },
  warhammer: {
    name: "War Hammer Titan",
    height: "15 meters",
    description:
      "The War Hammer Titan has the ability to conjure up weapons and structures out of hardened Titan flesh",
    currentUser: "Lara Tybur",
  },
};

let express = require("express");

let app = express();

app.use("/", express.static("public"));

app.get("/titans", function (req, res) {
  res.json(titans);
});

// finding titan information by param
app.get("/titans/:titan", (req, res) => {
  if (!titans[req.params.titan]) {
    res.json({ response: "There is no such Titan" });
  }
  res.json(titans[req.params.titan]);
});

app.listen(3000, () => {
  console.log("app is listening at localhost:3000");
});
