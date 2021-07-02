import React from 'react';
import '../../static/css/Home.css';
import { Link } from 'react-router-dom';
import Logo from '../../static/images/logo.png';
import Book from '../../static/images/book.png';
import Settings from '../../static/images/settings.png';
import CsdLogo from '../../static/images/csd_logo.jpeg';
import CefetLogo from '../../static/images/cefet_logo.png';
import UfzLogo from '../../static/images/ufz_logo.png';
import FundacaoOsorioLogo from '../../static/images/fundacao_osorio_logo.png';
import FiocruzLogo from '../../static/images/fiocruz_logo.jpg';

function Home(){
    return(
        <div className="Home">
            <div className="container-fluid">
                <div className="row center purple lighten-5">
                    <div className="col s4">
                        <br/>
                        <img src={Logo} alt="olatcg logo" width="240" height="240" />
                        <br/>
                        <br/>
                    </div>
                    <div className="col s8">
                        <h3 className="header center pink-text">Bem vindo ao OLATCG</h3>
                        <h5 className="header col s12 grey-text">Uma plataforma onde você pode aprender resolvendo problemas e começar a fazer suas primeiras analises através de uma interface interativa</h5>
                    </div>
                </div>
                <div className="row">
                    <h1 className="header center grey-text text-darken-3">O que é olatcg?</h1>
                    <div className="col s12">
                        <h4 className="grey-text text-darken-2">
                        O OLAtcg é uma plataforma didática que tem por objetivo apresentar ferramentas de Bioinformática que proporcionem aos visitantes uma experiência significativa e, consequentemente um aprendizado transformador sobre o tema. A Bioinformática é um campo fértil de pesquisa que analisa e interpreta dados biológicos. Ela visa investigar e desenvolver sistemas que colaborem com a compreensão do fluxo de informações, desde os genes até estruturas moleculares e sua consequente influência nas enfermidades, saúde e estudos ambientais.
                        </h4>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                <h3 className="header center grey-text text-darken-3">Escolha seu caminho</h3>
                <br/>
                    <div className="col s4 center-aling">
                        <img src={Book} alt="" width="230" height="230"/>
                        <h3 className="header center grey lighten-1">Aprenda Bioinformárica</h3>
                        <h6 className="grey-text text-darken-3">Aqui você pode acessar uma lista de conteúdos para entender os conceitos básicos por trás da bioinformática</h6>
                        <br/>
                        <Link to="/about">
                            <button className="waves-effect waves-light btn left-align pink lighten-1">Vamos lá!</button>
                        </Link>
                    </div>
                    <div className="col s4"></div>
                    <div className="col s4 center-align">
                        <img src={Settings} alt="" width="210" height="210"/>
                        <h3 className="header center grey lighten-1">Fazendo análises</h3>
                        <h6 className="grey-text text-darken-3">Acesse os modelos e começe a fazer análises em bioinformática através de uma interfáce de fácil uso</h6>
                        <br/>
                        <Link to="/tools">
                            <button className="waves-effect waves-light btn left-align pink lighten-1">Vamos lá!</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid center-align">
                <div className="row center-align">
                    <h3 className="header center grey-text text-darken-3">Colaboração</h3>
                    <div className="col s4">
                        <img src={UfzLogo} alt="" width="330" height="290"/>
                    </div>
                    <div className="col s4">
                        <img src={CefetLogo} alt="" width="300" height="300"/>
                    </div>
                    <div className="col s4">
                        <img src={CsdLogo} alt="" width="300" height="300"/>
                    </div>
                    <div className="col s6">
                        <img src={FiocruzLogo} alt="" width="400" height="400"/>
                    </div>
                    <div className="col s6">
                        <img src={FundacaoOsorioLogo} alt="" width="400" height="400"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;