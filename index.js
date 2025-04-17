import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_xiR3DenIV2EAs2fKhYo54kAkZGe7QbO6MN364nc0"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi
    .latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    })
    const rate=res.data[toCurrency];
    return rate*units; 
}
