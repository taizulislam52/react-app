import ListGroup from "./components/ListGroup";
import { countries } from "./constants";

function App() {
  const handleSelectCountry = (country: string) => {
    console.log(country);
  };

  return (
    <div className="container">
      <ListGroup
        countries={countries}
        heading="Countries"
        onSelectCountry={handleSelectCountry}
      />
    </div>
  );
}

export default App;
