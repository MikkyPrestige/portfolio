const Avatar = ({ image = "", alt = "", style = {} }) => {
  return (
    <div className="home--avatar">
      <img src={image} alt={alt} style={style} />
    </div>
  );
};

export default Avatar;
