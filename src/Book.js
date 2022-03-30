import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  // Event - attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <br />
      <button type="button" onClick={() => complexExample(author)}>
        More complex example{" "}
      </button>
      <p>{"Test String"}</p>
    </article>
  );
};

// I can add de components like i did above or i can return directly in the function

export default Book;
