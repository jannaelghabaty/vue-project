<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
// Get the current route using useRoute from Vue Router
const route = useRoute();

// Ensure the ID is either a string or undefined (handling arrays)
const gameId = ref<string | undefined>(
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id,
);

const game = ref<any>(null);
const loading = ref(true);

const fetchGame = async () => {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId.value}?key=${apiKey}`,
    );
    game.value = response.data;
  } catch (error) {
    console.error("Error fetching game from RAWG API:", error);
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  fetchGame();
});
</script>

<template>
  <div class="game-details" v-if="game">
    <h1 class="game-title">{{ game.name }}</h1>

    <!-- Game background image -->
    <div class="game-header">
      <img
        :src="game.background_image"
        :alt="game.name"
        class="game-background"
      />
    </div>

    <!-- Released date, rating -->
    <div class="game-info">
      <div class="info-box">
        <p><strong>Released: </strong> {{ game.released }}</p>
        <p>
          <strong>Rating: </strong>
          <span class="rating">{{ game.rating }} / 5</span>
          ({{ game.ratings_count }} ratings)
        </p>
      </div>
      <div class="game-meta">
        <!-- Genres -->
        <p>
          <strong>Genres: </strong>
          <span v-for="(genre, index) in game.genres" :key="genre.id">
            {{ genre.name
            }}<span v-if="index < game.genres.length - 1">, </span>
          </span>
        </p>

        <!-- Platforms -->
        <p>
          <strong>Platforms: </strong>
          <span
            v-for="(platform, index) in game.platforms"
            :key="platform.platform.id"
          >
            {{ platform.platform.name
            }}<span v-if="index < game.platforms.length - 1">, </span>
          </span>
        </p>

        <!-- Tags -->
        <p>
          <strong>Tags: </strong>
          <span v-for="(tag, index) in game.tags" :key="tag.id">
            {{ tag.name }}<span v-if="index < game.tags.length - 1">, </span>
          </span>
        </p>
      </div>
    </div>

    <!-- Game description -->
    <div class="game-description">
      <h2>Description</h2>
      <p v-html="game.description"></p>
    </div>
  </div>
  <div style="height: 100%" v-else-if="loading">Loading game details...</div>
  <div style="height: 100%" v-else>
    <p>Game not found.</p>
  </div>
</template>

<style scoped lang="less">
@light-gray: #3c3c3c;
@purple: #9b51e0;
@white: #ffffff;
@vibrant-green: #32cd32;

.game-details {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  color: @white;
  border-radius: 10px;
  margin-top: 2%;
  margin-bottom: 5%;
}

.game-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.game-background {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.game-title {
  font-size: 3rem;
  text-align: center;
  color: @purple;
  margin-bottom: 20px;
}

.game-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.info-box {
  flex-basis: 100%;
  margin-bottom: 20px;
}

.game-meta {
  flex-basis: 100%;
}

.game-meta p {
  margin-bottom: 10px;
}

.rating {
  color: @vibrant-green;
  font-weight: bold;
}

.game-description {
  margin-top: 30px;
}

.game-description h2 {
  font-size: 2rem;
  color: @purple;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .game-info {
    flex-direction: row;
  }

  .info-box {
    flex-basis: 50%;
  }

  .game-meta {
    flex-basis: 50%;
  }

  .game-description {
    padding: 0 20px;
  }
}
</style>
