<template>
  <q-page
    id="container"
  >
    <!-- quick-nav -->
    <q-carousel
      v-model="slide"
      color="amber"
      id="carousel"
      infinite
      :autoplay="autoplay"
    >
      <q-carousel-slide
        v-for="(slide, i) in slides"
        class="flex flex-center slides"
        :img-src="slide"
        :key="i"
      />
    </q-carousel>
    <q-scroll-area
      id="divText"
    >
      <p
        v-for="(para, i) in paras"
        :key="i"
      >
      {{ para }}
      </p>
    </q-scroll-area>
    <leaf-maps
      id="maps"
    />
  </q-page>
</template>

<script>
import area from '../assets/area.jpeg'
import areaPeixes from '../assets/area_peixes.jpg'
import banquete from '../assets/banquete.jpg'
import fundo from '../assets/fundo5.jpg'
import piscina from '../assets/piscina1.jpg'
import ruaFrente from '../assets/rua_frente.jpg'
import sofa from '../assets/sofa.jpg'

const LeafMaps = () => import(/* webpackChunkName: "maps" */'../components/maps')

export default {
  name: 'PageHome',
  components: { LeafMaps },
  data: () => ({
    autoplay: true,
    paras: [],
    slide: 0
  }),
  computed: {
    fundo () {
      return fundo
    },
    slides () {
      return [
        sofa,
        areaPeixes,
        piscina,
        area,
        banquete,
        ruaFrente
      ]
    }
  },
  head: {
    meta: [
      { name: 'description', content: 'Venha conhecer o hotel águas claras de raposo' },
      { name: 'keywords', content: 'hotel,águas,claras,raposo' },
      { name: 'robots', content: 'index,follow' }
    ],
    title: () => ({
      inner: 'Águas claras'
    })
  },
  created () {
    const queries = ['type=all-meat', 'paras=5', 'start-with-lorem=1']
    const url = 'https://baconipsum.com/api/'

    /* eslint-disable no-console */
    fetch(`${url}?${queries.join('&')}`, {})
      .then(res => res.json())
      .then(data => {
        this.paras = [...data]
      })
      .catch(console.warn)
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #424242;

#container {
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
  'carousel text0'
  'map      text0';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(100px, max-content) 300px;
  height: 1fr;
  margin: 25px;
  row-gap: 10px;

  #carousel {
    background-color: $bg-color;
    grid-area: carousel;
    height: 300px;
  }

  #divText {
    box-sizing: border-box;
    grid-area: text0;
    height: 80vh;
    margin: 0 0 0 25px;
  }

  #maps {
    grid-area: map;
    margin: 0 auto;
  }

  .slides {
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
}

@media screen and (max-width: 680px) {
  #container {
    grid-template-areas:
    'carousel'
    'text0'
    'map';
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    margin: 10px 25px;
    row-gap: 15px;

    #carousel {
      height: 150px !important;
    }

    #divText {
      height: 20vh;
      margin: 0;
    }
  }
}
</style>
