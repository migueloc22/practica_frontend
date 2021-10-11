<template>
  <div>
         <label>
      AutoComplete
      <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>
      <button @click="usePlace">Buscar</button>
    </label>
<GmapMap
  :center="{lat:4.727552, lng:-74.075332}"
  :zoom="15"
  map-type-id="roadmap"
  style="width: 500px; height: 300px"
>
    <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
    />
</GmapMap>
  </div>
</template>
<script>
import {gmapApi} from 'vue2-google-maps'
export default {
 data() {
    return {
      markers: [],
      place: null,
    }
  },
   methods: {
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place
    },
    usePlace(place) {
        console.log(place);
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.place = null;
      }
    }
   },
  mounted() {
    this.$emit('nomHijo',this.place.geometry.location.lat());
  computed: {
    google: gmapApi
  }
  }
};
</script>