<template>
	<footer class="footer">
		<div class="container">
			<div class="columns">
				<div class="column">
					<img src="~/assets/imgs/logo-footer.png">
				</div>
				<div class="column is-offset-5">
					<div class="links">
						<h4>Machado</h4>
						<nuxt-link to="#">Linhas</nuxt-link>
						<nuxt-link to="#">História</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Fenix</h4>
						<nuxt-link to="#">Conheça</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Contatos</h4>
						<nuxt-link to="#">Fale Conosco</nuxt-link>
						<nuxt-link to="#">Carreiras</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Redes Sociais</h4>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	.links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		h4 { margin-bottom: 1rem; }
		a {
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 15px;
			text-transform: uppercase;
			color: #A3A6AA;
			@media (min-width: 769px) {
				&:hover { color: #fafafa; }
			}
		}
		a + a { margin-top: 12px; }
	}
</style>