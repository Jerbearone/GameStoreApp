import { useState } from "react"
import { updateVideoGame } from "../network/api";
export default function UpdateForm({game, setGameDescription, setGamePrice}) {
    const [description, setDescription] = useState(game.description);
    const [price, setPrice] = useState(game.price);

    const submitForm= async(e)=> {
        e.preventDefault();
        const newGame = {...game}
        newGame.description = description;
        newGame.price = price;
        //console.log(newGame)
        const data = await updateVideoGame(newGame);
        if (data !== undefined) {
            setGameDescription(data.description);
            setGamePrice(data.price);
        }
        


    }
    return (<div className="update_form_data">
        <form onSubmit={submitForm} >
            <label>Description:
                <input type="text" onChange={(event)=> {
                    setDescription(event.target.value);

                }} value={description}></input>
            </label>
            
            <label>Price:
                <input type="text" onChange={(event) => {
                    setPrice(event.target.value);
                }} value={price}></input>
            </label>
            <button className="new_game_submit_button"  type="submit">Submit</button>
        </form>
    </div>)
}