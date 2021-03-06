# Wordman
Worlde + Hangman = Wordman

This mobile wep game is a mix of two games: Wordle and Hangman. The main objective of the game is to guess a randomly picked word by using Wordle and Hangman together. The user has 4 word guesses in Wordle part and 3 letter guesses in the Hangman part. This project uses Random Words API for generating the random words for the game, Word Dictionary for checking if the word written by the user is actually a real word, and incorporates p5.js. Made with love by Shyngys Karishev:)


Inspiration: https://www.nytimes.com/games/wordle/index.html 


## User Interaction 

 - Instructions menu on page load and clicking the top right icon

   <img src="https://user-images.githubusercontent.com/71120362/155863730-85b00443-65f8-4b10-a066-403acbdabcf5.png" width="400" />

 - Worlde part

   <img src = "https://user-images.githubusercontent.com/71120362/155863734-9d1d2a0e-c92b-4cbc-9084-7fe13567e586.png" width="400">

 - Hangman part

   <img src = "https://user-images.githubusercontent.com/71120362/155863739-a773e4bb-dfb9-4eb5-8a7f-142c7eb27fec.png" width="400">

 - The word doesn't exist pop up screen
 
   <img src = "https://user-images.githubusercontent.com/71120362/155863743-59156609-f17f-464a-b731-9123a36004d6.png" width="400">

 - Coloring the letters on keyboard and in words in Wordle

   <img src = "https://user-images.githubusercontent.com/71120362/155863760-96af5902-dc40-4b2d-88c6-b725c62262a6.png" width="400">
   
 - Lose of heart in Hangman
 
   <img src = "https://user-images.githubusercontent.com/71120362/155863767-f4251143-0546-44fc-aa3e-c8e044f8e52f.png" width="400">

 - Correctly guessed word

   <img src = "https://user-images.githubusercontent.com/71120362/155863788-7c254afc-2b83-4477-bff0-9ac960652e10.png" width="400">

 - No more attempts/Lose screen
 
   <img src = "https://user-images.githubusercontent.com/71120362/155863809-9a5e78a6-7dc3-484b-84ce-3f884aa84896.png" width="400">

 - Scoreboard

   <img src = "https://user-images.githubusercontent.com/71120362/155863816-cc747c96-3db5-4e48-bffd-2a2762d97698.png" width="400">


## Key challenges

 - How to wait for the fetching to end before displaying the game screen
   
   *Creating a loading variable that changes only when everything is fetched and we have all information needed*
   
   ```
   function setup() {
     // we allow to draw everything only after we fetch the info
     getwords().then((data) => {
       dataset = data;
       loading = false;
       game = new Game(dataset, numOfLettters, 0, true);
       var myCanvas = createCanvas(wid, hei);
       myCanvas.parent("game");
     });
   }

   function draw() {
     background(255);
     if (!loading) game.display();
   }
   ```
<!-- ![image](https://user-images.githubusercontent.com/71120362/155863595-fc9049d2-8d2a-427b-ac79-2b25076c6048.png) -->

 - How to add two separately created games(Wordle and Hangman) together and keep the logic of both games?

   ![image](https://user-images.githubusercontent.com/71120362/155863654-dcbbca1b-303d-4d81-9e6d-dd0329df845c.png)

   *Create a new class called Game where all the functions combine the two games*
   
   ```
   class Game {
    constructor(dataset, amount, wordnow, instructions) {
      this.dataset = dataset;
      this.wordnow = wordnow;
      this.amount = amount;
      this.wordle = new Wordle(this.dataset[this.wordnow].toUpperCase(), amount);
      this.hangman = new Hangman(
        this.dataset[this.wordnow].toUpperCase(),
        amount
      );
      // to display a game first
      this.whichgame = "wordle";
      this.letters = this.creatingSlots();
      this.instructions = instructions;
      this.won = false;
    }
   ```
<!--    ![image](https://user-images.githubusercontent.com/71120362/155863662-519910fc-1c5d-4b47-87e9-782982884466.png) -->

 - How to add the key interactions for the virtual keyboard?

   *Add the functions to all of the keys in the keyboard and call the method only when teh keyboard is already created*

   ```
   function keyClicked() {
     let keys = document.querySelectorAll(".key");
     keys.forEach((key) => {
       key.addEventListener("click", () => {
       //all the work and functions that we need to implement go here
       }
     }
   }
   ```

<!--    ![image](https://user-images.githubusercontent.com/71120362/155863688-c2c27397-9856-4534-927f-984877a41107.png) -->
   
 - How to use async/await?

   *This part by far wa the hardest, since it was my first time using APIs in projects and I didn't know how to use fetch. But Internet is a wonderful place, especially StackOverflow helped me to understand the the correct use of the asyns/await and how to implement them in functions.*

    ```
    async function getwords() {
      const response = await fetch(
        "https://random-words5.p.rapidapi.com/getMultipleRandom?count=19&wordLength=5",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "random-words5.p.rapidapi.com",
            "x-rapidapi-key": "8c77c25eb1msh4f11a270f840a84p123b1ejsnc07b53f3a8ff",
          },
        }
      );
      const data = await response.json();
      return data;
    }
    ```

 <!--    ![image](https://user-images.githubusercontent.com/71120362/155863984-bae6b48a-d790-4c04-b855-136e1385aba8.png) -->


## Key Takeaways and What I have Learnded

   This project took a lot of time to implement! I have never used fetch in porjects before and learning it now is surely a milestone for me. I believe that API has many possibilities for impplementation in future projects. The async and await parts were also interesting to leran about.
   
   I have never used p5.js library before, but I had a lot of experience with Processing in previous IM classes. Those two are pretty similar, especially the geometry and functions. It was helpful to not learn form teh beginning, because implementing this project without p5.js would be pretty hard, especially jumping between Wordle and Hangman.
   
   One of the things I learned during coding is that it is better to have a plan beforehand, so I don't have to connect two games created not together. In addition, the code was messy, but everything was necessary, so the 700 lines of code are good enough. Maybe there is a place for optimization, but since everythign is working right now and, thanks to the comments, everybody can understand what each part is doing, the debugging should not be a problem.

## Next Steps

 - Saving the state of the website on reload
 - Saving the scoreboard for each user using cookies
 - Making the games more united, looking like one game, rather than two different (?)
 
   *This part is one of the hardest to implement. I believe that in my head and right now everything is looking good and understandable. Maybe it is because this project is created by me and I know the functionalities. However, some people told me that it is hard to differentiate between the two games. Maybe beause of the names at the top that celarly state "Wordle" and  "Hangman" which makes it hard to understand whether the user changes the games completely or just the states.*
   
   <img src = "https://user-images.githubusercontent.com/71120362/155864298-8a7695fc-f364-403d-8294-900c1336467d.png"> 

   *For now, one of the possibilities could be just doing everything on one screen. So, rather than changing the screens, you change the row. In the row you write a word or a letter. The user will still have two interfaces, however, now everything will happen in "one" game Wordman.*
   
## Resources/References

 - https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg - for the heart shapes in Hangman part
 - https://p5js.org/reference/#/p5/textAlign - for text alignment in p5
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function - for the asyns/await reference
 - https://rapidapi.com/sheharyar566/api/random-words5/ - Random words API
 - https://dictionaryapi.dev/ - Dictionary API
 

