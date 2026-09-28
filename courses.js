const quizBank = {
    internet: {
        title: "Introduction to Internet Protocols & Web Browsers",
        questions: [

            {
                question: "What does an HTTP request allow a browser to do?",
                options: [
                    "Ask a server for a page or resource",
                    "Delete the operating system",
                    "Design colors in CSS",
                    "Run Python scripts"
                ],
                correct: "Ask a server for a page or resource"
            },
            {
                question: "Which browser component is responsible for reading and executing JavaScript?",
                options: [
                    "JavaScript engine",
                    "DNS server",
                    "USB port",
                    "File system"
                ],
                correct: "JavaScript engine"
            },
            {
                question: "What is the main purpose of a web browser rendering engine?",
                options: [
                    "Turn HTML, CSS, and JavaScript into visible web pages",
                    "Install software updates",
                    "Create database tables",
                    "Encrypt all files on the device"
                ],
                correct: "Turn HTML, CSS, and JavaScript into visible web pages"
            },
            {
                question: "Which of the following is a common example of a web browser?",
                options: [
                    "Google Chrome",
                    "Windows Explorer",
                    "Notepad",
                    "MS Word"
                ],
                correct: "Google Chrome"
            },
            {
                question: "Why is HTTP important in web communication?",
                options: [
                    "It defines how clients request and servers send web content",
                    "It stores the entire website in RAM",
                    "It converts images into video",
                    "It removes all coding errors"
                ],
                correct: "It defines how clients request and servers send web content"
            }
        ]
    },
    html5: {
        title: "Writing Semantic HTML5 Documents",
        questions: [
            {
                question: "Which element is most appropriate for the main content of a page?",
                options: [
                    "<main>",
                    "<footer>",
                    "<aside>",
                    "<span>"
                ],
                correct: "<main>"
            },
            {
                question: "What does the <nav> tag represent?",
                options: [
                    "Navigation links",
                    "A highlighted paragraph",
                    "An image caption",
                    "A code example"
                ],
                correct: "Navigation links"
            },
            {
                question: "Which element is best for self-contained content like a blog post?",
                options: [
                    "<article>",
                    "<script>",
                    "<input>",
                    "<br>"
                ],
                correct: "<article>"
            },
            {
                question: "Which tag is used to create a section of navigation links?",
                options: [
                    "<nav>",
                    "<header>",
                    "<button>",
                    "<title>"
                ],
                correct: "<nav>"
            },
            {
                question: "Why is semantic HTML important?",
                options: [
                    "It improves structure and accessibility",
                    "It adds animation to the page",
                    "It changes user passwords",
                    "It stores data permanently"
                ],
                correct: "It improves structure and accessibility"
            },
        ]
    },
    css3: {
        title: "Styling with CSS3 Flexbox and Grid",
        questions: [
            {
                question: "Which CSS feature is best for aligning items in one-dimensional layouts?",
                options: [
                    "Flexbox",
                    "HTML tables",
                    "JavaScript loops",
                    "Inline styles only"
                ],
                correct: "Flexbox"
            },
            {
                question: "What does grid layout help you control?",
                options: [
                    "Two-dimensional page structure",
                    "Only font size",
                    "Only color values",
                    "Only text alignment"
                ],
                correct: "Two-dimensional page structure"
            },
            {
                question: "Which property is commonly used to create spacing between flex items?",
                options: [
                    "gap",
                    "height",
                    "font-weight",
                    "background"
                ],
                correct: "gap"
            },
            {
                question: "Which CSS layout system is best for creating a two-dimensional grid?",
                options: [
                    "CSS Grid",
                    "Inline-block",
                    "HTML table",
                    "Font-weight"
                ],
                correct: "CSS Grid"
            },
            {
                question: "What does the justify-content property control in Flexbox?",
                options: [
                    "Main-axis alignment of flex items",
                    "Text color",
                    "Border radius",
                    "Page background"
                ],
                correct: "Main-axis alignment of flex items"
            },
        ]
    }
};

const Git4 = {
    title: "Introduction to Git and Version Control",
    questions: [
        {
            question: "Git is used for:",
            options: [
                "Database management",
                "Version control",
                "Web design",
                "Video editing"
            ],
            correct: "Version control"
        },
        {
            question: "Which command is used to save changes locally?",
            options: [
                "git add",
                "git clone",
                "git push",
                "git commit"
            ],
            correct: "git commit"
        },
        {
            question: "What is the difference between git add and git commit?",
            options: [
                "git add stages files for commit, while git commit saves those changes",
                "let and var are the same in javascript",
                "git add is for remote repositories while git commit is for local repositories",
                "git add is used to delete files while git commit is used to save files"
            ],
            correct: "git add stages files for commit, while git commit saves those changes"
        },
        {
            question: "Which symbol is used for strict equality?",
            options: [
                "==",
                "-==",
                "!===",
                "==="
            ],
            correct: "==="
        },
        {
            question: "What does git status show?",
            options: [
                "Current branch only",
                "Internet connection status",
                "Modified and staged files",
                "Page background"
            ],
            correct: "Modified and staged files"
        },
    ]
};

const UXUI = {
    title: "UX/UI Design Fundamentals",
    questions: [
        {
            question: "What is the main goal of UX design?",
            options: [
                "To make products easier and more satisfying to use",
                "To change the website colors only",
                "To add more text to a page",
                "To remove all images"
            ],
            correct: "To make products easier and more satisfying to use"
        },
        {
            question: "What does UI design focus on?",
            options: [
                "The visual and interactive elements of a product",
                "The server side of an application",
                "The database schema",
                "Only the JavaScript logic"
            ],
            correct: "The visual and interactive elements of a product"
        },
        {
            question: "Why is visual hierarchy important in design?",
            options: [
                "It guides users to the most important content first",
                "It changes code into CSS",
                "It makes a website load faster",
                "It removes all empty space"
            ],
            correct: "It guides users to the most important content first"
        },
        {
            question: "What is a wireframe?",
            options: [
                "A basic layout blueprint of a page or interface",
                "A database table",
                "A JavaScript function",
                "A server response"
            ],
            correct: "A basic layout blueprint of a page or interface"
        },
        {
            question: "Which design principle helps users understand action options quickly?",
            options: [
                "Consistency",
                "Random placement",
                "Long paragraphs",
                "Invisible buttons"
            ],
            correct: "Consistency"
        }
    ]
};

const PythonQuiz = {
    title: "Python Programming Basics",
    questions: [
        {
            question: "Which keyword is used to define a function in Python?",
            options: [
                "function",
                "def",
                "class",
                "loop"
            ],
            correct: "def"
        },
        {
            question: "What is a list in Python?",
            options: [
                "An ordered collection of items",
                "A single variable name",
                "A type of HTML tag",
                "A CSS selector"
            ],
            correct: "An ordered collection of items"
        },
        {
            question: "Which of the following is a Python conditional statement?",
            options: [
                "if",
                "for",
                "while",
                "return"
            ],
            correct: "if"
        },
        {
            question: "What does a loop do in Python?",
            options: [
                "Repeats a block of code multiple times",
                "Deletes the entire file",
                "Creates a CSS layout",
                "Imports a database"
            ],
            correct: "Repeats a block of code multiple times"
        },
        {
            question: "What is the purpose of a variable in Python?",
            options: [
                "To store data that can be used later",
                "To hide the browser window",
                "To create a user interface",
                "To link CSS files"
            ],
            correct: "To store data that can be used later"
        }
    ]
};

const CSSQuiz = {
    title: "CSS Fundamentals",
    questions: [
        {
            question: "Which CSS property changes the text color of an element?",
            options: [
                "color",
                "font-size",
                "margin",
                "border"
            ],
            correct: "color"
        },
        {
            question: "What does the margin property control?",
            options: [
                "The space outside an element",
                "The text inside the element",
                "The background color",
                "The animation duration"
            ],
            correct: "The space outside an element"
        },
        {
            question: "Which CSS layout system is best for one-dimensional alignment?",
            options: [
                "Flexbox",
                "HTML table",
                "Inline style",
                "JavaScript loop"
            ],
            correct: "Flexbox"
        },
        {
            question: "Which selector targets an element with the id 'nav'?",
            options: [
                "#nav",
                ".nav",
                "nav",
                "*nav"
            ],
            correct: "#nav"
        },
        {
            question: "What is the main goal of responsive design?",
            options: [
                "To make layouts adapt to different screen sizes",
                "To remove all colors from the page",
                "To prevent HTML from loading",
                "To convert CSS into JavaScript"
            ],
            correct: "To make layouts adapt to different screen sizes"
        }
    ]
};

const AlgorithmQuiz = {
    title: "Algorithm and Problem Solving",
    questions: [
        {
            question: "What is an algorithm?",
            options: [
                "A step-by-step procedure for solving a problem",
                "A type of CSS design",
                "A database record",
                "A browser setting"
            ],
            correct: "A step-by-step procedure for solving a problem"
        },
        {
            question: "Which search method checks items one by one in order?",
            options: [
                "Linear search",
                "Binary search",
                "Hash search",
                "Sort search"
            ],
            correct: "Linear search"
        },
        {
            question: "Why are loops useful in algorithms?",
            options: [
                "They repeat a task efficiently until a condition changes",
                "They add color to the page",
                "They replace HTML tags",
                "They create a server connection"
            ],
            correct: "They repeat a task efficiently until a condition changes"
        },
        {
            question: "Why is pseudocode helpful?",
            options: [
                "It helps plan logic before writing real code",
                "It replaces the need for testing",
                "It converts CSS into HTML",
                "It automatically fixes all bugs"
            ],
            correct: "It helps plan logic before writing real code"
        },
        {
            question: "Which condition makes binary search work effectively?",
            options: [
                "The data must be sorted",
                "The data must contain images",
                "The data must be written in CSS",
                "The data must be empty"
            ],
            correct: "The data must be sorted"
        }
    ]
};

quizBank.css = CSSQuiz;
quizBank.CSS = CSSQuiz;
quizBank.javascript5 = CSSQuiz;
quizBank.JavaScript5 = CSSQuiz;
quizBank.javascript = CSSQuiz;
quizBank.algorithm = AlgorithmQuiz;
quizBank.Algorithm = AlgorithmQuiz;
quizBank.uxui = UXUI;
quizBank.python = PythonQuiz;
quizBank.Git4 = Git4;
quizBank.git4 = Git4;

const courseDetails = {
    "html-css": {
        title: "HTML & CSS",
        level: "Beginner",
        duration: "8 Weeks",
        instructor: "Dr. Alex Kim",
        description: "Learn how to create beautiful and responsive websites using HTML and CSS.",
        overview: "This course introduces you to the building blocks of the web. You will create accessible, responsive layouts and style pages with modern CSS techniques.",
        outcomes: [
            "Build semantic HTML page structures",
            "Style layouts with CSS Flexbox and Grid",
            "Design responsive pages for different screen sizes",
            "Create polished web interfaces from scratch"
        ],
        modules: [
            { name: "How the web works", detail: "Understand browsers, servers, HTTP, and page structure." },
            { name: "Semantic HTML5", detail: "Use meaningful tags to organize content accessibly." },
            { name: "CSS layout and responsive design", detail: "Apply spacing, alignment, grid systems, and media queries." },
            { name: "Project work", detail: "Build and refine a portfolio-style landing page." }
        ],
        quizKey: "html5"
    },
    javascript: {
        title: "CSS Fundamentals",
        level: "Beginner → Intermediate",
        duration: "10 Weeks",
        instructor: "Mr. David Lee",
        description: "Learn styling, layouts, responsiveness, and modern design patterns for stylish web pages.",
        overview: "This course focuses on CSS essentials and layout design. You will learn how to build attractive, responsive interfaces and organize content with spacing, color, and structure.",
        outcomes: [
            "Write clean and maintainable CSS rules",
            "Style text, backgrounds, borders, and spacing",
            "Create responsive layouts with Flexbox and Grid",
            "Design attractive interfaces for real projects"
        ],
        modules: [
            { name: "CSS basics", detail: "Learn selectors, color, typography, and spacing." },
            { name: "Layout design", detail: "Create structure with Flexbox and Grid layouts." },
            { name: "Responsive styling", detail: "Adjust interfaces for different screen sizes and devices." },
            { name: "Project practice", detail: "Apply design principles in a complete page mockup." }
        ],
        quizKey: "css"
    },
    css: {
        title: "CSS Fundamentals",
        level: "Beginner → Intermediate",
        duration: "10 Weeks",
        instructor: "Mr. David Lee",
        description: "Learn styling, layouts, responsiveness, and modern design patterns for stylish web pages.",
        overview: "This course focuses on CSS essentials and layout design. You will learn how to build attractive, responsive interfaces and organize content with spacing, color, and structure.",
        outcomes: [
            "Write clean and maintainable CSS rules",
            "Style text, backgrounds, borders, and spacing",
            "Create responsive layouts with Flexbox and Grid",
            "Design attractive interfaces for real projects"
        ],
        modules: [
            { name: "CSS basics", detail: "Learn selectors, color, typography, and spacing." },
            { name: "Layout design", detail: "Create structure with Flexbox and Grid layouts." },
            { name: "Responsive styling", detail: "Adjust interfaces for different screen sizes and devices." },
            { name: "Project practice", detail: "Apply design principles in a complete page mockup." }
        ],
        quizKey: "css"
    },
    algorithm: {
        title: "Algorithm and Problem Solving",
        level: "Intermediate",
        duration: "8 Weeks",
        instructor: "Mr. David Lee",
        description: "Learn how to think step by step, solve coding problems, and improve logic for efficient programs.",
        overview: "This course introduces algorithmic thinking through problem-solving strategies, data flow, loops, and common search patterns. You will build confidence by breaking complex tasks into simple steps.",
        outcomes: [
            "Break down problems into small steps",
            "Use loops and conditionals to solve tasks",
            "Compare different search and logic strategies",
            "Write clear pseudocode before coding"
        ],
        modules: [
            { name: "Problem solving basics", detail: "Learn how to interpret tasks and turn them into step-by-step logic." },
            { name: "Loops and conditions", detail: "Apply repetition and decision-making in practical problems." },
            { name: "Search and sorting ideas", detail: "Understand linear and binary search patterns and efficiency." },
            { name: "Algorithm practice", detail: "Solve engineering-style exercises with a clear strategy." }
        ],
        quizKey: "algorithm"
    },
    uiux: {
        title: "UI/UX Design",
        level: "Beginner",
        duration: "8 Weeks",
        instructor: "Ms. Sarah Chen",
        description: "Learn user interface and user experience design using modern design principles.",
        overview: "This course helps you understand how good interfaces are designed for real users. You will learn design thinking, prototyping, and the visual choices that improve usability and clarity.",
        outcomes: [
            "Create user-centered interfaces",
            "Use wireframes and mockups to communicate design ideas",
            "Apply visual hierarchy and accessibility principles",
            "Improve product usability through UX thinking"
        ],
        modules: [
            { name: "Design basics", detail: "Explore layout, color, typography, and spacing." },
            { name: "UX research", detail: "Understand user needs and design decisions." },
            { name: "Prototyping", detail: "Build interactive mockups and test flows." },
            { name: "Portfolio design", detail: "Present your design work and storytelling." }
        ],
        quizKey: "uxui"
    },
    python: {
        title: "Python Programming",
        level: "Beginner",
        duration: "10 Weeks",
        instructor: "Mr. John Smith",
        description: "Learn Python programming, variables, conditions, loops, functions, and basic projects.",
        overview: "This course introduces Python from the ground up. You will gain confidence writing programs, solving small problems, and building beginner-friendly projects with simple logic.",
        outcomes: [
            "Write Python programs with confidence",
            "Use variables, conditions, loops, and functions",
            "Work with basic data structures",
            "Complete beginner coding projects"
        ],
        modules: [
            { name: "Programming basics", detail: "Understand syntax, variables, and flow control." },
            { name: "Functions and logic", detail: "Break code into reusable parts and solve problems." },
            { name: "Collections and data", detail: "Work with lists, dictionaries, and common operations." },
            { name: "Project practice", detail: "Build a simple application or automation task." }
        ],
        quizKey: "python"
    },

    Git4: {
        title: "Introduction to Git and Version Control",
        level: "Beginner",
        duration: "6 Weeks",
        instructor: "Mr. John Smith",
        description: "Learn how to track changes, manage branches, and collaborate confidently on coding projects.",
        overview: "This practical course introduces Git from the ground up. You will learn how to save project history, work safely with branches, resolve conflicts, and collaborate through remote repositories.",
        outcomes: [
            "Create and manage Git repositories",
            "Save project history with commits",
            "Create branches and merge changes",
            "Resolve common merge conflicts",
            "Collaborate with remote repositories"
        ],
        modules: [
            { name: "Git fundamentals", detail: "Install Git, initialize repositories, and understand the working tree." },
            { name: "Commits and history", detail: "Stage files, write useful commits, and inspect project history." },
            { name: "Branches and merging", detail: "Develop features safely and combine changes with branches." },
            { name: "Remote collaboration", detail: "Push, pull, clone, and work with shared repositories." }
        ],
        quizKey: "Git4"
    }
};

courseDetails.css = courseDetails.javascript;

const quizState = {
    currentKey: null
};

const lessonState = {
    courseKey: null
};

function renderCourseDetails(courseKey) {
    const course = courseDetails[courseKey];
    const detailContent = document.getElementById("courseDetailContent");
    const modal = document.getElementById("courseDetailModal");

    if (!course || !detailContent || !modal) return;

    const outcomes = course.outcomes.map((item) => `<li>${item}</li>`).join("");
    const modules = course.modules.map((module, index) => `
        <button class="curriculum-item" type="button" onclick="openLesson('${courseKey}', ${index});">
            <span class="module-number">${String(index + 1).padStart(2, "0")}</span>
            <span>
                <strong>${module.name}</strong>
                <small>${module.detail}</small>
            </span>
            <span class="module-arrow">&rarr;</span>
        </button>
    `).join("");

    detailContent.innerHTML = `
        <div class="detail-page">
            <div class="detail-hero">
                <div class="detail-hero-copy">
                    <p class="small-title">COURSE DETAILS</p>
                    <h1>${course.title}</h1>
                    <p class="detail-lead">${course.description}</p>
                    <a href="#" class="details-btn detail-action" onclick="event.preventDefault(); closeCourseDetails();">Back to courses</a>
                </div>
                <div class="detail-visual" aria-hidden="true">
                    <span class="code-mark">&lt;/&gt;</span>
                    <span class="code-line line-one"></span>
                    <span class="code-line line-two"></span>
                    <span class="code-line line-three"></span>
                </div>
            </div>

            <div class="detail-layout">
                <div>
                    <div class="detail-section">
                        <h2>Overview</h2>
                        <p>${course.overview}</p>
                    </div>

                    <div class="detail-section" id="curriculum">
                        <h2>Curriculum &amp; Lessons</h2>
                        <div class="curriculum-list">
                            ${modules}
                        </div>
                    </div>
                </div>

                <aside class="course-summary">
                    <h2>Course Summary</h2>
                    <div class="summary-row"><span>Level</span><strong>${course.level}</strong></div>
                    <div class="summary-row"><span>Duration</span><strong>${course.duration}</strong></div>
                    <div class="summary-row"><span>Instructor</span><strong>${course.instructor}</strong></div>
                    <ul>
                        ${outcomes}
                    </ul>
                    <button type="button" class="details-btn register-trigger" onclick="showRegistrationForm();">Register now</button>
                    <div class="registration-panel" id="registrationPanel">
                        <h3>Register for this course</h3>
                        <p>Submit your details and we will contact you to complete registration.</p>
                        <form id="registrationForm">
                            <label for="registrationName">Full name</label>
                            <input id="registrationName" name="name" type="text" required>
                            <label for="registrationEmail">Email account</label>
                            <input id="registrationEmail" name="email" type="email" required>
                            <label for="registrationPhone">Phone number</label>
                            <input id="registrationPhone" name="phone" type="tel" required>
                            <button type="submit" class="details-btn">Submit registration</button>
                        </form>
                        <div class="registration-success" id="registrationSuccess" aria-live="polite">
                            <strong>Registration request received.</strong>
                            <p>Use these details to complete your registration:</p>
                            <span>Phone: (555) 019-2834</span>
                            <span>Account: info@ittraining.edu</span>
                        </div>
                    </div>
                    <button type="button" class="details-btn" onclick="closeCourseDetails();">Close</button>
                </aside>
            </div>
        </div>
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function showRegistrationForm() {
    const registrationPanel = document.getElementById("registrationPanel");
    const registrationName = document.getElementById("registrationName");

    if (!registrationPanel) return;

    registrationPanel.classList.add("active");
    registrationName.focus();
}

function openCourseDetails(courseKey) {
    renderCourseDetails(courseKey);
}

function closeCourseDetails() {
    const modal = document.getElementById("courseDetailModal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
}

function openLesson(courseKey, lessonIndex) {
    const course = courseDetails[courseKey];
    const lesson = course && course.modules[lessonIndex];
    const lessonModal = document.getElementById("lessonModal");
    const lessonTitle = document.getElementById("lessonTitle");
    const lessonTopic = document.getElementById("lessonTopic");

    if (!lesson || !lessonModal || !lessonTitle || !lessonTopic) return;

    lessonTitle.textContent = lesson.name;
    lessonState.courseKey = course.quizKey || courseKey;
    lessonTopic.innerHTML = `
        <p>${lesson.detail}</p>
        <h3>How to learn this lesson</h3>
        <ol>
            <li>Read the explanation and identify the main idea.</li>
            <li>Follow a small example and observe how each step works.</li>
            <li>Practice by creating your own simple example.</li>
            <li>Review your work and write down what you learned.</li>
        </ol>
    `;

    closeCourseDetails();
    lessonModal.classList.add("active");
    lessonModal.setAttribute("aria-hidden", "false");
}

function closeLesson() {
    const lessonModal = document.getElementById("lessonModal");
    if (!lessonModal) return;
    lessonModal.classList.remove("active");
    lessonModal.setAttribute("aria-hidden", "true");
}

function startLessonQuiz() {
    if (!lessonState.courseKey) return;
    closeLesson();
    openQuiz(lessonState.courseKey);
}

function filterCourses(category, event) {
    const courses = document.querySelectorAll(".course-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach((button) => {
        button.classList.toggle("active", button.dataset.category === category);
    });

    courses.forEach((course) => {
        if (category === "all") {
            course.style.display = "block";
        } else if (course.classList.contains(category)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

function renderQuiz(courseKey) {
    const quiz = quizBank[courseKey];
    const quizTitle = document.getElementById("quizTitle");
    const questionsContainer = document.getElementById("questions");
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
    const scoreBox = document.getElementById("score");
    const resultMessage = document.getElementById("resultMessage");

    if (!quiz) return;

    quizState.currentKey = courseKey;
    quizTitle.textContent = quiz.title;
    questionsContainer.innerHTML = "";
    scoreBox.textContent = "";
    resultMessage.textContent = "";
    quizResult.classList.remove("show");
    quizForm.style.display = "block";
    quizForm.reset();

    quiz.questions.forEach((item, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.className = "question";

        const heading = document.createElement("h4");
        heading.textContent = `${index + 1}. ${item.question}`;
        questionBlock.appendChild(heading);

        item.options.forEach((option) => {
            const label = document.createElement("label");
            label.className = "answer";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${index}`;
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionBlock.appendChild(label);
        });

        questionsContainer.appendChild(questionBlock);
    });
}

function openQuiz(courseKey) {
    const quizModal = document.getElementById("quizModal");
    quizModal.classList.add("active");
    renderQuiz(courseKey);
}

function closeQuiz() {
    const quizModal = document.getElementById("quizModal");
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    quizModal.classList.remove("active");
    quizForm.reset();
    quizResult.classList.remove("show");
    quizForm.style.display = "block";
}

function retryQuiz() {
    if (quizState.currentKey) {
        renderQuiz(quizState.currentKey);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
    const scoreBox = document.getElementById("score");
    const resultMessage = document.getElementById("resultMessage");
    const detailButtons = document.querySelectorAll(".details-btn[data-course]");
    const detailModal = document.getElementById("courseDetailModal");
    const lessonModal = document.getElementById("lessonModal");
    const closeDetailButton = document.querySelector(".close-detail");
    const detailContent = document.getElementById("courseDetailContent");

    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openCourseDetails(button.dataset.course);
        });
    });

    if (closeDetailButton) {
        closeDetailButton.addEventListener("click", closeCourseDetails);
    }

    if (detailContent) {
        detailContent.addEventListener("submit", (event) => {
            if (event.target.id !== "registrationForm") return;

            event.preventDefault();
            event.target.classList.add("submitted");
            document.getElementById("registrationSuccess").classList.add("active");
        });
    }

    if (detailModal) {
        detailModal.addEventListener("click", (event) => {
            if (event.target === detailModal) {
                closeCourseDetails();
            }
        });
    }

    if (lessonModal) {
        lessonModal.addEventListener("click", (event) => {
            if (event.target === lessonModal) {
                closeLesson();
            }
        });
    }

    if (quizForm) {
        quizForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const quiz = quizBank[quizState.currentKey];
            if (!quiz) return;

            let correctAnswers = 0;

            quiz.questions.forEach((item, index) => {
                const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
                if (selectedOption && selectedOption.value === item.correct) {
                    correctAnswers += 1;
                }
            });

            const totalQuestions = quiz.questions.length;
            const percentage = Math.round((correctAnswers / totalQuestions) * 100);

            quizForm.style.display = "none";
            quizResult.classList.add("show");
            scoreBox.textContent = `${correctAnswers}/${totalQuestions}`;

            if (percentage === 100) {
                resultMessage.textContent = "Excellent! You got a perfect score!";
            } else if (percentage >= 70) {
                resultMessage.textContent = "Great job! You are doing well.";
            } else if (percentage >= 50) {
                resultMessage.textContent = "Good effort! Review the lesson and try again.";
            } else {
                resultMessage.textContent = "Keep learning! You can do better next time.";
            }
        });
    }
});