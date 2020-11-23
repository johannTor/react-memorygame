# js - react

Live version: 

In this assignment we got introduced to the javascript framework React. I decided to make a little memory game and at the end of the day it was good practice. I'm sure I could re-do it and organize the components and logic a bit better but at least it should work.

Out of shortage of ideas of a theme I decided to use programming language logos as content for the memory game. The main part of the code happens in the Board component where a list of image objects is initialized. Each image object contains the following properties:
* Key - Value from 0 to the list length - 1
* ID - Value from 0 to the list length / 2
* Source - path to the image file
* Found - True or false
* Reveal - True or false

Any time an image is clicked the state of the reveal is changed to true and it's added to a comparison array. When a second image is clicked the two image ids are compared to each other and if they are a match their 'found' properties are changed to true and the state changes based on that. The app keeps track of turns taken and the number of matches found and once the game completes there's an option to restart the game. If it's restarted a randomizer function is called that's imported from the imgImport file to mix things up a bit.

To set this up locally just clone the repository and run npm install in the folder and npm start to run the app.

Had fun learning these concepts and there's room for improvements in a lot of places for sure.