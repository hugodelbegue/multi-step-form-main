<template>
    <div class="wrapper_button">
        <button class="goback">Go Back</button>
        <button class="nextstep">Next Step</button>
    </div>
</template>

<style lang="scss" scoped>
.wrapper_button {
    width: 100%;
    display: flex;
    place-content: space-between;
}

.goback,
.nextstep {
    padding: 1em;
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-semibold);
    border: none;
    border-radius: var(--corner-button);
}

.goback {
    background-color: transparent;
    color: var(--font-color-text);

    // visibility: hidden;
    @media #{$tabletScreen} {
        padding-left: 0;
    }
}

.nextstep {
    background-color: var(--marine-blue);
    color: var(--font-color-light);
}
</style>