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
const replyTweet = (text, toggle) => {
  return {
    type: "REPLY_TWEET",
    payload: { text: text, toggle: toggle },
  };
};
const replyToReply = (plaintext, toggle) => {
  return {
    type: "REPLY_TO_REPLY",
    payload: { plaintext: plaintext, toggle: toggle },
  };
};
export { updateInput, clickTweetButton, storage, replyTweet, replyToReply };
