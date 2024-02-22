import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Custom404, Contacts, Projects } from "./components/Pages";
import MyNavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PageWrapper from "./components/PageWrapper/Index";

import "./App.css";

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/React-App-Portfolio/"}
    >
      <MyNavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/404"
          element={
            <PageWrapper>
              <Custom404 />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;