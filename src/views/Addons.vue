<script setup>
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
</script>

<template>
    <section>
        <div class="wrapper_interface_content">
            <div class="wrapper_interface_paragraph">
                <h2 class="title">Pick add-ons</h2>
                <p class="description">Add-ons help enhance your gaming experience.</p>
            </div>
            <div class="wrapper_addons">
                <input type="checkbox" name="service" id="service" class="checkbox" checked>
                <label for="service" class="label_options">
                    <div class="option">
                        <div class="checkcube">
                            <IconCheckmark class="checkmark" />
                        </div>
                        <div class="option_text">
                            <div class="option_name">Online service</div>
                            <div class="option_description">Access to multiplayer games</div>
                        </div>
                    </div>
                    <div class="option_price">+$1/mo</div>
                </label>
                <input type="checkbox" name="storage" id="storage" class="checkbox" checked>
                <label for="storage" class="label_options">
                    <div class="option">
                        <div class="checkcube">
                            <IconCheckmark class="checkmark" />
                        </div>
                        <div class="option_text">
                            <div class="option_name">Larger storage</div>
                            <div class="option_description">Extra 1TB of cloud save</div>
                        </div>
                    </div>
                    <div class="option_price">+$2/mo</div>
                </label>
                <input type="checkbox" name="profile" id="profile" class="checkbox">
                <label for="profile" class="label_options">
                    <div class="option">
                        <div class="checkcube">
                            <IconCheckmark class="checkmark" />
                        </div>
                        <div class="option_text">
                            <div class="option_name">Customizable profile</div>
                            <div class="option_description">Custom theme on your profile</div>
                        </div>
                    </div>
                    <div class="option_price">+$2/mo</div>
                </label>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wrapper_addons {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
}

.label_options {
    display: flex;
    place-content: space-between;
    place-items: center;
    padding: var(--gap);
    border: 1px solid var(--font-color-text);
    border-radius: var(--corner);
    transition: background-color var(--time), border-color var(--time);
}

.option {
    display: flex;
    place-items: center;
    gap: var(--gap);
}

.checkcube {
    --corner: 4px;
    display: flex;
    place-content: center;
    place-items: center;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid var(--font-color-text);
    border-radius: var(--corner);
    transition: background-color var(--time), border-color var(--time);

    .checkmark {
        visibility: hidden;
    }
}

.option_name {
    // font-size: 1.1em;
    font-weight: var(--font-bold);
}

.option_description {
    color: var(--font-color-text);
    font-size: .9em;
}

.option_price {
    color: var(--border-color);
    font-weight: var(--font-regular);
    font-size: .9em;
}

.checkbox:checked+.label_options {
    background-color: var(--main-background);
    border-color: var(--border-color);
}

.checkbox:checked+.label_options .option .checkcube {
    background-color: var(--border-color);
    border-color: var(--border-color);

    .checkmark {
        visibility: visible;
    }
}
</style>