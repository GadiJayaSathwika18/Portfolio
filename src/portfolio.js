/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jaya Sathwika Gadi",
  title: "Hi all, I'm Jaya!!",
  subTitle: emoji(
    "A passionate Data Analyst | Data Scientist | Software Engineer with experience in building intelligent solutions through data, analytics, and automation."
  ),
  location: " New Jersey, United States",
  resumeLink:
    "https://drive.google.com/file/d/1l1W_SHlnti1x_v092RzGCMuCGP3UO6Zi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GadiJayaSathwika18",
  linkedin: "https://www.linkedin.com/in/jaya-sathwika-gadi/",
  gmail: "jg899@njit.edu",
  //gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Transforming Data into Impactful ML Solutions with Code, Models & Analysis",
  skills: [
    "⚡ Analyzing complex datasets using SQL, Python, and R to extract actionable insights and support decision-making",
    "⚡ Building interactive dashboards and reports with Power BI, Tableau, and Google Data Studio for executive-level analytics",
    "⚡ Engineering scalable data pipelines and ETL workflows using Airflow, Informatica, and cloud-native tools",
    "⚡ Developing full-stack applications and APIs using JavaScript, React, Node.js, and integrating with databases like MongoDB and PostgreSQL",
    "⚡ Designing and deploying machine learning models using scikit-learn, TensorFlow, and PyTorch for classification, forecasting, and NLP tasks",
    "⚡ Enhancing user experiences through UI/UX prototyping using Figma, HTML/CSS, and Bootstrap",
    "⚡ Managing cloud infrastructure and MLOps pipelines on AWS and GCP with Docker, CI/CD, and serverless tools like Lambda"
  ],

  softwareSkills: [
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "R", fontAwesomeClassname: "fas fa-chart-line" }, // Substitute since R doesn't have an official icon
  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" }, // No FA logo; using generic chart icon
  { skillName: "Tableau", fontAwesomeClassname: "fas fa-project-diagram" }, // Substitute icon
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Google Cloud", fontAwesomeClassname: "fas fa-cloud" },
  { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" }, // Substitute icon
  { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "Airflow", fontAwesomeClassname: "fas fa-wind" }, // Substitute
  { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" }, // Substitute
  { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-robot" }, // Substitute
  { skillName: "Power Apps", fontAwesomeClassname: "fas fa-cogs" } // Substitute
],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "New Jersey Institute of Technology",
      logo: require("./assets/images/njitLogo.png"), // You can replace this with the correct logo
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024",
      grade: "GPA: 3.75/4.0",
      descBullets: [
        "Relevant Coursework: Data Structures & Algorithms, Big Data, Data Analytics, Database System Design, Marketing Analytics, Healthcare Analytics, Project Management",
        "Graduate Teaching Assistant for Capstone, Software Engineering Research, and Project Management courses",
        "Directed logistics for 350+ students and coordinated industry-aligned data science projects"
      ]
    },
    {
      schoolName: "Indian Institute of Information Technology Design & Manufacturing, Kancheepuram",
      logo: require("./assets/images/iiitdmLogo.png"), // Replace with your IIITDM logo path
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2018 - May 2022",
      grade: "GPA: 3.5/4.0",
      descBullets: [
        "Senior year research internship at IIT Kanpur focused on cardiovascular disease prediction using ensemble learning (published at ACM-CODS COMAD)",
        "Final year project: Cuisine-based ingredient recommendation system using machine learning & collaborative filtering",
        "Built a strong foundation in software development, algorithms, and machine learning applications"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & Statistical Modeling",
      progressPercentage: "85%"
    },
    {
      Stack: "Full-Stack Development & Cloud",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Data Analyst",
      company: "Capgemini Technology Services India Ltd",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "Jan 2022 – Dec 2022",
      desc: "Executed data-driven solutions to optimize digital transaction workflows and support enterprise analytics initiatives.",
      descBullets: [
        "Engineered predictive models and regression analyses to enhance payment systems, achieving a 27% reduction in average transaction time",
        "Designed and deployed dynamic Power BI dashboards, improving real-time insights and boosting operational efficiency by 22%"
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "New Jersey Institute of Technology",
      companylogo: require("./assets/images/njitLogo.png"),
      date: "Jan 2024 – Dec 2024",
      desc: "Facilitated academic instruction and research execution across software engineering, capstone, and project management courses.",
      descBullets: [
        "Oversaw project management and empirical research for 350+ students, focusing on data science, predictive analytics, and LLM-based systems",
        "Coordinated with industry partners to align coursework with real-world applications, enhancing student engagement and outcomes"
      ]
    },
    {
      role: "Research Intern",
      company: "Indian Institute of Technology, Kanpur",
      companylogo: require("./assets/images/iitkLogo.png"),
      date: "May 2021 – Oct 2021",
      desc: "Conducted applied machine learning research focused on healthcare and intelligent recommendation systems.",
      descBullets: [
        "Developed a cardiovascular disease prediction model using ensemble learning, reaching 91.23% accuracy and presented findings at ACM-CODS COMAD",
        "Built a cuisine-based ingredient recommendation engine leveraging association rule mining, collaborative filtering, and multi-label classification"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "FEATURED PROJECTS THAT HIGHLIGHT MY DATA, ML, AND SOFTWARE ENGINEERING SKILLS",
  projects: [
    {
      image: require("./assets/images/mediassistantLogo.png"), // Replace with actual image
      projectName: "Medi Assistant",
      projectDesc:
        "Prototype of a healthcare app that reminds users to take pills, stores prescriptions, checks local medicine availability, and recommends personalized diets.",
      footerLink: [
        {
          name: "View Demo",
          url: "https://www.figma.com/proto/rMUx4rnIBMSqUuvevTLpmo/MEDI-APP?node-id=454-238&t=1gM0SD3gXxY2yoSt-1" // Replace if different
        }
      ]
    },
    {
      image: require("./assets/images/documentEnhancer.png"), // Replace with actual image
      projectName: "Document Image Enhancer (CGAN + ViT)",
      projectDesc:
        "A deep learning pipeline to restore degraded scanned documents using Conditional GANs, Vision Transformers, and CNNs to improve OCR accuracy.",
      footerLink: [
        {
          name: "View Documentation",
          url: "https://drive.google.com/file/d/1ybVUcCrETxTYzFSz3Ni1j3agZrSu_vXq/view?usp=sharing" // Example link
        }
      ]
    },
    {
      image: require("./assets/images/cardiovascularPrediction.png"), // Replace with actual image
      projectName: "Cardiovascular Disease Prediction",
      projectDesc:
        "Ensemble ML model to predict heart disease risk, achieving 91.23% accuracy. Published at ACM-CODS COMAD and integrated into a clinical dataset workflow.",
      footerLink: [
        {
          name: "Publication",
          url: "https://dl.acm.org/doi/10.1145/3493700.3493747" // Replace with actual paper or GitHub
        }
      ]
    },
    {
      image: require("./assets/images/housepricePrediction.png"), // Replace with actual image
      projectName: "House Price Prediction",
      projectDesc:
        "Built regression models using scikit-learn and XGBoost to predict housing prices based on real estate attributes, improving MAPE by 18%.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/GadiJayaSathwika18/Housing-Prices-Prediction" // Example
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      subtitle:
        "Validated Expertise in Deploying and Managing Generative AI Solutions on OCI",
      image: require("./assets/images/oracle.png"),
      imageAlt: "Oracle Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5148208&trackId=OCI2024GAIOCP&key=cb99fba8a40811dedef22034c35fc82410f28c94g"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Certified Knowledge in AWS Cloud Architecture, Security, and Pricing Models",
      image: require("./assets/images/awscloudp.png"),
      imageAlt: "Cloud Practitioner Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/2e6208d7-28a0-4a45-8535-637af1ccc977/linked_in_profile"
        }
      ]
    },

    {
      title: "AWS Cloud Developing",
      subtitle: "Validated Skills in AWS SDKs, Serverless Architectures, and Cloud-Native Development",
      image: require("./assets/images/awscloudd.png"),
      imageAlt: "Cloud Developing Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ffdf595b-2a08-44b0-9071-2d841cbe8e18/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(551)-359-1846",
  email_address: "gjsathwika2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
