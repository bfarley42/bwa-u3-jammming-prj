const clientId = '03d4d33fcf2a4b29bc8e22d6803ef953'
const redirectURI = 'http://localhost:3000/'
let apiKey =''
let accessToken = ''
let expiresIn = 0

const Spotify = {

getAccessToken() {
  if (accessToken != '') {
    return accessToken
  }
  else {
       fetch(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify=public&redirect_uri=http:%2F%2F${redirectURI}`
         let regexToken = '/access_token=([^&]*)/'
         let regexExpires = '/expires_in=([^&]*)/'
         if (window.location.href.match(regexToken) != '') {

         accessToken = window.location.href.match(regexToken)
         expiresIn =window.location.href.match(regexExpires)
         window.setTimeout(() => accessToken = '', expiresIn * 1000);
         window.history.pushState('Access Token', null, '/');
       }
       else {
         window.location('')
       }
  }
}

}



export default Spotify;
