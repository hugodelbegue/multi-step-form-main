<script setup>
import IconArcade from '@/components/icons/IconArcade.vue'
import IconAdvanced from '@/components/icons/IconAdvanced.vue'
import IconPro from '@/components/icons/IconPro.vue'
</script>

<template>
  <section>
    <div class="wrapper_interface_content">
      <div class="wrapper_interface_paragraph">
        <h2 class="title">Select your plan</h2>
        <p class="description">You have the option of monthly or yearly billing.</p>
      </div>
      <div class="wrapper_plan">
        <div class="choice_levels">
          <input type="radio" name="radio" id="arcade" class="radio" value="arcade" checked>
          <label for="arcade" class="label_levels">
            <IconArcade />
            <div class="level">
              <div class="level_name">Arcade</div>
              <div class="level_price">$9/mo</div>
            </div>
          </label>
          <input type="radio" name="radio" id="advanced" class="radio" value="advanced">
          <label for="advanced" class="label_levels">
            <IconAdvanced />
            <div class="level">
              <div class="level_name">Advanced</div>
              <div class="level_price">$12/mo</div>
            </div>
          </label>
          <input type="radio" name="radio" id="pro" class="radio" value="pro">
          <label for="pro" class="label_levels">
            <IconPro />
            <div class="level">
              <div class="level_name">Pro</div>
              <div class="level_price">$15/mo</div>
            </div>
          </label>
        </div>
        <div class="frequency">
          <span class="monthly">Monthly</span>
          <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
          <label for="checkbox" class="halo">
            <div class="ball"></div>
          </label>
          <span class="yearly">Yearly</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  --corner: 10px;
}

.wrapper_plan {
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) * 2);
}

.choice_levels {
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  @media #{$tabletScreen} {
    flex-direction: row;
  }
}

.label_levels {
  display: flex;
  place-items: center;
  gap: var(--gap);
  padding: var(--gap);
  border: 1px solid var(--select-color);
  border-radius: var(--corner);
  transition: background-color var(--time), border-color var(--time);

  @media #{$tabletScreen} {
    flex-direction: column;
    place-items: flex-start;
    width: 100%;
  }
}

.level {
  @media #{$tabletScreen} {
    padding-top: 1.5em;
  }
}

.level_name {
  font-size: 1.1em;
  font-weight: var(--font-bold);
}

.level_price {
  color: var(--font-color-text);
  font-weight: var(--font-regular);
}

.radio:checked+.label_levels {
  background-color: var(--main-background);
  border-color: var(--border-color);
}

.frequency {
  background-color: var(--main-background);
  display: flex;
  place-content: center;
  place-items: center;
  gap: 2em;
  padding: 1em;
  border-radius: var(--corner);
}

.halo {
  --size: 1.4em;
  background-color: var(--font-color-dark);
  display: flex;
  place-items: center;
  height: var(--size);
  width: calc(var(--size) * 2);
  border-radius: var(--size);

  .ball {
    background-color: var(--second-background);
    height: calc(var(--size) - .4em);
    width: calc(var(--size) - .4em);
    border-radius: var(--size);
    transform: translateX(4px);
    transition: transform var(--time);
  }
}

.yearly {
  color: var(--font-color-text);
}

.checkbox:checked+.halo .ball {
  transform: translateX(25px);
}

// .checkbox:checked+.monthly {
//   color: var(--font-color-text);
// }

// .checkbox:checked+.yearly {
//   color: var(--font-color-dark);
// }
</style>
