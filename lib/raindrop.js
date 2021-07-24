export async function getBookmarks() {
  const url = [
    'https://api.raindrop.io/rest/v1/raindrops/0',
    '?perpage=50',
    '&sort=-created'
  ].join('');

  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`
    })
  });

  const data = await res.json();
  return data.items;
}