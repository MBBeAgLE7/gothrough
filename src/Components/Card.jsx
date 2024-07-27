import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Card() {

    let [activebtnone , setActivebtnone] = useState(false);
    let [activebtntwo , setActivebtntwo] = useState(false);
    let[activefrom,setActivefrom] =useState(false);
    let[activeto,setActiveto] =useState(false);
    let[activedepature,setActivedepature] =useState(false);
    let[activereturn,setActivereturn] =useState(false);
    let[activeclass,setActiveclass] =useState(false);
    


    let activeButton1=()=>{
        // alert("clicked")
        setActivebtnone(!activebtnone)
        setActivebtntwo(false)
        

    }
    let activeButton2=()=>{
        setActivebtnone(false)
        setActivebtntwo(!activebtntwo)      
        
    }
    
    let activeFrom=()=>{
        
        // alert("clicked")
        setActivefrom(true);

    }
    let activeTo=()=>{
        
        // alert("clicked")
        setActiveto(true);

    }
    let activeDepature=()=>{
        
        // alert("clicked")
        setActivedepature(true);

    }
    let activeReturn=()=>{
        
        // alert("clicked")
        setActivereturn(true);

    }
    let activeClass=()=>{
        
        // alert("clicked")
        setActiveclass(true);

    }

  return (
    <>
    
        <div className='cardouter'>

            <div className='card'>

                <div className='btn'>

                    <button  className={activebtnone ? 'btnactive': ''} onClick={activeButton1}>One Way</button> <button className={activebtntwo ? 'btnactive': ''} onClick={activeButton2}>Round Trip</button>

                </div>

                <div className='model'>

                    <div className='mdlShaddow'>
                        <div  className={ activefrom ? 'scaleinp': ''} onClick={activeFrom}>
                            <p >From</p>
                            
                            {
                                activefrom ? 

                                <>
                                <input type="text" name="" id="" /> <span>&times;</span>
                                </>
                            
                                : '' 

                            }
                                                       


                        </div>
                        <div  className={ activeto ? 'scaleinp': ''} onClick={activeTo}>
                            <p >To</p>
                            
                            {
                                activeto ? 

                                <>
                                <input type="text" name="" id="" /> <span>&times;</span>
                                </>
                            
                                : '' 

                            }
                                                       


                        </div>
                        <div  className={ activedepature ? 'scaleinp': ''} onClick={activeDepature}>
                            <p >Depature</p>
                            
                            {
                                activedepature ? 

                                <>
                                <input type="Date" name="" id="" /> <span>&times;</span>
                                </>
                            
                                : '' 

                            }
                                                       


                        </div>
                        <div  className={ activereturn ? 'scaleinp': ''} onClick={activeReturn}>
                            <p >Return</p>
                            
                            {
                                activereturn ? 

                                <>
                                <input type="Date" name="" id="" /> <span>&times;</span>
                                </>
                            
                                : '' 

                            }
                                                       


                        </div>
                        <div  className={ activeclass ? 'scaleinp': ''} onClick={activeClass}>
                            <p >Traveller</p>
                            
                            {
                                activeclass ? 

                                <>
                                <input type="text" name="" id=""  placeholder='1 Traveller, Economy'/> <span>&times;</span>
                                </>
                            
                                : '' 

                            }
                                                       


                        </div>

                        <div>
                            <button className='search'>Search</button>
                        </div>
                        
                        
                    </div>
                    

                </div>


            </div>



        </div>
    
    </>
  )
}