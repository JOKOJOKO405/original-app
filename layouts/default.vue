<template>
  <v-app>
    <v-main>
      <Header />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
