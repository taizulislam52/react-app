import { useState } from "react";

function ListGroup() {
  const countries: string[] = [
    "Bangladesh",
    "Afghanistan",
    "Argentina",
    "Brazil",
    "Spain",
    "England",
    "Franch",
    "Itely",
    "India",
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => setActiveIndex(index);

  return (
    <div className="mt-4 w-50">
      <h1 className="mb-3">Counties name</h1>
      {countries.length == 0 && <p>Opps! No country found.</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            key={country}
            className={
              activeIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(index)}
          >
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
