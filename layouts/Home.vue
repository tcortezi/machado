<template>
  <div :class="fixed ? 'fixed' : ''">
    <navbar :isTransparent="true" v-on:menuToggled="fixed = !fixed" />
    <Nuxt />
    <footer-component />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import FooterComponent from '~/components/Footer.vue'
  export default {
  	components: {
  		FooterComponent
  	},
    data() {
      return {
        fixed: false
      }
    }
  }
</script>