import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
export default Note;

// 2- TO DO LIST

// const Note = (props) => {
//   return (
//     <div>
//       <li
//         onClick={() => {
//           props.onChecked(props.id);
//         }}
//       >
//         {props.text}
//       </li>
//     </div>
//   );
// };

// 1! login page with ternary operation

// const Note = () => {
//   return (
//     <div>
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//     </div>
//   );
// };

// export default Note;
