import React from 'react'

const GlowCard = ({ card, children }) => {
    return (
        <div className='card car-border time-card rounded-xl p-10'>
            <div>
                <div className='glow' />
                <div>
                    {Array.from({ length: 5 }, (_, i) => (
                        <img src='/images/star.png' key={i} alt="star" className='size-5' />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default GlowCard