
import React from "react"
const Count = ({ seconds }) => {
    //logica js.
    const four = Math.floor(seconds / 1000) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const one = Math.floor(seconds / 1) % 10;
    return (
        <div className="container">
            <div className="row">
                <div className="col icon">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="col digits">{four}
                </div>
                <div className="col digits">{three}
                </div>
                <div className="col digits">{two}
                </div>
                <div className="col digits">{one}
                </div>

            </div>
        </div>
    );
};

export default Count;