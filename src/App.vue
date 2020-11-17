<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="/assets/l4vr0v-beachball.png" width="30" height="30" >
        </a>
      </div>
   </nav>
   <router-view />
   <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Made by l4vr0v with help from <a href="https://airtable.com/">Airtable</a>, <a href="https://bulma.io">Bulma</a>, and <a href="https://vuejs.org">Vue</a>.
      </p>
    </div>
  </footer>
</div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 128px;
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
