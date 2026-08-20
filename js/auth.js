// 
if (localStorage.hasOwnProperty("bankAPP")) {
    location.replace("./dashboard.html")
}

// 
if (authOrigin == null || authLocation == null) {
    location.replace("../")
}
else{
    // 
    if (localStorage.hasOwnProperty("myAccount")) {
        let tempData = JSON.parse(localStorage.getItem('myAccount'));

        $("#account_num").val(tempData.account);
        $("#account_pin").val(tempData.code);

        setTimeout(() => {
            $("#acount_btn").css({"visibility":"visible"})
        }, 500);
    }
}

// 
$(document).ready(()=>{
    if (authBatch != null) {
        $("#account_num").val(authBatch)
    }
})

// 
const inputs = document.querySelectorAll(".inputs")

// 
inputs.forEach(input => {
    input.addEventListener('keyup', ()=>{

        if (input.value.length >= 6) {
            $("#acount_btn").css({"visibility":"visible"})
        }
        else{
            $("#acount_btn").css({"visibility":"hidden"})
        }

        // 
        if (inputs[0].value.length > 12) {
            const accountNum = inputs[0].value.substring(0, inputs[0].value.length - 1);
            inputs[0].value = accountNum
        }

        if (isNaN(parseInt(inputs[1].value))) {
            inputs[1].value = ""
            inputs[1].style.borderColor = "red"
            return
        }

        if (inputs[1].value.length > 6) {
            const passCode = inputs[1].value.substring(0, inputs[1].value.length - 1);
            inputs[1].value = passCode
        }
    })
});

// 
$("#auth_form").on('submit', (e)=>{
    e.preventDefault();
    
    // 
    for (let i = 0; i < userData.length; i++) {
        
        if (parseInt(userData[i].accountNumber) == parseInt($("#account_num").val()) && parseInt(userData[i].passCode) == parseInt($("#account_pin").val())) {
            
            // $("#account_num").css({"border-color":"red"})
            $("#account_num").css({"border-color":"gray"})

            // $("#account_pin").css({"border-color":"red"})
            $("#account_pin").css({"border-color":"gray"})

            let loginDetail = {};
            loginDetail.id =  userData[i].id;
            loginDetail.firstName = userData[i].firstName;
            loginDetail.middleName = userData[i].middleName;
            loginDetail.lastName = userData[i].lastName;
            loginDetail.email = userData[i].email;
            loginDetail.dateBirth = userData[i].dateBirth;
            loginDetail.phoneNumber = userData[i].phoneNumber;
            loginDetail.homeAddress = userData[i].homeAddress;
            loginDetail.accountNumber = userData[i].accountNumber;
            loginDetail.passCode = userData[i].passCode;
            loginDetail.pinCode = userData[i].pinCode;
            loginDetail.photo = userData[i].photo;
            loginDetail.balance = userData[i].balance;
            loginDetail.currency = userData[i].currency;
            loginDetail.currencySymbol = userData[i].currencySymbol;
            loginDetail.customerCare = userData[i].customerCare;

            localStorage.setItem('bankAPP', JSON.stringify(loginDetail))

            location.replace("./dashboard.html")
            return
        }
    }

    $("#account_num").css({"border-color":"red"})
    // $("#account_num").css({"border-color":"gray"})

    $("#account_pin").css({"border-color":"red"})
    // $("#account_pin").css({"border-color":"gray"})
})


// 
let togglePass = document.getElementById("account_pin")
function changePassStatus(x) {
    if (togglePass.type === "password") {
        $(x).attr('src', '../icons/show.svg')
        togglePass.type = "text"
    }
    else{
       $(x).attr('src', '../icons/hide.svg')
        togglePass.type = "password" 
    }
}