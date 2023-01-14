import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/Basics/BasicExample';

import React from 'react';

const App = () => {
  return (
    // this is call jsk javascript xml
    <>
     <h1 class="text-warning d-flex justify-content-center">krunal { 10+10 }</h1>
     <p class="d-flex justify-content-center text-danger">Krunal Paragraph</p>
     {/* function cll */}
     <Test  />
    <div class="d-flex justify-content-center">
      <BasicExample />
    </div>
    
    </>
  );
}
// arrow funcation  react js
const Test = () => {
    return <h2 class="text-bold fst-italic">Test Function Call</h2>
};


export default App;
