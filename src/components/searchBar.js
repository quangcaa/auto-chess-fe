import React, { useState } from 'react';
import "../style/searchbar.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          event.preventDefault(); // Ngăn chặn hành động mặc định của form
          onSearch(query); // Gọi hàm tìm kiếm với query
        }
      };

    return (
        <form className="search-bar">
            <input
                 type="text"
                 value={query}
                 onChange={handleInputChange}
                 onKeyPress={handleKeyPress} 
                 placeholder="Tìm kiếm..."
                 className="search-input" 
            />
            
        </form>
    );
};

export default SearchBar;