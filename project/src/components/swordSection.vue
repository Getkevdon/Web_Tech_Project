<script setup>
import { ref } from 'vue'

const col2 = ref( [
  {
    name: 'European Single-Edged Saber Hanger Sword',
    img: 'sword_img_2.png',
    description: 'Image 2 description specific content here.'
  },
  {
    name: 'Oakeshott Type XIV Arming/Knightly Sword',
    img: 'sword_img_5.png',
    description: 'Image 5 description specific content here.'
  }

])

const col3 = ref( [
  {
    name: 'Two Handed Long Sword - Wire & Leather Wrapped Grip',
    img: 'sword_img_3.png',
    description: 'Image 3 description specific content here.'
  },
  {
    name: 'Silver Gold Medieval Robin Hood',
    img: 'sword_img_6.png',
    description: 'Image 6 description specific content here.'
  }
])

const sword = ref( [
  {
    name: 'Hand-and-a-half Sword with Slim Fuller',
    img: 'sword_img_1.png',
    description: 'The topic of my website will be sword purchasing and sword information website. The information on the website will include period the sword was made, the purpose of their designs and forging methods, the main users of these swords and their country of origin.'
  },{
    name: 'The Accolade Sword of the Knights Templar',
    img: 'sword_img_4.png',
    description: 'Image 4 description specific content here.'
  }

])



const activeToggles = ref( {})

function toggleSword(img) {
  activeToggles.value[img] = !activeToggles.value[img]
}

function getImageUrl(fileName) {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}
</script>

<template>
  <div class="home">
    <section id="image_section">
      <div id="col1">
        <div class="image-toggle-pair" v-for="sword in sword" :key="sword.img">
          <div class="image">
            <button id="image-button" @click="toggleSword(sword.img)">
              <h3>{{sword.name}}</h3>
              <img :src="getImageUrl(sword.img)" :alt="sword.name" />
            </button>
            <p>click image for description (image 1 leads to description of website)</p>
            <div class="toggle_sword" :class="{ active: activeToggles[sword.img] }">
              <p>{{ sword.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="col2">
        <div class="image-toggle-pair" v-for="col2 in col2" :key="col2.img">
          <div class="image">
            <button id="image-button" @click="toggleSword(col2.img)">
              <h3>{{col2.name}}</h3>
              <img :src="getImageUrl(col2.img)" :alt="col2.name" />
            </button>
            <p>click image for description (image 1 leads to description of website)</p>
            <div class="toggle_sword" :class="{ active: activeToggles[col2.img] }">
              <p>{{ col2.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="col3">
        <div class="image-toggle-pair" v-for="col3 in col3" :key="col3.img">
          <div class="image">
            <button id="image-button" @click="toggleSword(col3.img)">
              <h3>{{col3.name}}</h3>
              <img :src="getImageUrl(col3.img)" :alt="col3.name" />
            </button>
            <p>click image for description (image 1 leads to description of website)</p>
            <div class="toggle_sword" :class="{ active: activeToggles[col3.img] }">
              <p>{{ col3.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
.image-toggle-pair {
  margin-bottom: 1.5rem;
}

.image {
  margin-bottom: 0.5rem;
}

.toggle_sword {
  display: none;
}
.toggle_sword.active {
  display: block;
}
</style>
