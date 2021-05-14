import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, index) => {
        return (<Card key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
        />);
    })
    return (
        <div>
            {/* if you dont destructure <Card id={robots.robots[0].id} name={robots.robots[0].name} email={robots.robots[0].email} /> */}
            { cardArray}

        </div>
    );
}
export default CardList;