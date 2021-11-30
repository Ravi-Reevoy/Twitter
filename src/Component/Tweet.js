import { useState, useEffect } from "react";
import "../App.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import { ImParagraphLeft } from "react-icons/im";
import { BsEmojiSmile, BsCalendar4, BsCardImage } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateInput, clickTweetButton, storage } from "../Action/Action";

function Tweet() {
  // const text = useSelector((state) => state.text);
  const [val, setVal] = useState("");
  const [tweet, setTweet] = useState([]);
  const dispatch = useDispatch();
  useEffect(
    function () {
      let localData = JSON.parse(localStorage.getItem("Tweets"));
      setTweet(localData ? localData : []);
      dispatch(storage(localData));
    },
    [dispatch]
  );
  function local(data) {
    const array = JSON.parse(localStorage.getItem("Tweets"));
    let tweetArray = array ? [...array, data] : [data];
    localStorage.setItem("Tweets", JSON.stringify(tweetArray));
  }
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
          value={val}
          onChange={(event) => {
            setVal(event.target.value);
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
              dispatch(updateInput(val));
              dispatch(clickTweetButton(true, val, [...tweet, val]));
              setTweet([...tweet, val]);
              setVal("");
              local(val);
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
