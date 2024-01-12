import { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import ForecastToday from "./ForecastToday";
import ForecastTomorrow from "./ForecastTomorrow";
import ForecastNextDays from "./ForecastNextDays";
import InputMeteo from "./InputMeteo";

const HomeMeteo = ({ locationToSave, setLocationToSave }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(false);

  const handleSearchClick = () => getLocation();

  const weatherApi = "http://api.openweathermap.org/geo/1.0/direct?q=";
  const forecastApi = "https://api.openweathermap.org/data/2.5/forecast?";
  const keyPC = "149e38dff373166f95c7e6a0cf18e20b";

  const getLocation = () => {
    fetch(weatherApi + search + "&appid=" + keyPC)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore recupero località");
        }
      })
      .then((locationSearch) => {
        console.log("Località cercata:", locationSearch);
        setLocation(locationSearch);

        if (locationSearch && locationSearch.length > 0) {
          const { lat, lon } = locationSearch[0];
          console.log(lat, lon);
          getForecast(lat, lon);
        }
      })
      .catch((err) => console.log("err", err));
  };

  const getForecast = (lat, lon) => {
    fetch(`${forecastApi}lat=${lat}&lon=${lon}&appid=${keyPC}&units=metric`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore recupero previsioni");
        }
      })
      .then((previsioni) => {
        console.log("previsioni", previsioni);
        setForecast(previsioni);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <InputMeteo search={search} setSearch={setSearch} handleSearchClick={handleSearchClick} />
        </Col>
      </Row>
      {location && location.length === 0 && (
        <Row className="text-center ">
          <Col xs={4} className="me-auto ms-auto">
            <Alert variant="primary" className="text-center my-5">
              Località non valida
            </Alert>
          </Col>
        </Row>
      )}
      <Row>
        <Col className="text-light mb-5">
          {forecast && (
            <>
              <div className="text-center mt-5">
                Località: {location[0].name} - {location[0].state} - {location[0].country}
              </div>
              <div className="text-center mt-3">
                <Button
                  onClick={() => {
                    if (location && location[0]) {
                      setLocationToSave((prevLocationToSave) => [...prevLocationToSave, location[0].name]);
                    }
                  }}
                  variant="primary"
                >
                  Salva Località
                </Button>
              </div>
            </>
          )}
          <Container>
            {forecast && <div className="mb-3">OGGI:</div>}
            <ForecastToday forecast={forecast} />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="text-light mb-5">
          <Container>
            {forecast && <div className="mb-3">DOMANI:</div>}
            <ForecastTomorrow forecast={forecast} />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="text-light mb-5">
          <Container>
            {forecast && <div className="mb-3">PROSSIMI GIORNI:</div>}
            <ForecastNextDays forecast={forecast} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeMeteo;
