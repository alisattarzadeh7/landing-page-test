import React from "react"

const Header: React.FC = () => {
    return (
        <div className="headerContainer position-fixed">
            <div className="mainHeader  br-15">
                <div className=" headerContent ">
                    test
                </div>
                <div className="blurBox" style={{top:0}}/>
            </div>
        </div>
    )
}

export default Header