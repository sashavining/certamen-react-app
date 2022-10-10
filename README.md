# Certator
An app for practicing the Quiz-Bowl-style game for Latin students, certamen.

There is currently no app (web or mobile) that allows players to practice the core strategy of the game: interrupting the asker mid-question. There are comparable apps for quiz bowl or general trivia games, but none that either 1) come pre-loaded with certamen questions or 2) are customizable enough to allow for certamen questions to be loaded into the application. Enter Certator!

**Link to project:** https://certator.netlify.app

<img width="678" alt="Screenshot of Certator being played" src="https://user-images.githubusercontent.com/96848086/194965589-2d8b8fb9-3fe2-4d49-a90c-a45505bd132a.png">

## How It's Made:

**Tech used:** React, JavaScript, Node, MongoDB, Mongoose, GraphQL, Apollo GraphQL, HTML, CSS 

Full-stack quiz app built with a GraphQL API and React front-end (backend repo found here: https://github.com/sashavining/certamen-quizzer-graphql-server). Play rounds of certamen in two different modes: one built to closely simulate the experience of interrupting the question reader, and the other which allows the player to read the entire question before answering. 

## Optimizations

Based on feedback on this early prototype, there are a few areas where I can optimize the app:

1. In the type of user input it accepts. Currently, it only accepts an exact character-for-character match for the answer it has in the database. I have been looking into various string matching algorithms to figure out a better way to accept answers that are 'close'.

2. In the number of question sets it supports. Currently, I have just over 1,000 questions in the app. There are many thousands more questions out there to be OCR'd or transcribed and entered into the database.

3. In the way that I am determining "optimal" buzz time. Currently, I am basing this off of a single question set where the optimal buzz has been marked. In the future, I would like to move away from an "optimal buzz" model to a percentile model, where you are told how quickly you answered relative to others who gave correct answers.

I also would like to re-write many of the React components with better design patterns to promote reusability in the future. Currently, I am not satisfied with how my components are structured.

## Lessons Learned:

I learned a lot about GraphQL and the tradeoffs of using it over REST, particularly for smaller projects. This was also the first substantial project I built in React, so I learned a lot about React design patterns (in particular, HOC and render props), as well as how to use Apollo GraphQL + React on the front end.
