import React from 'react';

const FourOhFour = (props) => {
    const goHome = (e) => {
        e.preventDefault()
        props.history.push('/')
        console.log('woo', props.history)
    }
    return (
    <>
        <div>
        <iframe src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <button onClick={(e) => goHome(e)}> Go Back </button>
        </div>
    </>
    )
}

export default FourOhFour;