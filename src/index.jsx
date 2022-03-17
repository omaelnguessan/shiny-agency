import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Survey from './pages/Survey';
import Home from './pages/Home';
import Header  from  './components/Header';
import Error  from  './components/Error';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import { SurveyProvider, ThemeProvider } from './utils/context';
import Footer from './components/Footer';
import { GlobalStyle } from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='/freelances' element={<Freelances />} />
            <Route path='/results' element={<Results />} />
            <Route path='*' element={<Error />} />
          </Routes> 
          <Footer/>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
