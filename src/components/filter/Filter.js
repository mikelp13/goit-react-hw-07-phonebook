import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/phonebookActions";
import { getFilter } from "../../redux/selectors/phonebookSelectors";
import { FilterWrapper, FilterInput } from "./FilterStyled";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FilterWrapper>
      <label>
        Find contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        ></FilterInput>
      </label>
    </FilterWrapper>
  );
};

export default Filter;
