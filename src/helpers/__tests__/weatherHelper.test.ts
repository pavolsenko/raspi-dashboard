import {getHourlyForecast} from '../weatherHelpers';
import {hourly} from '../__fixtures__/hourly';

describe('weatherHelper helper:', () => {
   describe('getHourlyForecast:', () => {
      it('should return forecast for every 2 hours', () => {
         const expected = [{
            "clouds": 84,
            "dew_point": 9.02,
            "dt": 1650751200,
            "feels_like": 10.87,
            "humidity": 85,
            "pop": 0.5,
            "pressure": 1005,
            "temp": 11.45,
            "uvi": 0,
            "visibility": 10000,
            "weather": [{"description": "broken clouds", "icon": "04n", "id": 803, "main": "Clouds"}],
            "wind_deg": 117,
            "wind_gust": 8.92,
            "wind_speed": 3.85
         }, {
            "clouds": 90,
            "dew_point": 8.99,
            "dt": 1650758400,
            "feels_like": 9.56,
            "humidity": 93,
            "pop": 0.32,
            "pressure": 1003,
            "temp": 10.07,
            "uvi": 0,
            "visibility": 10000,
            "weather": [{"description": "overcast clouds", "icon": "04n", "id": 804, "main": "Clouds"}],
            "wind_deg": 120,
            "wind_gust": 7.99,
            "wind_speed": 3.75
         }, {
            "clouds": 90,
            "dew_point": 8.26,
            "dt": 1650765600,
            "feels_like": 7.33,
            "humidity": 97,
            "pop": 0,
            "pressure": 1001,
            "temp": 9.01,
            "uvi": 0,
            "visibility": 10000,
            "weather": [{"description": "overcast clouds", "icon": "04n", "id": 804, "main": "Clouds"}],
            "wind_deg": 125,
            "wind_gust": 6.09,
            "wind_speed": 2.99
         }, {
            "clouds": 92,
            "dew_point": 7.93,
            "dt": 1650772800,
            "feels_like": 7.61,
            "humidity": 96,
            "pop": 0,
            "pressure": 999,
            "temp": 8.75,
            "uvi": 0,
            "visibility": 10000,
            "weather": [{"description": "overcast clouds", "icon": "04d", "id": 804, "main": "Clouds"}],
            "wind_deg": 122,
            "wind_gust": 5.04,
            "wind_speed": 2.15
         }, {
            "clouds": 78,
            "dew_point": 8.07,
            "dt": 1650780000,
            "feels_like": 10.25,
            "humidity": 84,
            "pop": 0,
            "pressure": 998,
            "temp": 10.91,
            "uvi": 0.45,
            "visibility": 10000,
            "weather": [{"description": "broken clouds", "icon": "04d", "id": 803, "main": "Clouds"}],
            "wind_deg": 156,
            "wind_gust": 8.5,
            "wind_speed": 3.62
         }];
         expect(getHourlyForecast(hourly)).toStrictEqual(expected);
      });
   });
});
