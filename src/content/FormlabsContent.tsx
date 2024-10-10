import { FormlabsAttributeCardProps } from "../components/formlabs/FormlabsAttributeCard";
import { FormlabsAttributeTabProps } from "../components/formlabs/FormlabsAttributeTab";
import { ProjectCardInputs } from "../components/project/ProjectCard";

export var tesla: ProjectCardInputs = {
  src: "/images/powerhub.avif",
  title: "Tesla Internship",
  year: 2024,
  tech: ["Scala", "TypeScript", "React.js", "Protobuf", "GraphQL"],
  subtitle: "Distributed Systems Energy Intern",
  purpose: "",
  authors: "",
  description: `I mainly worked on backend cloud software that supports all the energy products that Tesla creates (wall connectors, superchargers, etc.). 

One part of the experience that I liked was the opportunity to take ownership over a feature and see it all the way through.  I went from creating design options and presenting them to the organization all the way to getting user feedback on the front-end. I enjoyed being able to gain a lot of in-depth knowledge about what I was working on and how it integrated with the rest of the team/org's code. It was also nice to think about the end user's perspective even when developing APIs. Since I added the front-end code for the API that I designed, I not only got more professional Typescript/GraphQL/React experience, but also could make changes with direct feedback from the application clients on their usages and desires.

Much of the work was cross-team, where firmware, cloud, product, and service engineering were developing in parallel to release a feature, so I enjoyed the collaboration aspect, and seeing how all the puzzle pieces come together to make something that the customer uses. I gained a lot of appreciation for the hundreds of small details in a large product, knowing how many teams and engineers worked on it.

I also learned so much about good code design and problem solving at scale through presenting at reviews.
  `,
  skills: [],
};

export var woodmac: ProjectCardInputs = {
  src: "/images/onelens.webp",
  title: "Wood Mackenzie Co-op",
  year: 2023,
  tech: ["TypeScript", "GraphQL", "SQL", "AWS Lambdas"],
  purpose: "",
  authors: "",
  description: `At Wood Mackenzie, I created and populated a new product on the OneLens data dashboard containing widgets displaying energy data. I connected new databases to our pipeline, working with AWS Lambdas for table updates and GraphQL for delivering data to the front-end. I aggregated and manipulated the data into required formats for the necessary front-end widgets, which I displayed on the dashboard using TypeScript. I also completed detailed code review and quality assurance of features on the platform created by my teammates, and frequently communicated and provided input to Product Owners on progress, challenges, and suggestions for optimizing deliverables due to the tight deadlines on this project. I delivered the core features in a matter of weeks, with 1-day turnarounds on widget guideline updates and urgent requests. I created 10+ new widgets along with the platform pages to host them, receiving positive feedback from company clients on their utilization of the data.
  `,
  subtitle: "Software Development Co-op",
  skills: [],
};

export var machineLearning: ProjectCardInputs = {
  src: "/images/mlFinal.png",
  title: "Bayesian Neural Networks",
  year: 2024,
  tech: ["Python", "Pandas", "PyTorch"],
  purpose: "Machine Learning Final Project",
  authors: "Group project; detailing my contributions",
  description: `By introducing Bayesian principles into neural network modeling, this project aimed to enhance model performance, improve uncertainty estimation, and foster interpretability.
  After training and testing models, my group's main findings suggest that Bayesian neural networks hold promise in mitigating overfitting and providing more reliable predictions with quantifiable uncertainty. Our results indicate that these networks can output reliable confidence values that can be useful additional information for classification or regression tasks.
  My contributions to this project were first, to write a program for a BNN, and second to train and test it on sample data. I utilized an existing machine learning dataset, which allowed me to skip much of the data processing step and focus on the comparison between a BNN and regular Neural Network.
  Utilizing the Pyro module (built over PyTorch), I first created the architecture for a fully connected neural network, and then trained and tested it on the MNIST Handwritten Numbers set.
  Finally, I created graphs to compare the performance of this to a standard Neural Network trained using the same parameters and data split.`,
  subtitle: "Improving overconfidence and overfitting",
  skills: [],
};

export var bulletJournal: ProjectCardInputs = {
  src: "/images/oodFinal.png",
  title: "Bullet Journal App",
  year: 2023,
  tech: ["Java", "JUnit", "JavaFX"],
  purpose: "Object Oriented Design Final Project",
  authors: "Group project; detailing my contributions",
  description:
    "For my Object Oriented Design class, I created a model-view-controller bullet journal application in Java. I first created wireframes of the home page, with outlines of each of the main features that we wanted to have. When implementing the journal, I took care to separate the functions of the UI and backend, creating individual classes for each object and dyanmically placing them on the page. I connected the commands to keyboard shortcuts, created a splash screen, the ability to save and re-load journals, an alerting system for crossing a task-threshold, and the ability to sort tasks. I tested all the code I wrote to 95% coverage, thinking through edge cases and handling all thrown errors gracefully.",
  subtitle: "Desktop application for an editable bullet journal",
  skills: [],
};

export var projectsForFormlabs: ProjectCardInputs[] = [
  tesla,
  machineLearning,
  woodmac,
  bulletJournal,
];

export var firstPrinciplesAtTesla: FormlabsAttributeCardProps = {
  alt: "Tesla",
  src: "/images/teslaLogo.webp",
  heading: "Comprehensive code design, review, and presentation",
  description:
    "Interning at Tesla, I practiced designing from first principles to define and implement a new API. I considered factors such as efficiency, complexity, engineering hours, robustness, scalability, and security at every layer of the stack. I presented and justified my decisions to my team and wider org, implementing their feedback and understanding the implication of these factors on the microservice performance.",
};

export var algorithmsAtTesla: FormlabsAttributeCardProps = {
  alt: "Tesla",
  src: "/images/teslaLogo.webp",
  heading:
    "Complex algorithms to aggregate data and sort it according to the client",
  description:
    "Interning at Tesla, I created complex algorithms to aggregate and sort data of multiple file types, formats, and from different sources. The nature of the aggregation differed depending on the layer of the stack I was working in. I balanced complexity with value, and developed unit and integration testing suites to ensure accurate and fast performance. I also extended the base algorithm to handle new sources and file types in the future.",
};

export var firstPrinciplesBujo: FormlabsAttributeCardProps = {
  alt: "Bullet journal",
  src: "/images/oodFinal.png",
  heading: "Object oriented, model-view-controller application",
  description:
    "Creating a bullet journal application in Java, I ensured exceptional code design by modifying base design patterns to fit the needs of the application. I designed classes to each represent one item, and following the model-view-controller pattern, ensured separation between the backend and UI.",
};

export var machineLearningCode: FormlabsAttributeCardProps = {
  src: "/images/mlFinal.png",
  alt: "Machine Learning",
  heading: "Implementing and analyzing Bayesian neural networks",
  description:
    "For my masters level machine learning class final project, I implemented various Bayesian Neural Networks and analyzed their performance regarding two metrics: overconfidence and overfitting. I understood the mathematics behind the neural net, and the linear transformations happening at each layer. I also explained how this was different from a traditional Neural Net, and why the Bayesian aspect had the impact on our results that it did.",
};

export var woodmacLeadership: FormlabsAttributeCardProps = {
  src: "/images/woodmacLogo.jpg",
  alt: "Wood Mackenzie",
  heading:
    "Eliminating Sprint delays and improving communication cross-timezone",
  description:
    "During my co-op at Wood Mackenzie, I took initiative to streamline communication between product owners and all the software teams, in addition to my software responsibilities. I designed and implemented templates that worked both for my team and all others on the product, which eliminated miscommunication and information delays from the POs to developers, exacerbated by the 6 hour time difference. I presented and recieved feedback to directors and the entire product organization.",
};

export var tbpNusoLeadership: FormlabsAttributeCardProps = {
  src: "/images/tbp.jpg",
  alt: "Tau Beta Pi",
  heading:
    "President of the Symphony Orchestra and Tau Beta Pi Engineering honor society (100+ members each)",
  description:
    "For the past 2 years, I served on the executive board of the Northeastern Symphony Orchestra and the Tau Beta Pi Engineering honor society. Currently, I am the president of both. Both organizations have over 100 members, and both large and small scale events which I manage. As president, I've learned to stay organized and tune into what members would like to participate in. I've also gained experience with good communication and handling difficult situations.",
};

export var fluteCreative: FormlabsAttributeCardProps = {
  src: "/images/flute.jpg",
  alt: "Flute",
  heading:
    "Musical inclinations: Flute, Piano, Guitar, Songwriting, campus Ensembles, & competition winner",
  description:
    "Since 2006, I've practiced (at least) one instrument (almost) every day. I hold creating and working on music close to my heart, and the mindset of focusing on self-improvement has given me many soft skills I apply to software engineering. These include balancing detail-oriented with seeing the big picture, understanding how to give and apply feedback, and the persistance of going back to practice something every day. In addition to orchestra, I'm in a couple chamber groups, an Indian music group, and play in various events around Boston.",
};

export var expMakerspace: FormlabsAttributeCardProps = {
  src: "/images/vest.jpg",
  alt: "Skirt on mannequin",
  heading: "EXP Makerspace creations",
  description:
    "Since the EXP makerspace opened, I've spent as much time there as I could, working on creative projects and attempting to make all the projects that I dream of. I'm most proud of the sewing skills I've made there, including creating garments from scratch that I wear every day. This semesters' goals are to learn to use the embroidery machine and dust off my CAD skills to use the 3D printers to help me make a board game. The image is of a fully lined, linen suit vest.",
};

export var formlabsAttributes: FormlabsAttributeTabProps[] = [
  {
    name: "First Principles Design",
    items: [firstPrinciplesAtTesla, firstPrinciplesBujo],
  },
  {
    name: "Algorithms & Complex Code",
    items: [algorithmsAtTesla, machineLearningCode],
  },
  {
    name: "Leadership",
    items: [woodmacLeadership, tbpNusoLeadership],
  },
  {
    name: "Creativity & Making",
    items: [fluteCreative, expMakerspace],
  },
];
