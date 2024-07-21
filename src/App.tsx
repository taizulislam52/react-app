import Button from "./components/Button";

function App() {
  return (
    <div className="container my-4">
      <Button color="info" onClick={() => console.log("Click")}>
        Button
      </Button>
    </div>
  );
}

export default App;
