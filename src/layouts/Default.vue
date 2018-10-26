<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          label=""
          role="button"
        />

        <q-toolbar-title>
          Águas Claras
          <div slot="subtitle">Sua melhor opção em hotelaria em raposo</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-footer
      v-model="footer"
      :reveal="footerReveal"
    >
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-toolbar
        color="dark"
        :inverted="$q.theme === 'ios'"
        style="text-align: center;"
      >
        <q-toolbar-title>
          Avenida Coronel Balbino França, 400 - Raposo - RJ - CEP: 28333000
          <span slot="subtitle">
            <span>
              <q-icon name="phone" />
              &nbsp;
              (22) 3847-2112 (Reservas)
            </span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span>
              <q-icon name="email" />
              &nbsp;
              hotelaguasclarasderaposo@hotmail.com
            </span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <vue-goodshare-facebook
              page_url="https://www.facebook.com/hotelaguasclarasderaposo"
              button_design="outline"
              has_counter
              has_icon
            ></vue-goodshare-facebook>
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list no-border link inset-delimiter>
          <q-list-header>
          Navegação
          </q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Inicial" />
          </q-item>
          <q-item to="/fotos">
            <q-item-side icon="photo" />
            <q-item-main label="Fotos" />
          </q-item>
          <q-item to="/instalacoes">
            <q-item-side icon="domain" />
            <q-item-main label="Instalações" />
          </q-item>
        </q-list>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook'

export default {
  name: 'LayoutDefault',
  components: { VueGoodshareFacebook },
  data: () => ({
    footer: true,
    footerReveal: false,
    headerReveal: false,
    leftDrawerOpen: false
  }),
  mounted () {
    this.leftDrawerOpen = !this.$q
      .platform
      .is
      .desktop
  }
}
</script>

<style lang="css">
.button-social {
  padding: 3px 5px !important;
}

.counter-facebook {
  border-left: 1px solid rgba(255, 255, 255, .5) !important;
}

.facebook__design__outline {
  background-color: transparent !important;
  border: solid 1px #fff !important;
  color: #fff !important;
}
</style>

<style lang="scss" scoped>
$color: #fff;
$list-color: #000;

.q-list-header {
  font-weight: bold;
}

.q-list-header,
.q-item-label,
.q-item-side {
  color: $list-color !important;
}

@media screen and (max-width: 680px) {
  .q-toolbar-title {
    white-space: normal;
  }
}
</style>
