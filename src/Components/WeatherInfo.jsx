import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const WeatherInfo = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <div className="weather">
      <div className="weather-loc">
    
        
          <p > <span style={{ fontSize: "16px",fontWeight:'600' }}>location:</span> {weather.data.name}</p>
        

        <p ><span style={{ fontSize: "16px",fontWeight:'600' }}>Weather Condition:</span> {weather.data.weather?.[0].description}</p>
      </div>
      <div style={{textAlign:'center'}}>
        {weather.data.weather?.[0].description === "clear sky" && 'light intensity drizzle' ? (
          <p style={{ color: "green", fontSize: "16px",fontWeight:'600',textAlign:'center' }}>your play out side</p>
        ) : (
          <p style={{ color: "red", fontSize: "16px",fontWeight:'600',textAlign:'center' }}>
            Sorry, Due to Bad weather you can't Go or Play outside
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
