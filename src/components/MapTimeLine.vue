<template>
  <div class="slider-container">
    <div v-if="showValue" class="current-time">
      {{ formatDateTime(range[selectedValue]) }}
    </div>
    <div class="controlers-container">
      <div class="controlers">
        <svg
          @click="scrollToStart"
          class="timeline-controllers"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-12.65,6.51L104,137.83V168a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0v30.17l51.35-36.68A8,8,0,0,1,168,88Z"
          ></path>
        </svg>

        <svg
          @click="scrollBackward"
          class="timeline-controllers"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm48,132a8,8,0,0,1-12.59,6.55l-40-28A8,8,0,0,1,120,128v28a8,8,0,0,1-12.59,6.55l-40-28a8,8,0,0,1,0-13.1l40-28A8,8,0,0,1,120,100v28a8,8,0,0,1,3.41-6.55l40-28A8,8,0,0,1,176,100Z"
          ></path>
        </svg>

        <svg
          @click="scrollForward"
          class="timeline-controllers"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"
          ></path>
        </svg>

        <svg
          @click="stopScrolling"
          class="timeline-controllers"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"
          ></path>
        </svg>

        <svg
          @click="scrollToEnd"
          class="timeline-controllers"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V137.83l-51.35,36.68A8,8,0,0,1,88,168V88a8,8,0,0,1,12.65-6.51L152,118.17V88a8,8,0,0,1,16,0Z"
          ></path>
        </svg>
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

<style scoped></style>
