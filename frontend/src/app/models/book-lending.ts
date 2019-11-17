import { Librarian } from './librarian';
import { Card } from './card';


export interface BookLending {
    id: number;
    createDate: Date;
    lendingDate: Date;
    cardId: string;
    librarianId: string;
    type: string;
    librarian: Librarian;
    card: Card;
}
