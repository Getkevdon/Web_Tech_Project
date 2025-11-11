<script setup>
import { ref } from 'vue'
import SwordSection from './components/swordSection.vue'
import logo from '@/assets/Project_logo.png'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const navActive = ref(false)

function toggleNav() {
  navActive.value = !navActive.value
}
</script>

<template>
  <div class="app">
    <header>
      <div id="logo">
        <img :src="logo" alt="logo" />
      </div>
      <div id="nav">
        <button id="toggle" @click="toggleNav">
          <font-awesome-icon icon="bars" />
        </button>
      </div>
      <div id="nav-bar" :class="{ active: navActive }">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </div>

    </header>
    <main>
      <SwordSection />
    </main>
    <footer>
    </footer>
  </div>
</template>

<style scoped>
#logo img {
  width: 50%;
}

.app img {
  width: 100%;
}

header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2rem;
}

#nav-bar {
  display: none;
}

#nav-bar.active {
  display: flex;
  flex-direction: column;
}
</style>
