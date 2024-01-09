function Contact(){
    return(<>
    <div className="container">
       <header>
        <div>
            <h1>Contact Us</h1>
        </div>
       </header>
       <section className="contact">
        <div className="blathersContact">
            <h5>Blathers: Museum Curator</h5>
            <p>Email: blathers.curator@acnhmuseum.com</p>
        </div>
        <div className="developerContact">
            <h5>Website Developers</h5>
            <p>Maria Alcantara<br></br>Jackie Luu<br></br>Jay Wu</p>
        </div>
        <div className="apiContact">
            <h5>API</h5>
            <p>Link: http://acnhapi.com</p>
        </div>
       </section>
       <footer>
        <p>Copyright 2023</p>
       </footer>
    </div>
    </>)
}

export default Contact;