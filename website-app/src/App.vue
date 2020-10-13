<template>
  <nav v-bind:class="{ 'color-nav': $route.path !== '/' }">
    <div>
      <router-link class="index-nav-link" to="/">Thomas Maneschijn</router-link>
      <ul>
        <router-link class="white-nav-link" to="/about">About</router-link>
        <router-link class="white-nav-link" to="/experience">Experience</router-link>
        <router-link class="green-nav-link" to="/get-in-touch">Get in touch</router-link>
      </ul>
    </div>
  </nav>
  <main><router-view/></main>
</template>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F1F1F1;
}

nav {
  position: fixed;
  width: 100vw;
  z-index: 2;
}

nav div {
  padding: 30px;
}

nav ul {
  float: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 15px;
  margin: 0 5px;
}

nav a.white-nav-link {
  background-color: #fff;
  border-radius: 50px;
  transition: ease-in-out .1s;
}

nav a.green-nav-link {
  background-color: #2BD88C;
  border-radius: 50px;
  color: #fff;
  transition: ease-in-out .1s;
}

nav a.white-nav-link:hover {
  background-color: rgb(209, 209, 209);
}

nav a.green-nav-link:hover {
  background-color: #1cb472;
}

nav a.router-link-exact-active.index-nav-link {
  display: none;
}

nav a.router-link-exact-active.white-nav-link {
  color: #42b983;
}

nav a.router-link-exact-active.green-nav-link {
  background-color: #1cb472;
}

.color-nav {
  background-color: #F1F1F1;
}

main {
  min-height: 100vh;
}
</style>
