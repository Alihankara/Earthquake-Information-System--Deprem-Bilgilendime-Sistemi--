import React from 'react';
import resim from '../img/depremoncesi.jpg';
export default function CagriMerkezi()  {
    console.log('hello world')
        return (
            <div style={{height:'auto',marginBootom:'50px'}}>
                <h2>DEPREM ÖNCESİNDE, GEREKLİ ÖNLEMLERİ ALDINIZ MI?</h2>
                <img style={{width:'70%',height:'600px',objectFit:'cover',marginLeft:'80px',marginTop:'30px',marginBottom:'30px',boxShadow:'0 0 6px 4px black'}} src={resim}/>
                <p style={{marginTop:'20px'}}>
                Depreme Hazırlıklı Olmak İçin
<ul>
    <li>Öncelikle yaşadığınız ya da çalıştığınız yerde Acil Durum Kiti hazırlayıp ayrıca Acil Durum Planı oluşturun.</li>
    <li>El feneri, pilli radyo ve ilk yardım çantası bulundurun.</li>
    <li>Raf, dolap ve herhangi bir sarsıntıda düşme riski olan eşyalarınızı duvara sabitleyin.</li>
    <li>Ağır ve büyük eşyalarınızı düşme riskini önlemek adına alt raflara yerleştirin.</li>
    <li>Kavanoz ve şişe gibi yaralanmalara sebep olabilecek eşyalarınızı kilidi/mandalı olan kutulara yerleştirin.</li>
    <li>Düşme ve yaralama riski bulunan eşyalarınızı yatağınızdan uzak bir yere sabitleyin.</li>
    <li>Soba ve diğer ısıtıcıları sağlam malzemelerle duvara veya yere mutlaka sabitleyin.</li>
    <li>Toplanma Alanınızın yerini öğrenin ve tüm sevdiklerinize bilgi verin.</li>
    <li>Muhakkak binanızın sağlamlığını yetkili kurumlara kontrol ettirin ve gerekli önlemleri alın.</li>
    <li>Dairenizin tesisatını hazırlayın. Muhtemel gaz kaçaklarını ve elektrik kablolarını onarın. Kaçaklara karşı vana ve sigortaları otomatik hale getirin, duman ve gaz dedektörü taktırın.
Dairenizin duvar ve tavanlarını kontrol edin. Varsa onarımlarınızı tamamlayın.</li>
    <li>Her odanızda güvenli bölgeleri belirleyip olası bir deprem anında sığınmak üzere tüm aile bireylerinizi bilgilendirin.</li>
    <li>Binanızın acil çıkış noktalarını kontrol edin, tahliyeyi engelleyecek unsurları ortadan kaldırın. Bina çıkış kapılarını kilitlemeyin ve dışarıya doğru açılmasını sağlayın.</li>
    <li>Mesken veya işyerinin büyüklüğüne göre yangın söndürme cihazı kesinlikle bulundurun ve periyodik bakımını yaptırın.</li>
    <li>Zorunlu deprem sigortanızı yaptırın.</li>
    
</ul>

</p>

            </div>
        );
    
}
