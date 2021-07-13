import { ADDINGBOOK, READINGBOOK } from './types';


const initialState = {
    readingBooks:[
        { 
            id: 1, 
            bookImage: "bright.jpeg",
            bookTitle: "Bring Your Human to Work",
            bookAuthor: "Erica Keswin",
            timeToRead: "12-minute read",
            // status: "reading",
        },
        { 
            id: 2, 
            bookImage: "Beyond.jpg",
            bookTitle: "Beyond Entreprenuership 2.0",
            bookAuthor: "Jim Collins & Bill Lazier",
            timeToRead: "15-minute read",
            // status: "reading",
        },
        { 
            id: 3, 
            bookImage: "Hurt.jpeg",
            bookTitle: "Doesn't Hurt to Ask",
            bookAuthor: "Trey Gowdy",
            timeToRead: "13-minute read",
            // status: "finished",
        }
    ],
    finishedBooks: [],
    lastIdUsed: 3,
};

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDINGBOOK:
            state.lastIdUsed++;
            return{
                ...state,
                readingBooks: [
                    ...state.readingBooks,
                    {
                        ...action.book,
                        id: state.lastIdUsed,
                        timeToRead: action.book.timeToRead + " min read",
                    },
                ]
            };
        case READINGBOOK:
            const temp = state.readingBooks.filter((book) => book.id !== action.book.id);
            return{
                ...state,
                finishedBooks: [...state.finishedBooks, action.book],
                readingBooks: [...temp],
            };
        default:
            return state;
    }
};

export default bookReducer;