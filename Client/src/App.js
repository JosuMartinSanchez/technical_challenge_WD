import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneDetails from "./pages/PhoneDetails";
import PhoneList from "./components/PhoneList";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <PhoneList />
      <Routes>
        <Route path="/phones/:_id" element={<PhoneDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
