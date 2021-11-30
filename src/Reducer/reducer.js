const initialTweet = {
  text: "",
};

const reducer = (state = initialTweet, action) => {
  switch (action.type) {
    case "TWEET_POST":
      return action.payload;
    case "TWEET_BUTTON":
      //   console.log(action.type);
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
