<template>
	<div>
    <b-carousel
      :pause-info="false"
      :arrow="true"
      :arrow-hover="false"
      :indicator="false"
      :interval="5000"
      :autoplay="true"
      :has-drag="true"
      :animated="animation"
      class="slider"
    >
	    <b-carousel-item v-for="(slide, i) in slides" :key="i" class="slide" :class="slide.className">
	    	<div class="slide-content">
	    		<h1 v-html="slide.title"></h1>
	    		<nuxt-link :to="slide.btnLink" class="slide-button">{{ slide.btnText }}</nuxt-link>
	    	</div>
	    	<div class="image">
	    		<img :src="require(`~/assets/imgs/home/${slide.image}`)">
	    	</div>
	    	<div class="pattern" v-if="slide.pattern" :style="`background: url('` + require(`~/assets/imgs/home/${slide.pattern}`) + `') center/cover no-repeat;`"></div>
	    	<hr :style="slide.hr ? `${slide.hr}` : ''" />
	    </b-carousel-item>
		</b-carousel>
    <section class="section home">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <img src="~/assets/imgs/home/historia.png">
          </div>
          <div class="column">
            <h2 class="mb-5">{{ new Date().getFullYear() - 1991 }} anos de tradição</h2>
            <p class="mb-4 pb-4">
              Atualmente operamos linhas municipais e intermunicipais ligando os bairros dos município de <strong>Duque de Caxias</strong> aos bairros de <strong>Magé</strong>, além do expresso Fênix que é a opção ideal para turismo, eventos e viagens. Possuímos uma frota com mais de <strong>100 carros</strong> com média de 4 anos, 150 funcionários e <strong>mais de 1 milhão de usuários por mês</strong> viajando em nossas 12 linhas.
            </p>
            <nuxt-link to="#">Conheça nossa história -></nuxt-link>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
	export default {
		layout: 'Home',
		data() {
			return {
				animation: 'fade',
				slides: [
          { className: 'first', title: 'Conforto, segurança <br /><span>e design</span>', btnText: 'Conheça nossas linhas', btnLink: '/linhas', image: 'slide1.png', pattern: 'pattern1.jpg', hr: 'background: linear-gradient(90deg, #021D52 0%, #0648CC 36.46%, #FF0303 100%);' },
          { className: 'second', title: '<span>A melhor opção para</span> Turismo, Eventos e Viagens', btnText: 'Conheça o expresso fenix', btnLink: '#', image: 'slide2.png', pattern: 'pattern2.jpg', hr: 'background: linear-gradient(90deg, #FABB2E 0%, #D73E0D 100%);' }
				]
			}
		},
		mounted() {
			setTimeout(() => this.animation = 'slide', 400)
		}
	}
</script>

<style lang="scss">
	.slider {
		height: 728px;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.slide {
		height: 728px;
		padding: 169px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		hr {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 8px;
			z-index: 30;
			margin: unset;
		}
		.pattern {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			mix-blend-mode: lighten;
			opacity: 0.1;
			z-index: 0;
		}
		.slide-content { z-index: 30; }
		@media only screen and (max-width: 769px) {
			flex-direction: column;
			padding-top: 202.8px;
			padding-bottom: 135.2px;
		}
    .slide-button {
      margin-top: 32px;
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
      transition: all 0.3s cubic-bezier(0.61, 1, 0.88, 1);
      @media only screen and (min-width: 769px) {
        &:hover {
          transform: scale(1.015);
          box-shadow: 0px 28px 43px rgba(0, 0, 0, 0.18), 0px 10.2205px 15.6957px rgba(0, 0, 0, 0.124197), 0px 4.96184px 7.61997px rgba(0, 0, 0, 0.100132), 0px 2.43239px 3.73545px rgba(0, 0, 0, 0.0798677), 0px 0.96177px 1.477px rgba(0, 0, 0, 0.0558033);
        }
      }
    }
		h1 { text-transform: uppercase; }
		.image { max-width: 80vw; z-index: 30; }
		&.first {
			background: linear-gradient(93.76deg, #010B1F 48.07%, #021D52 96.76%);
			h1 {
				max-width: 265px;
				span { color: #FF3535; }
			}
			.slide-content {
				order: 9;
				margin-top: 64px;
				@media only screen and (min-width: 769px) {
					order: 0;
					margin-right: 128px;
					margin-top: unset;
				}
			}
		}
		&.second {
			background: linear-gradient(90deg, #0D1015 0%, #1A202A 100%);
			.slide-content {
				order: 9;
				margin-top: 64px;
				@media only screen and (min-width: 769px) {
					margin-top: unset;
					margin-left: 64px;
				}
			}
			h1 {
				max-width: 397px;
				@media only screen and (max-width: 769px) {
					max-width: 80vw;
				}
				span {
					font-weight: normal;
					font-size: 20px;
					line-height: 56px;
					text-transform: uppercase;
					color: #D73E0D;
					@media only screen and (max-width: 769px) {
						line-height: 46px;
					}
				}
			}
			.slide-button {
				background: #FABB2E;
			}
		}
	}
	.section.home {
		margin-top: 656px;
	}
</style>