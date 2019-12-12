# react-capstone

Link to website:
https://apotherx.herokuapp.com

What is it:
Perscribed drugs are a very common form of health in modern times.
There are so many types of drugs that have similar effects but different names, 
and it can make it hard to keep track of what everything does.
The purpose of this app will be to let non-logged viewers look up drug names to see their effects and side-effects.
For logged users, they will be abe to do the above, but also save what drugs they are currently taking,
make note of when they should take their next does, and give reminders on when to start going for a refill (5-7 days before out based on quantity and dose amount).

Technologies used:

Installation steps:
  React:
    npm install
      installs all dependencies in package.json
    npm start
      starts the react app
  
  Flask:
    source .env/bin/activate
      activates working enviroment
    pip install -r requirements.txt
      if pip does not work, try pip3
      installs all dependencies in the requirements.txt file
    python app.py
      if python does not work, try python3
      runs the flask app

User story:
  Users should be anyone needing to take medication on a regular basis 
  or anyone who is curious about a type of medication
  This is a handy tool for looking up different types of medicine and 
  keeping track of when a medication was last taken

Wireframe: 
  To be added in public folder
  (not in as of writing this))

Pages
    Search (Don't need to be logged in):
        - Can look up drug names
        - Find out more information on selected drug
        - Semantic Card with:
                - Drug name
                - Purpose (?)
                - Save medicine (if logged in)
    Register (modal):
        Inputs:
            Email
            Password
        Redirects:
            Homepage
    Login (modal):
        Inputs: 
            Email
            Password
        Redirects:
            Homepage
    404:
        - Clip art Px bottle
        - Link back to homepage
    Landing:
        - Date and time segment
        - Calendar (?)
        - Logged in:
            - Saved medication list (Cards)
                - Intake amount (2 pills, 600ml, etc.)
                - Intake occurance (2x per day, 1 per week, etc.)
                - Current pill amount (Take perscription amount - dose amount)
                - Last time taken (press a button to update to current time)
                - Button to view medicine in depth
                - Button to unsave medicine (if someone stops taking it)
        - Not logged in:
            - Empty saved box for saved medicines saying to login
           
 Future fixes/implmentations:
  Adding twilio api
  Fix bug where search page doesn't refresh while on the search page
  Add all calls to api from front end to the back end
  Get the medicine save button to show up as saved if that medicine is already saved in database
  Add refill needed and quantity reamining to the saved medication
  Add more to the home page
  Complete pages to the footers
  Get the footer to always be on the bottom of the screen no matter the container size (change height of all
    rendered components)
   On logout, have all information regarding th elast user to go away
   Have messages pop up when not logged in (use of states and turnary operators)
   Make a more fun 404 page
   
  
  

   
     
    
