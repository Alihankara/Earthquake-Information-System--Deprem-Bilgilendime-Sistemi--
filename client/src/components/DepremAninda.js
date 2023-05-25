import React from 'react';
import resim from '../img/depremaninda.jpg'
export default function CagriMerkezi()  {
    console.log('hello world')
        return (
            <div style={{height:'auto'}}>
                <h2>Deprem Anında</h2>
                <img style={{width:'70%',height:'400px',objectFit:'cover',marginLeft:'80px',marginTop:'30px',marginBottom:'30px',boxShadow:'0 0 6px 4px black'}} src={resim}/>
<ul>
    <li>Sakin olun: Panik yapmak yerine sakin kalmaya çalışın. Kontrolü elde tutmak, doğru kararlar vermenizi sağlayacaktır.</li>
    <li>Güvenli bir alana geçin: Sarsıntı anında güvenli bir alana geçmeye çalışın. Mümkünse, masa veya masanın altına sığınarak, başınızı korumak için ellerinizi ve başınızı kapatın. Ayrıca, pencere veya cam gibi kırılabilir nesnelerden uzak durun.</li>
    <li>Kapı çerçevelerinden uzak durun: Eski bir inşaata sahipseniz, kapı çerçevelerine sığınmanın güvenli bir yöntem olduğu yanılgısına kapılmayın. Bu, kapıların açılması durumunda sıkışma riski taşıdığı için tehlikeli olabilir.
</li>
    <li>Dışarıda iseniz, açık alana çıkın: Binanın yakınında değilseniz, açık alana çıkın. Binalar, elektrik direkleri, ağaçlar gibi potansiyel olarak tehlikeli nesnelerden uzak durun.
</li>
    <li>Asansörleri kullanmayın: Deprem sırasında asansörler genellikle çalışmayabilir veya sıkışabilir. Bu nedenle, asansörleri kullanmaktan kaçının ve merdivenleri tercih edin.
</li>
    <li>Gaz, su ve elektrik kaynaklarını kapatın: Sarsıntı sonrasında, gaz, su ve elektrik kaynaklarını kapatın. Bu, yangın ve sızıntı gibi tehlikeleri azaltır.
</li>
    <li>Acil durum çantanızı hazırlayın: Deprem anında veya sonrasında acil durum çantanızı kullanmak üzere hazır tutun. Bu çanta, temel ihtiyaçlarınızı karşılamaya yönelik su, gıda, ilaç, el feneri, radyo gibi eşyaları içermelidir.
</li>
    <li>Yetkililerin talimatlarını takip edin: Deprem sonrasında, yetkililerin sağladığı talimatlara dikkatlice uyun. Bu, güvenli bir şekilde hareket etmenizi sağlayacak ve yardım taleplerinizi iletebileceğiniz resmi kanalları takip etmenizi sağlayacaktır.</li>
    
</ul>

<p>Deprem anında yapılması gerekenler genel prensiplerdir ve bölgesel farklılıklar olabilir. Depremlere karşı hazırlıklı olmak için yerel otoritelerin önerilerini ve deprem güvenliği konusunda eğitimleri takip etmek önemlidir.</p>

            </div>
        );
    
}
