# <TEAM PROFILE GENERATOR>

## Description

The Team Profile Generator is a node.js app that will prompt the user a set of questions
about thier roster of employees and create a professional webpage to display properties
of those team members in an intuitive way!


My motivation for this project was to create an app that can make simple profiles with info
attached because once I've accomplished that, I feel like that knowledge opens the door to a universe of
possibilities for future apps I may create! I built this project to simplify logging and inputing anyhting
with inquirer (it doesn't need to just be employees). In this project some of the problems I solved were:
- Using class constuctors to use OOP
- Q/A test all of my methods
- Use multiple exported functions to achieve my goal

## Table of Contents

Navigate here vvv

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#tests)

## Installation

This being a node.js app, you must first make sure your terminal can run this app by aquiring the needed
packages. You will need npm installed, you can read more about that [here](https://www.npmjs.com/package/npm). You will also need Inquirer installed
which you can find [here](https://www.npmjs.com/package/inquirer). Once those dependencies are fitted, you're ready to begin usage.

## Usage
    
    NOTE: There is a full walkthrough video of usage in the "img" folder!

    To begin, open your terminal within the root directory, or if you're using VS code, open an integrated terminal like shown here:

![starting terminal](./img/Screenshot%20(22).png)\

    Then, to initialize the app the must command it to start by typing "node index" on the command line.

![initializing app](./img/Screenshot%20(23).png)

    The app will then start prompting you questions about the team manager.

![beginning app](./img/Screenshot%20(24).png)

    Once the manager's info is finished being gathered, you will be asked if you want to add another employee, here let's select "Engineer".
    
__Notice you will be prompted to include the github profile for the engineer.__

![add new engineer](./img/Screenshot%20(26).png)

    You then will once again get the add employee prompt, this time let's try an intern.

__Intern prompts differ in the way it will ask you for the school of the intern__

![add new intern](./img/Screenshot%20(27).png)

    Finally, when you have satisfied your roster and added everybody in we can end the prompt.

![no more employees](./img/Screenshot%20(28).png)

    You will then get a message that informs you your files have been created!

![files created](./img/Screenshot%20(30).png)

    Have a look in the "dist" folder to see the results!

    NOTE: A sample of the generated files can be found in the "dist" folder right in the repo!

![dist folder](./img/Screenshot%20(29).png)

    Heres an example of what you can expect!

![generated site](./img/Screenshot%20(31).png)



## Credits

[My Github](https://github.com/Jesse-Lemieux)

## License

[MIT](https://choosealicense.com/licenses/mit/#).


## Tests


Testing was, and can be done with jest. If you wish to run tests you must install jest, information on that found [here](https://jestjs.io/).
In the __tests__ directory, you can select any of the four constuctors and type npm test "whatever constuctor you wish" into the command line.
You will see, in its current state all tests pass. Feel free to add tests or replicate failures!



