import "./Message";

function Message({ image, title }) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <img src={image} alt="image" />
    </div>
  );
}

export default Message;
