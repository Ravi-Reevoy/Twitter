const updateInput = (input) => {
  return {
    type: "TWEET_POST",
    payload: { text: input },
  };
};
const clickTweetButton = (toggle, text, tweets) => {
  console.log(toggle, text, tweets);
  return {
    type: "TWEET_BUTTON",
    payload: { clicked: toggle, text: text, tweets: tweets },
  };
};
export { updateInput, clickTweetButton };
