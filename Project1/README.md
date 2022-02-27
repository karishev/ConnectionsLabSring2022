# Wordman
Worlde + Hangman = Wordman

This mobile wep game is a mix of two games: Wordle and Hangman. The main objective of the game is to guess a randomly picked word by using Wordle and Hangman together. The user has 4 word guesses in Wordle part and 3 letter guesses in the Hangman part. This project uses Random Words API for generating the random words for the game, Word Dictionary for checking if the word written by the user is actually a real word, and incorporates p5.js. Made with love by Shyngys Karishev:)


Inspiration: https://www.nytimes.com/games/wordle/index.html 

Random words API: https://rapidapi.com/sheharyar566/api/random-words5/

Dictionary API: https://dictionaryapi.dev/


## User Interaction 

 - Instructions menu on page load and clicking the top right icon

 - Worlde part

 - Hangman part

 - The word doesn't exist pop up screen

 - Coloring the letters on keyboard and in words in Wordle

 - Lose of heart in Hangman
 
 
## Key challenges

 - How to wait for the fetching to end before displaying the game screen
   
   *Creating a loading variable that changes only when everything is fetched and we have all information needed*
   
   
   ![image](https://user-images.githubusercontent.com/71120362/155863595-fc9049d2-8d2a-427b-ac79-2b25076c6048.png)

 - How to add two separately created games(Wordle and Hangman) together and keep the logic of both games?

   ![image](https://user-images.githubusercontent.com/71120362/155863654-dcbbca1b-303d-4d81-9e6d-dd0329df845c.png)

   *Create a new class called Game where all the functions combine the two games*
   
   ![image](https://user-images.githubusercontent.com/71120362/155863662-519910fc-1c5d-4b47-87e9-782982884466.png)

 - How to add the key interactions for the virtual keyboard?

   *Add the functions to all of the keys in the keyboard and call the method only when teh keyboard is already created

   ![image](https://user-images.githubusercontent.com/71120362/155863688-c2c27397-9856-4534-927f-984877a41107.png)



## Next Steps

 - Saving the state of the website on reload
 - Saving the scoreboard for each user using cookies
