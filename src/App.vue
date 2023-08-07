<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper_header size">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/yourinfo">1</RouterLink>
        <RouterLink to="/selectplan">2</RouterLink>
        <RouterLink to="/addons">3</RouterLink>
        <RouterLink to="/summary">4</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <div class="wrapper_main size">
      <RouterView class="interface" />
    </div>
  </main>

  <footer>
    <div class="wrapper_footer size">
      FOOTER
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.wrapper_header {
  background-image: url(./assets/images/bg-sidebar-mobile.svg);
  background-size: cover;
}

.wrapper_main {
  background-color: red;
}

.interface {
  background: blueviolet;
}

.wrapper_footer {
  background-color: aqua;
}
</style>
