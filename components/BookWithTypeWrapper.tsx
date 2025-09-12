import BooksWithType from "./BooksWithType";

const BookWithTypeWrapper = () => {
  // data fetch and render
  return (
    <div className="pb-18">
      <BooksWithType />
      <BooksWithType />
      <BooksWithType />
    </div>
  );
};

export default BookWithTypeWrapper;
