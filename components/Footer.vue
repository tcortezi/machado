<template>
	<footer class="footer">
		<div class="container">
			<div class="columns">
				<div class="column">
					<nuxt-link to="/">
						<img src="~/assets/imgs/logo-footer.png">
					</nuxt-link>
				</div>
				<div class="column is-offset-5">
					<div class="links">
						<h4>Machado</h4>
						<nuxt-link to="/linhas">Linhas</nuxt-link>
						<nuxt-link to="/historia">História</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Fenix</h4>
						<nuxt-link to="/fenix">Conheça</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Contatos</h4>
						<nuxt-link to="/contato">Fale Conosco</nuxt-link>
						<nuxt-link to="/contato">Carreiras</nuxt-link>
					</div>
				</div>
				<div class="column">
					<div class="links">
						<h4>Redes Sociais</h4>
						<div class="social">
							<a href="#">
								<img src="~/assets/imgs/fb.svg">
							</a>
							<a href="#">
								<img src="~/assets/imgs/instagram.svg">
							</a>
							<a href="#">
								<img src="~/assets/imgs/twitter.svg">
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	.social {
		display: flex;
		align-items: center;
		a + a { margin-left: 24px; }
		@media (min-width: 769px) {
			a {
				opacity: .75;
				transition: opacity .3s ease;
				&:hover { opacity: 1; }
			}
		}
	}
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
		> a + a { margin-top: 12px; }
	}
</style>