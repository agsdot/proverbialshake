A small app to make some json calls, and refresh with a new verse from the Proverbs (Todays Date) chapter of the day. 

A shuffle function to shuffle up the verse, reminiscent of Magic 8 balls.  Better than a Magic 8, better than a fortune cookie, your Proverbs verse for you today.

To run:
- You need an api key from [Logos Biblia](http://api.biblia.com/docs/). Sign in [here](http://api.biblia.com/v1/RegisteredApplications), with a login from [Logos](https://www.logos.com/).
- Put the API key in a .env file, with the key value pair of 
  - REGISTERED_BIBLIA_KEY=abcdefghijklmnopqrstuvwxyzabcdef
- You must use Foreman.  You can use Ruby based Foreman from Heroku or [Node Foreman](https://github.com/strongloop/node-foreman)
- Create a Procfile
  - In  it put in
  - web: node app.js
- Run your expressjs node app by going 
  - nf start
    - the express app should indicate what port you should listen to, probably localhost:5000

Deployed on Heroku:
- [The Proverbial Shake](http://proverbialshake.herokuapp.com/)
