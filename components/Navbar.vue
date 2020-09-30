<template>
	<nav :class="isTransparent ? 'transparent' : ''">
		<div class="container-fluid" :class="isMenuActive ? 'mobileActive' : ''">
			<nuxt-link to="/" class="logo">
				<img src="~/assets/imgs/logo.png">
			</nuxt-link>
			<div class="mobileMenu" @click="toggleMenu" :class="isMenuActive ? 'active' : ''"></div>
			<div class="items" @click="closeMenu">
				<nuxt-link to="/linhas">Linhas</nuxt-link>
				<nuxt-link to="#">Fenix</nuxt-link>
				<nuxt-link to="/historia">História</nuxt-link>
				<nuxt-link to="#">Contato</nuxt-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		props:['isTransparent'],
		data() {
			return {
				isMenuActive: false
			}
		},
		methods: {
			toggleMenu() {
				this.isMenuActive = !this.isMenuActive
				this.$emit('menuToggled')
			},
			closeMenu() {
				if(this.isMenuActive) {
					this.toggleMenu()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mobileMenu {
		@media(min-width: 769px) {
			display: none;
		}
		&::before {
			content: '';
			width: 30px;
			height: 3px;
			background-color: #fafafa;
			display: block;
			transition: transform .3s ease;
		}
		&::after {
			content: '';
			width: 30px;
			height: 3px;
			background-color: #fafafa;
			display: block;
			margin-top: 8px;
			transition: transform .3s ease;
		}
		&.active {
			&::before {
				transform: rotate(45deg);
			}
			&::after {
				transform: rotate(-45deg);
				margin-top: -3px;
			}
		}
	}
	nav {
		position: relative;
		z-index: 40;
		background-color: #151A22;
		transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
		&.transparent {
			background-color: transparent;
		}
	}
	.container-fluid {
		&.mobileActive {
			background-color: #151A22;
		}
		transition: all .3s ease;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 32px;
		@media (max-width: 769px) {
			padding: 16px 20px;
		}
		.items a {
			font-weight: 300;
			font-size: 16px;
			line-height: 19px;
			text-transform: uppercase;
			color: #CFD5E1;
			display: inline-block;
			transition: all 0.1s cubic-bezier(0.45, 0, 0.55, 1);
			transform-origin: center;
			@media (min-width: 769px) {
				&:hover, &.nuxt-link-active { color: #ffffff; }
			}
		}
		.items a:not(:last-child) {
			margin-right: 32px;
			@media(max-width: 769px) {
				margin-bottom: 32px;
			}
		}
	}

	.items {
		@media (max-width: 769px) {
			position: absolute;
			z-index: 100;
			top: 88px;
			left: 0;
			width: 100%;
			height: 100vh;
			background-color: #151A22;
			display: flex;
			flex-direction: column;
			padding: 40px;
			transform: scaleY(0);
			transform-origin: top;
			transition: transform .3s ease .1s;
			> a { opacity: 0; transition: opacity .2s ease; }
		}
	}
	.mobileMenu.active + .items {
		@media (max-width: 769px) {
			transform: scaleY(1);
			> a { opacity: 1; transition: opacity .3s ease .1s; }
		}
	}
</style>