import { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom";

function ArtList() {
     //State Variables 
     const [artWorks, setArtWorks] = useState([]);
     //const [currentView, setCurrentView] = useState('List');
     const url = 'http://acnhapi.com/v1a/art'
    //  const navigate = useNavigate();
    
     useEffect( () =>{
         fetch(url)
         .then(response => {
             if(response.status === 200) {
                 return response.json();
             } else {
                 return Promise.reject(`Unexpected status code: ${response.status}`);
             }
         })
         .then(data => setArtWorks(data)) //here we are setting our data to our state variable
     }, []); //empty dependency array tells react to run once when the component is initially loaded
     
     console.log(artWorks);
 



    return(

        <section className="container">
            <h1 className="artListHeader">Current paintings for sale</h1>

            <div className="paintings">
                    {artWorks.map(artWork =>(
                        <tr key={artWork.id}>
                        <td>
                            <Link to={`/art/${artWork.id}`}>
                                <img src={artWork.image_uri} alt="animal crossing artwork"></img>
                            </Link>
                            <p>{artWork.name["name-USen"]}</p>
                        </td>
                    </tr>
                    ))}
            </div>
        </section>

    );
}

export default ArtList;