import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MyProjects from "./pages/MyProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import JsProjects from "./components/JsProjects";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.css"
import RaectProjects from "./components/RaectProjects";
import HtmlCssProjects from "./components/HtmlCssProjects";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/myprojects" element={<MyProjects />}>
          <Route path="js" element={<JsProjects />} />
          <Route path="react" element={<RaectProjects />} />
          <Route path="html" element={<HtmlCssProjects />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
