<template>
  <div style="height:100%; width:100%">
    <LMap id="map"
          :options="lMap.options"
          :center="lMap.center"
          :zoom="lMap.zoom"
          :style="{cursor: mapCursor}"
          @mousedown="mapCursor = 'grabbing'"
          @mouseup="mapCursor = 'auto'"
          @dblclick="updateMarker">
      <LControl :position="lControl.position">
        <div>info</div>
      </LControl>

      <LTileLayer
        :url="lTileLayer.url"
        :atribution="lTileLayer.atribution"
        :layer-type="lTileLayer.layerType"
        :name="lTileLayer.name">
      </LTileLayer>
    <LMarker :lat-lng="lMarker.coords" ></LMarker>
  </LMap>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LControl } from "@vue-leaflet/vue-leaflet";
import { defineProps, ref } from "vue";

const mapCursor = ref('auto')

const props = defineProps({
  lat: Number,
  lon: Number
})

const lTileLayer = {
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  atribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  layerType: 'base',
  name: 'OpenStreetMap',
}

const lMap = {
  options:  {
    doubleClickZoom: false,
    zoomControl: false,
    zoomDelta: 0.25, //TODO: try to make this work
    zoomSnap: 0, //TODO: try to make this work
  },
  center: [props.lat, props.lon],
  zoom: 12
}

const lMarker = {
  coords: [props.lat, props.lon]
}

const lControl = {
  position: 'topright'
}

const updateMarker = (e) => {
  console.log(lMarker.coords)
}

</script>

<style scoped>

</style>
