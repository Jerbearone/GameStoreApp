import GameCard from "./GameCard";
import { useState, useEffect } from "react"
import { getAllVideoGames } from "../network/api"
import NewVideGame from "./NewVideoGame";

export default function Home() {
    const [videoGames, setVideoGames] = useState([])
    const [triggerRerender, setTriggerRerender] = useState(false);

    useEffect(() => {
        const getAllGames = async() => {
            try{
                const videoGames = await getAllVideoGames();
                setVideoGames(videoGames);
            }catch(error){
                console.log(error);
            }
        }
        getAllGames();

    }, [triggerRerender])
    return <>
        
        <NewVideGame></NewVideGame>
        {videoGames.map((game) => {
            return <GameCard key={game.id} game={game} setTriggerRerender={setTriggerRerender} triggerRerender={triggerRerender}></GameCard>
        })}
    </>
}