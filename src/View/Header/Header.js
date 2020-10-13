import React from 'react';
function Header(props){
    return(

        <>
        <div className="container">
            <div className="header">
                <div>{props.title}</div>
            </div>
        </div>
        </>
    )
}
export default Header;