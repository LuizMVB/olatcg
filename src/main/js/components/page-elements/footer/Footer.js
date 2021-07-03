import React from 'react';

function Footer(){
    return(
        <footer className="page-footer teal">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Para saber mais sobre o nosso trabalho</h5>
                        <p className="grey-text text-lighten-4">Nos acompanhe nas redes sociais</p>
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a href="https://www.instagram.com/cienciasuadanada/" className="grey-text text-lighten-3">Instagram do Ciencia, Sua Danada</a></li>
                            <li><a href="https://www.facebook.com/CienciaSuaDanada" className="grey-text text-lighten-3">Facebook do Ciência, Sua Danada</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Desenvolvido por LuizMVB
                    <span className="grey-text text-lighten-4 right"><a className="grey-text text-lighten-4" href="https://www.linkedin.com/in/luizmvb/">LikedIn</a> | <a className="grey-text text-lighten-4" href="https://github.com/LuizMVB">GitHub</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;