import { BrowserRouter, Route, Routes } from "react-router-dom";
// Footer & Navbar  >> Layout things
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
// PROVIER
import { GithubProvider } from "./context/githubContext/GithubContext";
function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen bg-sky-950 text-white">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<Notfound />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
