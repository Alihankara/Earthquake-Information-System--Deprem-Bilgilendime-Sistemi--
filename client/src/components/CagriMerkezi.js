import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";

export default function CagriMerkezi()  {
    console.log('hello world')
        return (
            <div style={{height:'auto'}}>
                <h2>Çağrı Merkezi Hizmetlerimizden Yararlanabilirsiniz</h2>
                <p style={{marginBottom:'20px'}}>
                Her türlü Acil Durum ve Afet durumunda siz vatandaşlarımızın 7 gün 24 saat bizlere ulaşabilmesi mümkün. 444 0 939 numaralı Çağrı Merkezinden bizlere ulaşabilir, uzman personelimiz aracılığı ile ihtiyaç duyulan desteği alabilirsiniz.

                Ayrıca Toplanma Alanınızı öğrenebilir ve afetler konusunda sesli bilgilendirme hizmetimizden faydalanabilirsiniz.</p>
                <div style={{display:'flex',flexDirection:'row'}}>
                <BsFillTelephoneFill style={{fontSize:'2.1rem'}}></BsFillTelephoneFill>
                <p style={{marginLeft:'10px',marginTop:'-5px',fontSize:'1.5rem',fontWeight:500}}>112 </p>        
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <BsFillTelephoneFill style={{fontSize:'2.1rem'}}></BsFillTelephoneFill>
                <p style={{marginLeft:'10px',marginTop:'-5px',fontSize:'1.5rem',fontWeight:500}}>122 </p>        
                </div>

            </div>
        );
    
}
