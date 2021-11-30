const updateInput = (input) => {
  return {
    type: "TWEET_POST",
    payload: { text: input },
  };
};
const clickTweetButton = (toggle, text, tweets) => {
  return {
    type: "TWEET_BUTTON",
    payload: { clicked: toggle, text: text, tweets: tweets },
  };
};
const storage = (data) => {
  return {
    type: "LOCAL_STORAGE",
    payload: { data: data },
  };
};
export { updateInput, clickTweetButton, storage };
