<script setup>
</script>

<template>
  <section>
    <div class="wrapper_interface_content">
      <div class="wrapper_interface_paragraph">
        <h2 class="title">Personal info</h2>
        <p class="description">Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <div class="wrapper_infos">
          <div class="input">
            <label for="name">Name</label>
            <input class="name" type="text" name="name" id="name" placeholder="e.g. Stephen King">
          </div>
          <div class="input">
            <label for="email">Email Address</label>
            <input class="email" type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com">
          </div>
          <div class="input">
            <label for="phone">Phone Number</label>
            <input class="phone" type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890">
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-top: var(--gap);

  &:first-child {
    margin-top: 0;
  }

  label {
    font-size: .9em;
  }
}

.name,
.email,
.phone {
  --corner: 4px;
  background-color: inherit;
  padding: 1em;
  font-family: var(--font-family);
  font-weight: var(--font-semibold);
  font-size: 1em;
  border: 1px solid var(--select-color);
  border-radius: var(--corner);

  &::placeholder {
    color: var(--font-color-text);
    font-weight: var(--font-semibold);
  }
}
</style>
