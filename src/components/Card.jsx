import image from "../assets/bg.jpg"

const Card = () => {
    return (
        <div className="card">
            <img src={image} alt="sample" className="card-image"/>
            <h2>Card title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>
    )
}

export default Card;