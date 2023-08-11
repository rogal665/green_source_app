<template>
  <div>
    <div class="extrime-values">
      <span>{{ this.lowValue }}</span>
      <span>{{ this.roundUpToTen(this.highValue) }}</span>
    </div>
    <div
      class="gradient"
      :style="{
        background: `linear-gradient(to right, ${this.lowColor}, ${this.highColor})`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MapLegend",
  props: {
    lowColor: String,
    highColor: String,
    lowValue: Number,
    highValue: Number,
  },
  methods: {
    roundUpToTen(number) {
      return Math.ceil(number / 10) * 10;
    },
  },
};
</script>

<style scoped>
.gradient {
  margin: auto;
  margin-top: 20px;
  width: 150px;
  height: 50px;
}
.extrime-values {
  display: flex;
  justify-content: space-between;
  color: white;
}
</style>
