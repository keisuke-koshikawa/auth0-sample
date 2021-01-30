<template>
  <div v-if="!auth.loading.value">
    <button v-if="!auth.isAuthenticated.value" @click="handleLogin">Log in</button>
    <div v-if="auth.isAuthenticated.value">
      <button @click="handleLogout">Log out</button>
      <p>{{ auth.user.value.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const auth = inject<any>('$auth')

    return {
      auth,
      handleLogin: () => {
        auth.loginWithRedirect()
      },
      handleLogout: () => {
        auth.logout({
          returnTo: window.location.origin
        })
      }
    }
  }
})
</script>
