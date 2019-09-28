# TechTest

This is a web application, which allow users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.
The program compute the final output by using the Github API. It fetch all of the user's public Github repos, each of which includes the name of the dominant language for the repository.

## Language & Framework

The application is built in React following the principles of: 
- TDD
- Single responsability, one way data flow, composition over inheritance.
- SOLID
- OOP

## How to install the app

Move to the `TECH_TEST` folder and type:

`npm install` Installs the dependencies

`npm start`   Runs the 

`npm test`    Runs the test and the test coverage

## How to use the software

One fired the server move to the webpage and type the GitHub user name and click `Submit`
The page will show the predominat programming language of the GitHub user.
The application shows an helpful message in case of:
- user has no language in the repositories.
- user has no repositories. 

## Approach & Considerations



