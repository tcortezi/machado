<template>
  <div>
    <navbar :isTransparent="true" />
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
  	}
  }
</script>