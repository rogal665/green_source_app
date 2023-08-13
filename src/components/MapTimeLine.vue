<template>
  <div class="slider-container">
    <div v-if="showValue" class="current-time">
      {{ formatDateTime(range[selectedValue]) }}
    </div>
    <div class="controlers-container">
      <div class="controlers">
        <button class="btn" @click="scrollToStart">To Start</button>
        <button @click="scrollBackward">Backward</button>
        <button @click="scrollForward">Forward</button>
        <button @click="scrollToEnd">End</button>
        <button @click="stopScrolling">Stop</button>
      </div>
      <input
        type="range"
        :min="0"
        :max="range.length - 1"
        class="slider"
        v-model="selectedValue"
        @input="emitValue"
      />
      <div class="scale">
        <div>
          {{ formatTime(range[0]) }}
        </div>
        <div>
          {{ formatTime(range[Math.floor(range.length / 4)]) }}
        </div>
        <div>
          {{ formatTime(range[Math.floor(range.length / 2)]) }}
        </div>
        <div>
          {{ formatTime(range[Math.floor((range.length / 4) * 3)]) }}
        </div>
        <div>{{ formatTime(range[range.length - 1]) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "@/main.scss";
export default {
  name: "MapTimeLine",
  props: {
    range: Array,
  },
  data() {
    return {
      selectedValue: 24,
      showValue: true,
      isScrolling: false,
    };
  },

  watch: {
    range(range) {
      this.selectedValue = range.length - 1;
    },
    selectedValue(selectedValue) {
      this.$emit("time-selected", this.range[this.selectedValue]);
    },
  },
  methods: {
    scrollToStart() {
      this.scrollTo(0);
    },
    scrollBackward() {
      if (!this.isScrolling) {
        this.isScrolling = true;
        const lastValueIndex = 0;
        const interval = 200;

        const scrollInterval = setInterval(() => {
          if (this.selectedValue > lastValueIndex) {
            this.selectedValue--;
          } else {
            this.stopScrolling();
          }
        }, interval);

        this.$data.scrollInterval = scrollInterval;
      }
    },
    scrollForward() {
      if (!this.isScrolling) {
        this.isScrolling = true;
        const lastValueIndex = this.range.length - 1;
        const interval = 200;

        const scrollInterval = setInterval(() => {
          if (this.selectedValue < lastValueIndex) {
            this.selectedValue++;
          } else {
            this.stopScrolling();
          }
        }, interval);

        this.$data.scrollInterval = scrollInterval;
      }
    },
    scrollToEnd() {
      this.scrollTo(this.range.length - 1);
    },
    scrollTo(position) {
      this.selectedValue = position;
    },

    stopScrolling() {
      this.isScrolling = false;
      clearInterval(this.scrollInterval);
    },

    emitValue() {
      this.$emit("time-selected", this.range[this.selectedValue]);
    },
    formatDateTime(inputDate) {
      if (inputDate) {
        const year = inputDate.slice(0, 4);
        const month = inputDate.slice(5, 7);
        const day = inputDate.slice(8, 10);
        const hours = inputDate.slice(11, 13);
        const minutes = inputDate.slice(14, 16);
        return `${hours}:${minutes} ${day}-${month}-${year}`;
      }
    },
    formatDate(inputDate) {
      if (inputDate) {
        const year = inputDate.slice(0, 4);
        const month = inputDate.slice(5, 7);
        const day = inputDate.slice(8, 10);
        return `${day}-${month}-${year}`;
      }
    },
    formatTime(inputDate) {
      if (inputDate) {
        const hours = inputDate.slice(11, 13);
        const minutes = inputDate.slice(14, 16);
        return `${hours}:${minutes}`;
      }
    },
  },
  
};
</script>

<style scoped>
</style>
