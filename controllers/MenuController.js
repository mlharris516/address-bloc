const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Get Date",
                    "Remind Me",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main() {
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Get Date":
                    this.getDate();
                    break;
                case "Exit":
                    this.exit();
                    break;
                case "Remind Me":
                    this.remindMe();
                    break;
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    clear() {
        console.log("\x1Bc");
    }

    addContact() {
        this.clear();
        console.log('addContact called');
        this.main();
    }

    exit() {
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    getContactCount() {
        return this.contacts.length;
    }

    getDate() {
        const currentTS = new Date();
        console.log(currentTS);
        this.main();
    }

    remindMe() {
        return ("Learning is a life-long pursuit");
    }
}
