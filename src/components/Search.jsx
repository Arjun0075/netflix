import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInputValue } from "../utils/searchSlice";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(setInputValue(searchValue))
    // console.log(searchValue);
  };

  return (
    <div className="flex justify-center">
      <div className="top-4 absolute p-6 w-1/2">
        <form
          action=""
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <input
            className="border-2 border-white w-full p-2 bg-inherit text-white rounded-md"
            type="text"
            name=""
            id=""
            placeholder="What do you want to watch today"
            value= {searchValue ? searchValue : ""}
            onChange={ (e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
