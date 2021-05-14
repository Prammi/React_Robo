import React from 'react';

const Card = (robot) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow pw2 shadow5'>
            <img src={`https://robohash.org/${robot.id }test?100x200`} alt='name' />
            <div>
                <h3>{robot.name}</h3>
                <p> {robot.email}</p>
            </div>
        </div>
    );
}
export default Card;