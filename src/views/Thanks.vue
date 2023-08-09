<script setup>
import IconThankyou from '@/components/icons/IconThankyou.vue'
</script>

<template>
    <section>
        <div class="wrapper_interface_content popup_thanks">
            <IconThankyou />
            <div class="wrapper_interface_paragraph">
                <h2 class="title">Thanks you!</h2>
                <p class="description">Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free to email us
                    at support@loremgaming.com.</p>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.popup_thanks {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
}
</style>
