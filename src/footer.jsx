const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <header>
        <h1>keeper</h1>
      </header>

      <footer>
        <p>Copyright © {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
// 2- TO DO LIST

// import { useState } from "react";
// import ToDo from "./Create";
// import Heading from "./Heading";
// const Footer = () => {
//   const [active, setActive] = useState([]);
//   function send(show) {
//     setActive((preVal) => {
//       return [...preVal, show];
//     });
//   }
//   function deleteItem(id) {
//     setActive((preVal) => {
//       return preVal.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }
//   return (
//     <div>
//       <h1>To-Do-List</h1>
//       <Heading onSend={send} />
//       <ul>
//         {active.map((toDO, index) => {
//           return (
//             <ToDo onChecked={deleteItem} key={index} id={index} text={toDO} />
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// 1! login page with ternary operation

// import Heading from "./Heading";
// var register = false;
// const Footer = () => {
//   return (
//     <div>
//       <Heading isRegistered={register} />
//     </div>
//   );
// };

// export default Footer;
