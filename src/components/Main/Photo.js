const Photo = (props) => {
  return (
    <>
      <img src={require("" + `${props.src}`)} />
    </>
  );
};

export default Photo;
