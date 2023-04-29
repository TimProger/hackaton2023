import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import RoutePage from "./pages/route";
import RoutesPage from "./pages/routes";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Main />} />
        <Route index path="/routes" element={<RoutesPage />} />
        <Route index path="/route/:index" element={<RoutePage />} />
      </Route>
    </Routes>
  );
}

export default App;