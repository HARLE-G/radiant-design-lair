export interface PortfolioProject {
  id: string;
  title: string;
  subtitle?: string;
  overview: string;
  technologies: string[];
  features: string[];
  github?: string;
  flagship?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: "autonomous-trailer-director",
    title: "Autonomous Trailer Director",
    subtitle: "Verification-First Agent for Audience-Specific Trailer Planning",
    overview:
      "An agentic system that transforms an episode package into audience-specific trailer edit decision lists and independently validates proposed segments against production policies, source evidence, and constraints.",
    technologies: ["Python", "Rule Engine", "pytest", "JSONL Logging", "Replay / Mock LLM Mode"],
    features: [
      "Generates three audience-specific trailer edit decision lists: family, young adult, and dialect-region.",
      "Provides exact source timecodes, reasons, and supporting evidence for every segment.",
      "Uses an independent verifier that does not import the planner.",
      "Validates spoilers, actor and music rights, territories, age-rating policy, source accuracy, story truth, accessibility, and dialect or bias.",
      "In the documented synthetic test scenario, rejected all three first drafts and detected 5, 15, and 8 seeded policy failures respectively.",
      "Accepts a repair only after the independent verifier checks it again; otherwise, the proposal is rejected.",
      "Uses evidence tokens to trace contract changes to affected segments. A music-licence expiry revised 4 of 8 dialect-region segments while leaving the other two trailers untouched.",
      "Includes prompt-injection quarantine, a behaviour-only audience-signal bias filter, budget tracking, LLM-outage fallback, and API-key-free replay mode.",
      "Includes 31 automated tests.",
    ],
    github: "https://github.com/HARLE-G/autonomous-trailer-director",
    flagship: true,
  },
  {
    id: "intelligent-document-qa",
    title: "Intelligent Document Q&A",
    subtitle: "LLM-Based RAG Chatbot",
    overview:
      "An intelligent document question-answering application that uses retrieval-augmented generation to answer questions from company PDFs, policies, and knowledge-base documents.",
    technologies: ["Python", "LangChain", "LangGraph", "RAG", "Vector Database", "FastAPI"],
    features: [
      "Loads PDF documents, splits text into chunks, and generates embeddings for retrieval.",
      "Uses vector-based semantic retrieval to provide context-grounded LLM responses.",
      "Orchestrates query processing, retrieval, context validation, and response generation as separate LangGraph workflow nodes.",
      "Uses conditional re-retrieval logic, retrieval tuning, and response validation to help reduce irrelevant retrieval and unsupported responses.",
      "Integrates a FastAPI REST API.",
    ],
  },
  {
    id: "deepfer",
    title: "DeepFER — Facial Emotion Recognition",
    overview:
      "A convolutional neural network-based facial emotion recognition system that classifies 48×48 grayscale facial images into seven emotion categories.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"],
    features: [
      "Convolutional neural network architecture with batch normalization and max pooling.",
      "Dropout and fully connected layers; trained with the Adam optimizer and categorical cross-entropy loss.",
      "Applies image augmentation through rotation, zoom, shifts, and flips.",
      "Uses regularization to address generalization with low-resolution images and class imbalance.",
    ],
  },
  {
    id: "sentiment-analysis-nlp",
    title: "Sentiment Analysis NLP System",
    overview:
      "A text classification system for analyzing customer feedback and organizing sentiment insights to support customer satisfaction reporting.",
    technologies: ["Python", "NLP", "Pandas", "Scikit-learn", "NLTK"],
    features: [
      "Preprocesses and tokenizes text, including stop-word removal.",
      "Transforms text using TF-IDF vectorization for sentiment classification.",
      "Includes a reporting module for customer satisfaction trends.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Generative AI & LLMs",
    skills: [
      "LLM Application Development", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering",
      "LangChain", "LangGraph", "Hugging Face Transformers", "LLaMA", "Ollama",
      "Vector Embeddings", "Semantic Search", "AI Chatbot Development", "Agentic Systems",
      "Planner / Verifier Design", "Rule-Based Constraints",
    ],
  },
  {
    title: "Vector Databases & Document Processing",
    skills: [
      "Vector Databases", "Embedding Generation", "PDF Loaders", "Text Splitters",
      "Document Chunking", "Retrieval Pipelines", "Context Validation",
    ],
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: [
      "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Regression", "Classification",
      "Clustering", "CNN Architectures", "Neural Network Design", "Hyperparameter Tuning",
    ],
  },
  {
    title: "NLP & Computer Vision",
    skills: [
      "Text Classification", "Tokenization", "Sentiment Analysis", "Feature Extraction",
      "TF-IDF", "CNNs", "Batch Normalization", "Max Pooling", "Dropout", "Image Augmentation",
    ],
  },
  {
    title: "Programming & Backend APIs",
    skills: [
      "Python", "Python Async Programming", "FastAPI", "REST API Development", "SQL", "NumPy",
      "Pandas", "HTML", "CSS", "Bootstrap",
    ],
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS SageMaker — Fundamentals", "AWS Bedrock — Fundamentals", "MLflow", "Model Evaluation", "Experiment Tracking Workflows"],
  },
  {
    title: "Visualization & Business Intelligence",
    skills: ["Matplotlib", "Seaborn", "Power BI", "Excel Charts"],
  },
  {
    title: "Algorithms",
    skills: ["Decision Trees", "Random Forest", "K-Means", "Gradient Boosting", "Support Vector Machines (SVM)"],
  },
  {
    title: "Tools, Databases & Testing",
    skills: ["Jupyter Notebook", "GitHub", "Git", "Google Colab", "VS Code", "pytest", "MySQL", "PostgreSQL"],
  },
];

export const coreCompetencies = [
  "Model Development & Evaluation", "Feature Engineering", "Hyperparameter Tuning", "Data Preprocessing",
  "Statistical Modeling", "Natural Language Processing", "Computer Vision (CNNs)", "RAG Pipeline Design",
  "Vector Search Design", "LangGraph Workflow Orchestration", "Agent Verification", "Constraint Reasoning",
  "Prompt Engineering", "AI Chatbot Development", "Supervised Learning", "Unsupervised Learning",
  "Neural Network Architecture Design", "Deep Learning", "Research & Experimentation",
];

export const education = [
  {
    degree: "Master of Business Administration — Information Technology",
    institution: "Amity University (AU), Noida",
    duration: "July 2023 – May 2025",
    cgpa: "9.0 / 10.0",
  },
  {
    degree: "Bachelor's Degree",
    institution: "IPS Academy",
    duration: "September 2018 – February 2022",
    cgpa: "7.10 / 10.0",
  },
];

export const academicHighlights = [
  "Achieved a CGPA of 9.0/10.0 in MBA (Information Technology) at Amity University, Noida.",
  "Completed coursework in Machine Learning, Deep Learning, NLP, Database Management, and Business Analytics.",
  "Developed end-to-end ML and Generative AI projects covering classification, clustering, NLP, RAG-based applications, and agentic verification systems.",
  "Familiar with the AI/ML project lifecycle: data collection, preprocessing, modeling, evaluation, and deployment-ready output.",
];

export const contactDetails = {
  email: "rupendraharle513@gmail.com",
  phone: "7400881081",
  location: "Indore, Madhya Pradesh, India",
  linkedin: "https://linkedin.com/in/rupendra-harle-973371242",
  github: "https://github.com/HARLE-G",
};