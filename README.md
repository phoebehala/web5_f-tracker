# Finance Tracker
> Expense and budget tracker as well as keeping track on the stock market.
> Live demo [_here_](https://stupendous-torte-d9a668.netlify.app).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [API Source](#API-Source)
* [Room for Improvement](#room-for-improvement)
<!-- 
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
-->


## General Information

### Idea / Motivation
Expense tracker app is a kind of daily used app and I always wonder how it works.
As per the experience of using this kind of app, I thought it would be great to have a budget warning or integrate some financial information in order to provide good user experience.

### Purposes / Intentions
- To use the latest version of mui(v5)
- To learn how to display chart in react.js
- To consolidate the usage of contextAPI, useReducer, useState, useRef
- To use custom hooks
- To work with API and handle the error
- To practice CRUD
- To try keeping my components small or making them reusable by separating files and creating util files


## Technologies Used

#### react.js
- contextAPI, binded with multiple contextAPI
- useReducer(), useState(), useRef(), react events, , useEffect()
- custom hooks
- react-router-dom

#### styles
- mui v5: custom theme (custom button), components, styles

#### others
- worked with API, axios, error handling
- Window localstorage

#### other libraries
- chart.js
- plotly.js


## Features
#### transactions for income and expense
- create / edit / delete
- Used the same component (addTransaction.jsx) to switch created mode or edited mode
- Created a popover with pure react to implement above actions
- The cahrt reflect the changes immediately whenever the transactions updated

#### Search and Filter transactions

#### Budget Warning
- a progress bar with pure react
- The color of bar changs when it hits the warning amount
#### Total Balance Calculation
#### Prompt info. with snackbar
- The success info prompted once transaction is successfully created / edited / deleted
- The warning info prompted once failing to get data from stock API
- Reusing the same snackbar component with contextAPI
<!-- 
#### others
- convert to currency format by Intl.NumberFormat
- change the format of date
- sort dummy data
- To display progress icon while fetching data
-->
<!-- 
## Screenshots
![Example screenshot](./img/screenshot.png) -->


<!--
## Setup
1. To create API key for alpha-vantage
2. To run this project, install it locally using npm:
```
$ npm i
$ npm run start
```
-->

## API Source
- alpha-vantage

## Room for Improvement
To do:
- To limit "note" words in addTransaction.jsx
- Advanced search feature in TransactionList.jsx : intersection check

<!-- 
## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. 



## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!
-->

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
