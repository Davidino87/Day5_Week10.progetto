import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Forecast = (props) => {
  const url = "http://openweathermap.org/img/wn/";

  return (
    <Carousel responsive={responsive}>
      {props.forecast &&
        props.forecast.list.map((singleForecast) => {
          return (
            <div key={singleForecast.dt} className="text-center">
              <div>{singleForecast.dt_txt}</div>
              <div>
                <img
                  src={`${url}${singleForecast.weather[0].icon}.png`}
                  alt="forecast-image"
                  style={{ height: "100px" }}
                />
              </div>
              <div className="fs-1 ciao">{singleForecast.main.temp}°C</div>
              <div>Umidità: {singleForecast.main.humidity} %</div>
              <div>Pressione: {singleForecast.main.pressure} hPa</div>
              <div>Vento: {singleForecast.wind.speed} m/s</div>
            </div>
          );
        })}
    </Carousel>
  );
};
export default Forecast;
