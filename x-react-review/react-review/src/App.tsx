import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DarkModeContextProvider from "./context/DarkMode.context";
import CountriesList from "./pages/CountriesList/CountriesList";
import CountryDetails from "./pages/CountryDetails/CountryDetails";

function App() {
  return (
    <DarkModeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="list" element={<CountriesList />} />
            <Route path="list/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
}

export default App;
