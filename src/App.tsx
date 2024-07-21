import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div className="container my-4">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is <strong>Alert</strong> Component
        </Alert>
      )}
      <Button color="info" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </div>
  );
}

export default App;
