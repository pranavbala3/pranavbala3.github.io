import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import './App.css';
import Home from './pages/Home'; 
import { Logo } from "./Logo"
// import theme from './styles/Styles';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

export const App = () => (
<ChakraProvider theme={theme}>
      <Router>
        <Header/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
)
