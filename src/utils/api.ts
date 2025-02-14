const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export async function fetchCryptoAssets() {
  const response = await fetch(
    `${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch crypto assets');
  }

  return response.json();
}

const SushiSwap_api = 'https://api.sushi.com';

export async function fetchCryptoAssetsSushiSwap(){
  const response = await fetch(`${SushiSwap_api}/tokens`);

  if (!response.ok) {
    throw new Error('Failed to fetch crypto assets');
  }

  return response.json();
}