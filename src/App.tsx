import { Route, Routes } from "react-router-dom";
import Category from "./pages/category";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Navigation from "./pages/navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Footer />}>
          <Route index element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
