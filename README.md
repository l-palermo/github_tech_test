# TechTest

This is a web application, which allows users to enter an arbitrary Github username and be presented with the best guess of the Github user's favourite programming language.
The program computes the final output by using the Github API. It fetches all of the user's public Github repos, each of which includes the name of the dominant language for the repository.

## Language & Framework

The application is built in React following the principles of: 
- TDD
- Single responsibility, one-way data flow, composition over inheritance.
- OOP

## How to install the app

Move to the `TECH_TEST` folder and type:

`npm install` Installs the dependencies

`npm start`   Runs the 

`npm test`    Runs the test and the test coverage

## How to use the software

One fired the server move to the webpage and type the GitHub user name and click `Submit`
The page will show the predominant programming language of the GitHub user.
The application shows a helpful message in case of:
- no valid user
- user has no language in the repositories.
- user has no repositories. 

## Approach

After reading the requirement, I first explored the GitHub API documentation to understand how the query strings work, what kind of data was available on a single call and the number of calls required to get the data necessary for the final computation.
I have decided to use the JavaScript library `React` because it allows creating a fast, simple and scalable frontend for web applications. This choice led me to focus particularly on the architecture of the application and effectively apply the principles of single responsibility, one-way data flow, composition over inheritance.
The application is so structured:

* App
  * UserProgrammingLanguage
    * SearchBar
    * FavouriteLanguage

__App.__ A high-level parent component that at the moment just work as a runner and pass the module `fetchUserRepos` to `UserProgrammingLanguage`. I am aware this component is not necessary but it might allow in the future to add functionalities, siblings of `UserProgrammingLanguage`.

__UserProgrammingLanguage.__ The common owner component renders the other two child component `SearchBar` and `FavouriteLanguage`, fetch the main data from the API and holds states.

__SearchBar.__ This child component takes the user input and saves it using hooks, this will be passed then to the parent component `UserProgrammingLanguage`. When the user clicks submit, calls the method on the parent component that fetches the data from the API and saves it as a state.

__FavouriteLanguage.__ This child component listens to the change of state of `UserProgrammingLanguage` and renders the user's favourite language.

The components hold very little logic. All the logic happen in external JS modules that are passed as props from parent to child. These are:
- fetchUserRepso. It fetches the repos from the GitHub API and returns all the users repos.
- languagesRate. It rates the languages used in all the repos
- selectLanguage. Returns the language with the highest rate.

This separation of concerns and single responsibilities should make the code easier to read.
With this architecture, the data flow in one way, from the user that inputs the name and fires the fetch that takes the data and passes it to the child to display it. It allows the application to be extended, the data is held by the `UserProgrammingLanguage` so other functionalities can easily be added.   

## Considerations

I am not sure whether saving the user input as a state using the onChange property is the right approach. Even whether the React documentation supports this strategy, it seems very expensive because renders the child component at every typing of the keyboard. This should be better implemented conditionally rendering `FavouriteLanguage` on the change of `state.repos` only. 
I would have improved the separation of concerns on the `SearchBar` component that not only takes the user input but also fires `fetch` on the parent component. The HTML `InputBox` and the `SubmitButton` should be turned in two separate components wrapped by `SerachBar` that passes the props to its parent component.
I have included some edge cases but more could be added, for example, the case of a user with an equal rate of 2 or more languages. The conditionals used for edge cases can be improved.
I should have also found a better way to mock the nested module in `selectLanguage`.