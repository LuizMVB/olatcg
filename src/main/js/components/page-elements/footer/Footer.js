import React from 'react';
import Toolkit from '../../../infra/Toolkit';

function Footer(){
    const msg = Toolkit.Messages.getMessages;

    return(
        <footer className="page-footer teal">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">{msg('footer.title.saberMais')}</h5>
                        <p className="grey-text text-lighten-4">{msg('footer.text.redesSociais')}</p>
                        <h5 className="white-text">{msg('footer.links.title')}</h5>
                        <ul>
                            <li><a href="https://www.instagram.com/cienciasuadanada" className="grey-text text-lighten-3">{msg('footer.links.instagram')}</a></li>
                            <li><a href="https://www.facebook.com/CienciaSuaDanada" className="grey-text text-lighten-3">{msg('footer.links.facebook')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    {msg('footer.rodape.autoria')}
                    <span className="grey-text text-lighten-4 right"><a className="grey-text text-lighten-4" href="https://www.linkedin.com/in/luizmvb/">{msg('footer.rodape.linkedin')}</a> {msg('common.simbol.separate')} <a className="grey-text text-lighten-4" href="https://github.com/LuizMVB">{msg('footer.rodape.github')}</a></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;