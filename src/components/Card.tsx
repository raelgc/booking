import { ReactNode } from 'react'

type CardPropType = {
    children: ReactNode
}

function Card({ children } : CardPropType) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card
