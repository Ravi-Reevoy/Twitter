import React from "react";
import "./App.css";
// import { Switch, Route, Link } from "react-router-dom";
import Explore from "./sections/Explore";
import Content from "./sections/Content";
import Post from "./Component/Post";
import ReplyThread from "./Component/ReplyThread";
export default function App() {
  return (
    <div className="container">
      <div className="left">
        <Explore />
      </div>
      <div className="middle">
        <Content />
        <Post />
      </div>
      <div className="right">{/* <ReplyThread /> */}</div>
    </div>
  );
}
