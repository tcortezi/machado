<template>
	<nav :class="isTransparent ? 'transparent' : ''">
		<div class="container-fluid">
			<nuxt-link to="/" class="logo">
				<img src="~/assets/imgs/logo.png">
			</nuxt-link>
			<div class="items">
				<nuxt-link to="/linhas">Linhas</nuxt-link>
				<nuxt-link to="#">Fenix</nuxt-link>
				<nuxt-link to="#">História</nuxt-link>
				<nuxt-link to="#">Contato</nuxt-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		props:['isTransparent']
	}
</script>

<style lang="scss" scoped>
	nav {
		position: relative;
		z-index: 30;
		background-color: #151A22;
		transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
		&.transparent {
			background-color: transparent;
		}
	}
	.container-fluid {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 32px;
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
</style>