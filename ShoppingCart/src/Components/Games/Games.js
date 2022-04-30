import React, { Fragment, useEffect, useState } from "react";
import Card from '../UI/Card';
import GameItem from "./GameItem";


const Games = props => {
    const [games,setGames] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [httpError,setHttpError]=useState();

    useEffect(() => {
        const fetchGames= async ()=>{
            const response = await fetch('https://react-api-s-default-rtdb.firebaseio.com/Games.json');
            if(!response.ok)
            {
                throw new Error('Something went wrong!!!');
            }
            const responseData= await response.json();

            const loadGames = [];
            for(const key in responseData)
            {
                loadGames.push({
                    id: key,
                    title: responseData[key].title,
                    platform: responseData[key].platform,
                    year: responseData[key].year,
                    publisher: responseData[key].publisher,
                    price: responseData[key].price
                });
            }
            setGames(loadGames);
            setIsLoading(false);
        };
        
        fetchGames().catch((error)=> {
            setIsLoading(false);
            setHttpError(error.message);
        });
    },[])

    if(loading)
    {
        return (
            <Card className="p-3">
                <h3 className="mt-5 text-center text-info pt-5 pb-5 shadow rounded3">Please Wait ...</h3>
            </Card>
        )
    }
    if(httpError)
    {
        return (
            <Card className="p-3">
                <h3 className="mt-5 text-center text-danger pt-5 pb-5 shadow rounded3">{httpError}</h3>
            </Card>
        )
    }

    const list = games.map((game) => (
        <GameItem key={game.id} id={game.id} title={game.title} publisher={game.publisher} price={game.price} year={game.year} />
    ));


    return (
        <Fragment>
            <Card>
                <div className="p-3">
                    <h3 className="text-black">Games</h3>
                    <small className="small text-secondary fw-lighter">We can see all list of games that are going to release this week</small>
                    <hr />
                    <ol className="list-group">
                        {list}
                    </ol>
                </div>
            </Card>
        </Fragment>
    )
}
export default Games;