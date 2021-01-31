<template>
  <button @click="handleGetChirps">Get Chirps</button>
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
import { getChirps } from '@/api/chirp'

export default defineComponent({
  name: 'Home',
  setup () {
    const auth = inject<any>('$auth')

    let chirps = {}

    const handleGetChirps = async () => {
      const res = await auth.getTokenSilently()
      await getChirps(res).then((res) => {
        chirps = res
      })
    }

    return {
      auth,
      handleGetChirps,
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
