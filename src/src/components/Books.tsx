const base = import.meta.env.BASE_URL;

function Books() {
  return (
    <div>
      <h1>My Books</h1>
      <img src={`${base}books/image1.jpg`} alt="Book 1" />
      <img src={`${base}books/image2.jpg`} alt="Book 2" />
      {/* Add more images as needed */}
    </div>
  );
}

export default Books;
