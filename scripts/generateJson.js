const fs = require('fs-extra');
const path = require('path');

const placesJson = path.resolve(__dirname, '../src/assets/places.json');

async function updateJsonFile() {
  const jsonArray = [];


  for (let i = 0; i < 1000; i++) {
    if (i === 0 || (i - 11) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "London",
        image: "./images/London.jpg",
        country: "UK"
      })
    } else if (i === 1 || (i - 1) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "New York City",
        image: "./images/NYC.jpg",
        country: "US"
      })
    } else if (i === 2 || (i - 2) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Gothenburg",
        image: "./images/Gothenburg.jpg",
        country: "SE"
      })
    } else if (i === 3 || (i - 3) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Luleå",
        image: "./images/Lulea.jpg",
        country: "SE"
      })
    } else if (i === 4 || (i - 4) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Barcelona",
        image: "./images/Barcelona.jpg",
        country: "ES"
      })
    } else if (i === 5 || (i - 5) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Prague",
        image: "./images/Prague.jpg",
        country: "CZ"
      })
    } else if (i === 6 || (i - 6) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Manchester",
        image: "./images/Manchester.jpg",
        country: "UK"
      })
    }
    else if (i === 7 || (i - 7) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Madrid",
        image: "./images/Madrid.jpg",
        country: "ES"
      })
    }
    else if (i === 8 || (i - 8) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Tokyo",
        image: "./images/Tokyo.jpg",
        country: "JP"
      })
    }
    else if (i === 9 || (i - 9) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Perth",
        image: "./images/Perth.jpg",
        country: "AU"
      })
    }
    else if (i === 10 || (i - 10) % 11 === 0) {
      jsonArray.push({
        id: i,
        location: "Auckland",
        image: "./images/Auckland.jpg",
        country: "UK"
      })
    }

    console.log(jsonArray)
  }

  fs.writeFile(placesJson, JSON.stringify(jsonArray, null, 2), function writeJSON(err) {
    if (err) {
      return console.log(err);
    }
    console.log('writing to ' + placesJson);
    console.log('great success on updating placesJson');
  });
}

updateJsonFile();