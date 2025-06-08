import { ProjectCardInputs } from "../components/project/ProjectCard";

export var mobileApp: ProjectCardInputs = {
  src: "/images/mobileApp.jpg",
  title: "BeNote",
  year: 2024,
  tech: ["Swift", "Storyboard", "Google Firebase"],
  purpose: "Mobile App Development Final Project",
  authors: "Jiana Ang, Darren Chen, Tyler Chen, Ananya Tadigadapa",
  description:
    "Designed and programmed a mobile application in Swift which was a daily prompting tool that allows you to jot down notes, track your location in real time, and view your user profile. You can also befriend, discover, and react to other users' daily notes and profiles, creating a seamlessly connected and reflective journaling experience.",
  subtitle: "Daily Journaling Mobile Application",
  skills: [],
  sourceCode: "https://github.com/TylerChen1200/BeNote"
};

export var machineLearning: ProjectCardInputs = {
  src: "/images/mlFinal.png",
  title: "Bayesian Neural Networks",
  year: 2024,
  tech: ["Python", "Pandas", "PyTorch"],
  purpose: "Machine Learning Final Project",
  authors: "Ankit Amonkar, Samuel Haggans, Chenfeng Shan, Ananya Tadigadapa",
  description:
    "The rapid advancement of machine learning has been accompanied by the persistent challenge of overconfidence and overfitting in traditional neural networks. These issues can lead to inaccurate predictions and undermine the reliability of machine learning models, particularly in critical applications such as medical diagnosis and autonomous driving. Motivated by the need for more robust and reliable models, our project aims to explore the potential of Bayesian neural networks (BNNs) to address these challenges. By introducing Bayesian principles into neural network modeling, we seek to enhance model performance, improve uncertainty estimation, and foster interpretability. The training process of the neural network is to find the optimized parameters that could maximize the likelihood of prediction. However, with fixed parameters, we lose the confidence interval of the prediction. This could lead to unexpected problems, such as when the category of an object is not in the training set, the neural network may still choose the largest logits of the training labels as the output. However, we might like the network to report that it is unable to classify that sample to avoid misclassification. For reinforcement learning cases, even though the neural network would output the distribution of the actions, the prediction could still be biased under fixed parameters. We wanted to address some of the aforementioned challenges with traditional neural networks, which is how we ultimately decided on exploration of BNNs as the topic of this project. This was for two reasons: firstly, it expanded on core concepts from two main units of the class and we felt a solid understanding of the core concepts, and secondly, prior research indicated that this was a viable solution. After training and testing models, our main findings suggest that Bayesian neural networks hold promise in mitigating overfitting and providing more reliable predictions with quantifiable uncertainty. Our results indicate that these networks can output reliable confidence values that can be useful additional information for classification or regression tasks.",
  subtitle: "Improving overconfidence and overfitting",
  skills: [
    {
      skill: "Python",
      usage:
        "Implemented a Bayesian Neural Network in Python using Pandas and PyTorch libraries. Utilized various publically available datasets to compare metrics of overfitting and overconfidence in experiments.",
    },
  ],
};

export var bulletJournal: ProjectCardInputs = {
  src: "/images/oodFinal.png",
  title: "Bullet Journal App",
  year: 2023,
  tech: ["Java", "JUnit", "JavaFX"],
  purpose: "Object Oriented Design Final Project",
  authors: "Ananya Tadigadapa, Stephanie Chen, and Allison Ryan",
  description:
    "This bullet journal program allows you to add weekly events and tasks, view them in a mini viewer, see statistics about your week, and even set a password. You can pick a template for a bullet journal to get started, then easily use a menubar to navigate adding tasks and events to your week. You can customize your week by setting limits on tasks and events, and choosing the week start day. Furthermore, you can save your bullet journal to a file, and view a convenient task queue of all tasks left to be complete.",
  subtitle: "Desktop application for an editable bullet journal",
  skills: [
    {
      skill: "Java",
      usage:
        "Designed and programmed a bullet journal application using the Model-View-Controller design pattern. Followed principles of good software design and collaboration. Implemented UI using JavaFx and thoroughly tested to 95% branch coverage using JUnit.",
    },
  ],
};

export var myowearable: ProjectCardInputs = {
  src: "/images/myowearable3.jpg",
  title: "Myowearable",
  year: 2022,
  tech: ["Python", "C++", "Arduino", "MATLAB"],
  purpose: "Cornerstone of Engineering Final Project",
  authors:
    "Prof. Bala Maheswaran, Sakib Azgar, Violet Manxhari, Kaitlyn Ramesh, Ananya Tadigadapa and Ted Yee",
  description:
    "Many athletes face recurring injury through unknowingly overstraining their muscles. To help prevent this, a compression sleeve-mounted medical device called the Myowearable was developed, which can be used without professional supervision. The Myowearable monitors the amount of electrical stimulation in the adjacent muscle through three electrodes of a surface electromyography (sEMG) sensor touching the skin. The collected data is sent to an Arduino component providing real-time audio feedback. Real-time visual feedback and data analyses, including injury prediction warnings and graphs, can be viewed in the user interface of the accompanying software on a computer paired via Bluetooth.",
  subtitle: "A surface EMG injury prevention sleeve",
  skills: [],
  publishedIn: "American Society of Engineering Education National Conference 2022"
};

export var foodSaver: ProjectCardInputs = {
  src: "/images/ieeearticle.jpg",
  title: "Reduce Food Waste",
  year: 2022,
  tech: ["Python", "Raspberry Pi", "I2C"],
  purpose: "",
  authors: "",
  description:
    "An estimated 35% of all food purchased for use at home is wasted and the impacts are widespread. The most significant are environmental effects, as the food sector generates one third of the world’s greenhouse gas emissions. The social and economic consequences are more subtle. Families lose hundreds of dollars a year on thrown out food, and consuming too much raises prices and lowers access. The smart container is built to be set inside the refrigerator and senses the presence of food through a weight sensor placed at the bottom. If the food within the container is not disturbed for 48 h, it will send reminders by beeping when the fridge is opened or messages to the cell phone through a dedicated app. For food that has only been partially consumed during that time, there is a button that resumes the timer from the previous session rather than resetting it, thus providing the cumulative time the food has been stored in the refrigerator. As designed, the smart container consists of two sensors: a load sensor for checking when a box of food has been placed in it and a light sensor to check when the fridge is open. It also has a push button to reset the timer or allow it to continue from the previous reset. A buzzer has been incorporated into the container, which is activated when the time threshold of food storage has passed and the refrigerator is open.",
  subtitle: "Prototype smart container for food storage",
  skills: [],
  publishedIn: "IEEE Potentials, May 2022 Issue"
};

export var website: ProjectCardInputs = {
  src: "/images/website.jpg",
  title: "This Website",
  year: 2024,
  tech: ["React.js", "TypeScript", "HTML", "CSS"],
  purpose: "",
  authors: "",
  description:
    "This website was born from curiosity about how web applications worked and a few attempts to create one. After messing around with a bunch of online tutorials and demos, I realized that a goal of creating my own website from scratch wasn't too far-fetched, my interest was piqued, and I decided to commit to the idea. I started by determining what pages and features I needed, finding a few example websites to decide on layouts to showcase the text, and started building everything by starting from online demo code and modifying it to suit my needs. After many iterations and edits, including improvements to make the features mobile-friendly, I have settled on this for my website. Many of the pages are easily modifiable, so I can continue to add to them as I create more projects or decide I want to showcase different things. Currently it is hosted on GitHub, but I am working on getting a personal domain as well. There are also some aesthetic improvements that I want to make, as well as other pages I am consiering adding, but for now, I am leaving the website as is to focus on learning other programming skills and focusing on different projects.",
  subtitle: "Personal website and portfolio to introduce myself online",
  skills: [
    {
      skill: "TypeScript",
      usage:
        "Created a portfolio to showcase my work experiences and skills in an easy-to-understand, aesthetically pleasing way. Utilized TypeScript and React, building on previous work in HTML and CSS",
    },
  ],
};

export var scrabble: ProjectCardInputs = {
  src: "/images/scrabble.jpg",
  title: "Scrabble",
  year: 2022,
  tech: ["Python", "TKinter GUI"],
  purpose: "Computing Fundamentals Final Project",
  authors: "Ananya Tadigadapa and Ben Yoon",
  description:
    'Scrabble is a board game in which players randomly pick 7 letters from a bag of 100 as their "hand." In turns, they place new words on a 15x15 board by utilizing the existing letters. They gain points depending on which letters they used and which spots on the board their letters covered. Using an object oriented design, the code was split into two main sections: first, several classes that make up the backbone of the game functions were designed and tested. Next, a Graphical User Interface (GUI) was developed to integrate those functions with user inputs. The backend can also run independently in the terminal, if desired. It displays a board with Triple Letter Score and Double Letter Score squares, similar to a traditional scrabble board, automatically updates players’ hands after every turn, displayed at the top of the GUI, and includes a section for a player to enter a word, then click to place it on an interactive board. Skips and forfeits, valid word checks to only allow legal plays, and a real-time scoring system was also added. Overall, a game of Scrabble played as closely as possible to the traditional board game, with enhanced features wherever possible, was developed.',
  subtitle: "A 2 person interactive game of Scrabble",
  skills: [],
};

export var capstone: ProjectCardInputs = {
  src: "/images/capstone.png",
  title: "AMP'D - Capstone Project",
  year: 2025,
  tech: ["Python", "PyQt", "Google Firebase", "Raspberry Pi", "React.js"],
  purpose: "Northeastern University ECE Capstone Final Project",
  authors: "Justin Bahr, Carson Dang, Phi Hoang, Hari Narayanam, Alexander Pervizi, Ananya Tadigadapa, Jonathan Qi",
  description: "Public health is at risk from increased microplastic content in drinking water, which so far can only be reliably measured through expensive professional laboratory testing. The Automated MicroPlastic Detector (AMP’D) team has developed a system for rapid detection of microplastics in water. The system provides both a visual and quantitative analysis, allowing users to assess the quality of their water at home, and compare microplastic concentrations in household, tap, and bottled water against safety standards. AMP’D proves that it is possible to create a low-cost, intuitive, and accessible system to test for microplastics.",
  subtitle: "Automated filtering & detection of microplastics in water",
  skills: [
    {
      skill: "Python",
      usage: "Designed and implemented an MVC style program to run on a Raspberry Pi and allow a user to perform experiments to determine plastic content. GUI was made using PyQt."
    }
  ],
  sourceCode: "https://ampd-website.onrender.com/"
};

export var teslaProject: ProjectCardInputs = {
  src: "/images/teslaLogo.webp",
  title: "Tesla",
  year: 2024,
  tech: ["Scala", "React.js", "TypeScript", "GraphQL"],
  purpose: "",
  authors: "",
  description: "",
  subtitle: "Energy Software Internship",
  skills: [
    {
      skill: "TypeScript",
      usage:
        "Implemented a front end for a custom API to match expected return type of exsiting React components. Met client requirements while efficiently modifying and paginating large lists of data",
    },
    {
      skill: "Scala",
      usage:
        "Designed and implemented APIs to solve complex problems and data stories. Considered robustness, scalability, security at each layer of the stack, and longevity as general considerations. Ensured efficiency through reducing query response time for large database results.",
    },
  ],
};

export var woodmacProject: ProjectCardInputs = {
  src: "/images/woodmacLogo.jpg",
  title: "Wood Mackenzie",
  year: 2024,
  tech: ["TypeScript", "GraphQL", "SQL"],
  purpose: "",
  authors: "",
  description: "",
  subtitle: "Software Development Co-op",
  skills: [
    {
      skill: "TypeScript",
      usage:
        "Created custom React widgets through Typescript configurations, meeting short deadlines and complex client requests.",
    },
  ],
};
