import "../App.css";
import { BsStars } from "react-icons/bs";
import Tweet from "../Component/Tweet";
import Post from "../Component/Post";
function Content() {
  return (
    <section className="middle-container">
      <div className="upperDiv">
        <div>Home</div>
        <BsStars />
      </div>
      <Tweet />
    </section>
  );
}
export default Content;
