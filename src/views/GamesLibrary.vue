<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import router from "@/router";

const games = ref<any[]>([]);
const loading = ref(true);

const fetchGames = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${apiKey}`,
    );
    games.value = response.data.results;
  } catch (error) {
    console.error("Error fetching games from RAWG API:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchGames();
});

const routeToGame = (gameId: String) => {
  router.push(`/gamesLibrary/${gameId}`);
};
</script>

<template>
  <div class="games">
    <h1>All Games</h1>
    <div v-if="loading" class="loading">Loading games...</div>
    <ul v-else>
      <li v-for="game in games" :key="game.id" @click="routeToGame(game.id)">
        <h3>{{ game.name }}</h3>
        <img :src="game.background_image" alt="game image" width="200" />
        <p>Released: {{ game.released }}</p>
        <p class="rating">Rating: {{ game.rating }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@light-gray: #3c3c3c;
@blue: #00bfff;
@white: #ffffff;
@vibrant-green: #32cd32;

.games {
  padding: 20px;

  h1 {
    color: @white;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.3;
    letter-spacing: 0.02em;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    list-style: none;
    padding: 0;
  }

  li {
    background-color: @light-gray;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    padding: 10px;
    text-align: center;

    &:hover {
      box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.3),
        0 6px 6px rgba(0, 0, 0, 0.15);
      cursor: pointer;
    }

    h3 {
      color: @blue;
      margin-bottom: 10px;
      height: 120px;
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 1.3;
    }

    img {
      border-radius: 10px;
      width: 100%;
      height: 120px;
      transition: transform 0.3s ease;
    }

    p {
      color: @light-gray;
      font-size: 14px;
      margin: 5px 0;
    }

    .rating {
      font-size: 16px;
      color: @vibrant-green;
      font-weight: bold;
    }
  }
}

.loading {
  color: @vibrant-green;
  text-align: center;
  font-size: 20px;
  height: 100vh;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

ul li {
  animation: fadeIn 0.5s ease forwards;
}
</style>
