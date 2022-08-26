import React from 'react';
function Header(props) {
    return ( 
        <>
        <div className="header">
            <h2>{props.head}</h2>
        </div>
        </>
     );
}

export default Header;