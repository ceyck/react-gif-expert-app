export const getGifts = async ( category ) => {
   const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=A4fQkAfigWA9yaSfJlAXgDO94gFZmo4w`;
   const resp = await fetch(url);
   const { data } = await resp.json();
   const gifs = data.map( img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   });
  return gifs;
}
