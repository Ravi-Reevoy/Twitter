import { useDispatch, useSelector } from "react-redux";
// import { replyTweet } from "../Action/Action";
import { ShowPost } from "./Post";

import ReplyBox from "./ReplyBox";
import ShowReply from "./ShowReply";
function ReplyThread() {
  const dispatch = useDispatch();
  const { text, toggle } = useSelector((state) => {
    // console.log("state=", state);

    return state;
  });

  return (
    <div>
      {toggle ? (
        <div>
          <ShowPost text={text} />
          <ReplyBox />
          <ShowReply />
        </div>
      ) : null}
    </div>
  );
}
export default ReplyThread;
