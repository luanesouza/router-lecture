import React from 'react';

const AboutTheAuthor = (props) => {
    console.log(props)
    return(
        <about>
            <h1 id='title'>Who is {props.author}</h1>
            <p id='author'>{props.about}</p>
            <img id='authorimage' src={props.image} alt='author-img' />
        </about>
    )
}

export default AboutTheAuthor;