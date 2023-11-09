import './App.css';
import {useState} from 'react'

function App() {
  const [details,setDetails] = useState({});
  const handleSubmit = async(e) => {
    if(!details.name || !details.roll){
      alert('enter name/rollno')
      return;
    }
    e.preventDefault()
    try{
      const result = await fetch('http://localhost:3000/submit-form',{
			method:'POST',
			body:JSON.stringify(details),
			headers:{
				"Content-Type":"application/json"
			}
		})
    alert('Success')
    }
    catch(err){
      alert('error')
    }
  }
  const handleChange = (e) =>{
    setDetails({...details,[e.target.name]:e.target.value})
    console.log(details)
  }
  return (
    <center>
    
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' className='input' placeholder='Enter Name' name='name' onChange={handleChange}/> <br/><br/>
      <input type='number' className='input' name='roll' placeholder='Enter Rollno' onChange={handleChange}/><br/><br/>
      <input type='submit' value={'Submit'}/>
    </form>
    </center>
  );
}

export default App;
