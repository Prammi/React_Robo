import React from 'react';

const Scroll = (props) => {
    return (
        <div style ={{overflowX:'scroll',border:'6px solid black',height:'500px'}}>
            {props.children}
        </div>

    )
}

export default Scroll;