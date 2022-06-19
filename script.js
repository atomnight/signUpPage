
let first_name = document.getElementById("first_name");
let user_email = document.getElementById("user_email");
let user_password = document.getElementById("user_password");
let last_name = document.getElementById("last_name");
let phone_number = document.getElementById("phone_number");
let confirm_password = document.getElementById("confirm_password");

const create_acc_button = document.getElementById("create_acc_button");

array = [first_name,user_email,user_password,last_name,phone_number,confirm_password];

create_acc_button.addEventListener("click", printInputs);
    function printInputs() {
        // array.forEach(element => {
        //     if (element.value == "") {
                
        //     }
        // });
        if ((user_password.value == confirm_password.value) && (user_password.value != "")) {
            console.log("pasword confirmed")
            console.log(first_name.value);
            console.log(user_email.value);
            console.log(user_password.value);
            console.log(last_name.value);
            console.log(phone_number.value);
            console.log(confirm_password.value);
        }
        else if (user_password != confirm_password) {
            console.log("pasword not the same!")
        }
}




















