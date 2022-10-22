import React from 'react'

const Loading = () => {
    return (
        <div className="m-5 p-5 d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading