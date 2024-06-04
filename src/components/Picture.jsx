import profilePicture from "../assets/bg.jpg"
const Picture = () => {
    const handleClick = (e) => {
        let image = document.getElementById("profile");

        if(image.style.display === "none"){
            e.target.textContent = "Hide Image";
            image.style.display = "block";
        }
        else{
            e.target.textContent = "Show Image";
            image.style.display = "none";
        }
    }

    return(
        <div className="box">
            <h2>Picture</h2>
            <img src={profilePicture} alt="pic" className="card-image" id="profile"/>
            <button onClick={(e) => handleClick(e)}>Hide Picture</button>
        </div>
    )
}

export default Picture;