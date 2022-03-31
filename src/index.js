import React from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

// CSS
import "./index.css";

// stateless functional component
// always return JSX

// JSX Rules
// Return single element
// div / section / article orFragment
// use camelCase for html attribute
// className instead of class
// close every element tag
// formatting

// function Greeting() {
//   return (
//     <div>
//       <h1>Galo Doido</h1>
//       <ul>
//         <li>
//           <a href="#">Campeao Brasileiro</a>
//         </li>
//         <li>Campeao da Copa do Brasil</li>
//         <li>Campeao da Supercopa</li>
//         <Person />
//         <Message />
//       </ul>
//     </div>
//   );
// }

// const Person = () => <h2>Pedro Luis</h2>;
// const Message = () => {
//   return <p>Aqui vai minha mensagem</p>;
// };

function BookList() {
  console.log(greeting);
  console.log("msg teste");
  return (
    <section className="booklist">
      {books.map((books) => {
        return <SpecificBook key={books.id} {...books}></SpecificBook>;
      })}
    </section>
  );
}

const Author = () => (
  <h3 style={{ color: "#007d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    J.R.R. Tolkien
  </h3>
);
// The css added above can be setted inside the style attribute or in the css file

ReactDOM.render(<BookList />, document.getElementById("root"));
