import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalogue } from "./pages/Catalogue/Catalogue.jsx";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { About } from "./pages/About/About.jsx";
import { Detail } from "./pages/Detail/Detail.jsx";
import { Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { LogIn } from "./pages/LogIn/LogIn.jsx";

import { AuthProvider } from "./pages/firebase/context.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { Register } from "./pages/Register/Register.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AuthProvider>
        <Routes>
          {/* added ProtectedRoute removed navigate */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/Login" element={<LogIn />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

