import styled from "styled-components";

export const WeatherIconInfo = {
    sunset: "/pic/sunset.svg",
    sunrise: "/pic/sunrise.svg",
    humidity: "/pic/humidity.svg",
    wind: "/pic/wind.svg",
    pressure: "/pic/presure.svg",
}

export const WeatherIcons = {
    "0ld": "/pic/sunny.svg",
    "01n": "/pic/night.svg",
    "02d": "/pic/day.svg",
    "02n": "/pic/cloudy-night.svg",
    "03d": "/pic/cloudy.svg",
    "03n": "/pic/cloudy.svg",
    "04d": "/pic/day.svg",
    "04n": "/pic/cloudy-night.svg",
    "09d": "/pic/rain.svg",
    "09n": "/pic/rain-night.svg",
    "10d": "/pic/rain.svg",
    "10n": "/pic/rain-night.svg",
    "11d": "/pic/storm.svg",
    "11n": "/pic/storm.svg",
};
const WeatherCondition = styled.span`
    margin-top: 20px;    
    font-size:15px;
    font-weight: 600;
    & span{
        font-size:20px;
        font-weight:700;
    }
`
const WeatherLogo = styled.img`
width: 200px;
margin: 20px auto;
`
const CityName = styled.span`
    font-size:25px;
    font-weight:700;
`
const WeatherInfo = styled.span`
    font-size: 13px;
    font-weight:600;
    margin: 5px 25px 10px;
    text-align: start;
    width: 90%
`
const WeatherContainerInfo = styled.div`
 display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const ContainerInfo = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const IconInfo = styled.img`
  width: 37px;
  height: 37px;
`;
const LabelInfo = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherCompononentInfo=(props)=>{
    const {name,value} = props;
    return(
        <ContainerInfo>
            <IconInfo src={WeatherIconInfo[name]}/>
            <LabelInfo>
                {value}
                 <span>{name}</span>
            </LabelInfo>
        </ContainerInfo>
    )
}
const Cuaca = (props) =>{
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return<>
    <WeatherCondition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{` | ${weather?.weather[0].description}`}</WeatherCondition>
    <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}/>
    <CityName>{`${weather?.name}, ${weather?.sys?.country}`}</CityName>
    <WeatherInfo>The weather in your city are :</WeatherInfo>
    <WeatherContainerInfo>
        <WeatherCompononentInfo name={isDay?"sunset":"sunrise"} value={`${getTime(weather?.sys[isDay?"sunset":"sunrise"])}`}/>
        <WeatherCompononentInfo name="humidity" value={weather?.main?.humidity}/>
        <WeatherCompononentInfo name="wind" value={weather?.wind?.speed}/>
        <WeatherCompononentInfo name="pressure" value={weather?.main?.pressure}/>
    </WeatherContainerInfo>
    </>

}

export default Cuaca;