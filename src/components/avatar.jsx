const Avatar = ({ image = "", alt = "", style = {}, loading = "lazy" }) => {
  return <img src={image} alt={alt} style={style} loading={loading} decoding="async" />;
};

export default Avatar;