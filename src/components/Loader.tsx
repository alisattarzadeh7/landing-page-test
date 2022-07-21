import React from "react"

const Loader: React.FC = () => {
    return (
        <>
            <div className="spinnerContainer">
                <div className="spinner">
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                    <div className="spinner-item"></div>
                </div>
            </div>
        </>
    )
}

export default Loader