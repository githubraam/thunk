import './form.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveData } from "../redux/formdataSlice";

const Form = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({})
    const formHandler = (e) =>{
        e.preventDefault();
        dispatch( saveData(inputValue) );
        navigate('/result')
    }
    function inputValueHandler(e){
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }
    return(
        <form onSubmit={formHandler} className="formWrpr">
            <h1>Form </h1>
            <div className='formGroup'>
                <label className="label">Name</label>
                <input type="text" value={inputValue.name || ''} name="name" onChange={inputValueHandler} />
            </div>
            <div className='formGroup'>
                <label className="label">Email</label>
                <input type="email" value={inputValue.email || ''} name="email" onChange={inputValueHandler} />
            </div>
            <div className='formGroup'>
                <label className="label">Phone</label>
                <input type="text" value={inputValue.phone || ''} name="phone" onChange={inputValueHandler} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

            
        </form>
    )
}

export default Form;