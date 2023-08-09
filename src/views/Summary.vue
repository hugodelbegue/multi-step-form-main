<template>
    <section>
        <div class="wrapper_interface_content popup_thanks">
            <div class="wrapper_interface_paragraph">
                <h2 class="title">Finishing up</h2>
                <p class="description">Finishing up Double-check everything looks OK before confirming.</p>
            </div>
            <div class="wrapper_summary">
                <div class="summary">
                    <div class="summary_level">LEVEL</div>
                    <hr>
                    <div class="summary_options">OPTIONS</div>
                </div>
                <!-- TODO: dynamiser les données -->
                <div class="summary_total">Total (per month/year)</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wrapper_summary {
    background-color: var(--main-background);
    padding: var(--gap);
    border-radius: var(--corner);
}
</style>