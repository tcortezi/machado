<template>
  <div>
    <slider class="slider" :slides="sliders" />
  </div>
</template>

<script>
  import Slider from '~/components/Slider.vue'
  export default {
    layout: 'Home',
    data() {
      return {
        sliders: [
          { className: 'first', title: 'Conforto, segurança <span>e design</span>', btnText: 'Conheça nossas linhas', btnLink: '/linhas', image: 'slide1.png', pattern: 'pattern1.jpg', hr: 'background: linear-gradient(90deg, #021D52 0%, #0648CC 36.46%, #FF0303 100%);' },
          { className: 'second', title: '<span>A melhor opção para</span> Turismo, Eventos e Viagens', btnText: 'Conheça o expresso fenix', btnLink: '#', image: 'slide2.png', pattern: 'pattern2.jpg', hr: 'background: linear-gradient(90deg, #FABB2E 0%, #D73E0D 100%);' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .slider {
    width: 100%;
    height: 728px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide {
    height: 728px;
    padding: 169px 0;
    .slide-content {
      h1 {
        text-transform: uppercase;
        color: #FFFFFF;
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
      }
    }
    .image {
      max-width: 585px;
    }
    &.first {
      background: linear-gradient(93.76deg, #010B1F 48.07%, #021D52 96.76%);
      .slide-content {
        margin-right: 128px;
        h1 {
          > span { color: #FF3535; }
          max-width: 265px;
        }
      }
    }
    &.second {
      background: linear-gradient(90deg, #0D1015 0%, #1A202A 100%);
      .slide-content {
        order: 9;
        margin-left: 128px;
        h1 {
          > span {
            font-weight: normal;
            font-size: 20px;
            line-height: 56px;
            color: #D73E0D;
          }
          max-width: 397px;
        }
        .slide-button {
          background: #FABB2E;
        }
      }
      .image { max-width: 518px; }

    }
  }
</style>