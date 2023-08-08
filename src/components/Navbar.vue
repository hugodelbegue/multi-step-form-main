<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="wrapper_nav">
            <div class="step">
                <RouterLink to="/your-info">1</RouterLink>
                <div class="step_description">
                    <span class="step_number">step&nbsp;1</span>
                    <span class="step_title">your&nbsp;info</span>
                </div>
            </div>
            <div class="step">
                <RouterLink to="/select-plan">2</RouterLink>
                <div class="step_description">
                    <span class="step_number">step&nbsp;2</span>
                    <span class="step_title">select&nbsp;plan</span>
                </div>
            </div>
            <div class="step">
                <RouterLink to="/addons">3</RouterLink>
                <div class="step_description">
                    <span class="step_number">step&nbsp;3</span>
                    <span class="step_title">add-ons</span>
                </div>
            </div>
            <div class="step">
                <RouterLink to="/summary">4</RouterLink>
                <div class="step_description">
                    <span class="step_number">step&nbsp;4</span>
                    <span class="step_title">summary</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.wrapper_nav {
    display: flex;
    place-content: center;
    gap: var(--gap);
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

        @media #{$tabletScreen} {
            font-size: .85em;
        }
    }

    .step {
        display: flex;
        place-items: center;
        gap: var(--gap);
    }

    .step_description {
        display: none;

        @media #{$tabletScreen} {
            display: flex;
            flex-direction: column;
        }

        .step_number,
        .step_title {
            text-transform: uppercase;
            line-height: 1.3;
        }

        .step_number {
            color: var(--font-color-text);
            font-size: .8em;
            font-weight: var(--font-regular);
        }

        .step_title {
            color: var(--font-color-light);
            letter-spacing: 1px;
        }
    }

    .router-link-active {
        background-color: var(--step-color);
        color: var(--font-color-dark);
        border-color: var(--step-color);
    }
}
</style>