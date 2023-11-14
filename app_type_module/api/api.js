const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export let getCountriesApi = (isoCode, page = 1) =>
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
