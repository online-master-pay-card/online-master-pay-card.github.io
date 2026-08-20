// hashTags
const hashTags = window.location.hash.substring(1);

// urls 
const urlParams = new URLSearchParams(window.location.search);
const regAccount = urlParams.get('register');
const signUp = urlParams.get('account');
const navBar = urlParams.get('nav');
const appPromo = urlParams.get('promo');
const appGuidance = urlParams.get('guidance');
const appMetrics = urlParams.get('metric');
const appServices = urlParams.get('service');
const regMail = urlParams.get('mailer');

const authOrigin = urlParams.get('origin');
const authLocation = urlParams.get('loc');

const homePanel = urlParams.get('panel');
const authBatch = urlParams.get('batch');

// update single app page
function updateAppInterface(x) {
    $("#app_main").html("")

    $("#app_loading").fadeIn("slow", ()=>{
        $("#app_main").html(`<section id="major_mid_section">${x}</section>`).show()
        document.getElementById("app_main").scrollIntoView()
    }).fadeOut("fast")
            
}

// update nav bar background-color
function updateNavBarColor(x) {
    $(".toggle_main_menu").css({"background-color":"whitesmoke", "color":"black"});

    if (x.toLowerCase() == "home_loans" || x.toLowerCase() == "personal_loans" || x.toLowerCase() == "auto_loans") {
        $(".mortgages").css({"background-color":"var(--secondary-red)", "color":"white"})
    }

    if (x.toLowerCase() == "entrepreneurs" || x.toLowerCase() == "import_export" || x.toLowerCase() == "retail") {
        $(".business").css({"background-color":"var(--secondary-red)", "color":"white"})
    }

    if (x.toLowerCase() == "credit_line" || x.toLowerCase() == "debit_line" || x.toLowerCase() == "contribution") {
        $(".corporate").css({"background-color":"var(--secondary-red)", "color":"white"})
    }

    if (x.toLowerCase() == "private_savings" || x.toLowerCase() == "target_savings" || x.toLowerCase() == "annual_cash") {
        $(".commercial").css({"background-color":"var(--secondary-red)", "color":"white"})
    }

    if (x.toLowerCase() == "accident_insurance" || x.toLowerCase() == "life_insurance" || x.toLowerCase() == "car_insurance") {
        $(".insurance").css({"background-color":"var(--secondary-red)", "color":"white"})
    }

    if (x.toLowerCase() == "sports" || x.toLowerCase() == "education" || x.toLowerCase() == "community_service") {
        $(".csr").css({"background-color":"var(--secondary-red)", "color":"white"})
    }
}

// 
let userData = "";
$.ajax(
    {
        url: "../json/users.json",
        type: "GET",
        async: false,
    success:function(data){
        userData = data
    },
    error:function(err){
        console.log(err)
    }
    }
)

let appData = "";
$.ajax(
    {
        url: "../json/main.json",
        type: "GET",
        async: false,
    success:function(data){
        appData = data
    },
    error:function(err){
        console.log(err)
    }
    }
)

// 
let dateTimer = new Date()
$(".custom_footer").html(`
    <ul>
        <img src="../pics/favicon.svg" alt="94839">
        <li>&copy;${dateTimer.getFullYear()}</li>
    </ul>    
`)

// 
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        // Send critical data asynchronously to your server 
        // const url = '/api/log-session-end';
        // const data = JSON.stringify({ sessionTime: performance.now() });
        
        // navigator.sendBeacon(url, data);

        // logOutAccount();
    }
});
