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
          Navigation
          </q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Inicial" />
          </q-item>
          <q-item to="/fale_conosco">
            <q-item-side icon="local_phone" />
            <q-item-main label="Fale Conosco" />
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
export default {
  name: 'LayoutDefault',
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

<style lang="scss" scoped>
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
