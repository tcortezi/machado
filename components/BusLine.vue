<template>
	<div class="line">
		<div class="main-card" @click="active = !active" :class="active ? 'active' : ''">
			<div class="line-number">{{ line }}</div>
			<div class="route">
				<div class="endpoints">{{ endpoints[0] }} x {{ endpoints[1] }}</div>
				<div class="way going" v-if="way === 'going'">Ida</div>
				<div class="way back" v-else>Volta</div>
				<i class="mdi mdi-chevron-right mdi-24px"></i>
			</div>
		</div>
		<transition name="down">
			<div class="info-card" v-if="active">
				<div class="map">
					<iframe
					:src="`https://www.google.com/maps/d/embed?mid=${mapId}&z=10`" 
					width="254" 
					height="294"
					frameborder="0">
					</iframe>
				</div>
				<div class="info">
					<h3 v-if="way === 'going'">Trajeto de ida</h3>
					<h3 v-else>Trajeto de volta</h3>
					<div class="address">
						{{ addresses.A }}
					</div>
					<div class="address">
						{{ addresses.B }}
					</div>
					<h3>Pontos finais</h3>
					<div v-if="way === 'going'">
						<div class="endpoint"><stop />{{ endpoints[0] }}</div>
						<div class="endpoint"><stop />{{ endpoints[1] }}</div>
					</div>
					<div v-else>
						<div class="endpoint"><stop />{{ endpoints[1] }}</div>
						<div class="endpoint"><stop />{{ endpoints[0] }}</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Stop from '~/assets/imgs/lines/stop.svg?inline'
	export default {
		props: ['line', 'endpoints', 'way', 'addresses', 'mapId'],
		components: {
			Stop
		},
		data() {
			return {
				active: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.down-enter-active {
		transition: transform 0.4s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.3s ease-in .1s, max-height 0.4s ease;
		transform: translateY(0);
		max-height: 600px;
	}
	.down-leave-active {
		transition: transform .1s ease;
	}
	.down-enter, .down-leave-to {
		opacity: 0;
		max-height: 0;
		padding: 0;
		transform: translateY(-20px);
	}
	.line {
		max-width: 604px;
	}
	.info-card {
		margin-top: 1px;
		background: #31363F;
		padding: 24px;
		display: flex;
		align-items: center;
		h3 {
			margin-bottom: 16px;
			&:last-of-type {
				margin-top: 16px;
			}
		}
		.map {
			margin-right: 32px;
			height: 240px;
			width: 254px;
			overflow: hidden;
			box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
			> iframe {
				position: relative;
				top: -54px;
			}
		}
		.address {
			font-size: 14px;
			line-height: 18px;
			color: #A3A6AA;
			max-width: 263px;
			display: flex;
			&::before {
				content: 'B';
				flex: 1 0 auto;
				font-weight: 600;
				font-size: 14px;
				line-height: 14px;
				color: #FAFAFA;
				width: 20px;
				height: 20px;
				max-width: 20px;
				background: #FF3535;
				text-align: center;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				border-radius: 100%;
				margin-right: 8px;
			}
			&:first-of-type {
				&::before {
					content: 'A';
				}
			}
		}
		.address + .address { margin-top: 16px; }
		.endpoint {
			display: flex;
			align-items: center;
			svg { margin-right: 8px; }
		}
		.endpoint + .endpoint { margin-top: 16px; }
		@media (max-width: 769px) {
			flex-direction: column;
			.map { margin: 0 auto; margin-bottom: 24px;}
		}
	}
	.main-card {
		z-index: 30;
		position: relative;
		display: flex;
		align-items: center;
		font-size: 20px;
		line-height: 20px;
		@media (max-width: 769px) {
			font-size: 14px;
			line-height: 14px;
		}
		color: #FAFAFA;
		background: rgba(49, 54, 63, 0.7);
		cursor: pointer;
		transition: all 0.1s ease;
		&.active {
			background: #31363F;
			.route i {
				// transform: rotate(-90deg);
				transform: rotate(90deg) scaleX(-1);
			}
		}
		@media (min-width: 769px) {
			&:hover {
				background: #31363F;
			}
		}
		.line-number {
			border-right: 1px solid #1A202A;
			padding: 24px 24px;
			min-width: 96px;
			min-height: 72px;
			display: flex;
			align-items: center;
			font-weight: bold;
			text-transform: uppercase;
			@media (max-width: 769px) {
				font-size: 16px;
				line-height: 16px;
				min-width: 90px;
			}
		}
		.route {
			width: 100%;
			margin-left: 1px;
			padding-right: 24px;
			@media (max-width: 769px) {
				padding-right: 8px;
			}
			display: flex;
			align-items: center;
			font-weight: normal;
			.endpoints {
				padding: 26px 24px;
				@media (max-width: 769px) {
					padding: 8px;
				}
			}
			.way {
				padding: 8px 32px;
				margin-right: 24px;
				@media (max-width: 769px) {
					&.going { padding: 8px 0; }
					&.back { padding: 8px 0; }
					min-width: 58px;
					text-align: center;
					margin-right: 16px;
				}
				margin-left: auto;
				text-transform: uppercase;
				&.back {
					background: #FF3535;
				}
				&.going {
					background: #0648CC;
				}
			}
			i {
				transition: all 0.3s cubic-bezier(0.87, 0, 0.13, 1);
				transform: rotate(90deg);
			}
		}
	}
</style>