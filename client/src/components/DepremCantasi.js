import React from 'react';
import resim1 from '../img/deprem-cantasi.jpg'

export default function CagriMerkezi()  {
    console.log('hello world')
        return (
            <div style={{height:'auto'}}>
                <h2>Deprem Çantası</h2>
                <p>
                Olası bir deprem sonrası ilk 72 saat hayatta kalmak için en önemli zaman dilimini oluşturmaktadır. Bu yüzden böylesi bir durumla karşılaşmanız durumunda 
                acil ihtiyaçlarınızı karşılayabilmek amacı ile afet öncesinde Deprem Çantası oluşturmanız çok önemlidir.</p>
                <h5>Deprem Çantasının İçinde</h5>
                <ul>
    <li>Yüksek kalorili ve uzun süre bozulmayan gıdalar (konserve, kuru meyve ve meyve suyu benzeri)</li>
    <li>Su</li>
    <li>Hijyen malzemeleri (sabun ve dezenfektanlar, ıslak mendil, tuvalet kağıdı vb.)</li>
    <li>Giyecekler (İç çamaşırı, mevsime göre giysiler)</li>
    <li>Önemli belgeler (tapu, nüfus kağıdı vb. evrakların fotokopileri, iletişime geçilecek kişilerin bilgileri)</li>
    <li>İlkyardım çantası</li>
    <li>Pilli radyo</li>
    <li>Düdük</li>
    <li>Not defteri ve kalem</li>
    <li>Çok amaçlı çakı</li>
    <li>Bir miktar nakit para.</li>
    <li>El feneri</li>
    <li>Yedek piller</li>
    <li>Uyku tulumu</li>
    <p>Kolayca hazırlayacağınız bu çanta sayesinde afet sonrası ilk 72 saatte hiçbir yardımın gelmemesi ihtimaline karşın hayatta kalma şansınızı arttırın.</p>
    
</ul>
<img style={{width:'70%',height:'500px',objectFit:'cover',marginLeft:'100px',marginBottom:'150px'}} src={resim1}/>

            </div>
        );
    
}
