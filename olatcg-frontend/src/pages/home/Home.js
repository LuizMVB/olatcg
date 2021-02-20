import React from 'react';
import './static/css/Home.css';
import Logo from './static/img/logo.png';
import Book from './static/img/book.png';
import Settings from './static/img/settings.png';
import CsdLogo from './static/img/csd_logo.jpeg';
import CefetLogo from './static/img/cefet_logo.png';
import UfzLogo from './static/img/ufz_logo.png';

function Home(){
    return(
        <div className="Home">
            <div class="container-fluid">
                <div class="row center purple lighten-5">
                    <div class="col s4">
                        <br/>
                        <img src={Logo} alt="olatcg logo" width="240" height="240" />
                        <br/>
                        <br/>
                    </div>
                    <div class="col s8">
                        <h3 class="header center pink-text">Welcome to OLATCG</h3>
                        <h5 class="header col s12 grey-text">A platform where you can learn by solving problems and start doing your first analysis with an interactive interface</h5>
                    </div>
                </div>
                <div class="row">
                    <h1 class="header center grey-text text-darken-3">What is olatcg?</h1>
                    <br/>
                    <div class="col s4">
                        <h6 class="grey-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                        </h6>
                    </div>
                    <div class="col s8">
                        <iframe title="olatcg video" width="760" height="415" src="https://www.youtube.com/embed/iavKNmdjT_c?start=2910" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br/>
            <div class="container">
                <div class="row">
                <h3 class="header center grey-text text-darken-3">Features</h3>
                <br/>
                    <div class="col s4 center-aling">
                        <img src={Book} alt="" width="230" height="230"/>
                        <h3 class="header center grey lighten-1">Learn Bioinfo</h3>
                        <h6 class="grey-text text-darken-3">here you can access out list of content to understand the basic concepts behind the bioinformatic's models</h6>
                        <br/>
                        <button class="waves-effect waves-light btn left-align pink lighten-1">Let's go!</button>
                    </div>
                    <div class="col s4"></div>
                    <div class="col s4 center-align">
                        <img src={Settings} alt="" width="210" height="210"/>
                        <h3 class="header center grey lighten-1">Making Analysis</h3>
                        <h6 class="grey-text text-darken-3">Access the models and start making your bioinformatic's analysis via an easy-to-use interface</h6>
                        <br/>
                        <button class="waves-effect waves-light btn left-align pink lighten-1">Let's go!</button>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row center-align">
                    <h3 class="header center grey-text text-darken-3">Collaboration</h3>
                    <div class="col s4">
                        <img src={UfzLogo} alt="" width="330" height="290"/>
                    </div>
                    <div class="col s4">
                        <img src={CefetLogo} alt="" width="300" height="300"/>
                    </div>
                    <div class="col s4">
                        <img src={CsdLogo} alt="" width="300" height="300"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;