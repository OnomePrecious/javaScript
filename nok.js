// Function to display the main menu and handle user input
function displayMainMenu() {
    var option = prompt(`MAIN MENU
1. Messages
2. Message settings
3. Info Service
4. Voice mailbox number
5. Service command editor
Select an option:`);

    switch (option) {
        case "1":
            displayMessagesMenu();
            break;
        case "2":
            displayMessageSettingsMenu();
            break;
        case "3":
            console.log("Info Service functionality");
            break;
        case "4":
            console.log("Voice mailbox number functionality");
            break;
        case "5":
            console.log("Service command editor functionality");
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            displayMainMenu();
    }
}

// Function to display the messages menu and handle user input
function displayMessagesMenu() {
    var option = prompt(`MESSAGES
1. Write messages
2. Inbox
3. Outbox
4. Picture messages
5. Templates
6. Smileys
7. Message settings
Select an option:`);

    switch (option) {
        case "1":
            console.log("Write messages functionality");
            break;
        case "2":
            console.log("Inbox functionality");
            break;
        case "3":
            console.log("Outbox functionality");
            break;
        case "4":
            console.log("Picture messages functionality");
            break;
        case "5":
            console.log("Templates functionality");
            break;
        case "6":
            console.log("Smileys functionality");
            break;
        case "7":
            displayMessageSettingsMenu();
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            displayMessagesMenu();
    }
}

// Function to display the message settings menu and handle user input
function displayMessageSettingsMenu() {
    var option = prompt(`MESSAGE SETTINGS
1. Set 1
   1. Message centre number
   2. Message sent as
   3. Message validity
2. Common
   1. Delivery reports
   2. Reply via same centre
   3. Character support
Select an option:`);

    switch (option) {
        case "1":
            console.log("Set 1 functionality");
            break;
        case "2":
            console.log("Common functionality");
            break;
        default:
            console.log("Invalid option. Please select a valid option.");
            displayMessageSettingsMenu();
    }
}

// Call the main function to start the menu system
displayMainMenu();

