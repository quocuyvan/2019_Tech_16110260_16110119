import { Book } from './book';

export interface BookItem {
    id: number;
    createDate: Date;
    status: number;
    isbn: string;
    book: Book;
}

