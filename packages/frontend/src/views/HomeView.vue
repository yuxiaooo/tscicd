<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to TypeScript Fullstack</h1>
      <p>A modern monorepo with Vue.js, Express.js, and CI/CD</p>
      <div class="hero-actions">
        <RouterLink to="/users" class="btn">View Users</RouterLink>
        <button @click="checkHealth" class="btn" :disabled="loading">
          <span v-if="loading" class="loading"></span>
          <span v-else>Check Backend Health</span>
        </button>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>🚀 Vue.js 3</h3>
        <p>Modern frontend framework with Composition API and TypeScript support</p>
      </div>
      <div class="feature-card">
        <h3>⚡ Express.js</h3>
        <p>Fast and minimalist backend framework with TypeScript</p>
      </div>
      <div class="feature-card">
        <h3>🔧 CI/CD</h3>
        <p>Automated testing, building, and deployment with GitHub Actions</p>
      </div>
      <div class="feature-card">
        <h3>🐳 Docker</h3>
        <p>Containerized deployment for consistent environments</p>
      </div>
    </div>

    <div v-if="healthStatus" class="card">
      <h3>Backend Health Status</h3>
      <pre>{{ JSON.stringify(healthStatus, null, 2) }}</pre>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { apiService } from '../services/api'

const loading = ref(false)
const healthStatus = ref(null)
const error = ref('')

const checkHealth = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await apiService.checkHealth()
    healthStatus.value = response.data
  } catch (err) {
    error.value = 'Failed to connect to backend. Make sure the server is running on port 3000.'
    console.error('Health check failed:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  text-align: left;
  overflow-x: auto;
}
</style>