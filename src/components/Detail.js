import React, { useState, useEffect } from "react";
import MapContainer from "./MapContainer";
const Detail = ({ match }) => {
  let country = match.params.name;
  console.log(country);
  const [countryData, setCountryData] = useState();
  let url = `https://restcountries.com/v3.1/name/${country}`;
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      await setCountryData(data);
      console.log(data);
    };

    fetchCountryData();
  }, []);
  let currency, languages;
  let currencies = [];
  let languagess = [];
  if (countryData) {
    currency = countryData[0].currencies;
    languages = countryData[0].languages;
    for (const [key, value] of Object.entries(currency)) {
      currencies.push(value.name);
    }
    for (const [key, value] of Object.entries(languages)) {
      languagess.push(value);
    }
  }

  console.log(countryData);

  return (
    <div className="">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className=" p-2 ">
          <div className="m-10">
            <a
              href={"/"}
              className="text-white bg-red-500 py-4 px-6  focus:outline-none hover:bg-red-600 rounded"
            >
              Back to Dashboard
            </a>
          </div>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={countryData ? countryData[0].flags.png : ""}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {countryData ? countryData[0].name.common : ""}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <p className="text-red-500">
                    {countryData ? countryData[0].subregion : ""}
                  </p>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <p className="text-red-500">
                    Capital : {countryData ? countryData[0].capital[0] : ""}
                  </p>
                </span>
              </div>
              <p className="leading-relaxed">
                {countryData ? countryData[0].name.common : ""} is a country
                which is located in{" "}
                {countryData ? countryData[0].continents : ""} and its capital
                is {countryData ? countryData[0].capital : ""}
                &nbsp; and the timezone here is{" "}
                {countryData ? countryData[0].timezones : ""}
              </p>
              <div className="flex flex-col justify-center  mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className=" text-red-500">Currency :</span>
                  {currencies.join(",")}
                </div>
                <div className=" items-center">
                  <span className=" text-red-500">Languages : </span>
                  {languagess.join(",")}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Population : {countryData ? countryData[0].population : ""}
                </span>
                <a
                  href={`https://en.wikipedia.org/wiki/${
                    countryData ? countryData[0].name.common : ""
                  }`}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-red-500 text-3xl title-font font-medium mb-3 flex justify-center">
            {countryData ? countryData[0].name.common : ""}'s Location
          </h1>
        </div>
      </section>
      <div className="">
        {countryData ? (
          <MapContainer
            lat={countryData[0].latlng[0]}
            long={countryData[0].latlng[1]}
          />
        ) : (
          "Location Not Available"
        )}
      </div>
    </div>
  );
};

export default Detail;
