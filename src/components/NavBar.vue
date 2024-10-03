<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const isActiveLInk = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath;
};

function toggleBurgerButton() {
  const navItems = document.querySelectorAll("nav ul li a");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const body = document.body;
  nav?.classList.toggle("nav-active");
  burger?.classList.toggle("toggle");
  body.classList.toggle("menu-open");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav?.classList.remove("nav-active");
      burger?.classList.remove("toggle");
      body.classList.remove("menu-open");
    });
  });
}
</script>

<template>
  <nav>
    <img src="/src/assets/Logo.png" />
    <div class="burger" @click="toggleBurgerButton">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <ul class="nav-links">
      <li>
        <RouterLink to="/" :class="[isActiveLInk('/') ? 'active' : '']"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/gamesLibrary"
          :class="[isActiveLInk('/gamesLibrary') ? 'active' : '']"
          >Games Library</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/about"
          :class="[isActiveLInk('/about') ? 'active' : '']"
          >About</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
$light-gray: #3c3c3c;
$purple: #9b51e0;
$white: #ffffff;

header {
  background-color: $light-gray;
  padding: 0.5rem 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-links {
      display: flex;
      list-style: none;
      justify-content: center;
      padding: 0;

      li {
        margin: 0 1.5rem;

        a {
          color: $white;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          position: relative;
          transition: color 0.3s ease;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: $purple;
            transition:
              width 0.3s ease,
              left 0.3s ease;
          }

          &:hover {
            color: $purple;
          }

          &:hover::before {
            width: 100%;
            left: 0;
          }

          &.active {
            color: $purple;
          }

          &.active::before {
            width: 100%;
            left: 0;
          }
        }
      }
    }

    img {
      height: 50px;
      width: 50px;
      margin-left: 20px;
    }

    // Burger Icon (default hidden for large screens)
    .burger {
      display: none;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
      width: 25px;
      height: 18px;
      margin-right: 20px;
      .line {
        width: 100%;
        height: 3px;
        background-color: $white;
        border-radius: 10px;
        transition: all 0.3s ease;
        margin-right: 10px;
      }

      // Burger animation on toggle
      &.toggle .line:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      &.toggle .line:nth-child(2) {
        opacity: 0;
      }

      &.toggle .line:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
}

// Responsive styles for small screens
@media (max-width: 768px) {
  nav {
    position: relative; // Ensure the navigation is positioned relative to the header

    .nav-links {
      display: none; // Hide the nav-links by default on small screens
      flex-direction: column;
      justify-content: space-evenly !important;
      align-items: flex-start !important;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh; // Full screen height
      background-color: $light-gray;
      z-index: 999; // Make sure it's above other content
      transition: transform 0.3s ease-in-out;
      transform: translateX(100%);

      li {
        margin: 2rem 0; // Add more space between links
        a {
          font-size: 2rem; // Larger font size for better accessibility on mobile
        }
      }
      opacity: 0;
    }

    .nav-active {
      display: flex !important;
      transform: translateX(0);
      opacity: 1;
    }

    .burger {
      display: flex !important; // Show the burger icon on small screens
      z-index: 1000; // Ensure the burger icon is above the nav
    }
  }
}

body.menu-open {
  overflow: hidden; // Disable scrolling
  overflow-y: hidden;
}

html.menu-open {
  overflow: hidden; // Disable scrolling
}

.burger.toggle .line:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.burger.toggle .line:nth-child(2) {
  opacity: 0;
}

.burger.toggle .line:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
