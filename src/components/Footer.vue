<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const isActiveLInk = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath;
};

const currentYear = new Date().getFullYear();
let startYear: number;
const checkYear = () => {
  if (currentYear !== 2024) {
    startYear = 2024;
    return true;
  }
  return false;
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Footer Navigation -->
      <nav class="footer-nav">
        <RouterLink to="/" :class="[isActiveLInk('/') ? 'active' : '']"
          >Home</RouterLink
        >
        <RouterLink
          to="/gamesLibrary"
          :class="[isActiveLInk('/gamesLibrary') ? 'active' : '']"
          >Games Library</RouterLink
        >
        <RouterLink
          to="/about"
          :class="[isActiveLInk('/about') ? 'active' : '']"
          >About</RouterLink
        >
      </nav>

      <!-- Social Media Links -->
      <div class="footer-social">
        <a
          href="https://github.com/jannaelghabaty/"
          target="_blank"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297C5.37.297 0 5.665 0 12.297c0 5.292 3.438 9.798 8.205 11.385.6.111.82-.261.82-.58v-2.165c-3.338.726-4.033-1.611-4.033-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.086-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.81 1.304 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.825 1.096.825 2.205v3.27c0 .33.225.705.825.58C20.565 22.085 24 17.58 24 12.297 24 5.665 18.63.297 12 .297z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jannaelghabaty"
          target="_blank"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.25V1.75C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.68c-1.14 0-2.05-.92-2.05-2.05s.91-2.05 2.05-2.05 2.05.92 2.05 2.05-.91 2.05-2.05 2.05zM20.45 20.45h-3.53v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.53V9h3.39v1.56h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.21 2.34 4.21 5.38v6.34z"
            />
          </svg>
        </a>
        <a
          href="mailto:janna.elghabaty@gmail.com"
          target="_blank"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2.4 0l9.6 6 9.6-6H2.4zM22 18.8V6.267l-9.6 6.267L2.4 6.267V18.8h19.6z"
            />
          </svg>
        </a>
      </div>

      <!-- Copyright Notice -->
      <div class="footer-copyright">
        <p>
          &copy;
          <span v-if="checkYear()">{{ startYear }} - </span>
          {{ currentYear }} Janna Elghabaty. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$light-gray: #3c3c3c;
$purple: #9b51e0;
$white: #ffffff;

.footer {
  background-color: $light-gray;
  color: $white;
  padding: 4rem 2rem;
  text-align: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  /* Footer Navigation */
  .footer-nav {
    display: flex;
    gap: 2rem;

    a {
      color: $white;
      font-size: 1.2rem;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: $purple;
      }
    }
    .active {
      color: $purple;
    }
  }

  /* Social Media Icons */
  .footer-social {
    display: flex;
    gap: 1.5rem;

    a {
      width: 40px;
      height: 40px;
      display: inline-block;
      transition:
        transform 0.3s ease,
        fill 0.3s ease;

      svg {
        width: 100%;
        height: 100%;
        fill: $white;
      }

      &:hover {
        transform: translateY(-5px);
        svg {
          fill: $purple;
        }
      }
    }
  }

  /* Copyright */
  .footer-copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    .footer-nav {
      flex-direction: column;
      gap: 1rem;
    }

    .footer-social {
      justify-content: center;
    }
  }
}
</style>
