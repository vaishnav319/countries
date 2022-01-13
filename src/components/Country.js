import React from "react";
import { Link } from "react-router-dom";
const Country = ({ count }) => {
  let languages, borders;

  let languagess = [];

  if (count) {
    languages = count.languages;

    borders = count.borders;
    for (const [key, value] of Object.entries(languages)) {
      languagess.push(value);
    }
  }
  return (
    <Link to={`/country/${count.name.common}`}>
      <div className="max-w-sm bg-white cursor-pointer rounded overflow-hidden shadow-lg transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl">
        <img
          className="w-full"
          style={{ height: "15rem" }}
          src={count.flags.png}
          alt="flag"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{count.name.common}</div>
          <p className="text-gray-700 text-base">
            {count.name.common} is a country which is located in{" "}
            {count.continents} and its capital is{" "}
            {count.capital ? count.capital : count.name.common} and the timezone
            here is {count.timezones}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Population : {count.population}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Region : {count.region}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Sub Region : {count.subregion}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Language(s) : {languagess.join(",")}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Borders :{" "}
            {count.borders ? (
              count.borders.join(",")
            ) : (
              <p className="text-sm">No Borders</p>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Country;
