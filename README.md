# reactjs-fullstack-tdd-kata
## Description
This Kata is set up initially to stretch your skills by working with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [GraphQL](https://graphql.org/), and [Test Driven Development](http://wiki.c2.com/?TestDrivenDevelopment).

- If you prefer something other than GraphQL, well you forked it, test drive a REST service instead!
    - *you can still use [supertest](https://github.com/visionmedia/supertest) to drive outside tests for REST or other APIs*
- I will be adding more to this, check out the [TODOs](https://github.com/dschinkel/reactjs-fullstack-tdd-kata/projects/1)

## 🪛 Initial Setup
- Run `yarn` - install npm modules
- Run *tests*: scripts are in `package.json`, look there

#### Note:
- No, **TypeScript** is _not_ setup, this is a simple kata.  Add that setup yourself 😎
- **_If you're ever stuck on this Kata_**, feel free to Join the [WeDoTDD.com Slack](https://join.slack.com/t/wedotdd/shared_invite/zt-ladr0ati-rD4bNNEx_Uu1v0pZsxZDNQ) and well give you some pointers on it!

## 🏃🏻‍♀️ Run the Website
*(not required during TDD)*

#### See it in action 
- Run *GraphQL Service*: `yarn start service`
- Run *front-end*: `yarn start` 
    - Note: uses [webpack dev server](https://webpack.js.org/configuration/dev-server)
## Tests
    
Testing frameworks already setup for you [mocha](https://mochajs.org), [chai](https://www.chaijs.com), and [supertest](https://github.com/visionmedia/supertest)
    
#### Client

- You can use [React Testing Library](https://testing-library.com) or a newer, better lib called [isolate-components](https://www.npmjs.com/package/isolate-components)
  - Note: Will be adding [enzyme](https://enzymejs.github.io/enzyme) examples soon

#### Server
- Initial **server-side** spec for "Hello World" is directly testing the service contract
  - Tests are isolated & headless
    - So there no need to run real the thing just to write and run your tests
      - no need to run the graphQL service to run tests.
      - front-end tests do not rely on running the site or on webdriver
      
## Kata Requirements for "Coffee Roasters Website" ☕️

Implement the following full-stack features.  *If you don't like Coffee, tough luck!*

#### 🖥 Requirements
- You are to **implement** the **Feature Slices** below
  - Implement it with Test Driven Development
  - Front-end should call the backend to get the data -OR- implement it without a backend (use test data and stubs)
  - Hint: You can copy the feature names below, and literally use them as your very outside test names!

### 📜 Feature Slices
#### ~~Feature #1: Shows the text "Hello World"~~   `Done`
#### `Feature #2`: Shows a list of Coffee Roasters
#### `Feature #3`: Clears Roasters
#### `Feature #4`: Filters list by Roaster Name
#### `Feature #5`: Shows a *paged* list of Coffee Roasters
#### `Feature #6`: Goes to next paged list of roasters
#### `Feature #7`: Goes to previous paged list of roasters list
#### `Feature #8`: Shows Roaster Details
- ability to select a roaster somehow to see their detail page
- detail page should show a couple of roasts (e.g. Dark Roast, Light Roast)
