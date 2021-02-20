import React from 'react';
import LocalAlignment from './static/img/localAlignment.png';
import GlobalAlignment from './static/img/globalAlignment.png';
import HomologySearch from './static/img/homologySearch.png';
import { Link } from 'react-router-dom';

function Tools(){
    return(
        <div className="Tools">
            <div class="container">
                <div class="row">
                    <h3 class="header center grey-text text-darken-3">Tools</h3>
                    <div class="col s4">
                        <div class="card-panel red lighten-5 hoverable center-align">
                            <img src={LocalAlignment} alt="" width="200" height="200"/>
                            <h3 class="header center grey lighten-1">Local Alignment</h3>
                            <h6 class="grey-text text-darken-3">Compare pairs of sequences against each other and see which combinations will be most similar</h6>
                            <br/>
                            <button class="waves-effect waves-light btn left-align pink lighten-1">Let's go!</button>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card-panel red lighten-5 hoverable center-align">
                            <img src={GlobalAlignment} alt="" width="190" height="190"/>
                            <h3 class="header center grey lighten-1">Global Alignment</h3>
                            <h6 class="grey-text text-darken-3">Align both sequences from their beginning through their end</h6>
                            <br/>
                            <button class="waves-effect waves-light btn left-align pink lighten-1">Let's go!</button>
                        </div>
                    </div>
                    <div class="col s4">
                        <div class="card-panel red lighten-5 hoverable center-align">
                            <img src={HomologySearch} alt="" width="190" height="190"/>
                            <h3 class="header center grey lighten-1">Homology Search</h3>
                            <h6 class="grey-text text-darken-3">Submit a sequence against a phylogenetically annotated database and receive a comparative table selecting the most similar combinations</h6>
                            <br/>
                            <Link to="/homology-search">
                                <button class="waves-effect waves-light btn left-align pink lighten-1">Let's go!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;