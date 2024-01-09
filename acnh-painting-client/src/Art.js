import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Art() {

    const ART_WORK_BLANK = {
        id:"",
        name: ["name-USen"],
        hasFake: false,
        "buy-price": 0,
        "sell-price": 0,
        image_uri: "",
        "museum-desc": ""
    }
    const { id } = useParams();
    const url = "https://acnhapi.com/v1/art";

    const [artWork, setArtWork] = useState(ART_WORK_BLANK);

    useEffect( () => {
        if (id) {
            fetch(`${url}/${id}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return Promise.reject(`Unexpected status code: ${response.status}`);
                }
            })
            .then( data => {
                setArtWork({...data});
            })
            .catch(console.log);
        }
    }, []);


    return (
        <div className="container">
            <h1 className="artName">{artWork.name["name-USen"]}</h1>
            <div className="row">
                <div className="col-6 artPic">
                    <img src={artWork.image_uri}/>

                </div>
                <div className="col-6">
                    <p>Buy Price: {artWork["buy-price"]} bells</p>
                    <p>Sell Price: {artWork["sell-price"]} bells</p>
                    <p>Has Fake: {artWork.hasFake === true ? "True" : "False"}</p>
                </div>
            </div>
            <div className="museumBubble">
                <p><strong>About this Piece</strong></p>
                <p>{artWork["museum-desc"]}</p>
            </div>
        
        </div>
    )

}

export default Art;