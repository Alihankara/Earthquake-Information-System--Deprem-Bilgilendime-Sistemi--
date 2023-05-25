import React from 'react';
import resim from '../img/depremsonrasi2.jpg'

export default function CagriMerkezi()  {
    console.log('hello world')
        return (
            <div style={{height:'auto'}}>
                <h2>Deprem Sonrasında Neler Yapılmalı</h2>
                <img style={{width:'70%',height:'600px',objectFit:'cover',marginLeft:'80px',marginTop:'30px',marginBottom:'30px',boxShadow:'0 0 6px 4px black'}} src={resim}/>
                <p>Olası depremler sonrasında artçı sarsıntılar yaşanmaya devam edecektir. Öncelikle bu tür durumlara, hazırlıklı olun ve sakin kalmaya çalışın.</p>
<ul>
    <li>Yetkililer izin vermedikçe evlerinize girmeyin. Ev veya işyerlerinizin yakın mahalinde tespit edilmiş olan Toplanma Alanınıza giderek yetkililerin yönlendirmelerini uygulayın.</li>
    <li>Asla kibrit, çakmak vb. yanıcı maddeleri kullanmayın, elektirk düğmelerini açıp kapamayın.</li>
    <li>Çok gerekli olmadıkça telefonu kullanmayın. Radyonuzu açın ve acil durumlar hakkında bilgi sahibi olmaya çalışın.</li>
    <li>Kendinizin ve çevrenizdeki insanların yaralanma durumunu kontrol edin. İlkyardım bilginiz varsa müdahale edin. İlkyardıma ilişkin herhangi bir eğitiminiz yoksa bugünden konu hakkında doğru müdahale bilgilerini edinin.</li>
    <li>Bina içinde iseniz su, gaz, elektirik tesisatını derhal kapalı duruma getirin. Elektriği kapatmadan önce gaz vanalarını kapatın.</li>
    <li>Yangın olup olmadığını kontol edin. Eğer yangına müdahale konusunda bilgili iseniz gerekli araçlar ile müdahale edin. Aksi taktirde binayı güvenli bir şekilde tahliye edin.</li>
    <li>Hasarlı binalardan, duvar diplerinden, köprü, viyadük, üstgeçit gibi yapılardan uzak durun.</li>
    <li>Arama-kurtarma ekipleri gelmeden içinde canlı bulunduğunu sandığınız enkazı terk etmeyin.</li>
    <li>Yaralanmalara sebebiyet verebilecek kırık cam, çivi, demir vb. maddelerden korunabilmek için bot ve eldiven giyin.</li>
    <li>Tekrar evinizin içerisine girmenize izin verildi ise küvet vb. alanları su ile doldurun.</li>
    <li>Tsunami tehlikesine karşın plaj ve sahil bölgelerine gitmeyin. Buralarda iseniz yüksek alanlara çıkın.</li>
    <li>Trafik akışının yoğun olduğu sokaklardan uzak durun.</li>
    <li>Yetkililerin anons ve yönlendirmeleri doğrultusunda, belirli bir zaman sonrasında, evinize giremediğiniz taktirde, tespit edilen Barınma Alanlarına geçin.</li>
    <li>Ağaç altında, ot ve kuru bitkilerin yanında, çadır içinde, kapalı mekanlarda ateş yakmayın.</li>
    
    
    
</ul>

            </div>
        );
    
}
