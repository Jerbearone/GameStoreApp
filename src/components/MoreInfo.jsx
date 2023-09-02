import {useLocation} from 'react-router-dom'
import { useState } from 'react';
export default function MoreInfo() {
    const location = useLocation();
    const [game, setGame] = useState(location.state.game);
    console.log(location);
    return <div>
        <h2 className="game_card_attributes">{game.name}</h2>
        <h3 className="game_stock_view">In stock: {game.inStock? "Yes" : "No"}</h3>
        <h3 className="game_stock_view">price: {game.price}</h3>
        <img src={game.imgUrl}></img>
        <div className="game_card_attributes">
            <h4>About: </h4>
            <h5>{game.description}</h5>

        </div>
        <h3 className="game_stock_view">Popular: {game.isPopular?"Yes" : "No"}</h3>


        

    </div>
}