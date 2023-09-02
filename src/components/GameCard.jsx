import { deleteVideoGame, getVideoGameById, updateVideoGame } from "../network/api";
import { useState } from "react";
import UpdateForm from "./UpdateForm";
import {useNavigate} from 'react-router-dom';

export default function GameCard({game, setTriggerRerender, triggerRerender}) {
    const [updateToggle, setUpdateToggle] = useState(false);
    const [gameDescription, setGameDescription] = useState(game.description);
    const [gamePrice, setGamePrice] = useState(game.price);
    const navigate = useNavigate();

    const deleteGame = async() => {
        const data = await deleteVideoGame(game.id);
        console.log(data);
        console.log(triggerRerender);
        setTriggerRerender(!triggerRerender);

    }
    const updateGame = async() => {
        setUpdateToggle(!updateToggle);
        //const data = await updateVideoGame(game);

    }

    const showMore = async() => {
        try{
            const data = await getVideoGameById(game.id);
            if (data) {
                navigate("/info", {state: {game:data}})   
            }

        }catch(error){
            console.log(error);
        }
        
        
    }

    return (<div className="game_card">
        <h2 className="game_card_attributes">{game.name}</h2>
        <h3 className="game_stock_view">In stock: {game.inStock? "Yes" : "No"}</h3>
        <h3 className="game_stock_view">price: {gamePrice}</h3>
        <img src={game.imgUrl}></img>
        <div className="game_card_attributes">
            <h4>About: </h4>
            <h5>{gameDescription}</h5>

        </div>

        <div className="button_container">
            <button onClick={()=> {
                updateGame();
            }} className="game_button">Update</button>
            <button onClick={()=> {
                deleteGame();
            }} className="game_button">Delete</button>
            
        </div>
        <button onClick={()=> {
            showMore();
        }}>Show more</button>
        {updateToggle && <UpdateForm game={game} setGameDescription={setGameDescription} setGamePrice={setGamePrice}></UpdateForm>}
        

        
    </div>)
}