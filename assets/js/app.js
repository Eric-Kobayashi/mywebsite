function siteData() {
  return {
    // State
    searchQuery: "",
    activeCategory: "All",
    lastUpdated: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }),
    categories: ["All", "Academic", "Software", "Contact"],
    currentView: "list", // "list" or "detail"
    selectedProject: null,
    markdownContent: "",
    zoomedImage: null,

    // Data derived from CV
    skillsByYear: [
      { year: "2025", skills: "Nextflow, LLM agent, Hail" },
      { year: "2024", skills: "Spack, Shell, R, HPC, Singularity" },
      { year: "2023", skills: "JavaScript, Rust, SQL, OpenStack, S3" },
      { year: "2022", skills: "Kubernetes, Pytest, CI/CD, Scrum" },
      { year: "2020-21", skills: "QuPath, GitHub, Docker, LaTeX" },
      { year: "2018-19", skills: "Python, MATLAB, ImageJ, Jupyter" },
    ],

    items: [
      // Projects
      {
        id: "proj-2025-tau",
        category: "Academic",
        title: "Tau aggregation mechanism — image analysis & simulation",
        sub: "Image analysis specialist",
        date: "2019 – 2021, 2025 – Ongoing",
        summary: "Cell-level spatial analysis, aggregate classification, and model simulation; deployed as Nextflow in Singularity on HPC.",
        tags: ["Image Analysis", "Nextflow", "HPC", "Machine Learning", "Dementia", "Simulation", "Automation"],
        thumbnail: "assets/img/tau-thumbnail.png",
      },
      {
        id: "proj-2024-softpack",
        category: "Software",
        title: "Softpack — reproducible, discoverable academic software",
        sub: "System administrator & developer",
        date: "2024 – Ongoing",
        summary: "Managed >500 Spack recipes; built guided web interface; created LLM agent for automated recipe evolution.",
        tags: ["Spack", "LLM", "HPC", "Agent", "Vibe Coding", "Automation", "S3"],
        thumbnail: "assets/img/softpack-thumbnail.png",
      },
      {
        id: "proj-2024-chatbot",
        category: "Software",
        title: "LLM chatbot with Slack integration",
        sub: "Project lead",
        date: "2024",
        summary: "Built local LLM (llama3) via MindsDB; facilitated workshops; informed agentic approach for Softpack.",
        tags: ["LLM", "Slack", "Workshop", "Hackathon"],
        thumbnail: "assets/img/chatbot-thumbnail.jpg",
      },
      {
        id: "proj-2020-aptamer",
        category: "Academic",
        title: "Super-resolution probing of protein aggregates using DNA aptamer",
        sub: "Lead researcher",
        date: "2016 – 2020",
        summary: "Developed novel microscopy technique for Parkinson's-related alpha-synuclein aggregates.",
        tags: ["Microscopy", "Dementia", "Image Analysis", "Automation"],
        thumbnail: "assets/img/aptamer-thumbnail.jpg",
      },
      {
        id: "proj-2019-kinetics",
        category: "Academic",
        title: "Kinetics simulation in the ubiquitin system",
        sub: "Researcher",
        date: "2019",
        summary: "Six-parameter model; simulated annealing and MCMC for Bayesian posterior of kinetics parameters.",
        tags: ["Simulation", "Machine Learning", "Bayesian", "MATLAB", "HPC"],
        thumbnail: "assets/img/kinetics-thumbnail.jpeg",
      },
      {
        id: "proj-2019-ischool",
        category: "Academic",
        title: "i.school innovation summer camp (TISP 2019)",
        sub: "Participant",
        date: "Jul 2019",
        summary: "3-week programme with workshops, factory tours, and local projects in Kagawa.",
        tags: ["Innovation", "Workshop", "Japan"],
        thumbnail: "assets/img/ischool-kanban.jpeg",
      },
      {
        id: "proj-2024-farm-report",
        category: "Software",
        title: "Farmer Report — HPC job metrics visualisation",
        sub: "Developer",
        date: "2024",
        summary: "R Shiny web application for visualising computational job metrics on HPC from LSF scheduler to identify resource wastefulness.",
        tags: ["R Shiny", "HPC", "Dashboard", "Elasticsearch"],
        thumbnail: "assets/img/farm-report-thumbnail.png",
      },
      {
        id: "proj-2024-jira-report",
        category: "Software",
        title: "Jira tickets dashboard",
        sub: "Developer",
        date: "2024",
        summary: "Web application for viewing stalled tickets and their details for different Jira boards, created with vibe coding using LLM.",
        tags: ["Jira", "Dashboard", "LLM", "Docker", "Vibe Coding"],
        thumbnail: "assets/img/jira-ticket-thumbnail.png",
      },
      {
        id: "proj-2025-environment-report",
        category: "Software",
        title: "Softpack environment analytics dashboard",
        sub: "Developer",
        date: "2025",
        summary: "Multi-functional dashboard for analyzing Softpack environment creation and usage by faculty group, with tSNE visualization.",
        tags: ["Dashboard", "tSNE", "LLM", "Analytics", "Vibe Coding"],
        thumbnail: "assets/img/environment-report-thumbnail.png",
      },
      {
        id: "proj-2025-jirato",
        category: "Software",
        title: "Jirato — LLM-powered Jira ticket generator",
        sub: "Developer",
        date: "2025",
        summary: "Toy project exploring vibe coding and LLM to automatically generate Jira tickets, switching from local Ollama to GPT-5.",
        tags: ["LLM", "Jira", "GPT-5", "Vibe Coding", "Automation"],
        thumbnail: "assets/img/jirato-thumbnail.png",
      },
      {
        id: "proj-2025-n1-quiz",
        category: "Software",
        title: "Japanese language learning app for N1",
        sub: "Developer",
        date: "2025",
        summary: "Web application for JLPT N1 exam preparation, using LLM to generate explanations for vocabulary and grammar exercises.",
        tags: ["Japan", "LLM", "Vibe Coding", "Language Learning"],
        thumbnail: "assets/img/n1-quiz-thumbnail.png",
      },

      // Contact
      { id: "contact-email", category: "Contact", title: "Email", sub: "Primary contact", date: "", summary: "eh19@sanger.ac.uk", tags: [] },
      { id: "contact-email-alt", category: "Contact", title: "Email (Alternative)", sub: "Academic contact", date: "", summary: "yz520@cam.ac.uk", tags: [] },
    ],

    ticker: "GloBIAS Bioimage Analysis Conference 2025, Oct 26, 2025 - Oct 31, 2025 | Kobe, Japan. <a href='https://www.globias.org/activities/bioimage-analysis-conference-2025-in-kobe' target='_blank' rel='noopener'>Learn more</a>",

    // Methods
    init() {
      this.setupImageZoom();
    },
    setupImageZoom() {
      // Add click handlers to all images after DOM is ready
      document.addEventListener('DOMContentLoaded', () => {
        this.addImageClickHandlers();
      });
      
      // Also add handlers after markdown content is loaded
      this.$watch('markdownContent', () => {
        setTimeout(() => this.addImageClickHandlers(), 100);
      });
    },
    addImageClickHandlers() {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Remove existing handlers to avoid duplicates
        img.removeEventListener('click', this.handleImageClick);
        img.addEventListener('click', (e) => this.handleImageClick(e, img));
      });
    },
    handleImageClick(e, img) {
      e.preventDefault();
      e.stopPropagation();
      
      this.zoomedImage = {
        src: img.src,
        alt: img.alt || ''
      };
    },
    closeImageZoom() {
      this.zoomedImage = null;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    setCategory(cat) { 
      this.activeCategory = cat; 
      this.currentView = "list"; // Reset to list view when changing category
    },
    async showProjectDetail(project) {
      this.selectedProject = project;
      this.currentView = "detail";
      this.markdownContent = "";
      
      // Load markdown content for the project
      await this.loadMarkdownContent(project.id);
    },
    backToList() {
      this.currentView = "list";
      this.selectedProject = null;
      this.markdownContent = "";
    },
    async loadMarkdownContent(projectId) {
      try {
        const response = await fetch(`projects/${projectId}.md?t=${Date.now()}`);
        if (response.ok) {
          const markdownText = await response.text();
          // Use marked.js to convert markdown to HTML
          if (typeof marked !== 'undefined') {
            this.markdownContent = marked.parse(markdownText);
          } else {
            // Fallback if marked.js is not loaded
            this.markdownContent = `<pre>${markdownText}</pre>`;
          }
        } else {
          this.markdownContent = '<p>Project details not available.</p>';
        }
      } catch (error) {
        console.error('Error loading markdown content:', error);
        this.markdownContent = '<p>Error loading project details.</p>';
      }
    },
    matchesQuery(text) {
      if (!this.searchQuery) return true;
      const q = this.searchQuery.toLowerCase();
      return (text || "").toLowerCase().includes(q);
    },
    filteredItems() {
      const cat = this.activeCategory;
      return this.items.filter(item => {
        const inCat = cat === "All" || item.category === cat;
        if (!inCat) return false;
        const blob = [item.title, item.sub, item.summary, (item.tags || []).join(" ")].join(" ");
        return this.matchesQuery(blob);
      });
    },
  };
}


