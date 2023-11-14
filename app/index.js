const countriesIsoList = {
  afghanistan: "AF",
  "aland islands": "AX",
  albania: "AL",
  algeria: "DZ",
  "american samoa": "AS",
  andorra: "AD",
  angola: "AO",
  anguilla: "AI",
  antarctica: "AQ",
  "antigua and barbuda": "AG",
  argentina: "AR",
  armenia: "AM",
  aruba: "AW",
  australia: "AU",
  austria: "AT",
  azerbaijan: "AZ",
  bahamas: "BS",
  bahrain: "BH",
  bangladesh: "BD",
  barbados: "BB",
  belarus: "BY",
  belgium: "BE",
  belize: "BZ",
  benin: "BJ",
  bermuda: "BM",
  bhutan: "BT",
  bolivia: "BO",
  "bosnia and herzegovina": "BA",
  botswana: "BW",
  "bouvet island": "BV",
  brazil: "BR",
  "british indian ocean territory": "IO",
  "brunei darussalam": "BN",
  bulgaria: "BG",
  "burkina faso": "BF",
  burundi: "BI",
  cambodia: "KH",
  cameroon: "CM",
  canada: "CA",
  "cape verde": "CV",
  "cayman islands": "KY",
  "central african republic": "CF",
  chad: "TD",
  chile: "CL",
  china: "CN",
  "christmas island": "CX",
  "cocos (keeling) islands": "CC",
  colombia: "CO",
  comoros: "KM",
  congo: "CG",
  "congo, democratic republic": "CD",
  "cook islands": "CK",
  "costa rica": "CR",
  'cote d"ivoire': "CI",
  croatia: "HR",
  cuba: "CU",
  cyprus: "CY",
  "czech republic": "CZ",
  denmark: "DK",
  djibouti: "DJ",
  dominica: "DM",
  "dominican republic": "DO",
  ecuador: "EC",
  egypt: "EG",
  "el salvador": "SV",
  "equatorial guinea": "GQ",
  eritrea: "ER",
  estonia: "EE",
  ethiopia: "ET",
  "falkland islands (malvinas)": "FK",
  "faroe islands": "FO",
  fiji: "FJ",
  finland: "FI",
  france: "FR",
  "french guiana": "GF",
  "french polynesia": "PF",
  "french southern territories": "TF",
  gabon: "GA",
  gambia: "GM",
  georgia: "GE",
  germany: "DE",
  ghana: "GH",
  gibraltar: "GI",
  greece: "GR",
  greenland: "GL",
  grenada: "GD",
  guadeloupe: "GP",
  guam: "GU",
  guatemala: "GT",
  guernsey: "GG",
  guinea: "GN",
  "guinea-bissau": "GW",
  guyana: "GY",
  haiti: "HT",
  "heard island & mcdonald islands": "HM",
  "holy see (vatican city state)": "VA",
  honduras: "HN",
  "hong kong": "HK",
  hungary: "HU",
  iceland: "IS",
  india: "IN",
  indonesia: "ID",
  "iran, islamic republic of": "IR",
  iraq: "IQ",
  ireland: "IE",
  "isle of man": "IM",
  israel: "IL",
  italy: "IT",
  jamaica: "JM",
  japan: "JP",
  jersey: "JE",
  jordan: "JO",
  kazakhstan: "KZ",
  kenya: "KE",
  kiribati: "KI",
  korea: "KR",
  "north korea": "KP",
  kuwait: "KW",
  kyrgyzstan: "KG",
  'lao people"s democratic republic': "LA",
  latvia: "LV",
  lebanon: "LB",
  lesotho: "LS",
  liberia: "LR",
  "libyan arab jamahiriya": "LY",
  liechtenstein: "LI",
  lithuania: "LT",
  luxembourg: "LU",
  macao: "MO",
  macedonia: "MK",
  madagascar: "MG",
  malawi: "MW",
  malaysia: "MY",
  maldives: "MV",
  mali: "ML",
  malta: "MT",
  "marshall islands": "MH",
  martinique: "MQ",
  mauritania: "MR",
  mauritius: "MU",
  mayotte: "YT",
  mexico: "MX",
  "micronesia, federated states of": "FM",
  moldova: "MD",
  monaco: "MC",
  mongolia: "MN",
  montenegro: "ME",
  montserrat: "MS",
  morocco: "MA",
  mozambique: "MZ",
  myanmar: "MM",
  namibia: "NA",
  nauru: "NR",
  nepal: "NP",
  netherlands: "NL",
  "netherlands antilles": "AN",
  "new caledonia": "NC",
  "new zealand": "NZ",
  nicaragua: "NI",
  niger: "NE",
  nigeria: "NG",
  niue: "NU",
  "norfolk island": "NF",
  "northern mariana islands": "MP",
  norway: "NO",
  oman: "OM",
  pakistan: "PK",
  palau: "PW",
  "palestinian territory, occupied": "PS",
  panama: "PA",
  "papua new guinea": "PG",
  paraguay: "PY",
  peru: "PE",
  philippines: "PH",
  pitcairn: "PN",
  poland: "PL",
  portugal: "PT",
  "puerto rico": "PR",
  qatar: "QA",
  reunion: "RE",
  romania: "RO",
  "russian federation": "RU",
  rwanda: "RW",
  "saint barthelemy": "BL",
  "saint helena": "SH",
  "saint kitts and nevis": "KN",
  "saint lucia": "LC",
  "saint martin": "MF",
  "saint pierre and miquelon": "PM",
  "saint vincent and grenadines": "VC",
  samoa: "WS",
  "san marino": "SM",
  "sao tome and principe": "ST",
  "saudi arabia": "SA",
  senegal: "SN",
  serbia: "RS",
  seychelles: "SC",
  "sierra leone": "SL",
  singapore: "SG",
  slovakia: "SK",
  slovenia: "SI",
  "solomon islands": "SB",
  somalia: "SO",
  "south africa": "ZA",
  "south georgia and sandwich isl.": "GS",
  spain: "ES",
  "sri lanka": "LK",
  sudan: "SD",
  suriname: "SR",
  "svalbard and jan mayen": "SJ",
  swaziland: "SZ",
  sweden: "SE",
  switzerland: "CH",
  "syrian arab republic": "SY",
  taiwan: "TW",
  tajikistan: "TJ",
  tanzania: "TZ",
  thailand: "TH",
  "timor-leste": "TL",
  togo: "TG",
  tokelau: "TK",
  tonga: "TO",
  "trinidad and tobago": "TT",
  tunisia: "TN",
  turkey: "TR",
  turkmenistan: "TM",
  "turks and caicos islands": "TC",
  tuvalu: "TV",
  uganda: "UG",
  ukraine: "UA",
  "united arab emirates": "AE",
  "united kingdom": "GB",
  "united states": "US",
  "united states outlying islands": "UM",
  uruguay: "UY",
  uzbekistan: "UZ",
  vanuatu: "VU",
  venezuela: "VE",
  vietnam: "VN",
  "virgin islands, british": "VG",
  "virgin islands, u.s.": "VI",
  "wallis and futuna": "WF",
  "western sahara": "EH",
  yemen: "YE",
  zambia: "ZM",
  zimbabwe: "ZW",
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

const getCountriesApi = (isoCode, page = 1) =>
  fetch("https://devops100.site/test/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({
      filters: {
        iso_3166_1_a2: isoCode,
      },
      paginate: {
        page,
        pp_items: 10,
      },
    }),
  }).then(handleResponse);

const countryItem = Vue.component("country-item", {
  props: ["country"],
  template: ` <tr>
                    <th>{{ country.printable_name }}</th>
                    <th>{{ country.iso_3166_1_a2 }}</th>
                    <th>{{ country.iso_3166_1_a3 }}</th>
                    <th>{{ country.is_shipping_country ? 'Да' : 'Нет' }}</th>
                    <th>{{ country.iso_3166_1_numeric }}</th>
                 </tr>`,
});

const searchBar = Vue.component("search-bar", {
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

Vue.component("paginate", VuejsPaginate);
const countryList = Vue.component("country-list", {
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

new Vue({
  el: "#app",
});
