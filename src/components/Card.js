import React from "react";
import MD5 from "crypto-js/md5";

const Card = (props) => {
    const {name, email} = props;
    const random = Math.floor(Math.random()*(1000 - 10)+10);
    const randomId = props.id + random;
    console.log('random num = ', randomId);

    const test = MD5(randomId).toString();
    console.log(test);
    
    return(
        <div className="tc dib br3 pa3 ma3 grow bw2 shadow-2 card">
            <img src={`https://robohash.org/${props.id}?set=set3`} alt="robot" />
            {/* <img src={`https://www.gravatar.com/avatar/${test}.jpg?s=300`} alt="robot" /> */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;

