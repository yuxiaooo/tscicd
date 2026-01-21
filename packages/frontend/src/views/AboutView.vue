<template>
  <div class="about">
    <div class="card">
      <h1>About This Project</h1>
      <p>
        This is a demonstration of a modern TypeScript fullstack application built with:
      </p>
      
      <div class="tech-stack">
        <div class="tech-section">
          <h3>Frontend</h3>
          <ul>
            <li>Vue.js 3 with Composition API</li>
            <li>TypeScript for type safety</li>
            <li>Vite for fast development</li>
            <li>Vue Router for navigation</li>
            <li>Pinia for state management</li>
            <li>Axios for HTTP requests</li>
          </ul>
        </div>
        
        <div class="tech-section">
          <h3>Backend</h3>
          <ul>
            <li>Express.js with TypeScript</li>
            <li>RESTful API design</li>
            <li>CORS and security middleware</li>
            <li>Structured routing</li>
            <li>Error handling</li>
            <li>Health check endpoints</li>
          </ul>
        </div>
        
        <div class="tech-section">
          <h3>DevOps & CI/CD</h3>
          <ul>
            <li>GitHub Actions workflows</li>
            <li>Docker containerization</li>
            <li>Automated testing</li>
            <li>ESLint and Prettier</li>
            <li>TypeScript compilation</li>
            <li>Multi-stage builds</li>
          </ul>
        </div>
      </div>
      
      <div class="project-structure">
        <h3>Project Structure</h3>
        <pre><code>typescript-fullstack-cicd/
├── packages/
│   ├── frontend/           # Vue.js application
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── Dockerfile
│   ├── backend/            # Express.js API
│   │   ├── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── Dockerfile
│   └── shared/             # Shared TypeScript types
│       ├── src/
│       └── package.json
├── .github/
│   └── workflows/          # CI/CD workflows
├── docker-compose.yml      # Local development
├── package.json            # Root workspace config
└── README.md</code></pre>
      </div>
      
      <div class="features">
        <h3>Key Features</h3>
        <div class="feature-grid">
          <div class="feature">
            <h4>🔧 Monorepo Structure</h4>
            <p>Organized codebase with npm workspaces for better dependency management</p>
          </div>
          <div class="feature">
            <h4>🎯 Type Safety</h4>
            <p>End-to-end TypeScript for better developer experience and fewer bugs</p>
          </div>
          <div class="feature">
            <h4>🚀 Modern Tooling</h4>
            <p>Latest versions of Vue 3, Vite, and Express with best practices</p>
          </div>
          <div class="feature">
            <h4>🔄 CI/CD Pipeline</h4>
            <p>Automated testing, building, and deployment with GitHub Actions</p>
          </div>
          <div class="feature">
            <h4>🐳 Containerization</h4>
            <p>Docker support for consistent development and production environments</p>
          </div>
          <div class="feature">
            <h4>📱 Responsive Design</h4>
            <p>Mobile-friendly interface that works across all devices</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static page
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tech-section h3 {
  color: #667eea;
  margin-bottom: 1rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.tech-section ul {
  list-style: none;
  padding: 0;
}

.tech-section li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.tech-section li:before {
  content: "✓ ";
  color: #28a745;
  font-weight: bold;
}

.project-structure {
  margin: 2rem 0;
}

.project-structure pre {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  overflow-x: auto;
}

.project-structure code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.features {
  margin: 2rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.feature {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.feature h4 {
  margin-bottom: 0.5rem;
  color: #333;
}

.feature p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

h3 {
  color: #333;
  margin: 2rem 0 1rem 0;
}
</style>