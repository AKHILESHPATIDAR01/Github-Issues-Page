import React, { useState } from 'react'
import './navbar4.css';
import img1 from '../../img/comment-alt-regular.svg';
import img2 from '../../img/exclamation-circle-solid.svg';


function NavBar4( { issues } ) {
    

    // console.log(issues);

    return (
        <div>

            <div className='box1'>
                <div>
                    {issues.map((items,index)=>{
                        return(
                            
                            <div className='box2' key={index}>
                                <div className='part1'>
                                        <img src={img2} />
                                        <div className="title">
                                            <h1>{items.title}
                                                {items.labels.length >0 ?  <span style={ {backgroundColor : items.labels[0].color } }>{items.labels[0].name}</span> : null}
                                            </h1>
                                            <p>#2736 opened 16 days ago by celalpoyraz</p>
                                        </div>
                                </div>
                                <div className='part2'>
                                    <img src={img1} />
                                </div>
                            </div>

                        );


                    })} 

                    
            </div>
            
            
            </div>



        </div>
    )
}

export default NavBar4;