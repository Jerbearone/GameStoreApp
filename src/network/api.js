const baseUrl = "http://localhost:8080/api/video-games/"

//get all video games from database
const getAllVideoGames = async() => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
    }
}

//get by id

const getVideoGameById = async(id) => {
    const url = baseUrl + id;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

//post
const addVideoGame = async(videoGame) => {
    //create new video game and add to videoGame database 
    const jsonVideoGame = JSON.stringify(videoGame);
    console.log(`JSON VIDEO GAME: ${jsonVideoGame}`)
    try {
        const response = await fetch(baseUrl, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers":"Content-Type",
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
            },
            body: jsonVideoGame
        });
        const data = await response.json();
        console.log("Success! " + data);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
//put to update video game
const updateVideoGame = async(videoGame) => {
    const bodyJson = JSON.stringify(videoGame);
    console.log(bodyJson);
    try{
        const response = await fetch(baseUrl + videoGame.id, {
            headers:{
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: bodyJson,
        });
        const data = await  response.json();
        console.log("update response data: " + data);
        return data;

    }catch(error){
        console.log(error);
    }
}

//delete video game from database
const deleteVideoGame = async(id) => {
    const url = baseUrl + id;
    const response = await fetch(url, {
        method: "DELETE"
    });
    const data = response.json();
    console.log(data);
    return data;
}

export {getAllVideoGames, getVideoGameById, addVideoGame, updateVideoGame, deleteVideoGame }