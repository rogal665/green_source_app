<template>
  <div class="settings">
    <button @click="incrementScale">+</button>
    <input
      type="range"
      :min="1"
      :max="4"
      class="slider"
      :value="scale"
      @input="updateScale"
    />
    <button @click="decrementScale">-</button>
  </div>
</template>

<script>
export default {
  name: "MapSettings",
  props: {
    scale: Number,
  },
  methods: {
    incrementScale() {
      if (this.scale < 4) {
        this.$emit("scale-value", this.scale + 0.1);
      }
    },
    decrementScale() {
      if (this.scale > 1) {
        this.$emit("scale-value", this.scale - 0.1);
      }
    },
    updateScale(event) {
      const newScale = parseFloat(event.target.value);
      if (newScale >= 1 && newScale <= 4) {
        this.$emit("scale-value", newScale);
      }
    },
  },
};
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
}
</style>
