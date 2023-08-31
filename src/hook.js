import { useEffect, useState } from 'react';
import { searchList } from  './data.js'

function useDebounce(search) {
  const [searchedList, setSearchedList] = useState(searchList);

  useEffect(() => {
    let timeout = setTimeout(() => {
      let filteredData = getFilteredData(search);
      setSearchedList(filteredData)
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  const getFilteredData = (val) => {
    return searchList.filter((list) => list.toLowerCase().indexOf(val.toLowerCase()) > -1)
  }

  return searchedList;
}

export default useDebounce;