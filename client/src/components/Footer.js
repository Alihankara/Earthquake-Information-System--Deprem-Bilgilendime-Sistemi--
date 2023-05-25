import React from "react";
import '../css/footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";



export default function Footer() {
    
  
  return (
    <div className="xx">
        
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Türkiye<span>Hazır</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Son Depremler</a>
					
					<a href="#">Deprem Anında</a>
				
					<a href="#">Toplanma Alanlari</a>
				
					<a href="#">Çağrı Merkezi</a>

				</p>

				<p class="footer-company-name">Deprem Bilgilendirme Platformu © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<GoLocation className='location'></GoLocation>
					<p><span>mevlana mah. 1722 sokak</span> Bornova/İzmir</p>
				</div>

				<div>
					<BsFillTelephoneFill className="telephone"></BsFillTelephoneFill>
					<p>+90 538 828 48 54</p>
				</div>

				<div>
					<GoMail className='mail'></GoMail>
					<p><a href="mailto:support@company.com">barann.hazar@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Hakkımızda</span>
					Türkiye Hazır uygulaması ile depremden önce, depremden sonra ve depram esnasında ne yapılması gerektiği ile ilgili bilgi edinebilir enkaz altında kalma durumunda acil çağrı butonumuzdan bizlere ulaşabilirsiniz
				</p>

				<div class="footer-icons">

					<a href="#"><BsFacebook></BsFacebook></a>
					<a href="#"><BsTwitter></BsTwitter></a>
					<a href="#"><BsLinkedin></BsLinkedin></a>
					<a href="#"><BsInstagram></BsInstagram></a>

				</div>

			</div>

		</footer>
        

    </div>
  );
}
