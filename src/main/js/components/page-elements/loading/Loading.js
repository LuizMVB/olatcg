import React from 'react';
import '../../../../static/css/Loading.css';

function Loading(props) {
    const freezeScreen = props.freezeScreen;
    return (
        <>
        {freezeScreen &&
        <div className="loading">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s12 center">
                        <br/>
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-green-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Loading;