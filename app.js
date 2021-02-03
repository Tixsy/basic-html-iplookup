const input = document.querySelector('input')
const form = document.querySelector('form')
const header = document.querySelector('h1')
const Country = document.querySelector('.Country');
const City = document.querySelector('.City');
const error = document.querySelector('.error');
const Lat = document.querySelector('.Lat');
const Lon = document.querySelector('.Lon');
const Zip = document.querySelector('.Zip');
const Isp = document.querySelector('.Isp');



async function getLocation(host) {
    const response = await fetch(`http://ip-api.com/json/${host}`);
    const json = await response.json();
    header.textContent = 'Success';
    Country.textContent = `Country: ${json.country}`;
    City.textContent = `City: ${json.city}`;
    Isp.textContent = `ISP: ${json.isp}`;
    Zip.textContent = `Zip Code: ${json.zip}`;
    Lat.textContent = `Latitude: ${json.lat}`;
    Lon.textContent = `Longitude: ${json.lon}`;
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const host = input.value;
    if (!host) {
        header.textContent = 'Error!';
        Country.textContent = ``;
        City.textContent = ``;
        Isp.textContent = ``;
        Zip.textContent = ``;
        Lat.textContent = ``;
        Lon.textContent = ``;
        error.textContent = 'You must enter a Host!';
    } else {
        error.textContent = '';
        getLocation(host);
        error.textContent = '';
    }
});