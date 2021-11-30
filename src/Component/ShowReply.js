import { useSelector } from "react-redux";

function ShowReply() {
  const { plaintext, toggle } = useSelector((state) => {
    console.log(state);
    return state;
  });
  return plaintext
    ? plaintext.map((ele) => {
        return (
          <div className="show-reply">
            <div className="account">
              <div>
                <p>R</p>
              </div>
            </div>
            <div className="content">{ele}</div>
          </div>
        );
      })
    : null;
}
export default ShowReply;
