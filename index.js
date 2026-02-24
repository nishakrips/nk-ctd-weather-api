const url =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
// const url = "https://api.open-meteo.com/v1/forecast"
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => console.log("data", data))
