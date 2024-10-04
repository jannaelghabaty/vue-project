<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import router from "@/router";
// Define props to receive the game's embedUrl
const props = defineProps<{ embedUrl: string }>();

// Animation state
const iframeVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    iframeVisible.value = true;
  }, 200);
});

const backToHomePage = () => {
  router.push("/");
};
</script>

<template>
  <div class="full-screen-game">
    <!-- Fade-in animation for iframe when it's fully loaded -->
    <iframe
      v-if="iframeVisible"
      :src="props.embedUrl"
      frameborder="0"
      allowfullscreen
      class="full-screen-iframe"
      title="Full Screen Game"
    ></iframe>
    <!-- Loading state while iframe is hidden -->
    <div v-else class="loading-message">Loading the game...</div>
    <button class="back-button" @click="backToHomePage">Back to Home</button>
  </div>
</template>

<style scoped lang="less">
@purple: #9b51e0;

.full-screen-game {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
  padding: 20px;
  position: relative;
  overflow: hidden;
  flex-direction: column;
}

/* Animation for smooth iframe appearance */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.full-screen-iframe {
  width: 90%;
  height: 90%;
  border: none;
  border-radius: 12px;
  animation: fadeIn 0.5s ease-out;
}

/* Loading message when iframe is not visible */
.loading-message {
  font-size: 1.5rem;
  color: #fff;
  animation: pulse 1.5s infinite;
}

/* Pulse animation for loading message */
@keyframes pulse {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}

.back-button {
  background-color: @purple;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  width: 30%;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: darken(@purple, 20%);
}

/* Media query for mobile responsiveness */
@media (max-width: 768px) {
  .full-screen-iframe {
    width: 100%;
    height: 80%;
  }
}

@media (max-width: 480px) {
  .full-screen-iframe {
    width: 100%;
    height: 75%;
  }
}
</style>
