import React from 'react';
import '../css/card.css'
import resim1 from '../img/neleryapilmali.png'
import resim2 from '../img/sosyalmedya.png'



export default function  Category() {
    
        return (
            <div className='card' >
                <hr className='hr' />
                <div className='firstDiv' ><a href='/neleryapilmali'><img src={resim1} alt=''/></a></div>
                <div><img src={resim2} alt=''/></div>
            </div>
        );
    
}
