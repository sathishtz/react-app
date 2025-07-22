import pic from "./assets/img.jpg"
function Card(){
    return(
        <div className="carddiv">
            <img className="cardimg" src={pic} alt="img not loaded" />
            <h2 className="cardname">Blade Runner 2049</h2>
            <p className="carddes">Reboot Memory</p>
        </div>
    );
}

export default Card