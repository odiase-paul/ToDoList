import { useState } from "react";

const Input = (props) => {
  const [show, setShow] = useState({ title: "", content: "" });

  function handle(event) {
    const { name, value } = event.target;
    setShow((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function send(event) {
    props.onSend(show);
    setShow({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input
          style={{ textTransform: "capitalize" }}
          onChange={handle}
          value={show.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          style={{ textTransform: "capitalize" }}
          onChange={handle}
          value={show.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={send}>Add</button>
      </form>
    </div>
  );
};
export default Input;
