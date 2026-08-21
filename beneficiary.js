// 
function getBenefitPage() {
    let benefitPage = `
        <ul id="nav">
            <section id="nav_list">
                <a href="./"><img src="./pics/logo.png" alt="944"></a>
                <li><a href="#benefit_summary" class="ma_nav_list">Our Achievements</a></li>
                <li><a href="#benefit_winners" class="ma_nav_list">Our Beneficiaries</a></li>
            </section>
        </ul>

        <main id="main">
            <section id="batch_container">
                <h2>Online Beneficiary Portal</h2>

                <div id="benefit_container">
                    <form id="benefit_form">
                        <input type="search" id="benefit_input" placeholder="Enter Batch Number">
                        <button><img src="./pics/search.svg" alt="7484"></button>
                    </form>

                    <div id="show_batch_beneficiary"></div>
                </div>

                <div id="benefit_summary">
                    <div class="container">
                        <h3>Our Achievements: Core Objectives and Strategic Impact</h3>

                        <p>Financial aid represents structured funding provided to individuals, organizations, or developing economies to subsidize essential costs most commonly in higher education, institutional support, and emergency relief. Functioning as a cornerstone of socioeconomic mobility and development, financial aid bridges the gap between available private resources and the growing costs of critical investment areas.</p>

                        <img src="./pics/summary.avif" alt="9088">

                        <h4>Primary Objectives of Financial Aid Programs</h4>
                        
                        <p>While specific implementation models vary across governments, educational institutions, and non-governmental entities, financial aid initiatives universally target several core goals:</p>

                        <ul>
                            <li><strong>Expanding Accessibility:</strong> Eliminating economic barriers so that qualified individuals can pursue higher education and vocational training regardless of their financial background.</li>
                            <li><strong>Promoting Merit and Equity:</strong> Balancing need-based support for under-resourced populations with merit-based incentives for academic, athletic, or institutional excellence.</li>
                            <li><strong>Mitigating Debt Burdens:</strong> Utilizing grants, scholarships, and subsidized work-study opportunities to minimize long-term student debt and promote post-graduation financial stability.</li>
                            <li><strong>Driving Economic Development:</strong> Investing in human capital to build a skilled workforce, foster innovation, and address strategic labor shortages across critical industries.</li>
                        </ul>

                        <div class="highlight-box">
                            <strong>Strategic Value:</strong> By providing targeted funding through grants, scholarships, subsidized loans, and work-study frameworks, financial aid systems transform potential capability into measurable socioeconomic output.
                        </div>

                        <h4>Core Pillars of Financial Assistance</h4>

                        <p>Financial aid programs generally fall under four primary categories:</p>

                        <ul>
                            <li><strong>Grants:</strong> Need-based financial support that typically does not require repayment.</li>
                            <li><strong>Scholarships:</strong> Merit-based or criteria-specific awards granted for academic, professional, or community achievements.</li>
                            <li><strong>Work-Study Programs:</strong> Subsidized employment opportunities allowing students to earn funds while gaining practical work experience.</li>
                            <li><strong>Educational Loans:</strong> Subsidized or unsubsidized borrowing options designed with lower interest rates and flexible repayment schedules.</li>
                        </ul>

                        <p>Ultimately, a well-structured financial aid ecosystem serves as both a safety net and a catalyst—fostering equal opportunity, strengthening institutional equity, and contributing to sustainable economic growth.</p>
                </div>

                <div id="benefit_winners">
                    <div class="container">
                        
                        <div class="header">
                            <h3>Previous Beneficiaries</h3>
                            <p>See how our solution supports leaders, specialists, and everyday professionals.</p>
                        </div>

                        <div class="grid">

                            <!-- 1. Doctor -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"In clinical practice, efficiency directly impacts patient care. This platform streamlined our administrative workflow, letting our medical staff spend less time on paperwork and more time focusing on critical patient outcomes."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/medicine.avif" alt="Dr. Aris Thorne">
                                    <div class="info">
                                        <h4>Dr. Aris Thorne</h4>
                                        <p>Chief of Medicine</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 2. Student -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Balancing coursework, research, and exams used to feel chaotic. The structured layout and intuitive tools helped me organize my study schedules and group projects seamlessly. Its been a game-changer for my grades."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/computer.avif" alt="Sophia Chen">
                                    <div class="info">
                                        <h4>Sophia Chen</h4>
                                        <p>Computer Science Undergraduate</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 3. Entrepreneur -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Scaling a startup requires tools that adapt fast. This service allowed us to consolidate key operations, automate routine tasks, and focus entirely on expanding our core customer base. The ROI was clear within weeks."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/logistics.avif" alt="Marcus Vance">
                                    <div class="info">
                                        <h4>Marcus Vance</h4>
                                        <p>Founder, Apex Logistics</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 4. Software Developer -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"The API documentation and integration flexibility are top-tier. As a backend developer, I appreciate clean architecture and minimal overhead. Everything works as advertised without unexpected edge-case crashes."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/engineer.avif" alt="David Sterling">
                                    <div class="info">
                                        <h4>David Sterling</h4>
                                        <p>Senior Backend Engineer</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 5. AI Engineer -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Deploying machine learning models requires reliable infrastructure and fast data processing. This system simplified our data pipelines, significantly cutting down model deployment times and training overhead."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/researcher.avif" alt="Elena Rostova">
                                    <div class="info">
                                        <h4>Elena Rostova</h4>
                                        <p>Lead AI Researcher</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 6. Auto Mechanic -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Running a busy garage means keeping track of parts, schedules, and quotes. Having a straightforward system keeps us organized on the shop floor so we can get vehicles diagnosed, repaired, and back to customers faster."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/technician.avif" alt="Robert Miller">
                                    <div class="info">
                                        <h4>Robert Miller</h4>
                                        <p>Master Diagnostic Technician</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 7. Teacher -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Engaging students in the modern classroom requires clear communication and creative resources. This framework simplified my lesson planning and made sharing interactive materials with parents and students effortless."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/student.avif" alt="Hannah Davies">
                                    <div class="info">
                                        <h4>Hannah Davies</h4>
                                        <p>High School Mathematics Teacher</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 8. Pastor -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"Managing community outreach, event scheduling, and member care requires coordination. Having an organized, dependable platform has given our leadership team more time to pastor people rather than manage logistics."</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/pastor.avif" alt="Pastor Samuel Lawson">
                                    <div class="info">
                                        <h4>Pastor Samuel Lawson</h4>
                                        <p>Grace Fellowship Church</p>
                                    </div>
                                </div>
                            </div>

                            <!-- 9. Real Estate Agent -->
                            <div class="card">
                                <div>
                                    <div class="stars">★★★★★</div>
                                    <p class="quote">"In real estate, response time is everything. Having immediate access to reliable client records and property details on the go helped me close several key deals smoothly this quarter. Highly recommended!"</p>
                                </div>
                                <div class="profile">
                                    <img src="./pics/specialist.avif" alt="Carlos Mendoza">
                                    <div class="info">
                                        <h4>Carlos Mendoza</h4>
                                        <p>Luxury Property Specialist</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </main>

        <footer id="footer">${footer}</footer>
    `
    $("body").html(benefitPage)

    $("#benefit_form").on('submit', (e)=>{ 
        e.preventDefault()
        // 
        if ($("#benefit_input").val() == "") {
            return
        }

        $.get('./json/users.json', (res)=>{

            $("#benefit_form").fadeOut("fast", ()=>{

                for (let i = 0; i < res.length; i++) {
                    // 
                        if (res[i].id == $("#benefit_input").val().toUpperCase() && res[i].status == "active") {
                            $("#show_batch_beneficiary").html(`
                                <p id="benefit_login">
                                    <b>Success !</b>
                                    <a href="./login/auth.html?origin=true&loc=true&batch=${res[i].accountNumber}">Login to your account</a>
                                </p>    
                            `).show()
                            return
                        }
                        
                        if (res[i].id == $("#benefit_input").val().toUpperCase() && res[i].status != "active") {
                            $("#show_batch_beneficiary").html(`
                                <p id="benefit_processing">
                                    <span>Dear <b>${res[i].firstName}</b>, we are still processing your detail.</span>
                                    <i>Check your eligibility status again in the next 24hours.</i>
                                </p>    
                            `).show()
                            return
                        }
                }

                $("#show_batch_beneficiary").html(`
                    <p id="benefit_err">Sorry, Batch Number not found.</p>    
                `).show()
                    
            })
            
        })
    })
}
