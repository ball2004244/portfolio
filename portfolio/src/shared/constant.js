export const expTimeIntervals = [
  {
    id: "period1",
    period: "Sep 2024 - Present",
    experiences: [
      {
        id: "exp1",
        title: "Research Assistant",
        company: "Professor Yicheng Tu's Advanced Computing Lab",
        summary:
          "Work on DeepAligner project, a deep learning-based tool for matching pair of genes. Integrating CAGRA - a GPU vector database - with DeepAligner to achieve higher accuracy with lower latency.",
        skills: [
          "PyTorch",
          "Vector Database",
          "Benchmarking",
          "CUDA",
          "BiLSTM",
          "K-nearest Neighbors",
          "Genomics",
        ],
        highlight:
          "Recent results show 99.1% accuracy with ONLY 2s execution time on Ecoli dataset.",
      },
    ],
  },
  {
    id: "period2",
    period: "Jan 2024 - Aug 2024",
    experiences: [
      {
        id: "exp2",
        title: "Software Engineer Intern",
        company: "CrossCompute",
        summary:
          "Mainly responsible for full-stack development and deployment, with side tasks in UX design and robotics.",
        skills: ["Jupyter", "Python", "React", "Terraform", "Ansible"],
        highlight:
          "First time working in a startup environment, understand 'a man who wears many hats' philosophy.",
      },
    ],
  },
  {
    id: "period3",
    period: "May 2023 - Dec 2023",
    experiences: [
      {
        id: "exp3",
        title: "Research Assistant",
        company: "Professor Robert Frisina's Bioinformatics Lab",
        summary:
          "Implemented a High-Performance Computing pipeline to detect age-related hearing loss mutations in mtDNA. Applied statistical methods to filter out meaningless mutations.",
        skills: [
          "Python",
          "Docker",
          "Bash",
          "Statistics",
          "Pandas",
          "Matplotlib",
        ],
        highlight:
          "Presented results at a major conference - ARO MidWinter Meeting 2025.",
      },
    ],
  },
  {
    id: "period4",
    period: "Jan 2023 - Apr 2023",
    experiences: [
      {
        id: "exp4",
        title: "Research Assistant",
        company: "Professor Yicheng Tu's Advanced Computing Lab",
        summary:
          "Managed data stores and pipelines for various projects. Set up 10Tb GeneBank on Linux machine and applying different methods (multiprocessing, PCA) to prepare training data for DeepAligner model. Besides, I also evaluated multiple database caching algorithms.",
        skills: [
          "Python",
          "Linux",
          "Docker",
          "SQL",
          "Bash",
          "PCA",
          "Redis",
          "Multiprocessing",
        ],
        highlight:
          "Gather 10Tb of data stored distributedly across 115 nodes. Aggregate and host on a single machine.",
      },
    ],
  },
];

// TODO: Replace description and link placeholders with actual content
export const projects = [
  {
    title: "LogosDB",
    description:
      "TBD",
    technologies: ["Python", "C++", "SQL", "LLM", "Summarization", "K-nearest Neighbors", "Vector Database"],
    link: "#",
  },
  {
    title: "Custom Lambda",
    description:
      "TBD",
    technologies: ["AWS", "Python", "FastAPI", "Filesystem", "Serverless"],
    link: "#",
  },
  {
    title: "AutoCodeAI",
    description:
      "TBD",
    technologies: ["Docker", "Kubernetes", "LLM", "Cassandra", "gRPC"],
    link: "#",
  },
  {
    title: "PyJSON",
    description:
      "TBD",
    technologies: ["Python", "JSON", "React", "Compiler"],
    link: "#",
  },
  {
    title: "Agilizer",
    description:
      "TBD",
    technologies: ["Python", "Flask", "Firebase", "React", "Shadcn", "Gmail", "Gemini API"],
    link: "#",
  }
];
