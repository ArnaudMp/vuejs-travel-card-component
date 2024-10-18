<template>
    <div ref="mapContainer" class="map-container h-80" />
</template>

<script>
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = "pk.eyJ1IjoiYXJuYXVkc3dlZW4iLCJhIjoiY20yZWZlYmRsMWtvbDJqcXhnc2QxZzBrYyJ9.Fb5BoKHGFCI8TJlLOookNQ";

export default {
    props: ['modelValue'],

    data: () => ({ map: null }),

    watch: {
        modelValue(next) {
            const curr = this.getLocation();
            const map = this.map;

            if (curr.lng != next.lng || curr.lat != next.lat)
                map.setCenter({ lng: next.lng, lat: next.lat });
            if (curr.pitch != next.pitch) map.setPitch(next.pitch);
            if (curr.bearing != next.bearing) map.setBearing(next.bearing);
            if (curr.zoom != next.zoom) map.setZoom(next.zoom);
        }
    },

    mounted() {
        const { lng, lat, zoom, bearing, pitch } = this.modelValue;

        const map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: 'mapbox://styles/arnaudsween/clx0guytu01jh01pnalln7zok',
            center: [lng, lat],
            bearing,
            pitch,
            zoom
        });

        const updateLocation = () =>
            this.$emit('update:modelValue', this.getLocation());

        map.on('move', updateLocation);
        map.on('zoom', updateLocation);
        map.on('rotate', updateLocation);
        map.on('pitch', updateLocation);

        this.map = map;
    },

    unmounted() {
        this.map.remove();
        this.map = null;
    },

    methods: {
        getLocation() {
            return {
                ...this.map.getCenter(),
                bearing: this.map.getBearing(),
                pitch: this.map.getPitch(),
                zoom: this.map.getZoom()
            };
        }
    }
};
</script>

<style>
.map-container {
    flex: 1;
}
</style>