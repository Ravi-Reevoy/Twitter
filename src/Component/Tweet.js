import { useState } from "react";
import "../App.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import { ImParagraphLeft } from "react-icons/im";
import { BsEmojiSmile, BsCalendar4, BsCardImage } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { updateInput, clickTweetButton } from "../Action/Action";

function Tweet() {
  const text = useSelector((state) => state.text);
  console.log("text", text);
  // const [val, setVal] = useState("");
  // const [tweet, setTweet] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="post-tweet">
      <div className="account">
        <div>
          <p>R</p>
        </div>
      </div>
      <div className="text-tweet">
        <input
          type="text"
          placeholder="What's happening"
          onChange={(event) => {
            dispatch(updateInput(event.target.value));
          }}
        />
        <div className="globe border-bottom">
          <FaGlobeAmericas />
          <span>Everyone can reply</span>
        </div>
        <div className="flex">
          <div className="post-icons">
            <div>
              <BsCardImage />
            </div>
            <div>
              <AiOutlineGif />
            </div>
            <div>
              <ImParagraphLeft />
            </div>
            <div>
              <BsEmojiSmile />
            </div>
            <div>
              <BsCalendar4 />
            </div>
          </div>
          <button
            // disabled={val}
            onClick={() => {
              dispatch(clickTweetButton(true, text));
            }}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tweet;
