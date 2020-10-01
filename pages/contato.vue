<template>
	<div>
		<hero img="contato.jpg" />
		<section class="section">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-10">
						<h2>Contato</h2>
						<div class="columns mt-4">
							<div class="column is-5">
								<form @submit.prevent="submitForm">
					        <b-field label="Nome">
					            <b-input v-model="name"
						            icon="account"
					            	placeholder="Seu nome">
					            </b-input>
					        </b-field>
					        <b-field label="Email">
					            <b-input v-model="email"
					            	type="email"
					            	icon="email"
					            	validation-message="Preencha seu email corretamente"
					            	placeholder="seu@email.com">		
					            </b-input>
					        </b-field>
					        <b-field label="Telefone">
					            <b-input v-model="phone"
						            icon="phone"
					            	placeholder="(DDD) 9 9999-9999">		
					            </b-input>
					        </b-field>
					        <b-field
					            label="Assunto">
					            <b-select placeholder="Selecione" v-model="subject" expanded>
					                <option value="machado">Machado</option>
					                <option value="fenix">Fenix</option>
					                <option value="carreira">Carreira</option>
					            </b-select>
					        </b-field>
					        <b-field label="Mensagem">
					            <b-input v-model="text" maxlength="200" type="textarea" placeholder="Escreva sua mensagem">
					            </b-input>
					        </b-field>
					        <button
					        	type="submit"
					        	class="button"
										:class="{
											'is-loading': isLoading,
											'is-success': submitted
										}"
										:disabled="submitted">
					        	Enviar
					        </button>
								</form>
							</div>
							<div class="column is-5 is-offset-2 contacts">
								<div>
									<img src="~/assets/imgs/contact/phone.svg">
									<span>21 2739-1566</span>
								</div>
								<div class="mt-6">
									<img src="~/assets/imgs/contact/pin.svg">
									<span>
										R. Paulo Lavoier S/N - Piabetá <br />
										Magé/RJ <br />
										25931-754
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	const url = '/api/contact'
	export default {
		data() {
			return {
				name: '',
				email: '',
				phone: '',
				subject: '',
				text: '',
				isLoading: false,
				submitted: false
			}
		},
		methods: {
			submitForm() {
				this.isLoading = true
				this.$axios.$post(url, {
					name: this.name,
					email: this.email,
					phone: this.phone,
					subject: this.subject,
					text: this.text
				}).then((response) => {
					this.isLoading = false
					this.submitted = true
					this.$buefy.toast.open({
						message: 'Recebemos sua mensagem!',
						type: 'is-success',
						duration: 4000
					})
				}).catch((error) => {
					this.isLoading = false
					this.$buefy.toast.open({
						message: 'Algo deu errado!',
						type: 'is-danger',
						duration: 4000
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@media (max-width: 769px) {
	.columns.mt-4 {
		display: flex;
		flex-direction: column;
		> div:first-child { order: 9; }
	}
}
	.contacts {
		div {
			display: flex;
			align-items: flex-start;
		}
		img { margin-right: 8px; }
	}
  .button {
    margin-top: 16px;
    border: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #0648CC;
    height: 64px;
    width: 264px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
    transition: all 0.2s cubic-bezier(0.61, 1, 0.88, 1);
    @media only screen and (min-width: 769px) {
      &:hover {
        transform: scale(1.015);
        box-shadow: 0px 4.96184px 7.61997px rgba(0, 0, 0, 0.100132), 0px 2.43239px 3.73545px rgba(0, 0, 0, 0.0798677), 0px 0.96177px 1.477px rgba(0, 0, 0, 0.0558033);
      }
    }
  }
</style>