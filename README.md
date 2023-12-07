# take-home-SANDBX

* 1: Run a google search for the word “selenium”
* 2: Open the second result in new tab
* 3: Check what text is written on the page title (text on the opened tab


I decided to use Selenium as a Framework and JavaScript as a programming language. I to used POM (Page Object Model) so I can have a better and a clean code. 
I added 2 folders: 
* One for the pages, and there I have my basepage.js file and added the functions that I need. 
* The other one is for the tests where I have added my search-tests.js file.
  
I used Selenium because we can do a lot with it and for the steps to follow like: open results in a new tab. 

In the second step that is related to get the second result, I decided to create a function that allows me to scroll to the specific element. So I decided to find that element first. Then  I decided to get URL through the getAttribute() function and saving the URL in a variable so I can go to that new URL in a different tab with the URL that already saved

In the third step that is related to getting the title, I just used the getTitle() function and added a console.log() to show that I have that value.
