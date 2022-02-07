# Sudoku


For this assignment, I decided to implement the Sudoku game into javascript suing only pure javascript without the use of the canvas. I have worked on this project before, however, I only had the interface of the game, no functionality added.

![image](https://user-images.githubusercontent.com/71120362/152789762-3be5375d-3c09-4f5f-95df-f83c49397a85.png)


Because of that, I decided to add the game logic, so if you want to write the number inside the block, you have to press the number on the section below with all the numbers. It was hard at first, since it is pure javascript, so I came up with a solution to add the classes to blocks, like the number that is represented there, the row and column of the block to coordinate the game. 
![image](https://user-images.githubusercontent.com/71120362/152789822-a6ff8926-fb64-4fa7-8007-8255a6ad04c8.png)

I also had to add the feature to check when the number is already presented 9 times in the game and the ability to check whether the game is finished or not. 

![image](https://user-images.githubusercontent.com/71120362/152790406-2f1b97b5-07d0-4322-826a-1dc85f8af66b.png)

I decided to add the ability to see whether the written number is right or not by displaying the color of the block.

![image](https://user-images.githubusercontent.com/71120362/152789866-117447af-d9da-45a6-a44c-7e9be3f0815a.png)


Since user can write inside the block, it should be possible to erase the insides too. Therefore, I have added the 'erase' button, so it will be possible to erase if you wrote the number yourself.

![image](https://user-images.githubusercontent.com/71120362/152789375-a426d71a-f5b4-44d2-a2e2-86f7d607063a.png)

When the game ends, I added an animation that just covers the screen from center till it fills the whole board two times and changes the board color. After the win, it is not possible to erase and write inside the class.


I had fun trying to recreate the game that I love playin and even though for now you can play only one sudoku, I believe that using the databases, I would be able to add more levels, more boards and make the website more interactive. For now, I recreated the game mechanics and logic.
