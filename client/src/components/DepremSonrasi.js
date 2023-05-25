import React from 'react';
import resim from '../img/enkaz.jpg'

export default function ToplanmaAlanlari()  {
    
        return (
            <div style={{height:'auto'}}>
                <h2>Deprem Sonrası Toplanma Alanları</h2>
                <p>
                Toplanma Alanları; deprem başta olmak üzere olası bir afet sonrasında vatandaşlarımızın ilk korku ve panik halini atlatabilmeleri, yakınları ile buluşabilmeleri ve başta Belediyemiz olmak üzere yetkililer tarafından sağlıklı bilgilendirmeye ve acil lojistiğe erişebilmeleri adına, adrese dayalı olarak belirlenen alanlardır.

Toplanma Noktanızı önceden öğrenin ve binanızda yaşayanları bu konuda bilgilendirin!

Afet sonrası Toplanma alanlarınıza ulaşmak için <a href='https://www.turkiye.gov.tr/afet-ve-acil-durum-yonetimi-acil-toplanma-alani-sorgulama'>tıklayınız.</a> </p>
<img style={{width:'70%',height:'550px',objectFit:'cover',marginLeft:'100px',marginBottom:'150px',marginTop:'40px',boxShadow:'0 0 6px 4px black'}} src={resim}/>
            </div>
        );
    
}
