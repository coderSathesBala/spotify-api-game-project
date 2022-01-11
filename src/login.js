var client_id = 'f25a526cf53d42c7b794db522c42ab98';
var client_secret = 'c02064daeda847dc99b9ebd7024e8f5d';

// Login Page
export const authEndpoint = 'https://accounts.spotify.com/authorize'
// Spotify Redirect after logging in
const redirectUri = 'http://localhost:3000/'

// Users information
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read'
]

//Pull access token from url
export const getTokenFromUrl = () => {
    return window.location.hash
     .substring(1)
     .split('&')
     .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial; 
    }, {});
}


//Goes through scopes sends user back 
export const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
    )}&response_type=token&show_dialog=true`;