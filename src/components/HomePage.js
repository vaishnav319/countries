import React, { useState, useEffect, useRef } from "react";
import Country from "./Country";
const url = "https://restcountries.com/v3.1/region/asia";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [totalCountries, setTotalCountries] = useState([]);

  const results = useRef();
  useEffect(() => {
    fetchCountries();
  }, []);
  const fetchCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    await setCountries(data);
    await setTotalCountries(data);
    results.current.value = "";
  };

  const searchCountry = async () => {
    let term = results ? results.current.value : "";
    if (term.length < 3 || term === "") return;
    console.log(results.current.value);
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    if (res.status !== 404) {
      const data = await res.json();
      await console.log(data);
      await setCountries(data);
      if (results && results.current.value < 3) {
        setCountries(totalCountries);
      }
    } else {
      results.current.value = " ";
    }
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

            <div className="flex lg:flex-row sm:flex-col flex-col ">
              <div className=" flex flex-row border-2 md:mb-2 sm:mb-3 mt-3 border-gray-200 rounded max-w-sm">
                <input
                  type="text"
                  className="lg:px-4 sm:px-2 py-2 lg:w-80 w-50 focus:outline-none focus:shadow-outline focus:border-blue-300"
                  ref={results}
                  placeholder="Search for Asian countries..."
                />
                <button
                  onClick={searchCountry}
                  className="bg-transparent hover:bg-red-500 outline-none text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                >
                  Search
                </button>{" "}
              </div>
              <div>
                <button
                  onClick={fetchCountries}
                  className="ml-4 mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 lg:ml-5 ml-20   border border-red-700 rounded"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-5 lg:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {countries.map((country) => (
          <Country count={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
