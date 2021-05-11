<template>
  <div class="no-tasks">
    <v-icon class="pa-6" size="100" color="primary">mdi-check</v-icon>
    <div class="pa-7 text-h5 primary--text">Brak Zadań</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 50%
</style>