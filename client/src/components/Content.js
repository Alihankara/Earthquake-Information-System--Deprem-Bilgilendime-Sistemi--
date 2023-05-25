import React from 'react';
import resim1 from '../img/home.jpg'
export default function Content()  {
    
        return (
            <div style={{height:'auto'}}>
                <h2>Türkiye Hazır</h2>
                <p>
                Deprem Bilgilendirme Platformu, deprem riski taşıyan bölgelerde yaşayan insanları bilgilendirmek ve korumak amacıyla tasarlanmış yenilikçi bir platformdur. 
                Amacımız, deprem anında halka anlık uyarılar sağlamak, güncel bilgiler sunmak ve acil durum planlarıyla rehberlik etmektir. <br/> 
                 </p>
                <img style={{width:'100%',height:'430px',objectFit:'cover',marginTop:'20px',marginBottom:'20px'}} src={resim1}/>
                <p>
                Platformumuz, deprem öncesi, sırası ve sonrasında yapılması gereken adımları anlatan kapsamlı acil durum planları sunar.Kullanıcı dostu arayüzü ile bilgilere 
                kolaylıkla ulaşabilirsiniz. Deprem anında anlık uyarı bildirimleriyle, halkın güvenli bölgelere geçmesini sağlar ve zamanında korunma önlemlerinin alınmasına yardımcı olur.<br/>
                Ayrıca, platformumuzdeprem istatistiklerini güncel olarak takip edebilirsiniz. Son depremlerin büyüklüğü, tarih ve saat bilgileri gibi istatistikler, deprem riskinin daha iyi 
                anlaşılmasına yardımcı olur.Deprem Bilgilendirme Platformu olarak, doğru bilgilendirme ve toplumsal bilinçlendirme için çalışıyoruz.Güvenli bir gelecek için hazırlıklı olun. 
                Deprem Bilgilendirme Platformu, sizin ve sevdiklerinizin güvenliğini sağlamak için burada! </p>
            </div>
        );
    
    }

