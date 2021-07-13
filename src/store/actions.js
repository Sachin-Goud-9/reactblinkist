import { ADDINGBOOK, READINGBOOK } from './types';

export const addingBook = (book) => {
    return {
        type: ADDINGBOOK,
        book: book,
    }
}

export const readingBooks = (book) => {
    return {
        type: READINGBOOK,
        book: book,
    }
}