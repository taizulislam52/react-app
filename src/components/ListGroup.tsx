import { useState } from "react";

interface Props {
  countries: string[];
  heading: string;
  onSelectCountry: (item: string) => void;
}

function ListGroup({ countries, heading, onSelectCountry }: Props) {
  const [activeCountryIndex, setActiveCountryIndex] = useState(-1);

  const handleClick = (index: number) => setActiveCountryIndex(index);

  return (
    <div className="mt-4 w-50">
      <h1 className="mb-3">{heading}</h1>
      {countries.length == 0 && <p>Opps! No country found.</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            key={country}
            className={
              activeCountryIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleClick(index);
              onSelectCountry(country);
            }}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
