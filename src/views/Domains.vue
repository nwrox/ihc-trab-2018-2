<template>
  <q-page id="container">
    <h5 id="title">Instalações</h5>
    <div
      v-for="({ area, text }, i) in createDomainAreas"
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
  name: 'domains',
  computed: {
    createDomainAreas () {
      return [{
        area: 'recepcao',
        text: 'Recepção'
      },
      {
        area: 'restaurante',
        text: 'Salão de refeição'
      },
      {
        area: 'quartos',
        text: 'Quartos com frigobar e ar condicionado'
      },
      {
        area: 'copa',
        text: 'Copa'
      },
      {
        area: 'piscinas',
        text: 'Piscinas'
      },
      {
        area: 'elevador',
        text: 'Elevador para acesso ao segundo andar'
      }]
    }
  },
  head: {
    meta: [
      { name: 'description', content: 'Instalações do hotel' },
      { name: 'keywords', content: 'hotel,águas,claras,raposo' },
      { name: 'robots', content: 'index,follow' }
    ],
    title: () => ({
      inner: 'Instalações'
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  column-gap: 25px;
  display: grid;
  grid-template-areas:
  'title title'
  'recepcao restaurante'
  'quartos copa'
  'piscinas elevador';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, min-content);
  justify-content: center;
  justify-items: center;
  margin: 25px;

  #copa {
    width: 100%;

    &>.domain-img {
      background: url('../assets/copa.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      width: 75%;
    }
  }

  #elevador {
    width: 100%;

    &>.domain-img {
      background: url('../assets/elevador.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      width: 75%;
    }
  }

  #piscinas {
    width: 100%;

    &>.domain-img {
      background: url('../assets/piscina2.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      max-width: 75%;
    }
  }

  #quartos {
    width: 100%;

    &>.domain-img {
      background: url('../assets/quartos.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      width: 75%;
    }
  }

  #recepcao {
    width: 100%;

    &>.domain-img {
      background: url('../assets/recepcao.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      width: 75%;
    }
  }

  #restaurante {
    width: 100%;

    &>.domain-img {
      background: url('../assets/restaurante.jpg') no-repeat;
      background-size: cover;
      height: 250px;
      margin: 0 auto;
      width: 75%;
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

    div {
      &>.domain-img {
        height: 150px !important;
      }
    }
  }
}
</style>
