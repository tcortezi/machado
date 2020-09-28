<template>
  <div>
    <navbar />
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
  	}
  }
</script>