import { getCountriesApi } from "../../api/api.js";

Vue.component("paginate", VuejsPaginate);

export const countryList = Vue.component("country-list", {
  template: `<div class="p-20">
                <search-bar @onSearch="onSearch" ></search-bar>
                <table class="table table-bordered">
                  <thead >
                      <tr>
                        <td>Название страны</td>
                        <td>Двухсимвольный код страны</td>
                        <td>Трехсимвольный код страны</td>
                        <td>Возможность доставки</td>
                        <td>Код страны по ISO</td>
                      </tr>
                    </thead>
                    <tbody>                   
                        <country-item
                          v-for="country in countriesList"
                          v-bind:country="country"
                          v-bind:key="country.id">
                        </country-item>                      
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                <paginate
                  v-model="currentPage"
                  :pageCount="pageCount"                  
                  :clickHandler="clickCallback"
                  :container-class="'pagination'">
                </paginate>
                </nav>
              </div>`,
  data() {
    return {
      countriesList: [],
      pageCount: 1,
      currentValue: "",
      // баг библиотеки vuejs-paginate
      currentPage: 1,
    };
  },

  created() {
    this.getCountries(this.currentValue);
  },

  methods: {
    getCountries(value, pageNum = 1) {
      getCountriesApi(value, pageNum).then((data) => {
        this.countriesList = data.page_data.data;
        if (data.page_data.rpag?.pages) {
          this.pageCount = data.page_data.rpag.pages;
        }
      });
    },

    onSearch(value) {
      this.currentValue = value;
      // баг библиотеки vuejs-paginate
      this.currentPage = 1;
      this.getCountries(this.currentValue);
    },

    clickCallback(pageNum) {
      this.currentPage = pageNum;
      this.getCountries(this.currentValue, pageNum);
    },
  },
});
