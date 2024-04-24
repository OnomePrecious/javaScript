const readline = require('readline');

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function nokiaphone() {
console.log(`Nokia Phone Main Menu
*************************************************
1-> Phone book
2-> Messages
3-> Chat
4-> Call Register
5-> Tones
6-> Settings
7-> Call Divert
8-> Games
9-> Calculator
10-> Reminders
11-> Clock
12-> Profiles
13-> SIM services
***************************************************
Select an option:`);

userInput.question("Enter your choice: ", (menu) => {

    switch(menu){
        case '1':
            phoneBook();
            break;
        case '2':
            messages();
            break;
        case '3':
            chat();
            break;
        case '4':
            callRegister();
            break;
        case '5':
            tones();
            break;
        case '6':
            settings();
            break;
        case '7':
            callDivert();
            break;
        case '8':
            games();
            break;
        case '9':
            calculator();
            break;
        case '10':
            reminders();
            break;
        case '11':
            clock();
            break;
        case '12':
            profiles();
            break;
        case '13':
            simServices();
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            nokiaPhone();

    }
});
    function phoneBook(){
        console.log(`Phone book Menu
        *************************************************
        1-> Search
        2-> Service Nos
        3-> Add name
        4-> Erase
        5-> Edit
        6-> Assign tone
        7-> Send b'card
        8-> Option
        9-> Speed dials
        10-> Voice tags
         ************************************************
         select an option:`); 
         userInput.question("Enter your choice: ", (userInput1) => {
         switch(userInput1){
                case "1": console.log("welcome to search "); break;
                case "2": console.log("welcome to service nos "); break;
                case "3": console.log("welcome to add name "); break;
                case "4": console.log("welcome to erase "); break;
                case "5": console.log("welcome to edit "); break;
                case "6": console.log("welcome to assign tone "); break;
                case "7": console.log("welcome to send b'card "); break;
                case "8": console.log(`Welcome to OPTIONS:
                    1-> Type of view
                    2-> Memory status`);
                    userInput.question("Enter your choice: ", (option) => {
                        console.log(`Enter your choice`);
                        switch(option){
                        case "1": console.log(" welcome to type of view "); break;
                        case "2": console.log("welcome to memory status "); break;
                        default: console.log("Input a valid number ");  
                        phoneBook();
                        }
                    
                    });
                case 9: console.log("welcome to speed dials "); break;
                case 10: console.log("welcome to voice tags "); break;
                default: console.log("Input a valid number "); break;
            }
        });
}



 function messages(){
        console.log(`Messages
        *************************************************
1-> Messages
2-> Message settings
3-> Info Service
4-> Voice mailbox number
5-> Service command editor
Select an option:`);
userInput.question("Enter your choice: ", (userInput2) => {


    switch (userInput2) {
        case "1":
            displayMessagesMenu();
            break;
        case "2":
            displayMessageSettingsMenu();
            break;
        case "3":
            console.log("Welcome to info Service");
            break;
        case "4":
            console.log("Welcome to voice mailbox number");
            break;
        case "5":
            console.log("Welcome to service command editor ");
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            displayMainMenu();
    }
});

function displayMessagesMenu() {
    console.log(`MESSAGES
1. Write messages
2. Inbox
3. Outbox
4. Picture messages
5. Templates
6. Smileys
7. Message settings
Select an option:`);
userInput.question("Enter your choice: ", (option1) => {

    switch (option1) {
    case "1": console.log("welcome to write messages "); break;
    case "2": console.log("Welcome to Inbox"); break;
    case "3": console.log("Welcome to outbox"); break;
    case "4": console.log("Welcome to picture  messages"); break;
    case "5": console.log("Welcome to templates"); break;
    case "6": console.log("Welcome to smileys"); break;
    case "7":
            printMessageSettingsMenu();
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            displayMessagesMenu();
    }
});

function printMessageSettingsMenu() {
    console.log(`MESSAGE SETTINGS
1. Set 1
   1. Message centre number
   2. Message sent as
   3. Message validity
2. Common
   1. Delivery reports
   2. Reply via same centre
   3. Character support
Select an option:`);

userInput.question("Enter your choice: ", (option2) => {


    switch (option2) {
        case "1":
            console.log("Welcome to set 1");
            break;
        case "2":
            console.log("Welcome to Common");
            break;
        default:
            console.log("Invalid option");
            printMessageSettingsMenu();
    }
});

function chat(){
    console.log(`CHAT
    1. Chat
    `);
    userInput.question("Enter your choice: ", (chatOption) => {

    switch(chatOption){
        case "1": console.log("Welcome to chat");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});


function callRegister(){
    console.log(`CALL REGISTER
    **************************************************
    1-> Missed calls
    2-> Received calls
    3-> Dialled numbers
    4-> Erase recent call lists
    5-> Show call duration
    6-> Show call costs
    7-> Call cost settings
    8-> Prepaid credit
    
    `);
    userInput.question("Enter your choice: ", (callRegisterOption) => {

    switch(callRegisterOption){
        case "1": console.log("Welcome to missed calls");
        case "2": console.log("Welcome to Received calls")
        case "3": console.log("Welcome to dialled calls");
        case "4": console.log("Welcome to erase recent call lists")
        case "5": showCallDuration();
        break;
        case "6": showCallCosts();
        break;
        case "7": callCostSettings();
        break;
        case "8": console.log("Welcome to prepaid credit");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }

});

function showCallDuration(){
    console.log(`SHOW CALL DURATION
    ********************************************
    1-> Last call duration
    2-> All calls' duration
    3-> Received calls'  duartion
    4-> Dialled calls' duration
    5-> Clear timers
    
    `);
    userInput.question("Enter your choice: ", (callDurationOption) => {

    switch(callDurationOption){
        case "1": console.log("Welcome to last call duration");
        break;
        case "2": console.log("welcome to all calls duration");
        break;
        case "3": console.log("Welcome to received calls duration");
        break;
        case "4": console.log("Welcome to dialled calls duration");
        break;
        case "5": console.log("Welcome to clear timers");
        break;
        default:
            console.log("Invalid option")
            callRegister();
    }
});

function showCallCosts(){
    console.log(`SHOW CALL COST
    ********************************************
    1-> Last call cost
    2-> All calls' cost
    3-> Clear counters
    
    `);
    userInput.question("Enter your choice: ", (costOption) => {

    switch(costOption){
        case "1": console.log("Welcome to last call cost");
        break;
        case "2": console.log("welcome to all calls cost");
        break;
        case "3": console.log("Welcome to clear counters");
        break;
        default:
            console.log("Invalid option")
            callRegister();
    }

});

function callCostSettings(){
    console.log(`CALL COST SETTINGS
    ****************************************
    1-> Call cost limit
    2-> Show costs in
    `)
    userInput.question("Enter your choice: ", (settingsOption) => {


    switch(settingsOption){
        case "1": console.log("Welcome to call cost limit");
        break;
        case "2": console.log("Welcome to show costs in");
        break;
        default:
            console.log("Invalid option")
            callRegister();
    }
});


function tones(){
    console.log(`TONES
    *************************************************
    1-> Ringing tone
    2-> Ringing volume
    3-> Incoming call alert
    4-> Composer
    5-> Message alert tone
    6-> Keypad tones
    7-> Warning and game tones
    8-> Vibrating alert
    9-> Screen saver

    `);
    userInput.question("Enter your choice: ", (tonesOption) => {

    switch(tonesOption){
        case "1": console.log("Welcome to Ringing tone");
        break;
        case "2": console.log("Welcome to Ringing volume");
        break;
        case "3": console.log("Welcome to Incoming call alert");
        break;
        case "4": console.log("Welcome to Composer");
        break;
        case "5": console.log("Welcome to Message alert tones");
        break;
        case "6": console.log("Welcome to Keypad tones");
        break;
        case "7": console.log("Welcome to Warning and game tones");
        break;
        case "8": console.log("Welcome to Vibrating alert");
        break;
        case "9": console.log("welcome to screen saver");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    

});

function settings(){
    console.log(`SETTINGS
    ************************************
    1-> Call settings
    2-> Phone settings
    3-> Security settings
    4-> Restore factory settings
    
    `)
    userInput.question("Enter your choice: ", (setOption) => {

    switch(setOption){
        case "1": callSettings();
        break;
        case "2": phoneSettings();
        break;
        case "3": securitySettings();
        break;
        case "4": console.log("Welcome to restore factory settings");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();

    }
});

function callSettings(){
    console.log(`CALL SETTINGS OPTION
    ***************************************************
    1-> Automatic redial
    2-> Speed dialling
    3-> Call waiting options
    4-> Own number sending
    5-> Phone line in use
    6-> Automatic answer
    `)
    userInput.question("Enter your choice: ", (callSettingsOption) => {


    switch(callSettingsOption){
        case "1": console.log("Welcome to automatic redial")
        break;
        case "2": console.log("Welcome speed dialling");
        break;
        case "3": console.log("Welcome to call waiting options");
        break;
        case "4": console.log("Welcome to own number sending");
        break;
        case "5": console.log("Welcome to phone line in use");
        break;
        case "6": console.log("Welcome to automatic answer");
        break;
        default:
            console.log("Invalid option")
            settings();

    }
});



function phoneSettings(){
    console.log(`PHONE SETTINGS OPTION
    ***************************************************
    1-> Language
    2-> Cell info display
    3-> Welcome note
    4-> Network selection
    5-> Lights
    6-> Confirm SIM service actions
    `)
    userInput.question("Enter your choice: ", (phoneSettingsOption) => {

    switch(phoneSettingsOption){
        case "1": console.log("Welcome to language")
        break;
        case "2": console.log("Welcome to cell info display");
        break;
        case "3": console.log("Welcome to welcome note");
        break;
        case "4": console.log("Welcome to network selection");
        break;
        case "5": console.log("Welcome to lights");
        break;
        case "6": console.log("Welcome to confirm SIM service actions");
        break;
        default: console.log("Invalid option");
        settings();

    }
});

function securitySettings(){
    console.log(`SECURITY SETTINGS OPTION
    ***************************************************
    1-> Pin code request
    2-> Call barrring service
    3-> Fixed dialling
    4-> Closed user group
    5-> Phone security
    6-> Change access codes
    `)
    userInput.question("Enter your choice: ", (securitySettingsOption) => {

    switch(securitySettingsOption){
        case "1": console.log("Welcome to pin code request")
        break;
        case "2": console.log("Welcome to call barring service");
        break;
        case "3": console.log("Welcome to fixed dialling");
        break;
        case "4": console.log("Welcome to closed user group");
        break;
        case "5": console.log("Welcome to phone security");
        break;
        case "6": console.log("Welcome to change access codes");
        break;
        default: console.log("Invalid option");
        settings();

    }
});



function callDivert(){
    console.log(`CALL DIVERT
    1. Call divert
    `);
    userInput.question("Enter your choice: ", (divertOption) => {

    switch(divertOption){
        case "1": console.log("Welcome to call divert");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

function games(){
    var gamesOption = prompt(`GAMES
    1. Games
    `);
    userInput.question("Enter your choice: ", (gamesOption) => {

    switch(gamesOption){
        case "1": console.log("Welcome to games");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

function calculator(){
    console.log(`CALCULATOR
    1. Calculator
    `);
    userInput.question("Enter your choice: ", (calculatorOption) => {

    switch(calculatorOption){
        case "1": console.log("Welcome to calculator");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

function reminders(){
    console.log(`REMINDER
    1. Reminders
    `);
    userInput.question("Enter your choice: ", (reminderOption) => {

    switch(reminderOption){
        case "1": console.log("Welcome to reminder");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

function clock(){
    console.log(`CLOCK
    *****************************************
    1-> Alarm clock
    2-> Clock settings
    3-> Date setting
    4-> Stopwatch
    5-> Countdown timer
    6-> Auto update of date and time

    `);
    userInput.question("Enter your choice: ", (clockOption) => {

    switch(clockOption){
        case "1": console.log("Welcome to Alarm clock");
        break;
        case "2": console.log("Welcome to clock settings");
        break;
        case "3": console.log("Welcome to date settings");
        break;
        case "4": console.log("Welcome to stopwatch");
        break;
        case "5": console.log("Welcome to countdown timer");
        break;
        case "6": console.log("Welcome to auto update");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

function profiles(){
    console.log(`PROFILES
    1. profiles
    `);
    userInput.question("Enter your choice: ", (profileOption) => {

    switch(profileOption){
        case "1": console.log("Welcome to profiles");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }

    
});

function simServices(){
    console.log(`SIM SERVICES
    1. Sim services
    `);

    userInput.question("Enter your choice: ", (simOption) => {

    switch(simOption){
        case "1": console.log("Welcome to Sim services");
        break;
        default:
            console.log("Invalid option")
            nokiaphone();
    }
    
});

