const MyButton = ({count,onClick}) => {
    return (
        <div className="box">
            <button className="btn" 
            onClick={onClick}>
                Clicked {count} times
                </button>
        </div>
        
    )
};

export default MyButton;