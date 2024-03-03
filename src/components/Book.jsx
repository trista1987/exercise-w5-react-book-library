
import {Title }from "./Title";
import {Author} from "./Author";
import { Image } from "./Image";
import { BookInfo } from "./BookInfo";

export const Book =({book}) => {
    return (
          <div>
            <Title title={book.title} />
            <Image image = {book.image} />
            <Author author= {book.author}/>
            <BookInfo year={book.year} genre={book.genre} rating={book.rating} description={book.description}/>
          </div>
    )
}

