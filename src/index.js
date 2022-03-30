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

const firstBook = {
  title: "The Hobbit",
  img: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UL480_FMwebp_QL65_.jpg",
  author: "J.R.R Tolkien",
};

const secondBook = {
  title: "Java",
  img: "https://m.media-amazon.com/images/I/91gRSdr8B2L._AC_UL480_FMwebp_QL65_.jpg",
  author: "Marc Loy",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptas fuga deserunt iure animi in molestias ex tempore quasi quis.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <Author></Author>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{"Test String"}</p>
      {props.children}
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
