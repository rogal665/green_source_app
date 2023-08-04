<template>
  <div class="map-container">
    <GreenSourceMap class="map" :countryData="countryData"></GreenSourceMap>
    <TimeLine
      class="timeline"
      @time-selected="handleSelectedTime"
      :range="dateRange"
    ></TimeLine>
  </div>
</template>

<script>
import GreenSourceMap from "@/components/GreenSourceMap.vue";
import { getCountriesData } from "@/services/countries-data";
import TimeLine from "@/components/MapTimeLine.vue";

export default {
  name: "HomeView",
  components: {
    GreenSourceMap,
    TimeLine,
  },

  data() {
    return {
      countryData: {},
      data: [],
      uniqueTimeISOObj: {},
      dateRange: [],
      selectedTime: "",
    };
  },
  methods: {
    findSelectedTime(proxyObj, keyToFind) {
      const keys = Object.keys(proxyObj);

      const keyToFindTrimmed = keyToFind.trim();

      keys.forEach((key) => {
        const keyTrimmed = key.trim();
        if (keyTrimmed === keyToFindTrimmed) {
          const selectedObj = proxyObj[key];

          const powerValues = {};

          Object.keys(selectedObj).forEach((innerKey) => {
            if (innerKey !== "__proto__" && innerKey !== "IsRevoked") {
              powerValues[innerKey] = selectedObj[innerKey].power_mw;
            }
          });

          this.countryData = powerValues;
          //console.log(this.countryData)
        }
      });
    },
    copySelectedTimeFromUniqueTimeObj(
      countryData,
      uniqueTimeISOObj,
      selectedTimeKey
    ) {
      if (!countryData || !uniqueTimeISOObj || !selectedTimeKey) {
        console.error("Nieprawidłowe dane wejściowe.");
        return;
      }

      if (!(selectedTimeKey in uniqueTimeISOObj)) {
        console.error("Klucz selectedTimeKey nie istnieje w uniqueTimeISOObj.");
        return;
      }
      const selectedTimeValueTrimmed =
        uniqueTimeISOObj[selectedTimeKey]?.trim();

      if (!selectedTimeValueTrimmed) {
        console.error(
          `Brak danych pod kluczem ${selectedTimeKey} w uniqueTimeISOObj.`
        );
        return;
      }

      Object.keys(countryData).forEach((key) => {
        if (countryData[key] && typeof countryData[key] === "object") {
          countryData[key].selectedTime = selectedTimeValueTrimmed;
        }
      });
    },
    handleSelectedTime(SelectedTime) {
      this.selectedTime = SelectedTime;
      this.findSelectedTime(this.uniqueTimeISOObj, this.selectedTime);
    },

    copyDeteRange() {
      const keys = Object.keys(this.uniqueTimeISOObj);
      this.dateRange = [];
      keys.forEach((key) => {
        this.dateRange.push(key);
      });
    },
    getUniqueTimeISOWithCountry(data) {
      data.forEach((item) => {
        item.weatherData.forEach((dataItem) => {
          const { time_iso, ...rest } = dataItem;
          if (!this.uniqueTimeISOObj[time_iso]) {
            this.uniqueTimeISOObj[time_iso] = {
              [item.countryCode]: rest,
            };
          } else {
            this.uniqueTimeISOObj[time_iso][item.countryCode] = rest;
          }
        });
      });

      //console.log(this.uniqueTimeISOObj);
      return this.uniqueTimeISOObj;
    },
  },

  created() {
    this.data = getCountriesData();
    this.uniqueTimeISOObj = this.getUniqueTimeISOWithCountry(this.data);
    this.copyDeteRange();
    this.intervalId = setInterval(() => {
      this.data = getCountriesData();
      this.uniqueTimeISOObj = this.getUniqueTimeISOWithCountry(this.data);
      this.copyDeteRange();
    }, 100000);
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.map-container {
  display: grid;
  grid-template-rows: 1fr 80px;
  height: 100%;
  background-color: black;
}
.timeline {
  background-color: rgb(182, 201, 10);
  z-index: 1;
}
.map {
}
</style>
