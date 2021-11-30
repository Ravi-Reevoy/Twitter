import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import "../App.css";
import { replyTweet } from "../Action/Action";
export function ShowPost(props) {
  const dispatch = useDispatch();
  const { text } = props;
  //   const { text } = useSelector((state) => {
  //     console.log(state);
  //     return state;
  //   });
  return (
    <div
      className="tweeted-div"
      onClick={() => {
        dispatch(replyTweet(text, true));
      }}
    >
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
      </section>
    </div>
  );
}
function Post() {
  const { tweets, data } = useSelector((state) => {
    return state;
  }); //destructoring state
  return (
    <div className="column-reverse">
      {tweets
        ? tweets.map((ele, i) => {
            return <ShowPost key={ele + "" + i} text={ele} />;
          })
        : data
        ? data.map((ele, i) => {
            return <ShowPost key={ele + "" + i} text={ele} />;
          })
        : null}
    </div>
  );
}
export default Post;
