<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

interface Game {
  id: number;
  title: string;
  embedUrl?: string;
}

// Define the array of games with types
const games = ref<Game[]>([
  {
    id: 1,
    title: "Sushi Master",
    embedUrl: "https://cdn.htmlgames.com/SushiMasterMatch3/",
  },
  {
    id: 2,
    title: "Pyramid Solitaire",
    embedUrl: "https://cdn.htmlgames.com/PyramidSolitaire-GreatPyramid/",
  },
  {
    id: 3,
    title: "Goblin Run",
    embedUrl: "https://cdn.htmlgames.com/GoblinRun/",
  },
  {
    id: 4,
    title: "Escape Room",
    embedUrl: "https://cdn.htmlgames.com/EscapeRoom-HomeEscape/",
  },
  {
    id: 5,
    title: "Planet Shooter",
    embedUrl: "https://cdn.htmlgames.com/PlanetShooter/",
  },
  {
    id: 6,
    title: "Find the Odd One Out",
    embedUrl: "https://cdn.htmlgames.com/FindTheOddOneOut/",
  },
  {
    id: 7,
    title: "The Watermelon Game",
    embedUrl: "https://cdn.htmlgames.com/TheWatermelonGame/",
  },
  {
    id: 8,
    title: "Balloon Maze",
    embedUrl: "https://cdn.htmlgames.com/BalloonMaze/",
  },
]);

const goToGame = (game: Game) => {
  router.push({
    name: "playGame",
    params: { id: game.id },
    query: { embedUrl: game.embedUrl }, // Passing the embedUrl as state
  });
};
</script>

<template>
  <div class="home-view">
    <!-- Hero Section with a Title -->
    <section class="hero">
      <h1 class="title">Welcome to the Games Hub</h1>
      <p class="subtitle">Pick a game and start playing!</p>
    </section>

    <!-- Games Grid -->
    <section class="games-grid">
      <div
        class="game-card"
        v-for="(game, index) in games"
        :key="index"
        @click="goToGame(game)"
      >
        <h2 class="game-title">{{ game.title }}</h2>
        <iframe
          v-if="game.embedUrl"
          :src="game.embedUrl"
          frameborder="0"
          allowfullscreen
          class="game-iframe"
          title="Embedded Game"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
@light-gray: #3c3c3c;
@blue: #00bfff;
@white: #ffffff;
@vibrant-green: #32cd32;

.home-view {
  padding: 20px;
  text-align: center;
  margin-bottom: 5%;
}

.hero {
  margin-bottom: 40px;

  h1 {
    margin-top: 3%;
  }
}

.title {
  font-size: 2.5rem;
  color: @blue;
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.game-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.game-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.game-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: @blue;
  height: 20%;
}

.game-iframe {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  pointer-events: none;
}

.game-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.game-link:hover {
  background-color: #2980b9;
}
</style>
