Team 2 – Yijia, Alena, Yiling
 
Team members & Contributions
Yijia Jiang— HTML for question 9-11, JavaScript of all questions
Yiling Chen—HTML for question 1-8
Alena Belova—main login page(HTML, JS, and CSS), about page(HTML and CSS), CSS for the rest of the project, aesthetics.
 
Indications for all 11 question forms
The user needs to make unique selections for each question, otherwise, there will be an alert popping up.  If they miss any of the questions, they can’t continue to do the next question. Every time the user click “submit”; their sections will be saved for calculation for their final score. Once the user finishes all 11 questions, they will go to the last page—score page. This page collects all the selections that the user made and the final score.
 
We put 11 questions inti 11 separate question HTML. They include the text of all questions. There is a link to a JavaScript file in every of them. In the JavaScript file there are two functions:
validateOrder() and calculateScore(). The first one works when the user clicks the circle (make selection for each question). It validates if the selection is unique. The second one works whenever the user clicks the “submit” button. It calculates the score that the user will receive for every question. It also checks if the user has made sections for every questions. It stores the scores and allow the information to go to another windows.
 
The login page consists of the main/home page with navigation menu, login button, and intro to the project centered on the page. In order to open the login window and to login into session/account we had to use JavaScript. Main function in the script is validateForm(). Also we added two click events: btn.addEventListener to be able to open the login window and icon "close". addEventListener to be able to close the login window. The username and password input areas are made in the way to accept only “user1” as a username and “passAdmin01#” as a password, any other input will be rejected, and an alert message will popup. Empty input area will not be accepted, and an alert message will popup. The login button on the login window verifies the information given and if correct sends the user to the next page which is the questionnaire.
 
All pages contain the common CSS and several parts of HTML for example: navigation menu containing about and home page buttons, as well as footer containing general information about the project and its creators, additionally four links to common websites used among developers.
Besides footer and nav bar, it was decided to add an icon to the tab of the website. This icon was exclusively made for the project by one of our creators of the project. The font and background used in this project were taken from the third-party resources. https://fonts.google.com/ was used to get the font called “Viga” by "Fontstage" (Licence and general folder is attached in the assets folder). Background taken from https://www.freepik.com/ is used among all pages to create a modern and unforgettable look (Licence and general folder is attached in the assets/images folder). Every page uses easy to adopt icons from https://ionic.io/ionicons. The script link is attached at the bottom of the page just right after JavaScript link. The use of following icons simplified the code and its readability and still can be accessed without connecting the network. 
 
Collaboration was a key aspect of our team’s workflow, where each team member sought input others before finalizing changes, ensuring a cohesive and unified and result.
 