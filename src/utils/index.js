const COUNTRY_LIST_API = "https://restcountries.com/v3.1/all";
const COUNTRY_DETAIL_API = "https://restcountries.com/v3.1/name/"; // ADD COUNTRY NAME AT THE END

export async function getCountryList() {
  const countries = await fetch(COUNTRY_LIST_API);

  return await countries.json();
}

export async function getCountryDetail(country) {
  const detail = await fetch(COUNTRY_DETAIL_API + country);

  return await detail.json();
}
