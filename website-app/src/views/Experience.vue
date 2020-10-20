<template>
  <div class="content">
    <div>
    <h1>Tech stack</h1>
    <div class="container" style="--m: 8; --tan: 0.41">
      
      <div v-if="vueInfo" class="text">
        <div>
          <h2>Vue</h2>
          <p>6 months experience.</p>
        </div>
      </div>
      <div v-else-if="reactInfo" class="text">
        <div>
          <h2>React</h2>
          <p>6 months experience.</p>
        </div>
      </div>
      <div v-else-if="angularInfo" class="text">
        <div>
          <h2>Angular</h2>
          <p>1 year and 6 months experience.</p>
        </div>
      </div>
      <div v-else-if="cssInfo" class="text">
        <div>
          <h2>CSS3</h2>
          <p>3 years experience.</p>
        </div>
      </div>
      <div v-else-if="javascriptInfo" class="text">
        <div>
          <h2>JavaScript</h2>
          <p>3 years experience.</p>
        </div>
      </div>
      <div v-else-if="typescriptInfo" class="text">
        <div>
          <h2>Typescript</h2>
          <p>1 year and 6 months experience.</p>
        </div>
      </div>
      <div v-else-if="nodejsInfo" class="text">
        <div>
          <h2>NodeJS</h2>
          <p>1 year and 6 months experience.</p>
        </div>
      </div>
      <div v-else-if="htmlInfo" class="text">
        <div>
          <h2>HTML5</h2>
          <p>3 years experience.</p>
        </div>
      </div>
      <div v-else class="text">
        <div>
          <h2>Hover an icon</h2>
          <p>to see details.</p>
        </div>
      </div>
      <a @mouseover="vueInfo = true" @mouseleave="vueInfo = false" style="--i: 1">
        <img src="../assets/vue.svg" alt="Vue icon"/>
      </a>
      <a @mouseover="reactInfo = true" @mouseleave="reactInfo = false" style="--i: 2">
        <img src="../assets/react.svg" alt="React icon"/>
      </a>
      <a @mouseover="angularInfo = true" @mouseleave="angularInfo = false" style="--i: 3">
        <img src="../assets/angular.svg" alt="Angular icon"/>
      </a>
      <a @mouseover="cssInfo = true" @mouseleave="cssInfo = false" style="--i: 4">
        <img src="../assets/css.svg" alt="CSS icon"/>
      </a>
      <a @mouseover="javascriptInfo = true" @mouseleave="javascriptInfo = false" style="--i: 5">
        <img src="../assets/javascript.svg" alt="JavaScript icon"/>
      </a>
      <a @mouseover="typescriptInfo = true" @mouseleave="typescriptInfo = false" style="--i: 7">
        <img src="../assets/typescript.svg" alt="TypeScript icon"/>
      </a>
      <a @mouseover="nodejsInfo = true" @mouseleave="nodejsInfo = false" style="--i: 6">
        <img src="../assets/nodejs.svg" alt="NodeJS icon"/>
      </a>
      <a @mouseover="htmlInfo = true" @mouseleave="htmlInfo = false" style="--i: 8">
        <img src="../assets/html.svg" alt="HTML icon"/>
      </a>
    </div>
    </div>
  </div>
</template>

<style scoped>
 .content {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  .content div {
    max-width: 700px;
  }

  h1 {
    text-align: center;
    margin-bottom: 5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  .container {
    --image-size: 5em;
    --space-between: 1; /* how much extra space we want between images, 1 = one image size */
    --circle-radius: calc(.5*(1 + var(--space-between))*var(--image-size)/var(--tan));
    --container-size: calc(2*var(--circle-radius) + var(--image-size));
    position: relative;
    width: var(--container-size); height: var(--container-size);
  }

  .container a {
    position: absolute;
    top: 50%; left: 50%;
    margin: calc(-.5*var(--image-size));
    width: var(--image-size); height: var(--image-size);
    --az: calc(var(--i)*1turn/var(--m));
    transform: 
      rotate(var(--az)) 
      translate(var(--circle-radius))
      rotate(calc(-1*var(--az)))
  }

  .container div.text {
    display: grid;
    place-items: center;
    height: 100%;
    text-align: center;
  }

  img {
    max-width: 100%;
    transition: ease-in-out .1s;
  }

  img:hover {
    width: 120%;
    max-width: 120%;
    margin: -10%;
  }
</style>

<script>
export default {
  name: 'Landing',
  data: () => ({
    vueInfo: false,
    reactInfo: false,
    angularInfo: false,
    cssInfo: false,
    javascriptInfo: false,
    typescriptInfo: false,
    nodejsInfo: false,
    htmlInfo: false
  })
}
</script>