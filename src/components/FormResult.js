import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../redux/formdataSlice";

const FormResult = () =>{
    const dispatch = useDispatch();
    const {status, data} = useSelector((state)=>state.formdata);
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(fetchData());
    },[])
    return(
        <>
        <button onClick={()=>{ navigate('/') }}>Back</button>
        <h1>Form result</h1>
        {status!=='succeeded' && <h2>Still Loading</h2>}
        {(status=='succeeded' && data.length>0) && data.map((d,index)=>{
            return(
                <div key={index}>
                    <p>{d.name}</p>
                    <p>{d.email}</p>
                    <p>{d.phone}</p>
                    <hr />
                </div>
            )
        }) }
        
        </>
    )
}

export default FormResult;