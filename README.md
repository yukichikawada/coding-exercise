# GiphyTooltip!

The task is to create a webpage with a tooltip which shows a GIF for a
selected word.

![Screenshot GIF](https://media.giphy.com/media/9Di0EAehZz8f0vLzl1/giphy.gif)

### Specs
* A tooltip is shown whenever text is selected
* Use [Giphy Search API](https://developers.giphy.com/docs/) to get GIFS
* Tooltip must be positioned correctly
* The preferred stack is React + Typescript

Build with a production-ready mindset.

### Result
* I spent all of Sunday on this project
* The most interesting part was sifting through MDN and react docs for event listeners and learning about all the cool properties I have yet to use.
* Beyond the specs outline, I would learn what good unit tests would look like, add a form to update baseline texts and gifs, and include a refresh button to fetch another random gif for whichever tooltip is on display.

### Evalutation
Basic functionality ~ tooltip is shown when text is selected, however not positioned correctly.

Edge cases were not dealt with. Clicking consecutively from one word to another
causes the tooltip library to behave unexpectedly. It's also possible to select
multiple words or spaces. 

Using the tooltip library wasn't the best idea since I didn't have much control
over the positioning of elements or the color scheme. I might've tried wrapping
each word in a tooltip had there been more time, though it seems clunky.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).