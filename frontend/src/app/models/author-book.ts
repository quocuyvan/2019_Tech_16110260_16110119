import { Author } from './author';
import { Book } from './book';

export interface AuthorBook {
    id: number;
    authorId: number;
    isbn: string;
    author: Author;
    book: Book;
}
