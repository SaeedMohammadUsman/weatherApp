// const apikeyForCity = "efe91686e85d642675825c2b93bf493e";

// // let ciiiii = "Kabul";

// async function checkCityName(cityName) {
//   const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=2&appid=${apikeyForCity}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     const exactMatch = data.some(
//       (city) => city.name.toLowerCase() === cityName.toLowerCase()
//     );

//     if (exactMatch) {
//       console.log("yes");
//     } else {
//       console.log("no");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Example usage:
// checkCityName("orange");
