import "../App.css";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile, BsCardImage } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { replyToReply } from "../Action/Action";
function ReplyBox() {
  const [val, setVal] = useState("");
  const [reply, setReply] = useState([]);
  const dispatch = useDispatch();
  return (
    <div className="reply-box">
      <div className="account">
        <div>
          <p>R</p>
        </div>
      </div>
      <div className="right-box">
        <input
          type="text"
          value={val}
          placeholder="Tweet your reply"
          onChange={(event) => {
            setVal(event.target.value);
          }}
        />
        <div className="reply-icons">
          <section>
            <div>
              <BsCardImage />
            </div>
            <div>
              <AiOutlineGif />
            </div>
            <div>
              <BsEmojiSmile />
            </div>
          </section>
          <div className="text-tweet back-green">
            <button
              onClick={() => {
                setReply([...reply, val]);
                dispatch(replyToReply([...reply, val], true));
              }}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReplyBox;
