import React from 'react'

const Rating = ({product}) => {
    return (
        <div>
            {
                [...Array(5)].map((star, index) => {
                    if (index + 1 <= (product.rating.rate).toFixed()) {
                        return <i key={product.id} className="fa-solid fa-star"></i>
                    } else {
                        return <i key={product.id} className="fa-regular fa-star"></i>
                    }
                })
            }
        </div>
    )
}

export default Rating