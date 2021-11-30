const initialTweet = {
  text: "",
  toggle: false,
  tweet: {},
};

const reducer = (state = initialTweet, action) => {
  switch (action.type) {
    case "TWEET_POST":
      return action.payload;
    case "TWEET_BUTTON":
      return action.payload;
    case "LOCAL_STORAGE":
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
