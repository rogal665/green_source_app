<template>
  <div class="settings">
    <button id="in" class="scale-btn" @click="incrementScale">+</button>
    <div class="zoom-slider-container">
      <input
        type="range"
        :min="3"
        :max="8"
        class="zoom-slider"
        :value="scale"
        @input="updateScale"
      />
    </div>
    <button id="out" class="scale-btn" @click="decrementScale">-</button>
  </div>
</template>

<script>
import "@/main.scss";
export default {
  name: "MapSettings",
  props: {
    scale: Number,
  },
  methods: {
    incrementScale() {
      if (this.scale < 8) {
        this.$emit("scale-value", this.scale + 0.1);
      }
    },
    decrementScale() {
      if (this.scale > 3) {
        this.$emit("scale-value", this.scale - 0.1);
      }
    },
    updateScale(event) {
      const newScale = parseFloat(event.target.value);
      if (newScale >= 3 && newScale <= 8) {
        this.$emit("scale-value", newScale);
      }
    },
  },
};
</script>

<style scoped></style>
