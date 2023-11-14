<template>
  <div class="map-container-root">
    <GreenSourceMap
      class="map"
      :countryData="countryData"
      :lowColor="lowColor"
      :highColor="highColor"
      :injectedScale="scale"
      @select-region="selectRegion"
      @scale-value="handleScale"
    >
    </GreenSourceMap>
    <div class="bottom-hud">
      <MapLegend
        class="legend"
        :lowColor="lowColor"
        :highColor="highColor"
        :lowValue="lowValue"
        :highValue="highValue"
      ></MapLegend>
      <TimeLine
        class="timeline"
        @time-selected="handleSelectedTime"
        :range="dateRange"
      ></TimeLine>
    </div>
    <div class="right-hud">
      <MapSettings
        class="settings"
        :scale="scale"
        @scale-value="handleScale"
      ></MapSettings>
      <RegionDetails
        class="region-details"
        :selectedRegionData="selectedRegionData"
      ></RegionDetails>
    </div>
    <div
      v-if="countryHover"
      class="mouse-follower"
      :style="followerStyle"
    ></div>
  </div>
</template>

<script>
import "@/main.scss";
import GreenSourceMap from "@/components/GreenSourceMap.vue";

import TimeLine from "@/components/MapTimeLine.vue";
import RegionDetails from "@/components/RegionDetails.vue";
import MapLegend from "@/components/MapLegend.vue";
import MapSettings from "@/components/MapSettings.vue";

export default {
  name: "HomeView",
  components: {
    GreenSourceMap,
    TimeLine,
    RegionDetails,
    MapLegend,
    MapSettings,
  },

  data() {
    return {
      countryData: {},
      data: [],
      uniqueTimeISOObj: {},
      dateRange: [],
      selectedTime: "",
      selectedRegion: "",
      selectedRegionData: {},
      lowColor: "#D6390D",
      highColor: "#46D60D",
      maxPowerValue: 120,
      lowValue: 0,
      highValue: 0,
      scale: 1.1,
      countryFound: false,
      mouseX: 0,
      mouseY: 0,
      followerWidth: 100,
      followerHeight: 50,
      countryHover: "",
    };
  },
  methods: {
    sortedData(data) {
      const groupedData = data.reduce((result, data) => {
        const countryCode = data.country;

        if (!result[countryCode]) {
          result[countryCode] = {
            countryCode,
            weatherData: [],
          };
        }
        result[countryCode].weatherData.push(data);
        return result;
      }, {});

      // Przekształć obiekt na tablicę wartości
      const groupedDataArray = Object.values(groupedData);
      return groupedDataArray;
    },

    async fetchData() {
      const currentTime = Date.now();
      const twentyFourHoursAgo = currentTime - 24 * 60 * 60 * 1000;
      await this.$store.dispatch("getPowerForecast", {
        con: "and",
        country: ["AT", "HU"],
        windPowerGreaterThan: 10,
        windPowerLessThan: 1000000,
        solarPowerGreaterThan: 0,
        solarPowerLessThan: 1000000,
        timestampGreaterThan: twentyFourHoursAgo,
        timestampLessThan: currentTime,
      });

      this.uniqueTimeISOObj = this.getUniqueTimeISOWithCountry(
        this.sortedData(this.storeData),
      );
      this.copyDeteRange();
    },
    handleScale(selectedScale) {
      this.scale = selectedScale;
    },
    findLowHigh() {
      this.lowValue = 0;
      this.highValue = 0;
      for (const key in this.countryData) {
        if (Object.prototype.hasOwnProperty.call(this.countryData, key)) {
          const value = this.countryData[key];
          if (typeof value === "number") {
            if (value > this.highValue) {
              this.highValue = value;
            }
            if (value < this.lowValue) {
              this.lowValue = value;
            }
          }
        }
      }
    },
    async selectRegion(SelectedRegion) {
      this.countryFound = false;
<<<<<<< HEAD
      this.$store.dispatch("getCountryCapacities", SelectedRegion)
      if(this.$store.getters.getRegion){
        if (this.$store.getters.getRegion.length === 1){
=======
      console.error('elo elod')
      const countriesDetails = await getCountrieDetails();
      for (const country of countriesDetails) {
        if (country.country_code === SelectedRegion) {
          this.selectedRegionData = country;
>>>>>>> 4ca4bbb4f8f0c7677e1cad252b52dcba83e0df44
          this.countryFound = true;
          this.selectedRegionData = this.$store.getters.getRegion[0]
        }else {
          this.countryFound = false;
          return
        }
      }
      
    


    },
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
              powerValues[innerKey] = selectedObj[innerKey].wind_power;
            }
          });
          powerValues.MAX = this.maxPowerValue;
          this.countryData = powerValues;
          this.findLowHigh();
        }
      });
    },
    copySelectedTimeFromUniqueTimeObj(
      countryData,
      uniqueTimeISOObj,
      selectedTimeKey,
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
          `Brak danych pod kluczem ${selectedTimeKey} w uniqueTimeISOObj.`,
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
      return this.uniqueTimeISOObj;
    },
    setDefaultTime() {
      if (
        !this.uniqueTimeISOObj ||
        Object.keys(this.uniqueTimeISOObj).length === 0
      ) {
        return undefined;
      }
      const keys = Object.keys(this.uniqueTimeISOObj);
      const lastKey = keys[keys.length - 1];

      this.selectedTime = lastKey;
    },
    updateMousePosition(event) {
      // Aktualizuj pozycję myszy
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },

  computed: {
    storeData() {
      return this.$store.getters.getData;
    },
    followerStyle() {
      const left = this.mouseX + 70 - this.followerWidth / 2 + "px";
      const top = this.mouseY - 30 - this.followerHeight / 2 + "px";

      return {
        left,
        top,
        width: this.followerWidth + "px",
        height: this.followerHeight + "px",
      };
    },
  },

  created() {
    this.data = this.fetchData();
    this.intervalId = setInterval(() => {
      this.data = this.fetchData();
    }, 100000);
  },
  mounted() {
    this.setDefaultTime();
    this.findSelectedTime(this.uniqueTimeISOObj, this.selectedTime);
    document.addEventListener("mousemove", this.updateMousePosition);
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
    document.removeEventListener("mousemove", this.updateMousePosition);
  },
};
</script>
