import { GrTwitter } from "react-icons/gr";
import { RiHome7Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { BiHash } from "react-icons/bi";
import { BsBookmark, BsCardList } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";
import "../App.css";
function Explore() {
  return (
    <article className="left-container">
      <section>
        <GrTwitter className="twitter-icon" />
      </section>
      <div className="home marginTop-30px">
        <div>
          <RiHome7Fill className="home-icon " />
          <span>Home</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <BiHash className="home-icon" />
          <span>Explore</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <IoNotificationsOutline className="home-icon" />
          <span>Notifications</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <FiMail className="home-icon" />
          <span>Messages</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <BsBookmark className="home-icon" />
          <span>Bookmark</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <BsCardList className="home-icon" />
          <span>Lists</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <CgProfile className="home-icon" />
          <span>Profile</span>
        </div>
      </div>
      <div className="home marginTop-30px">
        <div>
          <CgMoreO className="home-icon" />
          <span>More</span>
        </div>
      </div>
      <button className="tweet-button">Tweet</button>
    </article>
  );
}

export default Explore;
