import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions';

const SearchAutoComplete = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState();
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    async function fetchDetails() {
        try {
            setLoading(true);
            const response = await fetch('https:dummyjson.com/users')
            const data = await response.json();
            if (data && data.users && data.users.length > 0) {
                setLoading(false);
                setUsers(data.users.map(item => item.firstName));
                console.log(users);
            }
            console.log(data);
        } catch (error) {
            setLoading(false);
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchDetails();
    }, [])
    console.log(users, filteredUsers);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        let filteredData = [];
        if (query.length > 1) {
            filteredData = users && users.length
                ? users.filter((item) =>
                    item.toLowerCase().indexOf(query) > -1
                )
                : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        }
        else {
            setShowDropDown(false);
        }
    }
    return (
        <div className='search-autocomplete-container' >
            <input type="text"
                value={searchParam}
                onChange={handleChange}
                name='search-user'
                placeholder='enter the name'
            />
            {
                showDropDown ? <Suggestions data={filteredUsers} /> : null
            }
        </div>
    )
}

export default SearchAutoComplete
