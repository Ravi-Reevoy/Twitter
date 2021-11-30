import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import "../App.css";
function ShowPost(props) {
  const { text } = props;
  return (
    <div className="tweeted-div">
      <div className="account">
        <div>
          <p>R</p>
        </div>
      </div>
      <section className="post-upper-div">
        <div>
          <span className="bold">Ravi Rajput</span>
          <span>@RaviRajput1999</span>
          <span style={{ float: "right" }}>
            <BsThreeDots />
          </span>
        </div>
        <section>
          <p>{text}</p>
        </section>
        <button>reply</button>
      </section>
    </div>
  );
}
function Post() {
  const { tweets } = useSelector((state) => {
    return state;
  }); //destructoring state
  return (
    <div>
      {tweets !== undefined
        ? tweets.map((ele) => {
            return <ShowPost key={ele} text={ele} />;
          })
        : null}
    </div>
  );
}
export default Post;
