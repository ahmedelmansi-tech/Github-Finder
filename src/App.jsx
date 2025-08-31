import { BrowserRouter, Route, Routes } from "react-router-dom";
// Footer & Navbar  >> Layout things
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";

// PROVIER
import { GithubProvider } from "./context/githubContext/GithubContext";
import { AlertProvider } from "./context/alertContext/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between min-h-screen bg-sky-950 text-white">
            <Navbar />
            <main className="container mx-auto px-3 ">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:person" element={<Profile />} />
                <Route path="/notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
