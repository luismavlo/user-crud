import React from 'react'

const UserCard = ({user, deleteUser, setUserSelected}) => {
    

    return (
        <div className='user-card'>
            <div className='info'>
                <h5>{user.first_name} - {user.last_name}</h5>
                <p>{user.email}</p>
                <div className='content-date'>
                    <i className="fas fa-calendar-week"></i>
                    <p>{user.birthday}</p>
                </div>
            </div>
            <div className='options'>
                <i className="fas fa-trash-alt" onClick={() => deleteUser(user.id)}></i>
                <i className="fas fa-user-edit" onClick={() => setUserSelected(user)}></i>
            </div>
            
        </div>
    )
}

export default UserCard
