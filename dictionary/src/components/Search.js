import React from 'react'

export const Search = ({inputHandler}) => {
  return (
    <div>
        <input type='search' placeholder='search...' onChange={inputHandler}></input>
    </div>
  )
}
