import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import Dashboard from "@/pages/Dashboard"
import Review from "@/pages/Review"
import Header from "@/components/Header"
// import { ThemeProvider } from "@/components/ThemeProvider"

import "@/App.css"
import "@/index.css"

function App() {
  return (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
  )
}

export default App






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Review from "@/pages/Review";
// import Dashboard from "@/pages/Dashboard";
// import Home from "@/pages/Home";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/review" element={<Review />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }