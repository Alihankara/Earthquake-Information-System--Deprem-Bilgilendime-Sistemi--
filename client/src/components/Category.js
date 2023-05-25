import React from 'react';
import '../css/category.css'
import resim1 from '../img/depremöncesi.png'
import resim2 from '../img/depremsonrası.png'
import resim3 from '../img/depremcantası.png'


export default function  Category() {
    
        return (
            <div className='category' >
                <div><a href='depremoncesi'><img src={resim1} alt=''/></a></div>
                <div><a href='depremsonrasi'><img src={resim2} alt=''/></a></div>
                <div><a href='depremcantasi'><img src={resim3} alt=''/></a></div>
                
            </div>
        );
    
}

