import React, { useState } from 'react'


export const Form = ({token, setToken}) => {
  const handler = (e) => {
    e.preventDefault()
    const inputValue = (e.currentTarget[0]).value;
    setToken(inputValue);
  }
  return (
    <form onSubmit={handler} className='flex flex-col gap-1 w-full p-2'>
      <label htmlFor="name">Token</label>
      <input type="text" id="name"  className='border-2' onChange={(e)=>setToken(e.target.value)} value={token}/>
      <button>Crear token</button>
    </form>
  )
}
