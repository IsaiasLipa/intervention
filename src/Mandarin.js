import React from 'react'
import {available_now_mandarin, interpreters, interpreters_mandarin} from './components/interpreter'
function Mandarin() {
    return(
        <main className="main">
                    <div className="doctor">
                        <h2>List of Mandarin interpreters</h2>

                        {interpreters_mandarin.map((item) => {
                            return(
                                <div className="interpreter">
                            
                                    <h4 className="inter_name">{item.name}</h4>
                                    <img src={item.image} width='auto' height='70%'  className='image' alt='logo pic'/>
                                    
                                    <div className='hours'>
                                        Hours: 
                                        <br/>
                                        Monday:{item.monday}
                                        <br/>
                                        Tuesday: {item.tuesday}
                                        <br/>
                                        Wednesday: {item.wednesday}
                                        <br/>
                                        Thursday:{item.thursday}
                                        <br/>
                                        Friday: {item.friday}
                                        <br/>
                                        Saturday: {item.saturday}
                                        <br/>
                                        Sunday:{item.sunday}
                                    </div>
                            
                            
                                </div>
                            )
                        })}
                        
                    </div>

                    <section className="companions">
                        <h2>Available Now</h2>
                        {available_now_mandarin.map((item) => {
                            return(
                                <div className="interpreter">
                            
                                    <h4 className="inter_name">{item.name}</h4>
                                    <img src={item.image} width='auto' height='70%'  className='image' alt='logo pic'/>
                                    
                                    <button className='connect'> connect now</button>
                            
                            
                                </div>
                            )
                        })}
                    </section>
                </main>
    )
}


export default Mandarin