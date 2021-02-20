import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer class="page-footer teal">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Para saber mais sobre o nosso trabalho</h5>
                        <p class="grey-text text-lighten-4">Nos acompanhe nas redes sociais</p>
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a href="https://www.instagram.com/cienciasuadanada/" class="grey-text text-lighten-3">Instagram do Ciencia, Sua Danada</a></li>
                            <li><a href="https://www.facebook.com/CienciaSuaDanada" class="grey-text text-lighten-3">Facebook do Ciência, Sua Danada</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    Desenvolvido por LuizMVB
                    <span class="grey-text text-lighten-4 right"><a class="grey-text text-lighten-4" href="https://www.linkedin.com/in/luizmvb/">LikedIn</a> | <a class="grey-text text-lighten-4" href="https://github.com/LuizMVB">GitHub</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;