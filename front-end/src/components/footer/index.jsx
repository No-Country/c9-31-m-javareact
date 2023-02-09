import React from "react";
import {Logo} from "../../ui/logo/index"
import {FacebookIconFooter, InstagramIconFooter, LinkeinIconFooter, TwitterIconFooter, YoutubeIconFooter} from "../../img/index"
import "./footer.css"

export function Footer(){
    return <div className="footer-conteiner">
        <div className="footer-logotags_conteiner">
            <Logo/>
            <div className="footer-tags_conteiner">
                <a className="footer-link" href="http://">Contacto</a>
                <a className="footer-link" href="http://">Sobre Tesh</a>
                <a className="footer-link" href="http://">FAQs</a>
                <a className="footer-link" href="http://">Términos y condiciones</a>
                <a className="footer-link" href="http://">Cookies</a>
            </div>
        </div>
        <div className="footer-redes_conteiner">
            <a href="http://"><FacebookIconFooter/></a>
            <a href="http://"></a><TwitterIconFooter/>
            <a href="http://"><LinkeinIconFooter/></a>
            <a href="http://"><InstagramIconFooter/></a>
            <a href="http://"><YoutubeIconFooter/></a>
        </div>
        <div className="license">
            <p className="footer-license">© 2023 E-Commerce</p>
            <p className="footer-license">No Country </p>
        </div>
    </div>
}