"use client"
import React from 'react'
import searchIcon from '../public/searchIcon.svg'
import Image from 'next/image'
const SearchBar = ({ search, setSearch}) => {
  return (
    <div className='relative mt-5'>
        <Image src={searchIcon} alt='search' className='h-5 w-5 absolute z-20 left-3 bottom-2 feather feather-search' aria-hidden="true"/>
      <input 
        type='text'
        id="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full rounded-xl shadow-sm inline-flex relative items-center border border-gray-300 py-2 px-4 text-sm text-gray-700 placeholder:text-gray-400 focus:z-10 focus:outline-none focus:ring-gray-500 md:w-72 pl-10 xs:pt-12'
        placeholder='Search by name'/>
    </div>
  );
}

export default SearchBar
