import { useSelector } from "react-redux";
function ShowPost(props) {
  const { text } = props;
  return (
    <div className="tweeted-div">
      <p>{text}</p>
    </div>
  );
}
function Post() {
  const { clicked, text } = useSelector((state) => state); //destructoring state
  console.log(clicked, text);
  return <div>{clicked ? <ShowPost text={text} /> : <h1>hello</h1>}</div>;
}
export default Post;
