// 1. تحديث امتداد الاستيرادات ليتطابق مع اسم الملفات الحقيقي
import spamImg from "/spam.webp?url";
import agnaImg from "/agna.png?url";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  image: string;
}

export const profile: Profile = {
  name: "Hatem Hossam Ghazy",
  title: "Machine Learning Engineer",
  tagline:
    "I build end-to-end machine learning and deep learning pipelines in Python that transform Raw Data into Predictive Power & Autonomous Solutions.",
  location: "Kafr El-Sheikh, Fowa, Egypt",
  phone: "01018170410",
  email: "hatm51477@gmail.com",
  whatsapp: "01018170410",
  github: "https://github.com/hatemhossamghazy",
  linkedin: "https://www.linkedin.com/in/hatem-hossam-ghazy-06b112345/",
  image: "/profile.jpeg",
};

export const about = {
  summary:
    "Computer Engineering student (GPA 3.5/4.0) with hands-on experience building end-to-end machine learning and deep learning pipelines in Python.",
  points: [
    {
      title: "Data Analysis",
      body: "Processing and analyzing complex datasets to extract actionable insights.",
    },
    {
      title: "ML Pipeline Development",
      body: "Deployed and evaluated 10+ machine learning models — Linear and Logistic Regression, Decision Trees, K-Means Clustering — across a range of predictive problems.",
    },
    {
      title: "Problem Solving",
      body: "Strategic problem-solver able to bridge engineering concepts and practical software solutions.",
    },
  ],
  focus:
    "Focused on supervised, unsupervised and deep learning techniques applied to real-world predictive and NLP problems, with strengths in data preprocessing, model evaluation and hyperparameter tuning.",
};

export const skills: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "C++", "SQL"] },
  {
    category: "Machine Learning & Data Science",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Ensemble Learning",
      "EDA",
      "Feature Engineering",
    ],
  },
  {
    category: "Deep Learning & Computer Vision",
    items: ["Neural Networks", "CNN (DenseNet)", "RNN", "LSTM", "GRU"],
  },
  {
    category: "Natural Language Processing",
    items: [
      "spaCy",
      "NLTK",
      "Regular Expressions",
      "Advanced Text Processing",
      "Word2Vec",
      "FastText",
    ],
  },
  {
    category: "Data Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "Redis", "Data Modeling", "Schema Design", "CRUD Operations"],
  },
];

export type Project = {
  name: string;
  kicker: string;
  summary: string;
  details: string[];
  tech: string[];
  image?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Cardiovascular Disease Prediction",
    kicker: "Ensemble Learning & ML Pipelines",
    summary:
      "Ensemble pipeline predicting cardiovascular disease risk from health data.",
    image: "/cardio.webp",
    url: "https://github.com/hatemhossamghazy/Cardiovascular-Disease-Project",
    details: [
      "Performed exploratory data analysis (EDA) and data preprocessing on a cardiovascular health dataset to prepare it for modeling.",
      "Built an ensemble learning pipeline to predict disease risk, evaluating model performance using metrics such as precision, recall, and F1-score.",
    ],
    tech: ["Python", "Ensemble Learning", "Scikit-Learn", "Pandas", "EDA"],
  },
  {
    name: "Image Caption Generation",
    kicker: "DenseNet, LSTM",
    summary:
      "End-to-end sequence-generation pipeline that describes images in natural language.",
    image: "/icg.webp",
    details: [
      "Implemented DenseNet as a convolutional feature extractor to capture visual features from input images.",
      "Combined the extracted features with an LSTM network to generate descriptive natural-language captions in an end-to-end sequence-generation pipeline.",
    ],
    tech: ["Python", "DenseNet", "CNN", "LSTM", "Deep Learning"],
  },
  {
    name: "Spam Detection",
    kicker: "NLP, NLTK, spaCy",
    summary:
      "Text-classification model separating spam from legitimate messages.",
    image: spamImg,
    details: [
      "Cleaned and preprocessed raw text data using regular expressions and standard NLP techniques to prepare it for classification.",
      "Applied NLTK and spaCy for tokenization and text processing, then trained a classification model to distinguish spam from legitimate messages.",
    ],
    tech: ["Python", "NLTK", "spaCy", "Regular Expressions", "NLP"],
  },
  {
    name: "Agna & Shakosh",
    kicker: "Full-Stack Marketplace & Service Platform",
    summary:
      "Marketplace platform for tools and services, with AI-driven smart search.",
    image: agnaImg,
    url: "https://github.com/hatemhossamghazy/Agna_Shakosh",
    details: [
      "Led a technical team to develop a marketplace platform for tools and services using Node.js, React, and PostgreSQL.",
      "Implemented AI-driven smart search and integrated Redis caching to optimize API performance.",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Redis"],
  },
  {
    name: "Mano's 16-Bit Basic Computer Design",
    kicker: "Proteus, Digital Logic",
    summary:
      "A 16-bit computer designed and simulated from scratch using discrete logic.",
    image: "/cm.jpeg",
    url: "https://github.com/hatemhossamghazy/Basic-Computer",
    details: [
      "Designed and simulated a 16-bit computer from scratch on Proteus using fundamental logic gates and discrete components.",
      "Built the complete ALU, common bus system, hardware registers, and hardwired control unit to execute the full Fetch-Decode-Execute cycle.",
    ],
    tech: ["Proteus", "Digital Logic", "Computer Architecture"],
  },
];

export const activities = [
  {
    org: "Nile University",
    role: "Machine Learning & NLP Hackathon",
    points: [
      "Participated in a hackathon focused on machine learning and NLP.",
      "Practiced data preprocessing, feature scaling, and baseline model experimentation to strengthen core model-evaluation skills.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering & Automation Control",
  school: "Kafr El-Sheikh University",
  location: "Kafr El-Sheikh, Egypt",
  gpa: "3.5 / 4.0",
  graduation: "Expected July 2027",
};
