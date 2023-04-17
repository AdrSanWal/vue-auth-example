<template>
  <div style="height:100%; width:100%">
    <LMap id="map"
          ref="mymap"
          :options="lMap.options"
          :center="lMap.center.value"
          :zoom="lMap.zoom"
          :style="{cursor: mapCursor}"

          @ready="onReady($refs)">
      <LControl :position="lControl.position">
        <div class="info">
          <div class="circle">
            <p>i</p>
          </div>
          <div class="hoverable">
            <text>Double click to change location</text>
          </div>
        </div>
      </LControl>

      <LTileLayer
        :url="lTileLayer.url"
        :atribution="lTileLayer.atribution"
        :layer-type="lTileLayer.layerType"
        :name="lTileLayer.name">
      </LTileLayer>
    <LMarker :lat-lng="lMarker.coords.value" ></LMarker>
  </LMap>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LControl } from "@vue-leaflet/vue-leaflet";
import { defineProps, defineEmits, ref} from "vue";

const mapCursor = ref('auto')


const emit = defineEmits(['updateCoords'])

const onReady = (ref) => {
  const myMap = ref.mymap.leafletObject
  console.log(myMap)
  myMap.on('movestart', () => mapCursor.value = 'grabbing')
  myMap.on('moveend', () => mapCursor.value = 'auto')
  myMap.on('dblclick', (e) => {
    const newLatLon = [e.latlng.lat, e.latlng.lng]
    lMap.center.value = newLatLon
    lMarker.coords.value = newLatLon
    emit('updateCoords', newLatLon)
  })
}

const props = defineProps({
  lat: {type: Number, required: false, default: 40.417},
  lon: {type: Number, required: false, default: -3.704}
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
  center: ref([props.lat, props.lon]),
  zoom: 12
}

const lMarker = {
  coords: ref([props.lat, props.lon])
}

const lControl = {
  position: 'topright'
}

</script>

<style lang="scss" scoped>
  .info {
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: blue;
    opacity: 0.6;
    width: 30px;
    transition: ease 0.3s;
    height: 30px;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
      width: 200px;
      transition: ease 1s;
      color: whitesmoke;
      opacity: 0.8;

    & > .hoverable {
      display: flex;
      transition: ease 1s;
      color: whitesmoke;
      //TODO: Make transition of the info button
    }
    & > .circle {
      display: none;
      }
    }

    .hoverable {
      display: none;
    }

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: rgb(157, 172, 241);
      text-align:center;

      p {
        color: blue;
        font-size: x-large;
        font-weight: bolder;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

      }
    }
  }
</style>
