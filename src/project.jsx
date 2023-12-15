import Footer from "./footer";
import Note from "./note";
import Input from "./input";
import { useState } from "react";

const Project = () => {
  const [receive, setReceive] = useState([]);

  function send(show) {
    setReceive((preVal) => {
      return [...preVal, show];
    });
  }
  function deleteItem(id) {
    setReceive((preVal) => {
      return preVal.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <header>
        <h1>To Do List:</h1>
      </header>

      <Input onSend={send} />
      {receive.map((addItem, index) => {
        return (
          <Note
            onDelete={deleteItem}
            key={index}
            id={index}
            title={addItem.title}
            content={addItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
};
export default Project;

// 2- TO DO LIST

// import { useState } from "react";
// const Project = (props) => {
//   const [show, setShow] = useState("");

//   function handle(event) {
//     const newVal = event.target.value;
//     setShow(newVal);
//   }

//   return (
//     <div className="container">
//       <input type="text" onChange={handle} value={show} />
//       <button
//         onClick={() => {
//           props.onSend(show);
//           setShow("");
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// };
// export default Project;

// 1! login page with ternary operation

// import Note from "./note";
// const Project = (props) => {
//   return (
//     <div>
//       <form className="form">
//         <Note type={props.type} placeholder={props.placeholder} />
//         {!props.isRegistered && (
//           <input type="password" placeholder="Comfirm Password" />
//         )}
//         <button type="text">
//           {props.isRegistered === true ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Project;
