import {useState} from 'react'
import './App.css';

function App() {
  const [weight,setWeight]=useState()
  const [height,setHeight]=useState()
  const [result,setResult]=useState()
    function handelPoids(e){
      setWeight(e.target.value)
    }
    function handelTaille(e){
      setHeight(e.target.value)
    }
    function hanedlClick(){
      if(result === isNaN){
        setResult("enter a valid number")
      }else{
        setResult(parseInt(Math.round((weight/(height*height))*10000)))
      }
    }
  return (
    <div className="App">
        <div className='container'>
            <div className='content'>
              <h1>Body Mass Index Calculator</h1>
              <p className='1'>Enter your height and weight to calculate your BMI.</p>
              <input class="form-control form-control-lg" type="text" placeholder="weight kg" aria-label=".form-control-lg example"  onChange={handelPoids} /><br/>
              <input class="form-control form-control-lg" type="text" placeholder="height cm" aria-label=".form-control-lg example"   onChange={handelTaille}  /><br/>
              <button type="submit" class="btn btn-secondary" onClick={hanedlClick}>Calculate</button>
              <p>{result}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
