<template>
  <q-page
    id="container"
    padding
  >
    <div id="bg" />
    <div id="infos">
      <p>
        <q-icon name="phone" />
        (22) 3847-2112 (Reservas)</p>
      <p>
        <q-icon name="email" />
        hotelaguasclarasderaposo@hotmail.com
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout',
  head: {
    meta: [
      { name: 'description', content: 'Informações de contato' }
    ],
    title: () => ({
      inner: 'Fale conosco'
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  #bg {
    background: url('../assets/fundo5.jpg') no-repeat;
    background-position: 50% center;
    background-size: contain;
    height: 250px;
    margin: 0 auto;
    margin-bottom: 25px;
    width: 100%;
  }

  #infos {
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (max-width: 680px) {
  #container {
    #bg {
      height: 150px;
    }
  }
}
</style>
