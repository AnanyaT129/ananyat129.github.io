import { ProjectCardInputs } from "../components/project/ProjectCard";

export var mobileApp: ProjectCardInputs = {
  src: "/images/mobileAppFinal.png",
  title: "Mobile App",
  year: 2024,
  tech: "Swift, Storyboard",
  purpose: "",
  authors: "",
  description: "",
  subtitle: "",
};

export var machineLearning: ProjectCardInputs = {
  src: "/images/mlFinal.png",
  title: "Machine Learning Final Project",
  year: 2024,
  tech: "Python, Pandas",
  purpose: "",
  authors: "",
  description: "",
  subtitle: "",
};

export var bulletJournal: ProjectCardInputs = {
  src: "/images/oodFinal.png",
  title: "Bullet Journal App",
  year: 2023,
  tech: "Java, JUnit, JavaFX",
  purpose: "Object Oriented Design Final Project",
  authors: "Ananya Tadigadapa, Stephanie Chen, and Allison Ryan",
  description:
    "This bullet journal program allows you to add weekly events and tasks, view them in a mini viewer, see statistics about your week, and even set a password. You can pick a template for a bullet journal to get started, then easily use a menubar to navigate adding tasks and events to your week. You can customize your week by setting limits on tasks and events, and choosing the week start day. Furthermore, you can save your bullet journal to a file, and view a convenient task queue of all tasks left to be complete.",
  subtitle: "Desktop application for an editable bullet journal",
};

export var myowearable: ProjectCardInputs = {
  src: "/images/myowearable3.jpg",
  title: "Myowearable",
  year: 2022,
  tech: "Python, C++, Arduino, MATLAB",
  purpose: "Cornerstone of Engineering Final Project",
  authors:
    "Prof. Bala Maheswaran, Sakib Azgar, Violet Manxhari, Kaitlyn Ramesh, Ananya Tadigadapa and Ted Yee",
  description:
    "Many athletes face recurring injury through unknowingly overstraining their muscles. To help prevent this, a compression sleeve-mounted medical device called the Myowearable was developed, which can be used without professional supervision. The Myowearable monitors the amount of electrical stimulation in the adjacent muscle through three electrodes of a surface electromyography (sEMG) sensor touching the skin. The collected data is sent to an Arduino component providing real-time audio feedback. Real-time visual feedback and data analyses, including injury prediction warnings and graphs, can be viewed in the user interface of the accompanying software on a computer paired via Bluetooth.",
  subtitle: "A surface EMG injury prevention sleeve",
};

export var foodSaver: ProjectCardInputs = {
  src: "/images/ieeearticle.jpg",
  title: "Reduce Food Waste",
  year: 2022,
  tech: "Python, Raspberry Pi, I2C",
  purpose: "",
  authors: "",
  description:
    "An estimated 35% of all food purchased for use at home is wasted and the impacts are widespread. The most significant are environmental effects, as the food sector generates one third of the world’s greenhouse gas emissions. The social and economic consequences are more subtle. Families lose hundreds of dollars a year on thrown out food, and consuming too much raises prices and lowers access. The smart container is built to be set inside the refrigerator and senses the presence of food through a weight sensor placed at the bottom. If the food within the container is not disturbed for 48 h, it will send reminders by beeping when the fridge is opened or messages to the cell phone through a dedicated app. For food that has only been partially consumed during that time, there is a button that resumes the timer from the previous session rather than resetting it, thus providing the cumulative time the food has been stored in the refrigerator. As designed, the smart container consists of two sensors: a load sensor for checking when a box of food has been placed in it and a light sensor to check when the fridge is open. It also has a push button to reset the timer or allow it to continue from the previous reset. A buzzer has been incorporated into the container, which is activated when the time threshold of food storage has passed and the refrigerator is open.",
  subtitle: "Prototype smart container for food storage",
};

export var website: ProjectCardInputs = {
  src: "/images/website.jpg",
  title: "This Website",
  year: 2024,
  tech: "React.js, TypeScript, HTML, CSS",
  purpose: "",
  authors: "",
  description:
    "This website was born from curiosity about how web applications worked and a few attempts to create one. After messing around with a bunch of online tutorials and demos, I realized that a goal of creating my own website from scratch wasn't too far-fetched, my interest was piqued, and I decided to commit to the idea. I started by determining what pages and features I needed, finding a few example websites to decide on layouts to showcase the text, and started building everything by starting from online demo code and modifying it to suit my needs. After many iterations and edits, including improvements to make the features mobile-friendly, I have settled on this for my website. Many of the pages are easily modifiable, so I can continue to add to them as I create more projects or decide I want to showcase different things. Currently it is hosted on GitHub, but I am working on getting a personal domain as well. There are also some aesthetic improvements that I want to make, as well as other pages I am consiering adding, but for now, I am leaving the website as is to focus on learning other programming skills and focusing on different projects.",
  subtitle: "Personal website and portfolio to introduce myself online",
};

export var scrabble: ProjectCardInputs = {
  src: "/images/scrabble.jpg",
  title: "Scrabble",
  year: 2022,
  tech: "Python, TKinter GUI",
  purpose: "Computing Fundamentals Final Project",
  authors: "Ananya Tadigadapa and Ben Yoon",
  description:
    'Scrabble is a board game in which players randomly pick 7 letters from a bag of 100 as their "hand." In turns, they place new words on a 15x15 board by utilizing the existing letters. They gain points depending on which letters they used and which spots on the board their letters covered. Using an object oriented design, the code was split into two main sections: first, several classes that make up the backbone of the game functions were designed and tested. Next, a Graphical User Interface (GUI) was developed to integrate those functions with user inputs. The backend can also run independently in the terminal, if desired. It displays a board with Triple Letter Score and Double Letter Score squares, similar to a traditional scrabble board, automatically updates players’ hands after every turn, displayed at the top of the GUI, and includes a section for a player to enter a word, then click to place it on an interactive board. Skips and forfeits, valid word checks to only allow legal plays, and a real-time scoring system was also added. Overall, a game of Scrabble played as closely as possible to the traditional board game, with enhanced features wherever possible, was developed.',
  subtitle: "A 2 person interactive game of Scrabble",
};
