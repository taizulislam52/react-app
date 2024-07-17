function ListGroup() {
  const countries = [
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
  return (
    <div className="mt-4 w-50">
      <h1 className="mb-3">List items</h1>
      <ul className="list-group">
        {countries.map((country) => (
          <li key={country} className="list-group-item">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
