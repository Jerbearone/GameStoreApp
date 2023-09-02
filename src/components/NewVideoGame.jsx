import {useNavigate} from "react-router-dom";

export default function NewVideGame() {
    const navigate = useNavigate();


    return (<div>
        <button onClick={()=>{
            navigate("/new")
            }
        } className="add_new_video_game_button">Add new video game to database</button>
    </div>)
}