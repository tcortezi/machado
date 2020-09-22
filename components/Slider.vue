<template>
	<div @mouseenter="pauseTimer" @mouseleave="startTimer">
		<transition-group tag="div" :name="transitionName" class="slides-group">
			<div v-if="show" :key="current" class="slide" :class="slides[current].className">
				<div class="slide-content">
					<h1 v-html="slides[current].title"></h1>
					<nuxt-link :to="slides[current].btnLink" class="slide-button">{{ slides[current].btnText }}</nuxt-link>
				</div>
				<div class="image" v-if="slides[current].image">
					<img :src="require(`~/assets/imgs/home/${slides[current].image}`)">
				</div>
				<div class="pattern" v-if="slides[current].pattern" :style="`background: url('` + require(`~/assets/imgs/home/${slides[current].pattern}`) + `') center/cover no-repeat;`"></div>
				<hr :style="slides[current].hr ? `${slides[current].hr}` : ''" />
			</div>
		</transition-group>
		<div class="btn prev" @click="slide(-1)">
			<slide-nav />
		</div>
		<div class="btn next" @click="slide(1)">
			<slide-nav />
		</div>
	</div>
</template>

<script>
	import SlideNav from '~/assets/imgs/home/slide-nav.svg?inline'
	export default {
		components: {
			SlideNav
		},
		props: ['slides'],
		data() {
			return {
				current: 0,
				direction: 1,
				transitionName: 'fade',
				show: false,
				timer: null
			}
		},
		methods: {
			slide(dir) {
				this.direction = dir
				dir === 1
					? (this.transitionName = 'slide-next')
					: (this.transitionName = 'slide-prev')
				let len = this.slides.length
				this.current = (this.current + dir % len + len) % len
			},
			startTimer() {
				this.timer = setInterval(() => {
					this.slide(1)
				}, 5500)
			},
			pauseTimer() {
	      if (this.timer) {
	          clearInterval(this.timer)
	          this.timer = null
	      }
			}
		},
		mounted() {
			this.show = true
			this.startTimer()
		},
		beforeDestroy() {
			this.pauseTimer()
		}
	}
</script>

<style lang="scss" scoped>
.slides-group {
	position: relative;
}
.slide {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.pattern {
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		mix-blend-mode: lighten;
		opacity: 0.1;
	}
	.slide-content {
		z-index: 30;
	}
	.image {
		z-index: 30;
	}
	hr {
		height: 8px;
    z-index: 30;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: unset;
	}
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translateX(100%);
}
.slide-next-leave-to {
  transform: translateX(-100%);
}
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translateX(-100%);
}
.slide-prev-leave-to {
  transform: translateX(100%);
}
.btn {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 22px;
  position: absolute;
  top: calc(50% - 35px);
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  user-select: none;
}

.next {
  left: auto;
  right: 0;
  > svg { transform: rotate(180deg); }
}

.btn:hover {
  transform: scale(1.1);
}
</style>