import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
    const { userid } = useParams();
  return (
    <div className='bg-grey-600 text-white '>User: {userid} </div>
  )
}

export default User