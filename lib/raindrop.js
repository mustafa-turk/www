export async function getBookmarks() {
  const url = ['https://api.raindrop.io/rest/v1/raindrops/0', '?perpage=50', '&sort=-created'].join(
    '',
  );

  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer 127d198a-c35a-4d5c-becf-113a043c44db`,
    }),
  });

  const data = await res.json();
  return data.items;
}
