import React from 'react';

function Loading() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col s12 center">
                    <br/>
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
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
    )
}

export default Loading;