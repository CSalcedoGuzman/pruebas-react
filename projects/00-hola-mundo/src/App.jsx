import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="carlosalguz">
                Carlos Salcedo Guzmán
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="valentina_sin_apellido">
                Valentina Padilla Acevedo
            </TwitterFollowCard>
        </section>
        
    )
}