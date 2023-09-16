import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useDataStore = defineStore("data", () => {
  const allData = ref([]);

  const getData = async () => {
    const url = import.meta.env.VITE_API;
    const res = await axios.get(url);

    const key = res.data.values[0];

    res.data.values.shift();
    let orgData = res.data.values;

    let result = [];

    for (let i = 0; i < orgData.length; i++) {
      let obj = {};
      for (let j = 0; j < key.length; j++) {
        obj[key[j]] = orgData[i][j];
      }
      result.push(obj);
    }

    let newData = result.map((item) => {
      item.bodyPart = item.bodyPart.split(", ").map((part) => part.trim());

      if (item.noEquipment === "TRUE") {
        item.noEquipment = true;
      } else if (item.noEquipment === "FALSE") {
        item.noEquipment = false;
      }
      if (item.noJump === "TRUE") {
        item.noJump = true;
      } else if (item.noJump === "FALSE") {
        item.noJump = false;
      }

      let urlId = item.url.split("/").pop();
      let embeddedUrl = `https://www.youtube.com/embed/${urlId}`;

      return { ...item, embeddedUrl };
    });
    allData.value = newData;
  };

  return { allData, getData };
});
