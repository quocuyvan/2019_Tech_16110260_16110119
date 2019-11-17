import { BookItem } from './book-item';
import { BookLending } from './book-lending';


export interface BookDetailLending {
    id: number;
    dueDate: Date;
    returnDate: number;
    bookId: string;
    lendingId: string;
    bookitem: BookItem;
    booklending: BookLending;
}
