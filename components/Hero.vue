<template>
	<div class="hero" :style="`background: linear-gradient(180deg, rgba(21, 26, 34, 0) 0%, #151A22 100%), url(${require('~/assets/imgs/heros/' + img)}) center/cover no-repeat;`">
		<hr :class="fenix ? 'fenix' : ''" />
	</div>
</template>

<script>
	export default {
		props: ['img', 'fenix']
	}
</script>

<style lang="scss" scoped>
	.hero {
		position: relative;
		height: 328px;
		hr {
			background: linear-gradient(90deg, #021D52 0%, #0648CC 36.46%, #FF0303 100%);
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 8px;
			z-index: 30;
			margin: unset;
			&.fenix {
				background: linear-gradient(90deg, #FABB2E 0%, #D73E0D 100%);
			}
		}
	}
</style>