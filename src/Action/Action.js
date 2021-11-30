const updateInput = (input) => {
  return {
    type: "TWEET_POST",
    payload: { text: input },
  };
};
const clickTweetButton = (toggle, text) => {
  return {
    type: "TWEET_BUTTON",
    payload: { clicked: toggle, text: text },
  };
};
export { updateInput, clickTweetButton };
