<template>
  <div id="container">
    <l-map
      id="map"
      ref="map"
      v-bind="{ center, maxBounds, maxZoom, minZoom, options, zoom }"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker
        v-if="marker"
        ref="markerRef"
        v-bind="marker"
      />
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import markerIcon from '../assets/marker-icon.svg'
import { LMap, LMarker, LPolygon, LPopup, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'LeafMaps',
  components: { LMap, LMarker, LPolygon, LPopup, LTileLayer },
  data: () => ({
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    center: [-21.1009507, -42.1137701],
    infoContent: 'Hotel Águas Claras de Raposo',
    marker: null,
    maxBounds: [
      L.latLng(-21.09778, -42.10730),
      L.latLng(-21.10513, -42.12071)
    ],
    maxZoom: 15,
    minZoom: 15,
    options: {
      zoomControl: false
    },
    url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    zoom: 15
  }),
  computed: {
    icon () {
      return L.icon({
        iconUrl: markerIcon,
        iconSize: [40, 48],
        // shadowSize: [25, 32],
        iconAnchor: [20, 48],
        // shadowAnchor: [4, 31],
        popupAnchor: [0, -45]
      })
    }
  },
  mounted () {
    const { icon } = this

    this.marker = {
      draggable: false,
      icon,
      latLng: L.latLng(-21.1009507, -42.1137701)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~leaflet/dist/leaflet.css';

#container {
  #map {
    height: 300px;
    width: 50vw !important;
  }
}

@media screen and (max-width: 680px) {
  #container {
    #map {
      height: 200px;
      width: 85vw !important;
    }
  }
}
</style>
