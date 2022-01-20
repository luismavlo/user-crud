import React, { useState } from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUser, setUserSelected}) => {
    const [currentPage, setCurrentPage] = useState(0);
    

    const filteredUser = () =>{
        return users.slice(currentPage, currentPage + 4);
    }

    const nextPage = () =>{
        if(users.length > currentPage + 4)
            setCurrentPage(currentPage + 4);
    }

    const prevPage = () =>{
        if(currentPage > 0)
            setCurrentPage(currentPage - 4)
    }

    return (
        <div className='content-right'>
            {
                filteredUser().map(user => (
                    <UserCard user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} key={user.id}/>
                ))
            }       
            <div className='pagination'>
                <i className="fas fa-arrow-circle-left" onClick={prevPage}></i>
                <i className="fas fa-arrow-circle-right" onClick={nextPage}></i>
            </div>
        </div>
    )
}

export default UsersList
