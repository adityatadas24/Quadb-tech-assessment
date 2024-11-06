import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const WeatherInfo = () => {

  const weather = useSelector((state) => state.weather);

  return (
    <div className="weather w-full max-sm:text-[10px]">
      <div className="weather-loc max-sm:text-[10px]">
        <p>
          <span className="text-lg max-sm:text-[10px]" style={{ fontWeight: "600" }}>
            location:
          </span>{" "}
          {weather.data.name}
        </p>

        <p>
          <span className="text-lg max-sm:text-[10px]" style={{ fontWeight: "600" }}>
            Weather Condition:
          </span>{" "}
          {weather.data.weather?.[0].description}
        </p>
      </div>
      <div className="text-md max-sm:text-[11px]" style={{ textAlign: "center" }}>
        {weather.data.weather?.[0].description === "clear sky" &&
        "light intensity drizzle" ? (
          <p
            style={{
              color: "green",
              
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            your play out side
          </p>
        ) : (
          <p
            style={{
              color: "red",
              
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Sorry, Due to Bad weather you can't Go or Play outside
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
