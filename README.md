# Trick-Tac-Toe #

## Description ##
This is a browser game version of tic-tac-toe that follows the same rules as traditional tic tac toe, except with a "Switch" space that switches all Xs and Os on the board and an "Explosion" space that causes the player that clicked it to lose instantly.

The game board is a clickable tic-tac-toe board on which the user clicks to apply their letter, 'X' or 'O'. The user must log in to play/click the board, and nothing happens if the user clicks on the board while not logged in or after someone has won. There is a 'Game Status' box on the right side that provides updates as the players play (where they play, if they land on a special space, if someone wins, etc.)

The user signs in or signs up, and once they do they are presented with new navigation bar opions: Instructions, Change Password, Stats, and Sign Out. Instructions display the instructions to the game, Change Password allows the user to change their password by inputting their old one and a new one, Stats calculates total completed games, total X wins, and total O wins and displays them for the player. The Sign Out button signs the user out.

## Technologies Used ##

For styling, the page is HTML with a separate CSS stylesheet. The stylesheet utilizes SASS and Bootstrap.

The program communicates with the General assembly Game API and single user API using AJAX calls.

The program makes changes to the DOM using JQuery.

All game logic is coded with JavaScript.

## Planning Process ##

### Game Logic - Normal Tic-Tac-Toe ###

To begin this project, I began working on pure tic-tac-toe game logic. I wrote the JavaScript to check every possible win condition and return that the game is over if one of them is fulfilled. After that, I built a simple, barebones HTML game board, and used JQuery to fill in the appropriate letter once a box on the board was clicked. When this was functional, I added some fine tuning, such as not allowing the board to be clicked once someone has won and employing a "Restart Game" button.

### AJAX Calls ###

After the game logic was worked out, I started working on the AJAX calls. I started specifically with the user authentication, because that didn't need to be as integrated with the game logic. Keeping in with the bare-bones HTML, I just inserted forms below the game board to hold Sign Up and Sign In. Once a user is authenticated, the page would show Change Password and Sign Out (no logic for Stats quite yet.) I also hid the restart button until the user was authenticated, and made it so that clicking the game board did nothing. I also coded responses if any authentication process failed or passed.

After all of that was functional, I started working with the Game API. First, creating a game on sign-in and restart, the two instances when someone would need a new game. Once this worked, I added the functionality to update the game every time a tile was clicked with the move played. I did this by adding a data-id to each space, which corresponded to an index on the "cells" array of the game object. I was able to send the api the index with the data-id, whether someone won by running the game logic, and the letter to fill the index with with the current player ('X' or 'O'). After all of this appeared to be functioning properly, I moved the actual UI functionality to UI functions called on .then(). I did this so that the game board would not update for the user if the API wasn't accessible, so there was no discrepency.

### UI Styling/Modal Building ###

When all API communication and game logic worked properly both code-wise and in the UI, I styled the UI. I started with creating modals for all user input outsides of game plays. They had the same functionality as the forms, just cleaner and removed from the game area. I enabled the ability to quickly switch between sign-in and sign-up, and redirect the user to sign-in once they have successfully signed up. The sign-up modal displays when the page loads, but there are also navigation links the user can click to get to either.

Once the user signed in, they were presented with a different set of links: Change Password, Stats, and Sign Out. I left Stats empty for the time being, put all "Change Password" functionality in a modal similar to what is described above, and converted Sign Out into a button the user could press to sign out.

### Game Status ###

After that, I created a "Game Status" box using a Bootstrap card with no image. I thought about what information a user would want displayed after each move: the move, if someone won, and who's turn it is. I used jQuery's appendTo function to add these things as each move was played. Restarting the game cleared the Game Status box.

### The Stats Function ###

Following that, I coded the Stats function. When the Stats link is clicked, not only does it display the modal, but it also runs the function that calculates all of the wins. I used a GET request to get all completed games, and ran a verion of the game logic that returned WHO won (not just if someone won) and stored the values in an array, and then put the correct values in the correct spots in the modal using jQuery.

When the Stats modal was functional, I added styling to the page: made the letters look nice, chose a font and color scheme, added drop shadows, etc.

### Game Logic - Magic Spaces ###

When this proved to be passable and fully functional, I started adding magic space functionality on a separate branch. As I said above, this functionality means that two spaces on the board are chosen at random when the board is created, one of them causes the player who places their letter on it to lose instantly, and the other causes all Xs and Os to switch. I stored these numbers in the GameBoard constcutor under magicNumbers, and they were an array of two numbers. I put a function on the prototype called chooseMagicNumbers that chose two different numbers between 0 and 8 and put them in the magicNumbers array. magicNumbers[0] would be the Explosion space, and magicNumbers[1] would be the

### Explosion Space/Instructions Modal ###

I started with the Explosion space (the former). I coded my click-event function for the game board to check whether or not the data-id of the space clicked matched the first index of the magicNumbers array, if so, the player immediately lost.

However, I had to update the Stats function to include these wins and losses, because running the game logic on these boards wouldn't produce a winner. To do this, instead of updating the API with the letter played when someone played on an explosion space, I updated it with either an 'A' or a 'B', neither playable letters. I told the function to check for either: if it saw an 'A', it would know X had played on the Explosion space and thus it returned a win for O. If 'B', vice versa.

After that I added the Instructions link and modal with some styling, because since the game follows nontraditional rules it would be helpful for the user to have a reference. The instructions, like Change Password, Stats, and Log Out, are only visible on sign-in.

### Switch Space/Styling ###

After this, I worked on the Switch space. This one was more difficult, as just one move had to make multiple calls to the API. I created a function on the GameBoard prototype to swap the letters on the local game board, and ran a function that looped through all of the game board areas and changed any that needed changing. I ran into an issue here with asynchronous code, but I defined updateAll (the one looping through and updating the API) as an "async function" and placed everything I wanted to happen after that in a .then() that came after the function. This allowed the game to be registered as "over" if a win was achieved through a switch, and the win was thus counted in the "Stats" tab.

After this was all functional, I updated some styling, and added sound effects to the magic spaces. Then came debugging, and then I had the final product.

## Problem-Solving ##

As far as problem solving strategies, my first step was really looking at the error message (and sometimes copying and pasting it into Google if it wasn't completely clear) to pinpoint which piece of code was having the issue. If I was confused about this, I employed console.log() to fine-tune my search of where my code was stopping. Once I discovered that, I would get to work on the problem. I tried to keep JavaScript's asynchronous tendencies at the front of my mind, as I ran into numerous problems having to do with async code.

If I was stuck or couldn't find a workaround, I turned to Stack Overflow which 9/10 had the exact answer I needed to integrate to get my code to work. If my problem was too nuanced and related to my own logic to ask Stack Overflow for help, I opened an issue for instructor help.

## Things I Want to Do in the Future/Fixes ##

I want to enable the game to work on multiplayer mode/with the multiplayer API. Adding the magic space functionality took up a lot of time, and I didn't have enough to reasonably dedicate to figuring that part out. Currently, the game can only be played by one "user" at a time (though you could play with another person by passing the device back and forth.)

The game is also not responsive, and looks like complete garbage when the screen is too small. I'd like to fix that as well. It is made with bootstrap so it shouldn't be too complicated, however there are parts not integrated into bootstrap that would require specific media queries and getting through all of them likely will take some time.

You cannot save a game and then return to it. Once the page reloads, the user is logged out and all progress is lost. I'd like to add that functionality.

The non-"Close" buttons on the modals will not center under the forms and would like to make them. It's a little annoying to look at.

## Wireframes and User Stories ##

### Wireframes: ###
https://media.git.generalassemb.ly/user/27606/files/eecea380-83f4-11ea-9900-28e2e78dcf2d
https://media.git.generalassemb.ly/user/27606/files/eecea380-83f4-11ea-8ff4-507f33b133e1
https://media.git.generalassemb.ly/user/27606/files/eecea380-83f4-11ea-979a-6a873567b434

### User Stories: ###
*As a user, I want to be able to sign up so that I don't have to make a new account for every game.
*As a user, I want to be able to save my game so that if I need to leave for a bit I can come back to it.
*As a user, I want to be able to change my password in case the one I have becomes difficult to remember.
*As a user, I want to be able to sign out at the end of my game so that no one uses my account.
*As a user, I want to be able to easily add Xs or Os to the board so I have an easy experience playing the game.
*As a user, I'd like to keep track of my total wins so that I can brag to my friends!
