function ProfilePicture(){
    const imageUrl = "./src/assets/image.png";

    const hideImage = (e) => e.target.style.display = "none";
    return (
        <img onClick={(e) => hideImage(e)} src={imageUrl} alt="image" />
    );
}

export default ProfilePicture