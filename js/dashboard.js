// 
if (!localStorage.hasOwnProperty("bankAPP")) {
    location.replace("./auth.html?origin=true&loc=true")
}

$("#userBatchNum").val(JSON.parse(localStorage.getItem("bankAPP")).id);

$(document).ready(()=>{
    $("#app_loading").fadeOut("slow")
})

// 
const myData = JSON.parse(localStorage.getItem("bankAPP"))

// 
$("#user_photo").attr('src', `../gallery/passport/${myData.photo}`);
$("#user_name").text(`Hi, ${myData.lastName}`);

//
$("#profile_settings").html(`
    <img id="settings_profile_photo" src="../gallery/passport/${myData.photo}" alt="../gallery/passport/${myData.lastName}">
    <div>
        <p> <b>Full Name</b>  <span>${myData.lastName} .${myData.middleName.substring(1, 0)}. ${myData.firstName}</span> </p>
        <p> <b>E-mail</b>  <span>${myData.email}</span> </p>
        <p> <b>Date of Birth</b>  <span>${myData.dateBirth}</span> </p>
        <p> <b>Phone No.</b>  <span>${myData.phoneNumber}</span> </p>
        <p> <b>Address</b>  <span>${myData.homeAddress}</span> </p>
    </div>
    <button onclick="logOutAccount()"> <img src="../icons/power.svg">Log out</button>
`);

// 
$("#balance_list_content").html(`

    <span id="avilable_list_currency">
        <section>
            <b>Account Balance</b>
            <p>${myData.currency} Currency</p>
        </section>
        
    </span>

    <span id="avilable_list_money">
        <div>
            <input type="text" readonly class="balance_input" value="${myData.currencySymbol}${myData.balance.toLocaleString()}">
            <img onclick="showAvailableBalance(this)" src="../icons/hide.svg">
        </div>
        <p>
            <i></i>
            <span>Available for transfer</span>
        </p>
    </span>
`);
 
// 
$("#home_list_balance").html(`
    <b>Account Balance</b>
    <span>
        <input type="text" readonly class="balance_input" value="${myData.currencySymbol}${myData.balance.toLocaleString()}">
        <img onclick="showAvailableBalance(this)" src="../icons/hide.svg">
    </span>
`)

$("#card_panel_account").html(`
    <b>Bank Account:</b> <span>${myData.accountNumber}</span>
`)

// 
function showAvailableBalance(img) {
    let balance = document.querySelectorAll(".balance_input");
    balance.forEach(bal => {
        if (bal.type === "password") {
            bal.type = "text"
            $(img).attr('src','../icons/hide.svg')
        }
        else{
            bal.type = "password"
            $(img).attr('src','../icons/show.svg')
        }
    }); 
}

// 
const card_cat = document.querySelectorAll(".card_category")
card_cat.forEach(cat => {
    cat.addEventListener('click', ()=>{

        $("#app_loading").fadeIn("fast", ()=>{
            if (cat.innerText.toLowerCase() == "credit card") {
                $("#cards_list_credit").fadeIn().css({"display":"flex"})
                $("#cards_list_debit").hide()
            }

            if (cat.innerText.toLowerCase() == "debit card") {
                $("#cards_list_credit").hide()
                $("#cards_list_debit").fadeIn().css({"display":"flex"})
            }
        }).fadeOut("slow")
    })
});

// 
$.get('../json/transactions.json', (res)=>{
    
    let page = ``;
    let dataList = ``

    for (let i = 0; i < res.length; i++) {
        // alert(res[i].id + userData.id)
        if (res[i].id == $("#userBatchNum").val()) {
            page += `
                <section class="activities_panel_contents">
                    <b>${res[i].desc}</b>
                    <div>
                        <span>${res[i].names.substring(0, 10)}...</span>

                        <span style="color: ${res[i].color};">
                            ${res[i].unit}${res[i].amount.toLocaleString()} ${res[i].currency}
                        </span>

                        <span>${res[i].time}</span>
                    </div>
                    <i><b></b> <p>${res[i].status}</p></i>
                </section>
            `
            dataList += `<option value="${res[i].accountNum}">`
        }
        
    }

    // 
    $("#recent_activity_list_main").html(`
        <h3>Trust Fund</h3>
        ${page}    
    `)

    // 
    $("#form_quick_account").html(`
        <b>Account No.:</b>
        <input type="number" onkeyup="getRecipientAccount(this)" id="recent_acounts_number" list="recent_acounts" placeholder="Receipt Account Number">
        <datalist id="recent_acounts">${dataList}</datalist>
    `)
});

// 
function getRecipientAccount(num) {
    if (isNaN(parseInt(num.value))) {
        num.value = ""
        return
    }

    // if (num.value.length > 12) {
    //     let accNumber = num.value.substring(0, num.value.length - 1)
    //     num.value = accNumber
    // }

    if (num.value.length > 7) {
        $("#form_quick_transfer").html(`
            <b>Transaction:</b>
            <select onchange="getTransferCategory(this)" id="transfer_select_category">
                <option value="">Select Transfer Category</option>
                <option value="local">Local Transfer</option>
                <option value="international">International Transfer</option>
            </select>
        `)
    }
    else{
      $("#form_quick_transfer").html("")  
    }
}

// 
function getTransferCategory(sel) {
    let currencySym = `&dollar;`;

    

    // if (sel.value == "") {
    //     $("#form_quick_amount").html("")
    //     return
    // }
    // else if (sel.value.toLowerCase() == "local") {
    //     currencySym = `&pound;`
    // }

    // else if (sel.value.toLowerCase() == "international") {
    //     currencySym = `&dollar;`
    // }

    $("#form_quick_name").html(`
        <b>Bank Name:</b>
        <input type="text" id="transfer_name">     
    `)

    $("#form_quick_amount").html(`
        <b>Amount (<span id="amount_symbol">${currencySym}</span>):</b>
        <input type="number" step="any" id="transfer_amount" onkeyup="getTransferAmount(this)">
    `)
}

// 
function getTransferAmount(amt) {

    if (parseFloat(amt.value) < 0) {
        amt.value = ""
    }
    else{
        $("#home_quick_form button").fadeIn().css({"display":"flex"})
    }
}

// 
$("#home_quick_form").on('submit', (e)=>{
    e.preventDefault()
    // recent_acounts_number  transfer_select_category  transfer_amount 
    if ($("#recent_acounts_number").val() == "" || $("#transfer_select_category").val() == "" || $("#transfer_amount").val() == "" || $("#transfer_select_category").val() == "" || $("#transfer_select_category").val() == "transfer_name") {
        return
    }

    // atm error
   $("#app_loading").fadeIn("fast", ()=>{
        //
        let transferForm = "";

        $.get('../json/users.json', (res)=>{

            for (let i = 0; i < res.length; i++) {

                if (res[i].id == $("#userBatchNum").val() && res[i].transfer == "atm") {
                    transferForm = shipAtmCard
                    updatePopUpPage(transferForm)
                    return
                }

                if (res[i].id == $("#userBatchNum").val()) {
                   let userName = `${res[i].lastName}, ${res[i].firstName}`;
                    let userAccount = `${res[i].accountNumber}`;
                    let totalAmount = parseFloat($("#transfer_amount").val());
                    let sumTotal = `${$("#amount_symbol").text()}${totalAmount.toLocaleString()}`;
                    let userBalance = res[i].balance
                    let pendingBalance =  res[i].balance - totalAmount 

                    transferForm = `
                        <section id="extras_transfer_container">
                            <img id="extras_logo" src="../icons/favicon.png">

                            <h2>Confirm Transaction</h2>

                            <div id="extras_transfer_msg">
                                Hi <b>${res[i].lastName}</b>, you are about to make <i style="text-transform:capitalize"> ${$("#transfer_select_category").val()} transfer</i> in the sum of <b><i>${sumTotal}</i></b> to this account <b>${$("#recent_acounts_number").val()}</b>
                            </div>

                            <div id="extras_transfer_form">
                                <h3>Transfer Details</h3>

                                <section>
                                    <h4>Sender</h4>
                                    <p> <b>Account Name:</b> <span>${userName.substring(0, 8)} ****</span> </p>
                                    <p> <b>Account No.:</b> <span>${userAccount.substring(0, 8)} ****</span> </p>
                                    <p> <b>Total Balance:</b> <span>${userData.currencySymbol}${userBalance.toLocaleString()}</span> </p>
                                    <p> <b>Pending Balance:</b> <span>${userData.currencySymbol}${pendingBalance.toLocaleString()}</span> </p>
                                </section>

                                <section>
                                    <h4>Reecipeint</h4>
                                    <p> <b>Account No.:</b> <span>${$("#recent_acounts_number").val().substring(0, 8)} ****</span> </p>
                                    <p> <b>Transaction:</b> <span>${$("#transfer_select_category").val()}</span> </p>
                                </section>

                            </div>

                            <div id="extras_transfer_code">
                                <h5>${sumTotal}</h5>
                                <input type="number" onkeyup="processTransferTransaction(this)" placeholder="Enter Code">
                            </div>
                        
                        <section>
                    `
                    updatePopUpPage(transferForm)
                    return
                }
            }
        }) 

    }).fadeOut("slow")

})

// 
$.get('../json/services.json', (res)=>{
    // 
    let services = ""
    for (let i = 0; i < res.length; i++) {
        services += `
             <button onclick="sendTransferCall()">
                <img src="../gallery/services/${res[i].icon}" alt="Services">
                <span>${res[i].item}</span>
            </button>
        `
    }

    $("#listed_services").html(`<div>${services}</div>`)
})

// 
function logOutAccount() {
    localStorage.clear();

    let tempAccount = {};
        tempAccount.account = userData.accountNumber;
        tempAccount.code = userData.passCode;

    localStorage.setItem('myAccount', JSON.stringify(tempAccount))

    location.replace("../")
}

// 
$("#popup_cancle_img").on('click', ()=>{
    // 
    cancelPopupPage()
})

// 
$("#quick_btn_img").on("click", ()=>{
    // 
    $.get('../json/users.json', (res)=>{

        for (let i = 0; i < res.length; i++) {
            
            if (res[i].id == $("#userBatchNum").val() && res[i].transfer == "atm") {
                
                 $("#app_loading").fadeIn("fast", ()=>{
                    let errMsg = shipAtmCard
                        updatePopUpPage(errMsg)
                }).fadeOut("slow")

                return
            }
            $("#home_quick_form").slideToggle("fast")
        }
    })

})