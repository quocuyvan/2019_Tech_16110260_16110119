import { Subject } from './subject';
import { Book } from './book';


export interface SubjectBook {
    id: number;
    subjectId: number;
    isbn: string;
    subject: Subject;
    book: Book;
}
