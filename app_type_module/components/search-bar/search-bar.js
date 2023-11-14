import { countriesIsoList } from "../../constants/constants.js";

export const searchBar = Vue.component("search-bar", {
  template: `<form >
               <div class="form-group">
                <input v-model="searchLongName" />
                <button type="submit" @click.prevent="handleSubmit" class="btn btn-default">Найти</button>
              </div>
            </form>`,
  data() {
    return {
      searchLongName: "",
    };
  },
  methods: {
    handleSubmit() {
      const searchCountry =
        countriesIsoList[this.searchLongName.toLowerCase()] ||
        this.searchLongName;
      this.$emit("onSearch", searchCountry);
    },
  },
});
