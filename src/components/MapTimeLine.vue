<template>
  <div class="slider-container">
    <div v-if="showValue">
      {{ formatDate(range[selectedValue]) }}
    </div>
    <div class="controlers">
      <button @click="scrollToStart">To Start</button>
      <button @click="scrollBackward">Backward</button>
      <button @click="scrollForward">Forward</button>
      <button @click="scrollToEnd">End</button>
      <button @click="stopScrolling">Stop</button>
    </div>
    <div class="scale">
      <div class="first-date">
        {{ formatDate(range[0]) }}
      </div>
      <div class="center-date">
        {{ formatDate(range[Math.floor(range.length / 2)]) }}
      </div>
      <div class="last-date">{{ formatDate(range[range.length - 1]) }}</div>
    </div>
    <input
      type="range"
      :min="0"
      :max="range.length - 1"
      class="slider"
      v-model="selectedValue"
      @input="emitValue"
    />
  </div>
</template>

<script>
/* eslint-disable */
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
    formatDate(inputDate) {
      if (inputDate) {
        const year = inputDate.slice(0, 4);
        const month = inputDate.slice(5, 7);
        const day = inputDate.slice(8, 10);
        const hours = inputDate.slice(11, 13);
        const minutes = inputDate.slice(14, 16);

        return `${hours}:${minutes} ${day}-${month}-${year}`;
      }
    },
  },
};
</script>

<style scoped>
.scale {
  display: grid;
  grid-template-columns: auto auto auto;
}

.first-date {
  text-align: left;
}
.center-date {
  text-align: center;
}
.last-date {
  text-align: right;
}

.controlers {
  display: flexbox;
  text-align: center;
}

.slider-container {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;
}
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;
}

.slider::-ms-thumb {
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb:hover,
.slider::-moz-range-thumb:hover,
.slider::-ms-thumb:hover {
  background-color: #ccc;
  border-color: #fff;
}
</style>
