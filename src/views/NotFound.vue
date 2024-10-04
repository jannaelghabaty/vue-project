<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>

    <!-- Button to go back to home -->
    <RouterLink to="/" class="home-button">Go Back Home</RouterLink>
  </div>
</template>

<style scoped lang="less">
@light-gray: #3c3c3c;
@purple: #9b51e0;
@white: #ffffff;

.not-found {
  text-align: center;
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
  color: @white;

  h1 {
    font-size: 4rem;
    color: @purple;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .home-button {
    background-color: @purple;
    color: @white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: lighten(@purple, 10%);
    }
  }

  .error-image {
    margin-top: 30px;
    width: 300px;
  }
}
</style>
