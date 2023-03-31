const Avatar = ({ image = "", alt = "", style = {} }) => {
  return (
    <div>
      <img src={image} alt={alt} style={style} />
    </div>
  );
};

export default Avatar;
