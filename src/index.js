import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className="book">
    <Title />
    <Author />
    <Image />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt="" />
}

const Title = () => <h1>If Animals Kissed Good Night</h1>
const Author = () => <h1 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>By: Ann WhitFord Paul</h1>






ReactDom.render(<Booklist />, document.getElementById('root'))