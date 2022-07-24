import React from 'react';
import Book from './book';

const SearchResults = props => {
    const { searchBooks, myBooks, onMove } = props;

    const updatedBooks = searchBooks.map(book => {
        myBooks.map(b => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {updatedBooks.map(book => (
                    <Book
                        onclick={openInNewTab(book.previewLink)}
                        key={book.id}
                        book={book}
                        shelf={book.shelf ? book.shelf : 'none'}
                        onMove={onMove}
                    />
                ))}
            </ol>
        </div>
    );
};
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
export default SearchResults;
