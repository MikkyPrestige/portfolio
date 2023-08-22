const Avatar = ({ image = "", alt = "", style = {} }) => {
  return <img src={image} alt={alt} style={style} />;
};

export default Avatar;
