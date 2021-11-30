import Axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Kota from "./components/Kota";
import Cuaca from "./components/Cuaca";


const API_KEY ="7dca0df42bb46687057cc5fd89400e98";

function App() {
  const [city, updateCity]= useState();
  const [weather, updateWeather]= useState();

  const fetchWeather = async (e)=>{
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,);
    updateWeather(response.data);
  }

  return (
    <Container>
      <Label>Weather App</Label>
      {weather? (<Cuaca weather={weather}/>) : (<Kota updateCity={updateCity} fetchWeather={fetchWeather}/>)}
      {/* <Cuaca/> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 451px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 10px;
  background: radial-gradient(circle, rgba(212,226,235,0.6) 0%, rgba(187,198,203,0.6) 100%); 
  font-family: "Poppins",sans-serif;
`;

const Label = styled.span`
  color: #fff;
  font-size: 36px;
  font-weight: 900;
`;