import React from 'react';
import './static/css/Home.css';
import { Link } from 'react-router-dom';
import Logo from './static/img/logo.png';
import Book from './static/img/book.png';
import Settings from './static/img/settings.png';
import CsdLogo from './static/img/csd_logo.jpeg';
import CefetLogo from './static/img/cefet_logo.png';
import UfzLogo from './static/img/ufz_logo.png';
import FundacaoOsorioLogo from './static/img/fundacao_osorio_logo.png';
import FiocruzLogo from './static/img/fiocruz_logo.jpg';

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
                    <br/>
                    <div className="col s4">
                        <h6 className="grey-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                        </h6>
                    </div>
                    <div className="col s8">
                        <iframe title="olatcg video" width="760" height="415" src="https://www.youtube.com/embed/iavKNmdjT_c?start=2910" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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