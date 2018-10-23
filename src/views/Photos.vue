<template>
  <q-page id="container">
    <h5 id="title">Fotos</h5>
    <div
      v-for="({ area, text }, i) in createPhotoAreas"
      :id="area"
      :key="i"
      :style="{ 'grid-area': area }"
    >
      <div class="domain-img" />
      <p style="margin-top: 8px; text-align: center;">{{ text }}<p/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'photos',
  computed: {
    createPhotoAreas () {
      return [{
        area: 'area_forro',
        text: 'Forró no salão de danças em frente à piscina'
      },
      {
        area: 'queijos',
        text: 'Queijos e vinhos oferecidos durante o forró'
      },
      {
        area: 'piscinas',
        text: 'Piscina para adultos e crianças'
      },
      {
        area: 'cafe',
        text: 'Café da manhã, almoço e jantar'
      }]
    }
  },
  head: {
    meta: [
      { name: 'description', content: 'Fotos do hotel' },
      { name: 'keywords', content: 'hotel,águas,claras,raposo' },
      { name: 'robots', content: 'index,follow' }
    ],
    title: () => ({
      inner: 'Fotos'
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  align-items: center;
  column-gap: 25px;
  display: grid;
  grid-template-areas:
  'title title'
  'area_forro queijos'
  'piscinas cafe';
  grid-template-columns: repeat(2, .5fr);
  grid-template-rows: repeat(3, min-content);
  justify-items: center;
  margin: 25px;

  #area_forro {
    &>.domain-img {
      background: url('../assets/area.jpeg') no-repeat;
      background-size: cover;
      height: 250px;
      max-width: 500px;
    }
  }

  #cafe {
    height: max-content;

    &>.domain-img {
      background: url('../assets/cafe.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      max-width: 500px;
    }
  }

  #piscinas {
    &>.domain-img {
      background: url('../assets/piscina2.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      max-width: 500px;
    }
  }

  #queijos {
    &>.domain-img {
      background: url('../assets/banquete.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      max-width: 500px;
    }
  }

  #title {
    font-weight: bold;
    grid-area: title;
    margin-block-end: 0;
    margin-block-start: 0;
    margin-bottom: 10px;
    text-align: center;
  }
}

@media screen and (max-width: 680px) {
  #container {
    margin: 10px 25px;
  }

  div {
    &>.domain-img {
      height: 150px !important;
    }
  }
}
</style>
