import React, { useState } from 'react';
import './Calculation.css';
import image from '../../Images/IMG_20211116_191549_1-removebg-preview.png'
import { ToastContainer, toast } from 'react-toastify';

const Calculation = ({cart}) => {
    let total=0;
    for(const product  of cart){
        total= total+product.timeRequired;
    }

    const [breaktext,setBreakText]=useState(0);
    const breakcart=(a)=>{
        setBreakText(a);
        const prediousStorage=localStorage.getItem("break:");
        const oldStorage=JSON.parse(prediousStorage);
        if(oldStorage){
            localStorage.setItem("break:",JSON.stringify(a));
        }else{
            localStorage.setItem("break:",JSON.stringify(a))
        }
    }
    const tostCall=()=>{
        toast("Activity complited bro!!,well done");
    }



    return (
        <div>
            <div className='user'>
                <img src={image} className='user-img' alt="" />
                <div>
                    <h3 style={{color:'black', fontSize:'20px'}}>Parthive Shill.</h3>
                    <p><small style={{color:'rgb(178 171 171)', fontSize: '16px', fontWeight:'600'}}>Rangunia,bangladesh</small></p>
                </div>
            </div>
            
            <div className="user-details">
                <div  className='user-info'>
                    <h4>53</h4>kg
                    {/* <span>kg</span> */}
                </div>
                <div className='user-info'>
                    <h4>6.0</h4>height
                    {/* <span>height</span> */}
                </div>
                <div className='user-info'>
                    <h4>20</h4>age
                </div>
            </div>

            <h4 className=''>Added A Break</h4>
            <div className='break'>
            <li style={{color: 'white', padding: '5px'}} onClick={()=>breakcart(10)}>10</li>
            <li style={{color: 'white', padding: '5px'}} onClick={()=>breakcart(20)}>20</li>
            <li style={{color: 'white', padding: '5px'}} onClick={()=>breakcart(30)}>30</li>
            <li style={{color: 'white', padding: '5px'}} onClick={()=>breakcart(40)}>40</li>
            {/* <li>50</li> */}
            </div>
            

            <h4>Exercise Details</h4>
            <div className='calculation'><h4>Exercise Time: <span style={{marginLeft:'20px', color: 'rgb(166 157 157)'}}>{total} minutes</span></h4></div>
            <div className='calculation'><h4>Breack Time: <span style={{marginLeft:'20px', color: 'rgb(166 157 157)'}}>{breaktext?breaktext:localStorage.getItem("break:")}minutes</span></h4></div>
            <button onClick={tostCall} className='activity'> Activity completed</button>
            <ToastContainer />

        </div>
    );
};

export default Calculation;