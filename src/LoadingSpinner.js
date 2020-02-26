import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

LoadingSpinner.defaultProps = {
    message: 'Loading...'
}

export default LoadingSpinner;