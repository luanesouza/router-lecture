import React from 'react';

const AboutTheAuthor = (props) => {
    return(
        <about>
            <h1 id='title'>Who is {props.author}</h1>
            <p id='author'>{props.about}</p>
            <div class='image-container'>
                <img id='author-image' src={props.image} alt='author-img' />
            </div>
        </about>
    )
}

export default AboutTheAuthor;