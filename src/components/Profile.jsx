
const Profile = () => {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };



    return(
        
        <div className="box">
        <h2>Profile</h2>
        <p>name: {user.name}</p>
        <img 
        src={user.imageUrl}
        alt={"Photo of" + user.name }
        style={{
            height: user.imageSize,
            width: user.imageSize
        }}
        />
        </div>
        
    )
}

export default Profile;