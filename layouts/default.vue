<template>
  <div :class="fixed ? 'fixed' : ''">
    <navbar v-on:menuToggled="fixed = !fixed" />
    <Nuxt />
    <footer-component />
  </div>
</template>

<script>
	import FooterComponent from '~/components/Footer.vue'
  import Navbar from '~/components/Navbar.vue'
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