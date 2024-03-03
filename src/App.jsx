import "./App.css";
import data from "./data.json";
import { Header } from "./components/Header";
import {Book }from './components/Book';

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
      <Header/>
      <div>Library goes here</div>
      <div>
        {books.map(book => (
          <Book key={book.id} book = {book} />
        ))}
      </div>
    </>
  );
}
export default App;
