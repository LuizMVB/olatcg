import React from 'react';


function HomologySearch(){
    return (
        <div className="HomologySearch">
            <div class="container">
                <div class="rox">
                    <h3 class="header center grey-text text-darken-3">Busca homóloga</h3>
                    <div class="col s12">
                        <form action="#">
                            <p class="grey-text text-darken-3">Faça upload das tabelas geradas em outras iterações aqui: </p>
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>File</span>
                                    <input type="file" />
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                </div>
                            </div>
                            <br/>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomologySearch;