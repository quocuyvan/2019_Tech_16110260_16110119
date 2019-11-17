import { Language } from './language';
import { Publisher } from './publisher';

export interface Book {
    id: string;
    title: string;
    publisherId: number;
    languageId: number;
    edition: number;
    publishingYear: number;
    page: number;
    size: number;
    callNumber: string;
    description: string;
    tableOfContent: string;
    language: Language;
    publisher: Publisher;

}
