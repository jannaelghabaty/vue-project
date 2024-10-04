<script setup></script>

<template>
  <div class="about-page">
    <!-- Introduction Section -->
    <section class="intro">
      <h1>About This Project</h1>
      <p>
        This website is a practice project where I experiment with Vue.js to
        enhance my skills and explore various web development techniques. It
        serves as a sandbox for trying out new ideas and concepts in web
        development.
      </p>
    </section>

    <!-- Technologies Section -->
    <section class="technologies">
      <h2>Technologies Used</h2>
      <ul>
        <li>Vue.js 3</li>
        <li>Vue Router</li>
        <li>Axios for API requests</li>
        <li>SCSS/LESS for styling</li>
        <li>Vue Composition API</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>RAWG API for game data</li>
      </ul>
    </section>

    <!-- Goals Section -->
    <section class="goals">
      <h2>Project Goals</h2>
      <p>With this project, I aim to:</p>
      <ul>
        <li>
          Practice advanced Vue.js concepts like routing, API integration, and
          state management.
        </li>
        <li>Enhance my understanding of component-based architecture.</li>
        <li>
          Experiment with dynamic styling and responsive design techniques.
        </li>
      </ul>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h2>Want to Learn More About Me?</h2>
      <p>
        To know more about me and view my complete portfolio, check out my main
        website below.
      </p>
      <a
        href="https://jannaelghabaty.github.io/"
        target="_blank"
        class="portfolio-button"
        >Visit My Portfolio</a
      >
    </section>

    <!-- GitHub Repository -->
    <section class="github">
      <h2>Check Out the Code</h2>
      <p>You can find the source code for this project on GitHub:</p>
      <a
        href="https://github.com/jannaelghabaty/vue-project"
        target="_blank"
        class="github-button"
        >View on GitHub</a
      >
    </section>
  </div>
</template>

<style scoped lang="less">
@light-gray: #3c3c3c;
@blue: #00bfff;
@white: #ffffff;
@green: #32cd32;

.about-page {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  color: @white;
  margin-top: 3%;
  margin-bottom: 5%;
}

h1,
h2 {
  color: @blue;
  margin-bottom: 20px;
}

ul {
  margin-left: 20px;
  list-style: disc;
}

p {
  margin-bottom: 20px;
}

.intro p,
.goals p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.technologies {
  margin-bottom: 20px;
}

.cta {
  margin-top: 40px;
}

.portfolio-button,
.github-button {
  background-color: @blue;
  color: @white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.portfolio-button:hover,
.github-button:hover {
  background-color: darken(@blue, 20%);
}

.github {
  margin-top: 30px;
}
</style>
