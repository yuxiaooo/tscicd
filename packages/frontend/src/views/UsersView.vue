<template>
  <div class="users">
    <div class="header">
      <h1>Users Management</h1>
      <button class="btn" :disabled="loading" @click="loadUsers">
        <span v-if="loading" class="loading"></span>
        <span v-else>Refresh Users</span>
      </button>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div class="user-form card">
      <h3>Add New User</h3>
      <form @submit.prevent="createUser">
        <div class="form-group">
          <input
            v-model="newUser.name"
            type="text"
            placeholder="Name"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <input
            v-model="newUser.email"
            type="email"
            placeholder="Email"
            required
            class="form-input"
          />
        </div>
        <button type="submit" class="btn" :disabled="creating">
          <span v-if="creating" class="loading"></span>
          <span v-else>Add User</span>
        </button>
      </form>
    </div>

    <div class="users-list">
      <div v-if="users.length === 0 && !loading" class="card">
        <p>No users found. Add some users to get started!</p>
      </div>

      <div v-for="user in users" :key="user.id" class="user-card card">
        <div class="user-info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <small>ID: {{ user.id }}</small>
        </div>
        <div class="user-actions">
          <button class="btn" @click="viewUser(user.id)">View</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { apiService } from "../services/api";
import type { User } from "@shared/types";

const users = ref<User[]>([]);
const loading = ref(false);
const creating = ref(false);
const error = ref("");

const newUser = ref({
  name: "",
  email: "",
});

const loadUsers = async () => {
  loading.value = true;
  error.value = "";

  try {
    const response = await apiService.getUsers();
    users.value = response.data.data;
  } catch (err) {
    error.value = "Failed to load users. Make sure the backend is running.";
    console.error("Failed to load users:", err);
  } finally {
    loading.value = false;
  }
};

const createUser = async () => {
  creating.value = true;
  error.value = "";

  try {
    const response = await apiService.createUser(newUser.value);
    users.value.push(response.data.data);
    newUser.value = { name: "", email: "" };
  } catch (err) {
    error.value = "Failed to create user.";
    console.error("Failed to create user:", err);
  } finally {
    creating.value = false;
  }
};

const viewUser = async (id: string) => {
  try {
    const response = await apiService.getUser(id);
    alert(`User Details:\n${JSON.stringify(response.data.data, null, 2)}`);
  } catch (err) {
    error.value = "Failed to load user details.";
    console.error("Failed to load user:", err);
  }
};

onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
.users {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.user-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.users-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.user-info h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.user-info p {
  color: #666;
  margin-bottom: 0.25rem;
}

.user-info small {
  color: #999;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: stretch;
  }

  .user-card {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .user-actions {
    justify-content: center;
  }
}
</style>
