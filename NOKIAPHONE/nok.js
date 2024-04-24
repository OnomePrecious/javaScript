
class Nok{
    constructor(){
        this.input = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

}

nokiaPhone() {
   // rl.question(`Nokia Phone Main Menu
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
***************************************************`)
this.input.question("Select option 1 -13: ", (menu) => {
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

}
}
