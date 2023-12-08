import './searchbar.css';


const SearchBar = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a gig..."
        onChange={handleInputChange}
        className='searchbar'
      />
    </form>
  );
};

export default SearchBar;
