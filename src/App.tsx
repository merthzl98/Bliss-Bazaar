import { Navigate, Route, Routes } from "react-router";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Favs from "./pages/Favs";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route
          path="favs"
          element={
            <ProtectedRoute>
              <Favs />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
