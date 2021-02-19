const PAGEVIEWS_PRICES = [
  { pageviews: "10k", monthlyPrice: (8.00).toFixed(2), yearlyPrice: (8*0.25).toFixed(2) },
  { pageviews: "50k", monthlyPrice: (12.00).toFixed(2), yearlyPrice: (12*0.25).toFixed(2) },
  { pageviews: "100k", monthlyPrice: (16.00).toFixed(2), yearlyPrice: (16*0.25).toFixed(2) },
  { pageviews: "500k", monthlyPrice: (24.00).toFixed(2), yearlyPrice: (24*0.25).toFixed(2) },
  { pageviews: "1m", monthlyPrice: (36.00).toFixed(2), yearlyPrice: (36*0.25).toFixed(2) },
];

const slider = document.getElementById('slider');
const billing = document.getElementById('billing');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');

function updatePrices(updatePageviews) {
  const prices = PAGEVIEWS_PRICES[slider.value-1];
  price.innerHTML = `$${billing.checked ? prices.yearlyPrice : prices.monthlyPrice}`;

  if (updatePageviews) {
    pageviews.innerHTML = `${prices.pageviews} pageviews`;
  }
}

billing.addEventListener('change', () => updatePrices());

slider.addEventListener('input', () => updatePrices(true));
