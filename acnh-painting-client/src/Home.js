import ArtList from "./ArtList.js";

function Home(){
    return(<>
    <div className="container">
       <header>
        <div>
            <h1>ACNH Artwork Emporium</h1>
        </div>
       </header>
       <section className="hello">
            <div className="museumBubble">
            <h5>Welcome to the Artwork Emporium!!!</h5>
            <p>Hello and welcome. I am Blathers, and this is my sister, Celeste. We run the Artwork Emporium in the great town of New Horizons! We have meticulously curated all the art you see here today to make sure all our visitors have the best experience during their visit. We hope you enjoy your time at the Artwork Emporium!</p>
            </div>
            <img src="https://www.models-resource.com/resources/big_icons/4/3345.png?updated=1474435104" className="blathersAndCelese"></img>
       </section>
       <footer>
        <p>Copyright 2023</p>
       </footer>
    </div>
    </>)
}

export default Home;