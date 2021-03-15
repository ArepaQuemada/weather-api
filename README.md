# weather-api

Api that provides weather and location information. To run locally follow this steps
1. Clone this project
2. Run npm i
3. Add following enviorment variables in a .env file
  * PORT: The port in which the server will be running
  * API_KEY: OpenWeather Api Key
  * IP_API: URI from ip-api
  * OPEN_WEATHER_CURRENT: Endpoint from OpenWeather
  * OPEN_WEATHER_FORECAST: Endpoint from OpenWeather
4. Run npm run dev
5. Open http://localhost:{ Your port }

Since we are using typescript, any source code change you make you must run *npm run dev* again to transpile to javascript
