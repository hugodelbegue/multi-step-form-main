<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="wrapper_nav">
            <RouterLink to="/your-info">1</RouterLink>
            <RouterLink to="/select-plan">2</RouterLink>
            <RouterLink to="/addons">3</RouterLink>
            <RouterLink to="/summary">4</RouterLink>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.wrapper_nav {
    display: flex;
    place-content: center;
    gap: 1rem;
    padding-top: var(--side-double);
    padding-bottom: calc(var(--side-double) + 5rem);

    @media #{$tabletScreen} {
        flex-direction: column;
        padding: 0;
    }

    a {
        display: flex;
        place-content: center;
        place-items: center;
        background-color: transparent;
        color: var(--font-color-light);
        font-weight: var(--font-bold);
        border: 1px solid var(--font-color-light);
        width: 2.5em;
        height: auto;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    .router-link-active {
        background-color: var(--step-color);
        color: var(--font-color-dark);
        border-color: var(--step-color);
    }
}
</style>