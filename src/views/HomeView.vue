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
    <TimeLine
      class="timeline"
      @time-selected="handleSelectedTime"
      :range="dateRange"
    ></TimeLine>
    <RegionDetails
      class="region-details"
      :selectedRegionData="selectedRegionData"
    ></RegionDetails>
    <MapLegend
      class="legend"
      :lowColor="lowColor"
      :highColor="highColor"
      :lowValue="lowValue"
      :highValue="highValue"
    ></MapLegend>
    <MapSettings
      class="settings"
      :scale="scale"
      @scale-value="handleScale"
    ></MapSettings>
  </div>
</template>

<script>
import "@/main.scss";
import GreenSourceMap from "@/components/GreenSourceMap.vue";
import {
  getCountriesData,
  getCountrieDetails,
} from "@/services/countries-data";
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
      scale: 2,
      countryFound: false,
    };
  },
  methods: {
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
    selectRegion(SelectedRegion) {
      this.countryFound = false;
      const countriesDetails = getCountrieDetails();
      for (const country of countriesDetails) {
        if (country.country_code === SelectedRegion) {
          this.selectedRegionData = country;
          this.countryFound = true;
          break;
        }
      }
      if (!this.countryFound) {
        this.selectedRegionData = "no data";
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
              powerValues[innerKey] = selectedObj[innerKey].power_mw;
            }
          });
          powerValues.MAX = this.maxPowerValue;
          this.countryData = powerValues;
          this.findLowHigh();
          //console.log(this.countryData);
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
  mounted() {
    this.setDefaultTime();
    this.findSelectedTime(this.uniqueTimeISOObj, this.selectedTime);
  },

  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
.map-container {
  overflow: hidden;
}
.map {
  z-index: 0;
}
.timeline {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.region-details {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
}
.legend {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 300px;
}

.settings {
  position: absolute;
  z-index: 1;
  height: fit-content;
  margin-left: auto;
  top: 40px;
  right: 300px;
}
</style>
