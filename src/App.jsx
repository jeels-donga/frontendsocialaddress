import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/CommonLayout/Layout";
import Home from "./pages/Home";
import SAM from "./pages/SAM";
import Pix from "./pages/Pix";
import Connect from "./pages/Connect";
import Analytics from "./pages/Analytics";
import Subscribers from "./pages/Subscribers";
import SecurityGroups from "./pages/SecurityGroups";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/SAM" element={<SAM />} />
            <Route path="/Pix" element={<Pix />} />
            <Route path="/Connect" element={<Connect />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Subscribers" element={<Subscribers />} />
            <Route path="/SecurityGroups" element={<SecurityGroups />} />
            <Route path="/Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
