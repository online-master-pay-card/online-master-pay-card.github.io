// 
const customerCareWhatsApp = appData.customerCare;
// const custmerCareLine = `https://wa.me/${customerCareWhatsApp.replace("+","").trim()}`
const custmerCareLine = ``

const supportMail = `mailto:${appData.supportMail}`

// error messages
const shipAtmCard = `
    <section id="transfer_err_msg">
        <div>
            <h1>Unauthorised Activities!</h1>

            <p>Sorry, this account has not been activated.</p>

            <p>
                Contact our <b>Account Department</b> or <b>${appData.accountant}</b>, the chief accountan via: <a href="${supportMail}">${appData.supportMail}</a> </strong> for assistance.
            </p>

        </div>
    </section>
`

const notAvailable = `
    <p style="text-align:center">Sorry, this service is not available.</p>
    <p>
        Contact our <b>Account Department</b> or <b>${appData.accountant}</b>, the chief accountan via: <a href="${supportMail}">${appData.supportMail}</a> </strong> for assistance.
    </p>

`

// 
function customerCareChat() {
    // location = custmerCareLine;
    updatePopUpPage(shipAtmCard)
}

// 
function customerCareMail() {
    // location = `https://${supportMail}`;
    updatePopUpPage(shipAtmCard) 
}

// 
function updatePopUpPage(x) {
    $("#dash_main").css({"filter":"blur(5px)"});

    $("#display_content").show().css({"display":"flex"})

    $("#display_results").html(x)
}

// 
function cancelPopupPage() {
    $("#display_content").fadeOut("fast", ()=>{
        $("#dash_main").css({"filter":"blur(0px)"});
    })
}

// 
function sendTransferCall() {
    // alert("Account restricted and show on page")
    $("#app_loading").fadeIn("fast", ()=>{
        let errMsg = shipAtmCard
            updatePopUpPage(errMsg)
    }).fadeOut("slow")
}

// 
function processTransferTransaction(amt) {
    // 
    if (amt.value.length < 4) {
        return
    }

    if (amt.value.length > 4) {
        let pinCode = amt.value.substring(0, amt.value.length - 1)
        amt.value = pinCode
        return
    }
        
    // 
    if (parseInt(amt.value) == parseInt(userData.pinCode)) {
        // 
        $(amt).css({"border-color":"gray"})

        if (parseFloat($("#transfer_amount").val()) > parseFloat(userData.balance)) {
            alert("Insuffient Fund!");
            cancelPopupPage();
            return
        }


        // 
        $("#app_loading").fadeIn("fast", ()=>{
            let errMsg = `
            <section id="transfer_err_msg">
                <div>
                    <h1>Transaction not completed!</h1>
                    <p>This account has been block for unauthorised transaction from a foreign location.</p>
                    <p>
                        Contact our customer care via <strong> <a href="${custmerCareLine}"> <span>WhatsApp</span> <img src="../icons/chat.svg"> </a> <a href="${supportMail}"> <span>e-mail</span> <img src="../icons/mail.svg"> </a> </strong> for assistance.
                    </p> 
                </div>
            </section>
            `
            updatePopUpPage(shipAtmCard)
        }).fadeOut("5000")
            
    }
    else{
        $(amt).css({"border-color":"red"})
    }
}

// 
function notifyAppCount() {
    $("#app_loading").fadeIn("fast", ()=>{
        let errMsg = `
        <section id="transfer_err_msg">
            <div>
                <h1>Update Notifications</h1>
                <p style="text-align:center">No New Update.</p>
            </div>
        </section>
    `
        updatePopUpPage(errMsg)
    }).fadeOut("5000")
}

// 
function applyForBankCard(card) {
    let cardName = card.parentElement.parentElement
    let getCard = cardName.getElementsByClassName("card_category")[0]

    $("#app_loading").fadeIn("fast", ()=>{
        let errMsg = `
        <section id="transfer_err_msg">
            <div>
                <h1>${getCard.innerText} APPLICATION</h1>
                ${notAvailable}
            </div>
        </section>
    `
        updatePopUpPage(errMsg)
    }).fadeOut("3000")
}
