export const countryItem = Vue.component("country-item", {
  props: ["country"],
  template: ` <tr>
                <th>{{ country.printable_name }}</th>
                <th>{{ country.iso_3166_1_a2 }}</th>
                <th>{{ country.iso_3166_1_a3 }}</th>
                <th>{{ country.is_shipping_country ? 'Да' : 'Нет' }}</th>
                <th>{{ country.iso_3166_1_numeric }}</th>
             </tr>`,
});
