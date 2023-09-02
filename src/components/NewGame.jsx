import {useState, useEffect} from 'react'
import { addVideoGame } from "../network/api";
import {useNavigate} from 'react-router-dom'

export default function NewGame(){
    //dummy data for now
    const navigate = useNavigate();
    const [videoGame, setVideoGame] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(10);
    const [inStock, setInStock] = useState(false);
    const [isPopular, setIsPopular] = useState(false);
    const [imgUrl, setImgUrl] = useState("")
    

    useEffect(()=>{

        //do not set video game here, or we will have infinite loop.
        const addToDB = async() => {
            const response = await addVideoGame(videoGame);
            console.log(response);
            navigate("/")
        }

        if (videoGame !== null) {
            console.log(videoGame + "was called")
            addToDB();
        }


    },[videoGame]);

    

    const createVideoGame = (e) => {
        e.preventDefault();
        const tempVideoGame = {name:name, description: description, price:price, "inStock":inStock, "isPopular":isPopular, "imgUrl": imgUrl}
        //name, description, price, "inStock", "isPopular", "imgUrl"
        if (tempVideoGame.description && tempVideoGame.description && tempVideoGame.price && tempVideoGame.imgUrl) {
            console.log(`VideoGame about to be created: ${tempVideoGame}`);
            setVideoGame(tempVideoGame);
        } else {
            console.log("Need to fill in data")
        }
    }

    return (
        <div onSubmit={createVideoGame} className='new_game_input_form_vid'>
            <h2>Add new game to database</h2>
            <form className='new_game_input_form'>
                <label>Name: <input onChange={(e)=> {
                    setName(e.target.value);
                }} type='text'></input></label>
                <label>Description: <input onChange={(e) => {
                    setDescription(e.target.value);
                }} type='text'></input></label>
                <label>Price: <input onChange={(e)=> {
                    setPrice(e.target.value);
                }
                } type='text'></input></label>
                <br></br>
                <label>Image Url: <input onChange={(e) => {
                    setImgUrl(e.target.value);

                }
                } type='text'></input></label>
                <label>Popular Title: <input onChange={(e)=>{
                    setIsPopular(e.target.checked);
                    console.log(isPopular);
                }
                    
                } type='checkbox'></input></label>
                <label>In stock: <input onChange={(e)=> {
                    setInStock(e.target.checked);
                    console.log(inStock)
                }} type='checkbox'></input> </label>
                <br></br>
                <button type='submit' className='new_game_submit_button'>Submit</button>
            </form>
        </div>
        )
}