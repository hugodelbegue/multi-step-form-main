<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SwitchStep from './components/SwitchStep.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="wrapper_sidebar size">
        <Navbar />
      </div>
    </header>

    <main>
      <div class="wrapper_main">
        <div class="wrapper_interface size">
          <RouterView class="interface" />
        </div>
        <div class="wrapper_switchStep size">
          <SwitchStep />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: space-between;

  @media #{$tabletScreen} {
    background-color: var(--second-background);
    height: auto;
    flex-direction: row;
    margin: auto;
    padding: var(--side-desktop);
    border-radius: var(--corner);
    box-shadow: 0 10px 15px -10px var(--shadow-color);
  }
}

.wrapper_sidebar {
  background-image: url(./assets/images/bg-sidebar-mobile.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--side-desktop-double);


  @media #{$tabletScreen} {
    height: 568px;
    width: 274px;
    background-image: url(./assets/images/bg-sidebar-desktop.svg);
    background-color: var(--second-background);
    background-size: auto;

    svg {
      width: auto;
    }
  }
}

.wrapper_main {
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: space-between;

  @media #{$tabletScreen} {
    padding-top: calc(var(--side-desktop) * 2);
    padding-bottom: var(--side-desktop);
    padding-left: var(--side);
    padding-right: calc(var(--side) - var(--side-desktop));
  }
}

.wrapper_interface {
  // TODO: gérer le responsive de l'interface en dessous de 375px
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  @media #{$tabletScreen} {
    position: initial;
    transform: none;
  }
}

.interface {
  background-color: var(--second-background);
  border-radius: var(--corner);
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 15px -10px var(--shadow-color);

  @media #{$tabletScreen} {
    padding: 0;
    box-shadow: none;
  }
}

.wrapper_switchStep {
  background-color: var(--second-background);
  padding: var(--side);
  display: flex;
  place-content: space-between;
  place-items: center;
  box-shadow: 0 -5px 10px -10px var(--shadow-color);

  @media #{$tabletScreen} {
    padding: 0;
    box-shadow: none;
  }
}
</style>
