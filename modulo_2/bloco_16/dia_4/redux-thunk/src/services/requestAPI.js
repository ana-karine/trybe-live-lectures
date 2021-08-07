function getAPI() {
  return fetch('https://api.imgflip.com/get_memes')
  .then(response => response.json())
  .then(response => response.data.memes)
}

export default getAPI;
