  //   document.addEventListener('DOMContentLoaded', function() {
  //     // DOM Elements
  //     const elements = {
  //       shimmer: document.getElementById('shimmer'),
  //       contactModal: document.querySelector('.contact-modal'),
  //       emailDialog: document.querySelector('.email-dialog'),
  //       modalOverlay: document.querySelector('.modal-overlay'),
  //       projectsContainer: document.getElementById('projectsContainer'),
  //       modalTitle: document.getElementById('modalTitle'),
  //       modalTags: document.getElementById('modalTags'),
  //       modalDescription: document.getElementById('modalDescription'),
  //       modalTech: document.getElementById('modalTech'),
  //       modalFeatures: document.getElementById('modalFeatures'),
  //       emailForm: document.getElementById('emailForm'),
  //       emailSubmitBtn: document.getElementById('emailSubmitBtn'),
  //       emailMessage: document.getElementById('emailMessage')
  //     };

  //     // Projects Data with GitHub repo links
  //     const projects = [
  //       {
  //         title: "LeetCode Platform",
  //         tags: ["Flask", "Monaco", "Judge0", "Python", "JavaScript"],
  //         description: [
  //           "A full-stack coding platform inspired by LeetCode, featuring a Monaco code editor with syntax highlighting and autocomplete. The platform includes a curated set of coding problems categorized by difficulty and topic.",
  //           "Integrated with Judge0 API for real-time code execution in multiple programming languages. Implemented user authentication, submission history, and a leaderboard to track top performers."
  //         ],
  //         tech: [
  //           "Frontend: HTML, CSS, JavaScript, Monaco Editor",
  //           "Backend: Python, Flask",
  //           "APIs: Judge0 for code execution",
  //           "Database: MySQL (for user data and submissions)",
  //         ],
  //         features: [
  //           "Real-time code execution with c/c++ and python languages",
  //           "Problem categorization by difficulty and topic",
  //           "User authentication and profile system",
  //           "Submission history and performance tracking",
  //           "Leaderboard with ranking system"
  //         ],
  //         repo: "https://github.com/being-souL1230/online-editor"
  //       },
  //       {
  //         title: "Resume Maker",
  //         tags: ["HTML", "CSS", "JavaScript", "PDF Generation"],
  //         description: [
  //           "An interactive resume builder that allows users to create professional resumes by filling in their information and selecting from multiple templates. The application features a live preview and PDF export functionality.",
  //           "Implemented a drag-and-drop interface for rearranging sections and real-time preview updates. Added template customization options including color schemes and font choices."
  //         ],
  //         tech: [
  //           "Frontend: HTML5, CSS3, JavaScript (ES6+)",
  //           "Libraries: html2pdf.js for PDF generation",
  //           "Storage: LocalStorage for saving drafts",
  //           "UI: Custom responsive design"
  //         ],
  //         features: [
  //           "Multiple professionally designed templates",
  //           "Real-time preview of resume",
  //           "PDF export with high resolution",
  //           "Drag-and-drop section rearrangement",
  //         ],
  //         repo: "https://github.com/being-souL1230/resume-maker"
  //       },
  //       {
  //         title: "College ERP",
  //         tags: ["Flask", "MySQL", "Authentication", "Bootstrap"],
  //         description: [
  //           "A comprehensive College Enterprise Resource Planning system designed to manage student information, courses, grades, and faculty data. The system includes role-based access control for administrators, faculty, and students.",
  //           "Developed features for course registration, grade submission, attendance tracking, and report generation. Implemented a dashboard with analytics for administrators to monitor institutional performance."
  //         ],
  //         tech: [
  //           "Frontend: HTML, CSS, JavaScript",
  //           "Backend: Python, Flask",
  //           "Database: MySQL",
  //           "Authentication: Flask-Login with role-based access",
  //           "Reporting: Chart.js for data visualization"
  //         ],
  //         features: [
  //           "Role-based access control (Admin, Faculty, Student)",
  //           "Course registration and management",
  //           "Grade submission and tracking",
  //           "Attendance management system",
  //           "Analytics dashboard with institutional metrics"
  //         ],
  //         repo: "https://github.com/being-souL1230/erp-system"
  //       },
  //       {
  //         title: "Advanced Mood Detector",
  //         tags: ["Machine Learning", "NLP", "Python", "Flask", "TF-IDF"],
  //         description: [
  //           "An advanced machine learning application that analyzes text input to predict sentiment using sophisticated NLP techniques. The system implements TF-IDF vectorization, Random Forest classification, and advanced text preprocessing including lemmatization and stop word removal.",
  //           "Features real-time sentiment analysis with detailed ML metrics, emotional intensity scoring, and confidence-based predictions. The model provides comprehensive breakdowns of positive, negative, and neutral sentiment distributions."
  //         ],
  //         tech: [
  //           "Machine Learning: Python, scikit-learn, Random Forest Classifier",
  //           "NLP: NLTK, WordNet Lemmatizer, TF-IDF Vectorization",
  //           "Text Processing: Advanced preprocessing, stop word removal",
  //           "Backend: Flask API with ML integration",
  //           "Frontend: Interactive visualization with ML metrics"
  //         ],
  //         features: [
  //           "TF-IDF vectorization for feature extraction",
  //           "Random Forest classification with confidence scoring",
  //           "Advanced text preprocessing (lemmatization, stop words)",
  //           "Emotional intensity and sentiment distribution analysis",
  //           "Real-time ML metrics and detailed breakdowns"
  //         ],
  //         demo: "/demo/mood-detector"
  //       },
  //       {
  //         title: "Chat App",
  //         tags: ["Flask", "WebSockets", "JavaScript", "Real-time"],
  //         description: [
  //           "A real-time chat application supporting private messaging between users and group chat functionality. The application maintains message history and supports online status indicators.",
  //           "Implemented WebSocket protocol for real-time communication without page refreshes. Added features like typing indicators, message read receipts, and file sharing capabilities."
  //         ],
  //         tech: [
  //           "Frontend: HTML, CSS, JavaScript",
  //           "Backend: Python, Flask",
  //           "Real-time: Flask-SocketIO, WebSockets",
  //           "Database: SQLite for message history",
  //           "Authentication: Session-based"
  //         ],
  //         features: [
  //           "Real-time private and group messaging",
  //           "Message history persistence",
  //           "Online/offline status indicators",
  //           "Typing indicators and read receipts",
  //           "File sharing capability"
  //         ],
  //         repo: null // No repo for this project
  //       },
  //       {
  //         title: "Pass Predictor",
  //         tags: ["Machine Learning", "Logistic Regression", "Python", "Flask"],
  //         description: [
  //           "A machine learning web app that predicts whether a student will pass or fail based on their study hours, sleep hours, and attendance. Uses Logistic Regression for real-time prediction and confidence scoring.",
  //           "Interactive demo lets you input values and instantly see the prediction, confidence, and probability breakdown. Built with Flask, scikit-learn, and a modern UI."
  //         ],
  //         tech: [
  //           "Machine Learning: Python, scikit-learn, Logistic Regression",
  //           "Feature Scaling: StandardScaler",
  //           "Backend: Flask API",
  //           "Frontend: HTML, CSS, JavaScript (interactive form)",
  //           "Demo: Real-time prediction and confidence bars"
  //         ],
  //         features: [
  //           "Student pass/fail prediction",
  //           "Probability/confidence visualization",
  //           "Modern, responsive UI",
  //           "Instant feedback on input",
  //           "ML-powered, explainable results"
  //         ],
  //         demo: "/demo/pass-predictor",
  //         repo: null // No repo for this project
  //       }
  //     ];

  //     // Project icon mapping and year as a constant
  //     const PROJECT_ICONS = [
  //       'fas fa-laptop-code',      // LeetCode Platform
  //       'fas fa-file-alt',         // Resume Maker
  //       'fas fa-building',         // College ERP
  //       'fas fa-brain',            // Mood Detector
  //       'fas fa-comments',         // Chat App
  //       'fas fa-chart-line'        // Pass Predictor
  //     ];
  //     const PROJECT_YEAR = '2025';

  //     // Initialize Projects
  //     function initProjects() {
  //       projects.forEach((project, index) => {
  //         const projectCard = document.createElement('div');
  //         projectCard.className = 'project-card';
  //         // Only show repo button if repo exists
  //         const repoButton = project.repo ? 
  //           `<a href="${project.repo}" target="_blank" class="repo-btn">
  //             <i class="fab fa-github"></i> Github
  //           </a>` : '';
  //         // Show demo button if demo exists
  //         const demoButton = project.demo ? 
  //           `<a href="${project.demo}" class="repo-btn demo-btn">
  //             <i class="fas fa-play"></i> Demo
  //           </a>` : '';
  //         projectCard.innerHTML = `
  //           <h3 class="project-title">${project.title}</h3>
  //           <div class="project-icon">
  //             <i class="${PROJECT_ICONS[index]}"></i>
  //           </div>
  //           <div class="project-content">
  //             <p class="project-desc">${project.description[0].split('.')[0]}.</p>
  //             <div class="tags">
  //               ${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
  //             </div>
  //           </div>
  //           <div class="project-actions">
  //             <span class="date">${PROJECT_YEAR}</span>
  //             <div class="project-buttons">
  //               ${demoButton}
  //               ${repoButton}
  //               <button class="expand-btn" data-project="${index}">
  //                 <i class="fas fa-expand"></i> Details
  //               </button>
  //             </div>
  //           </div>
  //         `;
  //         elements.projectsContainer.appendChild(projectCard);
  //       });
  //     }

  //     // Loading shimmer effect
  //     setTimeout(() => {
  //       elements.shimmer.style.opacity = '0';
  //       setTimeout(() => {
  //         elements.shimmer.style.display = 'none';
  //       }, 300);
  //     }, 1000);

  //     // Contact modal
  //     document.querySelectorAll('.contact-trigger').forEach(btn => {
  //       btn.addEventListener('click', (e) => {
  //         e.preventDefault();
  //         elements.contactModal.classList.add('active');
  //         document.body.style.overflow = 'hidden';
  //       });
  //     });

  //     document.querySelector('.contact-modal-close').addEventListener('click', closeContactModal);
  //     elements.contactModal.addEventListener('click', (e) => {
  //       if (e.target === elements.contactModal) closeContactModal();
  //     });

  //     // Email dialog
  //     const emailDialog = document.querySelector('.email-dialog');
  //     const emailForm = document.getElementById('emailForm');
  //     const emailSubmitBtn = document.getElementById('emailSubmitBtn');
  //     const emailMessage = document.getElementById('emailMessage');

  //     document.querySelectorAll('.email-trigger').forEach(btn => {
  //       btn.addEventListener('click', (e) => {
  //         e.preventDefault();
  //         console.log('Email trigger clicked!');
  //         emailDialog.classList.add('active');
  //         document.body.style.overflow = 'hidden';
  //       });
  //     });
  //     document.querySelector('.email-dialog-close').addEventListener('click', closeEmailDialog);
  //     emailDialog.addEventListener('click', (e) => {
  //       if (e.target === emailDialog) closeEmailDialog();
  //     });
  //     function closeEmailDialog() {
  //       emailDialog.classList.remove('active');
  //       document.body.style.overflow = 'auto';
  //     }
  //     emailForm.addEventListener('submit', async (e) => {
  //       e.preventDefault();
  //       console.log('Email form submitted!');
  //       const formData = new FormData(emailForm);
  //       const data = {
  //         name: formData.get('name'),
  //         email: formData.get('email'),
  //         subject: formData.get('subject'),
  //         message: formData.get('message')
  //       };
  //       console.log('Form data:', data);
  //       emailSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  //       emailSubmitBtn.disabled = true;
  //       emailMessage.style.display = 'none';
  //       try {
  //         const response = await fetch('/api/contact', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify(data)
  //         });
  //         const result = await response.json();
  //         emailMessage.style.display = 'block';
  //         emailMessage.style.background = result.success ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)';
  //         emailMessage.style.color = result.success ? '#22c55e' : '#ef4444';
  //         emailMessage.style.border = result.success ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)';
  //         emailMessage.textContent = result.message;
  //         if (result.success) {
  //           emailForm.reset();
  //           setTimeout(closeEmailDialog, 2000);
  //         }
  //       } catch (error) {
  //         emailMessage.style.display = 'block';
  //         emailMessage.style.background = 'rgba(239,68,68,0.1)';
  //         emailMessage.style.color = '#ef4444';
  //         emailMessage.style.border = '1px solid rgba(239,68,68,0.3)';
  //         emailMessage.textContent = 'Network error. Please try again.';
  //       } finally {
  //         emailSubmitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Email';
  //         emailSubmitBtn.disabled = false;
  //       }
  //     });

  //     // Project modals
  //     function setupProjectModals() {
  //       document.addEventListener('click', (e) => {
  //         if (e.target.closest('.expand-btn')) {
  //           const btn = e.target.closest('.expand-btn');
  //           const projectId = parseInt(btn.getAttribute('data-project'));
  //           showProjectModal(projectId);
  //         }
  //       });

  //       document.querySelector('.modal-close').addEventListener('click', closeModal);
  //       elements.modalOverlay.addEventListener('click', (e) => {
  //         if (e.target === elements.modalOverlay) closeModal();
  //       });
  //     }

  //     function showProjectModal(projectId) {
  //       const project = projects[projectId];
  //       elements.modalTitle.textContent = project.title;
        
  //       elements.modalTags.innerHTML = project.tags.map(tag => 
  //         `<span class="tag">${tag}</span>`
  //       ).join('');
        
  //       elements.modalDescription.innerHTML = project.description.map(para => 
  //         `<p>${para}</p>`
  //       ).join('');
        
  //       elements.modalTech.innerHTML = project.tech.map(item => 
  //         `<li>${item}</li>`
  //       ).join('');
        
  //       elements.modalFeatures.innerHTML = project.features.map(item => 
  //         `<li>${item}</li>`
  //       ).join('');
        
  //       elements.modalOverlay.classList.add('active');
  //       document.body.style.overflow = 'hidden';
  //     }

  //     function closeModal() {
  //       elements.modalOverlay.classList.remove('active');
  //       document.body.style.overflow = 'auto';
  //     }

  //     function closeContactModal() {
  //       elements.contactModal.classList.remove('active');
  //       document.body.style.overflow = 'auto';
  //     }

  //     // Animate project cards
  //     function animateProjectCards() {
  //       const projectCards = document.querySelectorAll('.project-card');
  //       projectCards.forEach((card, index) => {
  //         card.style.opacity = '0';
  //         card.style.transform = 'translateY(20px)';
          
  //         setTimeout(() => {
  //           card.style.opacity = '1';
  //           card.style.transform = 'translateY(0)';
  //           card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  //         }, 150 * index);
  //       });
  //     }

  //     // Keyboard events
  //     document.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape') {
  //         if (elements.contactModal.classList.contains('active')) closeContactModal();
  //         if (elements.emailDialog.classList.contains('active')) closeEmailDialog();
  //         if (elements.modalOverlay.classList.contains('active')) closeModal();
  //       }
  //     });

  //     // Tag tooltip data
  //     const tagData = {
  //       'Flask': {
  //         icon: 'fas fa-flask',
  //         description: 'Python web framework for building scalable applications. I use it for backend APIs and web services.',
  //         skillLevel: 4,
  //         usage: 'Used in LeetCode Platform, College ERP, Mood Detector, and Chat App'
  //       },
  //       'Monaco': {
  //         icon: 'fas fa-code',
  //         description: 'Microsoft\'s code editor used in VS Code. I integrated it for real-time code editing with syntax highlighting.',
  //         skillLevel: 3,
  //         usage: 'Used in LeetCode Platform for code editor functionality'
  //       },
  //       'Judge0': {
  //         icon: 'fas fa-gavel',
  //         description: 'Open-source code execution system. I use it for running and testing code submissions in real-time.',
  //         skillLevel: 3,
  //         usage: 'Used in LeetCode Platform for code execution'
  //       },
  //       'Python': {
  //         icon: 'fab fa-python',
  //         description: 'My secondary programming language. I use it for backend development, data analysis, and machine learning.',
  //         skillLevel: 5,
  //         usage: 'Used in all backend projects and AI/ML applications'
  //       },
  //       'JavaScript': {
  //         icon: 'fab fa-js-square',
  //         description: 'Frontend programming language. I use it for interactive web applications and dynamic content.',
  //         skillLevel: 4,
  //         usage: 'Used in all frontend projects and interactive features'
  //       },
  //       'HTML': {
  //         icon: 'fab fa-html5',
  //         description: 'Markup language for structuring web content. I use it for creating responsive and semantic layouts.',
  //         skillLevel: 5,
  //         usage: 'Used in all web projects for structure'
  //       },
  //       'CSS': {
  //         icon: 'fab fa-css3-alt',
  //         description: 'Styling language for web design. I use it for creating modern, responsive, and animated interfaces.',
  //         skillLevel: 5,
  //         usage: 'Used in all web projects for styling'
  //       },
  //       'PDF Generation': {
  //         icon: 'fas fa-file-pdf',
  //         description: 'Creating PDF documents programmatically. I use libraries like html2pdf.js for document generation.',
  //         skillLevel: 3,
  //         usage: 'Used in Resume Maker for PDF export'
  //       },
  //       'MySQL': {
  //         icon: 'fas fa-database',
  //         description: 'Relational database management system. I use it for storing and managing structured data.',
  //         skillLevel: 4,
  //         usage: 'Used in LeetCode Platform and College ERP'
  //       },
  //       'Authentication': {
  //         icon: 'fas fa-user-shield',
  //         description: 'User authentication and authorization systems. I implement secure login and role-based access.',
  //         skillLevel: 4,
  //         usage: 'Used in College ERP and Chat App'
  //       },
  //       'Bootstrap': {
  //         icon: 'fab fa-bootstrap',
  //         description: 'CSS framework for responsive design. I use it for quick prototyping and consistent styling.',
  //         skillLevel: 4,
  //         usage: 'Used in College ERP for responsive design'
  //       },
  //       'Machine Learning': {
  //         icon: 'fas fa-brain',
  //         description: 'AI/ML algorithms and models. I use scikit-learn for classification, regression, and NLP tasks.',
  //         skillLevel: 3,
  //         usage: 'Used in Mood Detector and Pass Predictor'
  //       },
  //       'NLP': {
  //         icon: 'fas fa-language',
  //         description: 'Natural Language Processing for text analysis. I use NLTK and TF-IDF for sentiment analysis.',
  //         skillLevel: 3,
  //         usage: 'Used in Mood Detector for text processing'
  //       },
  //       'TF-IDF': {
  //         icon: 'fas fa-chart-bar',
  //         description: 'Text feature extraction technique. I use it for converting text into numerical features for ML models.',
  //         skillLevel: 3,
  //         usage: 'Used in Mood Detector for feature extraction'
  //       },
  //       'WebSockets': {
  //         icon: 'fas fa-plug',
  //         description: 'Real-time bidirectional communication. I use Flask-SocketIO for live chat and notifications.',
  //         skillLevel: 3,
  //         usage: 'Used in Chat App for real-time messaging'
  //       },
  //       'Real-time': {
  //         icon: 'fas fa-bolt',
  //         description: 'Real-time data processing and communication. I implement live updates and instant messaging.',
  //         skillLevel: 4,
  //         usage: 'Used in Chat App and live features'
  //       },
  //       'Logistic Regression': {
  //         icon: 'fas fa-chart-line',
  //         description: 'Machine learning algorithm for classification. I use it for binary prediction tasks.',
  //         skillLevel: 3,
  //         usage: 'Used in Pass Predictor for student performance prediction'
  //       }
  //     };

  //     // Skill analysis data for home section skills
  //     const skillAnalysisData = {
  //       'HTML/CSS/JS': {
  //         icon: 'fas fa-code',
  //         description: 'Core web technologies for frontend development. I have strong expertise in creating responsive, interactive, and modern web interfaces.',
  //         level: 'very-good',
  //         levelText: 'Advanced',
  //         experienceLevel: '2+ Months',
  //         successRate: '100%',
  //         projectsUsed: 'All Web Projects',
  //         successPercentage: 100,
  //         practicalSkills: 100,
  //         theoreticalKnowledge: 95,
  //         problemSolving: 95
  //       },
  //       'Python': {
  //         icon: 'fab fa-python',
  //         description: 'My primary programming language with extensive experience in backend development, automation, and data processing.',
  //         level: 'very-good',
  //         levelText: 'Advanced',
  //         experienceLevel: '6+ Months',
  //         successRate: '92%',
  //         projectsUsed: 'All Backend Projects',
  //         successPercentage: 92,
  //         practicalSkills: 95,
  //         theoreticalKnowledge: 70,
  //         problemSolving: 70
  //       },
  //       'C/C++': {
  //         icon: 'fas fa-microchip',
  //         description: 'My primary programming language with good understanding of memory management and system programming concepts.',
  //         level: 'good',
  //         levelText: 'Competent',
  //         experienceLevel: '1 Year',
  //         successRate: '78%',
  //         projectsUsed: 'System Projects',
  //         successPercentage: 78,
  //         practicalSkills: 80,
  //         theoreticalKnowledge: 75,
  //         problemSolving: 82
  //       },
  //       'Java': {
  //         icon: 'fab fa-java',
  //         description: 'Object-oriented programming language with foundational experience in application development and enterprise solutions.',
  //         level: 'intermediate',
  //         levelText: 'Intermediate',
  //         experienceLevel: '3+ Months',
  //         successRate: '65%',
  //         projectsUsed: 'Academic Projects',
  //         successPercentage: 65,
  //         practicalSkills: 70,
  //         theoreticalKnowledge: 75,
  //         problemSolving: 60
  //       },
  //       'Flask': {
  //         icon: 'fas fa-flask',
  //         description: 'Lightweight Python web framework with extensive experience in building REST APIs and web applications.',
  //         level: 'master',
  //         levelText: 'Expert',
  //         experienceLevel: '3+ Months',
  //         successRate: '95%',
  //         projectsUsed: 'Multiple Projects',
  //         successPercentage: 95,
  //         practicalSkills: 98,
  //         theoreticalKnowledge: 92,
  //         problemSolving: 95
  //       },
  //       'Django': {
  //         icon: 'fab fa-python',
  //         description: 'High-level Python web framework with experience in building complex web applications and admin interfaces.',
  //         level: 'intermediate',
  //         levelText: 'Intermediate',
  //         experienceLevel: '1+ Months',
  //         successRate: '70%',
  //         projectsUsed: 'Web Applications',
  //         successPercentage: 70,
  //         practicalSkills: 75,
  //         theoreticalKnowledge: 80,
  //         problemSolving: 65
  //       },
  //       'MySQL': {
  //         icon: 'fas fa-database',
  //         description: 'Relational database management system with strong expertise in database design, optimization, and management.',
  //         level: 'master',
  //         levelText: 'Expert',
  //         experienceLevel: '6+ Months',
  //         successRate: '90%',
  //         projectsUsed: 'Database Projects',
  //         successPercentage: 90,
  //         practicalSkills: 95,
  //         theoreticalKnowledge: 88,
  //         problemSolving: 92
  //       },
  //       'MongoDB': {
  //         icon: 'fas fa-leaf',
  //         description: 'NoSQL database with experience in document-based data storage and flexible schema design.',
  //         level: 'okay',
  //         levelText: 'Familiar',
  //         experienceLevel: '3+ Months',
  //         successRate: '60%',
  //         projectsUsed: 'Some Projects',
  //         successPercentage: 60,
  //         practicalSkills: 65,
  //         theoreticalKnowledge: 70,
  //         problemSolving: 55
  //       },
  //       'AI/ML': {
  //         icon: 'fas fa-brain',
  //         description: 'Machine learning and artificial intelligence with basic understanding of algorithms and model development.',
  //         level: 'below-average',
  //         levelText: 'Novice',
  //         experienceLevel: '3+ Months',
  //         successRate: '45%',
  //         projectsUsed: 'ML Projects',
  //         successPercentage: 45,
  //         practicalSkills: 50,
  //         theoreticalKnowledge: 60,
  //         problemSolving: 40
  //       }
  //     };

  //     // Setup tag tooltips
  //     function setupTagTooltips() {
  //       document.addEventListener('click', (e) => {
  //         if (e.target.classList.contains('tag')) {
  //           const tagName = e.target.textContent;
  //           const tagInfo = tagData[tagName];
            
  //           if (tagInfo) {
  //             showTagTooltip(tagName, tagInfo);
  //           }
  //         }
  //       });

  //       // Close tooltip on close button or outside click
  //       document.querySelector('.tag-tooltip-close').addEventListener('click', closeTagTooltip);
  //       document.querySelector('.tag-tooltip').addEventListener('click', (e) => {
  //         if (e.target.classList.contains('tag-tooltip')) {
  //           closeTagTooltip();
  //         }
  //       });

  //       // Close on escape key
  //       document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape') {
  //           closeTagTooltip();
  //         }
  //       });
  //     }

  //     function showTagTooltip(tagName, tagInfo) {
  //       document.getElementById('tooltipName').textContent = tagName;
  //       document.getElementById('tooltipIcon').className = tagInfo.icon;
  //       document.getElementById('tooltipDescription').textContent = tagInfo.description;
  //       document.getElementById('tooltipUsage').textContent = tagInfo.usage;

  //       // Create skill bars
  //       const skillBarsContainer = document.getElementById('skillBars');
  //       skillBarsContainer.innerHTML = '';
  //       for (let i = 0; i < 5; i++) {
  //         const bar = document.createElement('div');
  //         bar.className = `skill-bar ${i < tagInfo.skillLevel ? 'active' : ''}`;
  //         skillBarsContainer.appendChild(bar);
  //       }

  //       document.querySelector('.tag-tooltip').classList.add('active');
  //       document.body.style.overflow = 'hidden';
  //     }

  //     function closeTagTooltip() {
  //       document.querySelector('.tag-tooltip').classList.remove('active');
  //       document.body.style.overflow = 'auto';
  //     }

  //     // Setup skill analysis for home section skills
  //     function setupSkillAnalysis() {
  //       document.addEventListener('click', (e) => {
  //         if (e.target.classList.contains('skill-tag')) {
  //           const skillName = e.target.textContent;
  //           const skillInfo = skillAnalysisData[skillName];
            
  //           if (skillInfo) {
  //             showSkillAnalysis(skillName, skillInfo);
  //           }
  //         }
  //       });

  //       // Close skill analysis modal - multiple event listeners for better reliability
  //       const closeBtn = document.querySelector('.skill-analysis-close');
  //       const modal = document.querySelector('.skill-analysis-modal');
        
  //       if (closeBtn) {
  //         closeBtn.addEventListener('click', (e) => {
  //           e.preventDefault();
  //           e.stopPropagation();
  //           closeSkillAnalysis();
  //         });
  //       }
        
  //       if (modal) {
  //         modal.addEventListener('click', (e) => {
  //           if (e.target.classList.contains('skill-analysis-modal')) {
  //             closeSkillAnalysis();
  //           }
  //         });
  //       }

  //       // Close on escape key
  //       document.addEventListener('keydown', (e) => {
  //         if (e.key === 'Escape') {
  //           closeSkillAnalysis();
  //         }
  //       });
  //     }

  //     function showSkillAnalysis(skillName, skillInfo) {
  //       // Set header information
  //       document.getElementById('skillAnalysisName').textContent = skillName;
  //       document.getElementById('skillAnalysisIcon').className = skillInfo.icon;
  //       document.getElementById('skillAnalysisDescription').textContent = skillInfo.description;
        

        
  //       // Set skill level indicator with visual analysis
  //       const levelIcon = document.getElementById('levelIcon');
  //       const levelDescription = document.getElementById('levelDescription');
        
  //       const levelData = getLevelData(skillInfo.level, skillInfo.successPercentage);
  //       levelIcon.innerHTML = levelData.icon;
  //       levelDescription.innerHTML = `
  //         <h6>${levelData.title}</h6>
  //         <p>${levelData.description}</p>
  //       `;
        
  //       // Set metrics
  //       document.getElementById('experienceLevel').textContent = skillInfo.experienceLevel;
  //       document.getElementById('successRate').textContent = skillInfo.successRate;
  //       document.getElementById('projectsUsed').textContent = skillInfo.projectsUsed;
        

        
  //       // Set circular progress charts
  //       const practicalCircle = document.getElementById('practicalCircle');
  //       const theoreticalCircle = document.getElementById('theoreticalCircle');
  //       const problemCircle = document.getElementById('problemCircle');
        
  //       const practicalCirclePercent = document.getElementById('practicalCirclePercent');
  //       const theoreticalCirclePercent = document.getElementById('theoreticalCirclePercent');
  //       const problemCirclePercent = document.getElementById('problemCirclePercent');
        
  //       // Reset circles
  //       practicalCircle.style.background = 'conic-gradient(var(--primary) 0deg, var(--primary) 0deg, rgba(59, 130, 246, 0.1) 0deg)';
  //       theoreticalCircle.style.background = 'conic-gradient(var(--primary) 0deg, var(--primary) 0deg, rgba(59, 130, 246, 0.1) 0deg)';
  //       problemCircle.style.background = 'conic-gradient(var(--primary) 0deg, var(--primary) 0deg, rgba(59, 130, 246, 0.1) 0deg)';
        
  //       practicalCirclePercent.textContent = '0%';
  //       theoreticalCirclePercent.textContent = '0%';
  //       problemCirclePercent.textContent = '0%';
        
  //       // Animate circular progress
  //       setTimeout(() => {
  //         const practicalDegrees = (skillInfo.practicalSkills / 100) * 360;
  //         const theoreticalDegrees = (skillInfo.theoreticalKnowledge / 100) * 360;
  //         const problemDegrees = (skillInfo.problemSolving / 100) * 360;
          
  //         practicalCircle.style.background = `conic-gradient(var(--primary) 0deg, var(--primary) ${practicalDegrees}deg, rgba(59, 130, 246, 0.1) ${practicalDegrees}deg)`;
  //         theoreticalCircle.style.background = `conic-gradient(var(--primary) 0deg, var(--primary) ${theoreticalDegrees}deg, rgba(59, 130, 246, 0.1) ${theoreticalDegrees}deg)`;
  //         problemCircle.style.background = `conic-gradient(var(--primary) 0deg, var(--primary) ${problemDegrees}deg, rgba(59, 130, 246, 0.1) ${problemDegrees}deg)`;
          
  //         // Animate percentage numbers
  //         animatePercentage(practicalCirclePercent, skillInfo.practicalSkills);
  //         animatePercentage(theoreticalCirclePercent, skillInfo.theoreticalKnowledge);
  //         animatePercentage(problemCirclePercent, skillInfo.problemSolving);
  //       }, 300);
        

        
  //       // Show modal
  //       document.querySelector('.skill-analysis-modal').classList.add('active');
  //       document.body.style.overflow = 'hidden';
  //     }

  //     function animatePercentage(element, targetValue) {
  //       let currentValue = 0;
  //       const increment = targetValue / 30; // 30 steps for smooth animation
  //       const interval = setInterval(() => {
  //         currentValue += increment;
  //         if (currentValue >= targetValue) {
  //           currentValue = targetValue;
  //           clearInterval(interval);
  //         }
  //         element.textContent = Math.round(currentValue) + '%';
  //       }, 50);
  //     }

  //     function getLevelData(level, successRate) {
  //       const levelData = {
  //         'master': {
  //           icon: '<i class="fas fa-crown"></i>',
  //           title: 'Expert Level',
  //           description: `Exceptional expertise with ${successRate}% success rate. I can handle complex projects independently and mentor others.`
  //         },
  //         'very-good': {
  //           icon: '<i class="fas fa-star"></i>',
  //           title: 'Advanced',
  //           description: `Strong proficiency with ${successRate}% success rate. I can tackle most challenges effectively.`
  //         },
  //         'good': {
  //           icon: '<i class="fas fa-thumbs-up"></i>',
  //           title: 'Proficient',
  //           description: `Solid understanding with ${successRate}% success rate. I can handle standard projects well.`
  //         },
  //         'intermediate': {
  //           icon: '<i class="fas fa-balance-scale"></i>',
  //           title: 'Intermediate',
  //           description: `Moderate proficiency with ${successRate}% success rate. I can work on projects with some guidance.`
  //         },
  //         'okay': {
  //           icon: '<i class="fas fa-hand-paper"></i>',
  //           title: 'Familiar',
  //           description: `Basic understanding with ${successRate}% success rate. I can handle simple tasks independently.`
  //         },
  //         'below-average': {
  //           icon: '<i class="fas fa-exclamation-triangle"></i>',
  //           title: 'Novice',
  //           description: `Limited proficiency with ${successRate}% success rate. I need more practice and learning.`
  //         }
  //       };
        
  //       return levelData[level] || levelData['intermediate'];
  //     }



  //     function closeSkillAnalysis() {
  //       const modal = document.querySelector('.skill-analysis-modal');
  //       if (modal) {
  //         modal.classList.remove('active');
  //         document.body.style.overflow = 'auto';
          
  //         // Reset any animations or states
  //         setTimeout(() => {
  //           const circles = document.querySelectorAll('.circle-progress');
  //           circles.forEach(circle => {
  //             circle.style.background = 'conic-gradient(var(--primary) 0deg, var(--primary) 0deg, rgba(59, 130, 246, 0.1) 0deg)';
  //           });
            
  //           const percentages = document.querySelectorAll('.circle-percentage');
  //           percentages.forEach(percent => {
  //             percent.textContent = '0%';
  //           });
  //         }, 300);
  //       }
  //     }

  //     // Initialize
  //     initProjects();
  //     setupProjectModals();
  //     setupTagTooltips();
  //     setupSkillAnalysis();
  //     animateProjectCards();

  //     // Highlight Analysis Data
  //     const highlightAnalysisData = {
  //       'fullstack': {
  //         skill: 'Full Stack Development',
  //         percent: '95%',
  //         projects: [
  //           { name: 'LeetCode Platform', tech: 'Flask, JS, MySQL', role: 'Lead Developer' },
  //           { name: 'College ERP', tech: 'Flask, MySQL, Bootstrap', role: 'Full Stack Dev' },
  //           { name: 'Chat App', tech: 'Flask, WebSockets, JS', role: 'Backend & Realtime' }
  //         ],
  //         criteria: [
  //           { label: 'Frontend', value: 95 },
  //           { label: 'Backend', value: 95 },
  //           { label: 'API Integration', value: 90 },
  //           { label: 'Deployment', value: 85 }
  //         ],
  //         comparison: 'Benchmarked against typical junior-to-mid level developer roles and project complexity.',
  //         summary: 'I have built and deployed multiple full-stack applications, managing both client and server sides, which reflects a high proficiency in end-to-end development.'
  //       },
  //       'ai-ml': {
  //         skill: 'AI/ML Solutions',
  //         percent: '65%',
  //         projects: [
  //           { name: 'Advanced Mood <br> Detector', tech: 'Python, Flask, ML', role: 'ML Engineer' },
  //           { name: 'Pass Predictor', tech: 'Python, Flask,<br> Logistic Regression', role: 'ML & Backend' }
  //         ],
  //         criteria: [
  //           { label: 'Model Building', value: 70 },
  //           { label: 'NLP', value: 60 },
  //           { label: 'Deployment', value: 60 },
  //           { label: 'Preprocessing', value: 65 }
  //         ],
  //         comparison: 'Compared with entry-level ML developer standards and my own learning progress.',
  //         summary: 'I have practical experience in building and deploying ML models for real-world applications, but I am still expanding my expertise in advanced algorithms.'
  //       },
  //       'database': {
  //         skill: 'Database Design',
  //         percent: '90%',
  //         projects: [
  //           { name: 'LeetCode Platform', tech: 'MySQL', role: 'DB Designer' },
  //           { name: 'College ERP', tech: 'MySQL', role: 'DB Admin' }
  //         ],
  //         criteria: [
  //           { label: 'Schema Design', value: 92 },
  //           { label: 'Optimization', value: 88 },
  //           { label: 'Querying', value: 90 },
  //           { label: 'Scaling', value: 85 }
  //         ],
  //         comparison: 'Benchmarked against best practices for backend developers and project requirements.',
  //         summary: 'I have strong experience in designing and optimizing databases for scalable applications.'
  //       },
  //       'responsive': {
  //         skill: 'Responsive Design',
  //         percent: '70%',
  //         projects: [
  //           { name: 'Resume Maker', tech: 'HTML, CSS, JS', role: 'UI/UX' },
  //           { name: 'College ERP', tech: 'Bootstrap, CSS', role: 'Frontend' },
  //           { name: 'Chat App', tech: 'HTML, CSS, JS', role: 'Frontend' }
  //         ],
  //         criteria: [
  //           { label: 'Mobile First', value: 70 },
  //           { label: 'Cross-browser', value: 65 },
  //           { label: 'Accessibility', value: 60 },
  //           { label: 'Performance', value: 75 }
  //         ],
  //         comparison: 'Compared with industry standards for responsive web design and my own progress.',
  //         summary: 'I have applied responsive design principles in several projects, ensuring usability across devices, but I am still improving advanced techniques.'
  //       }
  //     };

  //     // Highlight Modal Logic
  //     // Modal configuration for scalability
  //     const MODALS = {
  //       contact: {
  //         modal: document.querySelector('.contact-modal'),
  //         closeBtn: document.querySelector('.contact-modal-close')
  //       },
  //       email: {
  //         modal: document.querySelector('.email-dialog'),
  //         closeBtn: document.querySelector('.email-dialog-close')
  //       },
  //       project: {
  //         modal: document.querySelector('.modal-overlay'),
  //         closeBtn: document.querySelector('.modal-close')
  //       }
  //     };

  //     // General modal close function
  //     function closeModalType(type) {
  //       const { modal } = MODALS[type];
  //       if (modal) {
  //         modal.classList.remove('active');
  //         document.body.style.overflow = 'auto';
  //       }
  //     }

  //     // Attach close events
  //     Object.entries(MODALS).forEach(([type, { modal, closeBtn }]) => {
  //       if (closeBtn) closeBtn.addEventListener('click', () => closeModalType(type));
  //       if (modal) modal.addEventListener('click', (e) => {
  //         if (e.target === modal) closeModalType(type);
  //       });
  //     });

  //     // Keyboard events for all modals
  //     document.addEventListener('keydown', (e) => {
  //       if (e.key === 'Escape') {
  //         Object.keys(MODALS).forEach(type => closeModalType(type));
  //       }
  //     });

  //     // --- BUTTON RIPPLE EFFECT ---
  //     function addRippleEffectToButtons() {
  //       const rippleButtons = document.querySelectorAll('.btn, .expand-btn, .repo-btn');
  //       rippleButtons.forEach(btn => {
  //         btn.addEventListener('click', function(e) {
  //           const rect = btn.getBoundingClientRect();
  //           const ripple = document.createElement('span');
  //           ripple.className = 'ripple';
  //           const size = Math.max(rect.width, rect.height);
  //           ripple.style.width = ripple.style.height = size + 'px';
  //           ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  //           ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  //           btn.appendChild(ripple);
  //           setTimeout(() => ripple.remove(), 600);
  //           // --- Animate icon on click for CTA buttons ---
  //           if (btn.classList.contains('btn')) {
  //             const icon = btn.querySelector('.btn-icon');
  //             if (icon) {
  //               icon.style.animation = 'btn-icon-bounce 0.7s cubic-bezier(0.4,0,0.2,1)';
  //               setTimeout(() => { icon.style.animation = ''; }, 700);
  //             }
  //           }
  //         });
  //       });
  //     }
  //     addRippleEffectToButtons();
  //     // --- PROJECT CARD SCROLL ANIMATION ---
  //     function animateProjectCardsOnScroll() {
  //       const cards = document.querySelectorAll('.project-card');
  //       function onScroll() {
  //         const trigger = window.innerHeight * 0.92;
  //         let delay = 0;
  //         cards.forEach((card, idx) => {
  //           const rect = card.getBoundingClientRect();
  //           if (rect.top < trigger && !card.classList.contains('visible')) {
  //             setTimeout(() => card.classList.add('visible'), delay);
  //             delay += 120; // staggered entrance
  //           }
  //         });
  //       }
  //       window.addEventListener('scroll', onScroll);
  //       onScroll();
  //     }
  //     animateProjectCardsOnScroll();

  //     // Highlight modal data (example, replace with your real data)
  //     const highlightData = {
  //       fullstack: {
  //         heading: 'Full Stack Development',
  //         details: 'Built and deployed multiple full-stack applications, managing both client and server sides.',
  //         criteria: [95, 95, 90, 85],
  //         criteriaLabels: ['Frontend', 'Backend', 'API', 'Deploy'],
  //       },
  //       'ai-ml': {
  //         heading: 'AI/ML Solutions',
  //         details: 'Practical experience in building and deploying ML models for real-world applications.',
  //         criteria: [70, 60, 60, 65],
  //         criteriaLabels: ['Model', 'NLP', 'Deploy', 'Preproc'],
  //       },
  //       database: {
  //         heading: 'Database Design',
  //         details: 'Strong experience in designing and optimizing databases for scalable applications.',
  //         criteria: [92, 88, 90, 85],
  //         criteriaLabels: ['Schema', 'Opt.', 'Query', 'Scale'],
  //       },
  //       responsive: {
  //         heading: 'Responsive Design',
  //         details: 'Applied responsive design principles in several projects, ensuring usability across devices.',
  //         criteria: [70, 65, 60, 75],
  //         criteriaLabels: ['Mobile', 'Cross', 'Access', 'Perf'],
  //       },
  //     };

  //     function openHighlightModal(key) {
  //       const data = highlightData[key];
  //       if (!data) return;
  //       document.getElementById('highlightModalHeading').textContent = data.heading;
  //       document.getElementById('highlightModalDetails').textContent = data.details;
  //       // Set criteria labels and values
  //       for (let i = 0; i < 4; i++) {
  //         document.querySelector(`#circle${i+1} .circle-label`).textContent = data.criteriaLabels[i] || '';
  //         document.querySelector(`#circle${i+1} .circle-value`).textContent = (data.criteria[i] || 0) + '%';
  //       }
  //       // Calculate overall
  //       const avg = Math.round(data.criteria.reduce((a,b)=>a+b,0)/data.criteria.length);
  //       document.getElementById('highlightModalOverall').textContent = avg + '%';
  //       document.getElementById('highlightDetailModal').classList.add('active');
  //     }
  //     function closeHighlightModal() {
  //       document.getElementById('highlightDetailModal').classList.remove('active');
  //     }
  //     // Attach listeners
  //     setTimeout(() => {
  //       document.querySelectorAll('.highlight-item').forEach(item => {
  //         item.addEventListener('click', function() {
  //           const key = this.getAttribute('data-expertise');
  //           openHighlightModal(key);
  //         });
  //       });
  //       document.getElementById('highlightModalClose').onclick = closeHighlightModal;
  //       document.getElementById('highlightDetailModal').onclick = function(e) {
  //         if (e.target === this) closeHighlightModal();
  //       };
  //       document.addEventListener('keydown', function(e) {
  //         if (e.key === 'Escape') closeHighlightModal();
  //       });
  //     }, 100);

  //     // Make info icon tooltip work on tap (mobile)
  //     document.getElementById('highlightModalInfo').addEventListener('click', function(e) {
  //       this.classList.toggle('active');
  //       e.stopPropagation();
  //     });
  //     document.addEventListener('click', function(e) {
  //       document.getElementById('highlightModalInfo').classList.remove('active');
  //     });
  //   });

  // const span = document.getElementById('changer');
  // const words = ["experiences", "applications"];
  // let index = 0;

  // function loopTextChange() {
  //   // Fade out
  //   span.classList.remove("fade-in");
  //   span.classList.add("fade-out");

  //   setTimeout(() => {
  //     // Change text
  //     index = (index + 1) % words.length;
  //     span.textContent = words[index];

  //     // Fade in
  //     span.classList.remove("fade-out");
  //     span.classList.add("fade-in");
  //   }, 500); // Match fade-out duration
  // }

  // // Initial state
  // span.classList.add("fade-in");

  // // Start loop
  // setInterval(loopTextChange, 3000);






































  document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const elements = {
      shimmer: document.getElementById('shimmer'),
      contactModal: document.querySelector('.contact-modal'),
      emailDialog: document.querySelector('.email-dialog'),
      modalOverlay: document.querySelector('.modal-overlay'),
      projectsContainer: document.getElementById('projectsContainer'),
      modalTitle: document.getElementById('modalTitle'),
      modalTags: document.getElementById('modalTags'),
      modalDescription: document.getElementById('modalDescription'),
      modalTech: document.getElementById('modalTech'),
      modalFeatures: document.getElementById('modalFeatures'),
      emailForm: document.getElementById('emailForm'),
      emailSubmitBtn: document.getElementById('emailSubmitBtn'),
      emailMessage: document.getElementById('emailMessage'),
      tagTooltip: document.querySelector('.tag-tooltip'),
      skillAnalysisModal: document.querySelector('.skill-analysis-modal'),
      highlightDetailModal: document.getElementById('highlightDetailModal'),
    };
  
    // Projects Data
    const projects = [
      {
        title: 'LeetCode Platform',
        tags: ['Flask', 'Monaco', 'Judge0', 'Python', 'JavaScript'],
        description: [
          'A full-stack coding platform inspired by LeetCode, featuring a Monaco code editor with syntax highlighting and autocomplete. The platform includes a curated set of coding problems categorized by difficulty and topic.',
          'Integrated with Judge0 API for real-time code execution in multiple programming languages. Implemented user authentication, submission history, and a leaderboard to track top performers.',
        ],
        tech: [
          'Frontend: HTML, CSS, JavaScript, Monaco Editor',
          'Backend: Python, Flask',
          'APIs: Judge0 for code execution',
          'Database: MySQL (for user data and submissions)',
        ],
        features: [
          'Real-time code execution with c/c++ and python languages',
          'Problem categorization by difficulty and topic',
          'User authentication and profile system',
          'Submission history and performance tracking',
          'Leaderboard with ranking system',
        ],
        repo: 'https://github.com/being-souL1230/online-editor',
      },
      {
        title: 'Resume Maker',
        tags: ['HTML', 'CSS', 'JavaScript', 'PDF Generation'],
        description: [
          'An interactive resume builder that allows users to create professional resumes by filling in their information and selecting from multiple templates. The application features a live preview and PDF export functionality.',
          'Implemented a drag-and-drop interface for rearranging sections and real-time preview updates. Added template customization options including color schemes and font choices.',
        ],
        tech: [
          'Frontend: HTML5, CSS3, JavaScript (ES6+)',
          'Libraries: html2pdf.js for PDF generation',
          'Storage: LocalStorage for saving drafts',
          'UI: Custom responsive design',
        ],
        features: [
          'Multiple professionally designed templates',
          'Real-time preview of resume',
          'PDF export with high resolution',
          'Drag-and-drop section rearrangement',
        ],
        repo: 'https://github.com/being-souL1230/resume-maker',
      },
      {
        title: 'College ERP',
        tags: ['Flask', 'MySQL', 'Authentication', 'Bootstrap'],
        description: [
          'A comprehensive College Enterprise Resource Planning system designed to manage student information, courses, grades, and faculty data. The system includes role-based access control for administrators, faculty, and students.',
          'Developed features for course registration, grade submission, attendance tracking, and report generation. Implemented a dashboard with analytics for administrators to monitor institutional performance.',
        ],
        tech: [
          'Frontend: HTML, CSS, JavaScript',
          'Backend: Python, Flask',
          'Database: MySQL',
          'Authentication: Flask-Login with role-based access',
          'Reporting: Chart.js for data visualization',
        ],
        features: [
          'Role-based access control (Admin, Faculty, Student)',
          'Course registration and management',
          'Grade submission and tracking',
          'Attendance management system',
          'Analytics dashboard with institutional metrics',
        ],
        repo: 'https://github.com/being-souL1230/erp-system',
      },
      {
        title: 'Advanced Mood Detector',
        tags: ['Machine Learning', 'NLP', 'Python', 'Flask', 'TF-IDF'],
        description: [
          'An advanced machine learning application that analyzes text input to predict sentiment using sophisticated NLP techniques. The system implements TF-IDF vectorization, Random Forest classification, and advanced text preprocessing including lemmatization and stop word removal.',
          'Features real-time sentiment analysis with detailed ML metrics, emotional intensity scoring, and confidence-based predictions. The model provides comprehensive breakdowns of positive, negative, and neutral sentiment distributions.',
        ],
        tech: [
          'Machine Learning: Python, scikit-learn, Random Forest Classifier',
          'NLP: NLTK, WordNet Lemmatizer, TF-IDF Vectorization',
          'Text Processing: Advanced preprocessing, stop word removal',
          'Backend: Flask API with ML integration',
          'Frontend: Interactive visualization with ML metrics',
        ],
        features: [
          'TF-IDF vectorization for feature extraction',
          'Random Forest classification with confidence scoring',
          'Advanced text preprocessing (lemmatization, stop words)',
          'Emotional intensity and sentiment distribution analysis',
          'Real-time ML metrics and detailed breakdowns',
        ],
        demo: '/demo/mood-detector',
      },
      {
        title: 'Chat App',
        tags: ['Flask', 'WebSockets', 'JavaScript', 'Real-time'],
        description: [
          'A real-time chat application supporting private messaging between users and group chat functionality. The application maintains message history and supports online status indicators.',
          'Implemented WebSocket protocol for real-time communication without page refreshes. Added features like typing indicators, message read receipts, and file sharing capabilities.',
        ],
        tech: [
          'Frontend: HTML, CSS, JavaScript',
          'Backend: Python, Flask',
          'Real-time: Flask-SocketIO, WebSockets',
          'Database: SQLite for message history',
          'Authentication: Session-based',
        ],
        features: [
          'Real-time private and group messaging',
          'Message history persistence',
          'Online/offline status indicators',
          'Typing indicators and read receipts',
          'File sharing capability',
        ],
        repo: null,
      },
      {
        title: 'Pass Predictor',
        tags: ['Machine Learning', 'Logistic Regression', 'Python', 'Flask'],
        description: [
          'A machine learning web app that predicts whether a student will pass or fail based on their study hours, sleep hours, and attendance. Uses Logistic Regression for real-time prediction and confidence scoring.',
          'Interactive demo lets you input values and instantly see the prediction, confidence, and probability breakdown. Built with Flask, scikit-learn, and a modern UI.',
        ],
        tech: [
          'Machine Learning: Python, scikit-learn, Logistic Regression',
          'Feature Scaling: StandardScaler',
          'Backend: Flask API',
          'Frontend: HTML, CSS, JavaScript (interactive form)',
          'Demo: Real-time prediction and confidence bars',
        ],
        features: [
          'Student pass/fail prediction',
          'Probability/confidence visualization',
          'Modern, responsive UI',
          'Instant feedback on input',
          'ML-powered, explainable results',
        ],
        demo: '/demo/pass-predictor',
        repo: null,
      },
    ];
  
    // Constants
    const PROJECT_ICONS = [
      'fas fa-laptop-code',
      'fas fa-file-alt',
      'fas fa-building',
      'fas fa-brain',
      'fas fa-comments',
      'fas fa-chart-line',
    ];
    const PROJECT_YEAR = '2025';
  
    // Tag Tooltip Data
    const tagData = {
      Flask: { icon: 'fas fa-flask', description: 'Python web framework for building scalable applications.', skillLevel: 4, usage: 'Used in LeetCode Platform, College ERP, Mood Detector, and Chat App' },
      Monaco: { icon: 'fas fa-code', description: 'Microsoft\'s code editor used in VS Code.', skillLevel: 3, usage: 'Used in LeetCode Platform for code editor functionality' },
      Judge0: { icon: 'fas fa-gavel', description: 'Open-source code execution system.', skillLevel: 3, usage: 'Used in LeetCode Platform for code execution' },
      Python: { icon: 'fab fa-python', description: 'My secondary programming language.', skillLevel: 5, usage: 'Used in all backend projects and AI/ML applications' },
      JavaScript: { icon: 'fab fa-js-square', description: 'Frontend programming language.', skillLevel: 4, usage: 'Used in all frontend projects and interactive features' },
      HTML: { icon: 'fab fa-html5', description: 'Markup language for structuring web content.', skillLevel: 5, usage: 'Used in all web projects for structure' },
      CSS: { icon: 'fab fa-css3-alt', description: 'Styling language for web design.', skillLevel: 5, usage: 'Used in all web projects for styling' },
      'PDF Generation': { icon: 'fas fa-file-pdf', description: 'Creating PDF documents programmatically.', skillLevel: 3, usage: 'Used in Resume Maker for PDF export' },
      MySQL: { icon: 'fas fa-database', description: 'Relational database management system.', skillLevel: 4, usage: 'Used in LeetCode Platform and College ERP' },
      Authentication: { icon: 'fas fa-user-shield', description: 'User authentication and authorization systems.', skillLevel: 4, usage: 'Used in College ERP and Chat App' },
      Bootstrap: { icon: 'fab fa-bootstrap', description: 'CSS framework for responsive design.', skillLevel: 4, usage: 'Used in College ERP for responsive design' },
      'Machine Learning': { icon: 'fas fa-brain', description: 'AI/ML algorithms and models.', skillLevel: 3, usage: 'Used in Mood Detector and Pass Predictor' },
      NLP: { icon: 'fas fa-language', description: 'Natural Language Processing for text analysis.', skillLevel: 3, usage: 'Used in Mood Detector for text processing' },
      'TF-IDF': { icon: 'fas fa-chart-bar', description: 'Text feature extraction technique.', skillLevel: 3, usage: 'Used in Mood Detector for feature extraction' },
      WebSockets: { icon: 'fas fa-plug', description: 'Real-time bidirectional communication.', skillLevel: 3, usage: 'Used in Chat App for real-time messaging' },
      'Real-time': { icon: 'fas fa-bolt', description: 'Real-time data processing and communication.', skillLevel: 4, usage: 'Used in Chat App and live features' },
      'Logistic Regression': { icon: 'fas fa-chart-line', description: 'Machine learning algorithm for classification.', skillLevel: 3, usage: 'Used in Pass Predictor for student performance prediction' },
    };
  
    // Skill Analysis Data
    const skillAnalysisData = {
      'HTML/CSS/JS': { icon: 'fas fa-code', description: 'Core web technologies for frontend development.', level: 'very-good', levelText: 'Advanced', experienceLevel: '2+ Months', successRate: '100%', projectsUsed: 'All Web Projects', successPercentage: 100, practicalSkills: 100, theoreticalKnowledge: 95, problemSolving: 95 },
      Python: { icon: 'fab fa-python', description: 'My primary programming language.', level: 'very-good', levelText: 'Advanced', experienceLevel: '6+ Months', successRate: '92%', projectsUsed: 'All Backend Projects', successPercentage: 92, practicalSkills: 95, theoreticalKnowledge: 70, problemSolving: 70 },
      'C/C++': { icon: 'fas fa-microchip', description: 'My primary programming language.', level: 'good', levelText: 'Competent', experienceLevel: '1 Year', successRate: '78%', projectsUsed: 'System Projects', successPercentage: 78, practicalSkills: 80, theoreticalKnowledge: 75, problemSolving: 82 },
      Java: { icon: 'fab fa-java', description: 'Object-oriented programming language.', level: 'intermediate', levelText: 'Intermediate', experienceLevel: '3+ Months', successRate: '65%', projectsUsed: 'Academic Projects', successPercentage: 65, practicalSkills: 70, theoreticalKnowledge: 75, problemSolving: 60 },
      Flask: { icon: 'fas fa-flask', description: 'Lightweight Python web framework.', level: 'master', levelText: 'Expert', experienceLevel: '3+ Months', successRate: '95%', projectsUsed: 'Multiple Projects', successPercentage: 95, practicalSkills: 98, theoreticalKnowledge: 92, problemSolving: 95 },
      Django: { icon: 'fab fa-python', description: 'High-level Python web framework.', level: 'intermediate', levelText: 'Intermediate', experienceLevel: '1+ Months', successRate: '70%', projectsUsed: 'Web Applications', successPercentage: 70, practicalSkills: 75, theoreticalKnowledge: 80, problemSolving: 65 },
      MySQL: { icon: 'fas fa-database', description: 'Relational database management system.', level: 'master', levelText: 'Expert', experienceLevel: '6+ Months', successRate: '90%', projectsUsed: 'Database Projects', successPercentage: 90, practicalSkills: 95, theoreticalKnowledge: 88, problemSolving: 92 },
      MongoDB: { icon: 'fas fa-leaf', description: 'NoSQL database.', level: 'okay', levelText: 'Familiar', experienceLevel: '3+ Months', successRate: '60%', projectsUsed: 'Some Projects', successPercentage: 60, practicalSkills: 65, theoreticalKnowledge: 70, problemSolving: 55 },
      'AI/ML': { icon: 'fas fa-brain', description: 'Machine learning and artificial intelligence.', level: 'below-average', levelText: 'Novice', experienceLevel: '3+ Months', successRate: '45%', projectsUsed: 'ML Projects', successPercentage: 45, practicalSkills: 50, theoreticalKnowledge: 60, problemSolving: 40 },
    };
  
    // Highlight Data
    const highlightData = {
      fullstack: {
        heading: 'Full Stack Development',
        details: 'Built and deployed multiple full-stack applications, managing both client and server sides.',
        criteria: [95, 95, 90, 85],
        criteriaLabels: ['Frontend', 'Backend', 'API', 'Deploy'],
      },
      'ai-ml': {
        heading: 'AI/ML Solutions',
        details: 'Practical experience in building and deploying ML models for real-world applications.',
        criteria: [70, 60, 60, 65],
        criteriaLabels: ['Model', 'NLP', 'Deploy', 'Preproc'],
      },
      database: {
        heading: 'Database Design',
        details: 'Strong experience in designing and optimizing databases for scalable applications.',
        criteria: [92, 88, 90, 85],
        criteriaLabels: ['Schema', 'Opt.', 'Query', 'Scale'],
      },
      responsive: {
        heading: 'Responsive Design',
        details: 'Applied responsive design principles in several projects, ensuring usability across devices.',
        criteria: [70, 65, 60, 75],
        criteriaLabels: ['Mobile', 'Cross', 'Access', 'Perf'],
      },
    };
  
    // Initialize Projects
    function initProjects() {
      if (!elements.projectsContainer) return;
      projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
          <h3 class="project-title">${project.title}</h3>
          <div class="project-icon"><i class="${PROJECT_ICONS[index]}"></i></div>
          <div class="project-content">
            <p class="project-desc">${project.description[0].split('.')[0]}.</p>
            <div class="tags">${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
          </div>
          <div class="project-actions">
            <span class="date">${PROJECT_YEAR}</span>
            <div class="project-buttons">
              ${project.demo ? `<a href="${project.demo}" class="repo-btn demo-btn"><i class="fas fa-play"></i> Demo</a>` : ''}
              ${project.repo ? `<a href="${project.repo}" target="_blank" class="repo-btn"><i class="fab fa-github"></i> Github</a>` : ''}
              <button class="expand-btn" data-project="${index}"><i class="fas fa-expand"></i> Details</button>
            </div>
          </div>
        `;
        elements.projectsContainer.appendChild(projectCard);
      });
    }
  
    // Shimmer Effect
    function hideShimmer() {
      if (!elements.shimmer) return;
      setTimeout(() => {
        elements.shimmer.style.opacity = '0';
        setTimeout(() => (elements.shimmer.style.display = 'none'), 300);
      }, 1000);
    }
  
    // Modal Management
    const MODALS = {
      contact: { modal: elements.contactModal, closeBtn: document.querySelector('.contact-modal-close') },
      email: { modal: elements.emailDialog, closeBtn: document.querySelector('.email-dialog-close') },
      project: { modal: elements.modalOverlay, closeBtn: document.querySelector('.modal-close') },
      skill: { modal: elements.skillAnalysisModal, closeBtn: document.querySelector('.skill-analysis-close') },
      highlight: { modal: elements.highlightDetailModal, closeBtn: document.getElementById('highlightModalClose') },
    };
  
    function closeModalType(type) {
      const { modal } = MODALS[type];
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (type === 'skill') resetSkillAnalysis();
      }
    }
  
    function setupModals() {
      Object.entries(MODALS).forEach(([type, { modal, closeBtn }]) => {
        if (closeBtn) closeBtn.addEventListener('click', () => closeModalType(type));
        if (modal) modal.addEventListener('click', (e) => e.target === modal && closeModalType(type));
      });
      document.addEventListener('keydown', (e) => e.key === 'Escape' && Object.keys(MODALS).forEach(closeModalType));
    }
  
    // Email Form Submission
    function setupEmailForm() {
      if (!elements.emailForm) return;
      elements.emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(elements.emailForm);
        const data = Object.fromEntries(formData);
        elements.emailSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        elements.emailSubmitBtn.disabled = true;
        elements.emailMessage.style.display = 'none';
  
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          elements.emailMessage.style.display = 'block';
          elements.emailMessage.style.background = result.success ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)';
          elements.emailMessage.style.color = result.success ? '#22c55e' : '#ef4444';
          elements.emailMessage.style.border = result.success ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)';
          elements.emailMessage.textContent = result.message;
          if (result.success) {
            elements.emailForm.reset();
            setTimeout(() => closeModalType('email'), 2000);
          }
        } catch (error) {
          elements.emailMessage.style.display = 'block';
          elements.emailMessage.style.background = 'rgba(239,68,68,0.1)';
          elements.emailMessage.style.color = '#ef4444';
          elements.emailMessage.style.border = '1px solid rgba(239,68,68,0.3)';
          elements.emailMessage.textContent = 'Network error. Please try again.';
        } finally {
          elements.emailSubmitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Email';
          elements.emailSubmitBtn.disabled = false;
        }
      });
    }
  
    // Project Modals
    function setupProjectModals() {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.expand-btn');
        if (btn) {
          const projectId = parseInt(btn.getAttribute('data-project'));
          showProjectModal(projectId);
        }
      });
    }
  
    function showProjectModal(projectId) {
      const project = projects[projectId];
      if (!project || !elements.modalTitle) return;
      elements.modalTitle.textContent = project.title;
      elements.modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
      elements.modalDescription.innerHTML = project.description.map(para => `<p>${para}</p>`).join('');
      elements.modalTech.innerHTML = project.tech.map(item => `<li>${item}</li>`).join('');
      elements.modalFeatures.innerHTML = project.features.map(item => `<li>${item}</li>`).join('');
      elements.modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    // Tag Tooltips
    function setupTagTooltips() {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
          const tagInfo = tagData[e.target.textContent];
          if (tagInfo) showTagTooltip(e.target.textContent, tagInfo);
        }
      });
      const tooltipClose = document.querySelector('.tag-tooltip-close');
      if (tooltipClose) tooltipClose.addEventListener('click', closeTagTooltip);
      if (elements.tagTooltip) elements.tagTooltip.addEventListener('click', (e) => e.target === elements.tagTooltip && closeTagTooltip);
    }
  
    function showTagTooltip(tagName, tagInfo) {
      if (!elements.tagTooltip) return;
      document.getElementById('tooltipName').textContent = tagName;
      document.getElementById('tooltipIcon').className = tagInfo.icon;
      document.getElementById('tooltipDescription').textContent = tagInfo.description;
      document.getElementById('tooltipUsage').textContent = tagInfo.usage;
      const skillBarsContainer = document.getElementById('skillBars');
      skillBarsContainer.innerHTML = Array.from({ length: 5 }, (_, i) => `<div class="skill-bar ${i < tagInfo.skillLevel ? 'active' : ''}"></div>`).join('');
      elements.tagTooltip.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    function closeTagTooltip() {
      if (elements.tagTooltip) {
        elements.tagTooltip.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    }
  
    // Skill Analysis
    function setupSkillAnalysis() {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('skill-tag')) {
          const skillInfo = skillAnalysisData[e.target.textContent];
          if (skillInfo) showSkillAnalysis(e.target.textContent, skillInfo);
        }
      });
    }
  
    function showSkillAnalysis(skillName, skillInfo) {
      if (!elements.skillAnalysisModal) return;
      document.getElementById('skillAnalysisName').textContent = skillName;
      document.getElementById('skillAnalysisIcon').className = skillInfo.icon;
      document.getElementById('skillAnalysisDescription').textContent = skillInfo.description;
      const levelData = getLevelData(skillInfo.level, skillInfo.successPercentage);
      document.getElementById('levelIcon').innerHTML = levelData.icon;
      document.getElementById('levelDescription').innerHTML = `<h6>${levelData.title}</h6><p>${levelData.description}</p>`;
      document.getElementById('experienceLevel').textContent = skillInfo.experienceLevel;
      document.getElementById('successRate').textContent = skillInfo.successRate;
      document.getElementById('projectsUsed').textContent = skillInfo.projectsUsed;
  
      const circles = [
        { id: 'practicalCircle', percentId: 'practicalCirclePercent', value: skillInfo.practicalSkills },
        { id: 'theoreticalCircle', percentId: 'theoreticalCirclePercent', value: skillInfo.theoreticalKnowledge },
        { id: 'problemCircle', percentId: 'problemCirclePercent', value: skillInfo.problemSolving },
      ];
  
      setTimeout(() => {
        circles.forEach(({ id, percentId, value }) => {
          const circle = document.getElementById(id);
          const percent = document.getElementById(percentId);
          if (circle && percent) {
            const degrees = (value / 100) * 360;
            circle.style.background = `conic-gradient(var(--primary) 0deg, var(--primary) ${degrees}deg, rgba(59, 130, 246, 0.1) ${degrees}deg)`;
            animatePercentage(percent, value);
          }
        });
      }, 300);
  
      elements.skillAnalysisModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    function animatePercentage(element, targetValue) {
      let currentValue = 0;
      const increment = targetValue / 30;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        element.textContent = `${Math.round(currentValue)}%`;
      }, 50);
    }
  
    function getLevelData(level, successRate) {
      const levelData = {
        master: { icon: '<i class="fas fa-crown"></i>', title: 'Expert Level', description: `Exceptional expertise with ${successRate}% success rate.` },
        'very-good': { icon: '<i class="fas fa-star"></i>', title: 'Advanced', description: `Strong proficiency with ${successRate}% success rate.` },
        good: { icon: '<i class="fas fa-thumbs-up"></i>', title: 'Proficient', description: `Solid understanding with ${successRate}% success rate.` },
        intermediate: { icon: '<i class="fas fa-balance-scale"></i>', title: 'Intermediate', description: `Moderate proficiency with ${successRate}% success rate.` },
        okay: { icon: '<i class="fas fa-hand-paper"></i>', title: 'Familiar', description: `Basic understanding with ${successRate}% success rate.` },
        'below-average': { icon: '<i class="fas fa-exclamation-triangle"></i>', title: 'Novice', description: `Limited proficiency with ${successRate}% success rate.` },
      };
      return levelData[level] || levelData.intermediate;
    }
  
    function resetSkillAnalysis() {
      const circles = document.querySelectorAll('.circle-progress');
      const percentages = document.querySelectorAll('.circle-percentage');
      circles.forEach(circle => circle.style.background = 'conic-gradient(var(--primary) 0deg, var(--primary) 0deg, rgba(59, 130, 246, 0.1) 0deg)');
      percentages.forEach(percent => percent.textContent = '0%');
    }
  
    function closeSkillAnalysis() {
      closeModalType('skill');
    }
  
    // Highlight Modal
    function setupHighlightModal() {
      document.querySelectorAll('.highlight-item').forEach(item => {
        item.addEventListener('click', () => openHighlightModal(item.getAttribute('data-expertise')));
      });
      const infoIcon = document.getElementById('highlightModalInfo');
      if (infoIcon) {
        infoIcon.addEventListener('click', (e) => {
          infoIcon.classList.toggle('active');
          e.stopPropagation();
        });
      }
      document.addEventListener('click', () => document.getElementById('highlightModalInfo')?.classList.remove('active'));
    }
  
    function openHighlightModal(key) {
      const data = highlightData[key];
      if (!data || !elements.highlightDetailModal) return;
      document.getElementById('highlightModalHeading').textContent = data.heading;
      document.getElementById('highlightModalDetails').textContent = data.details;
      for (let i = 0; i < 4; i++) {
        const circle = document.querySelector(`#circle${i + 1}`);
        if (circle) {
          circle.querySelector('.circle-label').textContent = data.criteriaLabels[i] || '';
          circle.querySelector('.circle-value').textContent = `${data.criteria[i] || 0}%`;
        }
      }
      const avg = Math.round(data.criteria.reduce((a, b) => a + b, 0) / data.criteria.length);
      document.getElementById('highlightModalOverall').textContent = `${avg}%`;
      elements.highlightDetailModal.classList.add('active');
    }
  
    // Ripple Effect
    function addRippleEffectToButtons() {
      document.querySelectorAll('.btn, .expand-btn, .repo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const rect = btn.getBoundingClientRect();
          const ripple = document.createElement('span');
          ripple.className = 'ripple';
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = `${size}px`;
          ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
          ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
          btn.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
          if (btn.classList.contains('btn')) {
            const icon = btn.querySelector('.btn-icon');
            if (icon) {
              icon.style.animation = 'btn-icon-bounce 0.7s cubic-bezier(0.4,0,0.2,1)';
              setTimeout(() => (icon.style.animation = ''), 700);
            }
          }
        });
      });
    }
  
    // Project Card Animations
    function animateProjectCards() {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 150 * index);
      });
    }
  
    function animateProjectCardsOnScroll() {
      const cards = document.querySelectorAll('.project-card');
      const onScroll = () => {
        const trigger = window.innerHeight * 0.92;
        let delay = 0;
        cards.forEach((card, idx) => {
          if (card.getBoundingClientRect().top < trigger && !card.classList.contains('visible')) {
            setTimeout(() => card.classList.add('visible'), delay);
            delay += 120;
          }
        });
      };
      window.addEventListener('scroll', onScroll);
      onScroll();
    }
  
    // Text Changer
    function setupTextChanger() {
      const span = document.getElementById('changer');
      const words = ['experiences', 'applications'];
      let index = 0;
      span.classList.add('fade-in');
      setInterval(() => {
        span.classList.remove('fade-in');
        span.classList.add('fade-out');
        setTimeout(() => {
          index = (index + 1) % words.length;
          span.textContent = words[index];
          span.classList.remove('fade-out');
          span.classList.add('fade-in');
        }, 500);
      }, 3000);
    }
  
    // Initialize
    initProjects();
    hideShimmer();
    setupModals();
    setupEmailForm();
    setupProjectModals();
    setupTagTooltips();
    setupSkillAnalysis();
    setupHighlightModal();
    animateProjectCards();
    animateProjectCardsOnScroll();
    addRippleEffectToButtons();
    setupTextChanger();
  });