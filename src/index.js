import React from "react";
import ReactDOM from "react-dom";

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

const books = [
  {
    id: 1,
    title: "The Hobbit",
    img: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UL480_FMwebp_QL65_.jpg",
    author: "J.R.R Tolkien",
  },

  {
    id: 2,
    title: "Java",
    img: "https://m.media-amazon.com/images/I/91gRSdr8B2L._AC_UL480_FMwebp_QL65_.jpg",
    author: "Marc Loy",
  },

  {
    id: 3,
    title: "Uma breve história do tempo",
    img: "https://m.media-amazon.com/images/I/51lD6mcXV7L._AC_UL480_FMwebp_QL65_.jpg",
    author: "Stephen Hawking",
  },

  {
    id: 4,
    title: "Clean Code",
    img: "https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UL320_.jpg",
    author: "Robert C. Martin",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((books) => {
        return <Book key={books.id} {...books}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{"Test String"}</p>
    </article>
  );
};

// I can add de components like i did above or i can return directly in the function
const Author = () => (
  <h3 style={{ color: "#007d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    J.R.R. Tolkien
  </h3>
);
// The css added above can be setted inside the style attribute or in the css file

ReactDOM.render(<BookList />, document.getElementById("root"));
