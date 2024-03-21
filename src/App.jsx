import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import {  About, Contact, Custom404, Home, Projects } from './components/Pages';
import PageWrapper from "./components/PageWrapper/Index"
import './App.css'

function App() {

  return (
    <BrowserRouter
    basename={import.meta.env.DEV ? "/" : "/Portfolio-React/"}
  >
    <MyNav />
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
        path="about"
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
            <Contact />
          </PageWrapper>
        }
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App
