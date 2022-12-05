import { useState } from 'react';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormResult from './components/FormResult';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/result" element={<FormResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
