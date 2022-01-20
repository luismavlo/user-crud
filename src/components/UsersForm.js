import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';



const UsersForm = ({getUser, userSelected, deselectedUser}) => {

    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if(userSelected){
            const userSelectedModified = {
                firstName: userSelected.first_name,
                lastName: userSelected.last_name,
                email: userSelected.email,
                password: userSelected.password,
                birthday: userSelected.birthday
            }
            reset(userSelectedModified);
        }
    }, [userSelected, reset])

   

    const onSubmit = (data, e) =>{
        
        const user = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            birthday: data.birthday
        }
        
        if(userSelected.id){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                 .then(() => {
                        getUser();
                        deselectedUser();
                 });
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                 .then(() => getUser());
        }

        e.target.reset();
    }

    return (
        <div className='content-left'>
            <h3>New User</h3>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group'>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name='firstName' 
                        id='firstName' 
                        placeholder='Enter your first name' 
                        {
                            ...register('firstName',{
                                required: {value:true, message:'Este campo es obligatorio'},
                                pattern: {value: /^([a-zA-Z\s]{4,15})$/gm, message:'Haz introducido caracteres erroneos'}
                            })
                        }                        
                        required
                    />
                   
                </div>

                <div className='input-group'>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        name='lastName' 
                        id='lastName' 
                        placeholder='Enter your last name'
                        {
                            ...register('lastName',{
                                required: {value:true, message:'Este campo es obligatorio'},
                                pattern: {value: /^([a-zA-Z\s]{4,15})$/gm, message:'Haz introducido caracteres erroneos'}
                            })
                        }
                        required
                    />
                    
                </div>

                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        placeholder='Enter your email address' 
                        {
                            ...register('email',{
                                required: {value:true, message:'Este campo es obligatorio'},
                                pattern: {value: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/gm, message:'Haz introducido caracteres erroneos'}
                            })
                        } 
                        required
                    />
                    
                </div>

                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password' 
                        placeholder='Enter your password'
                        {
                            ...register('password',{
                                required: {value:true, message:'Este campo es obligatorio'},
                                pattern: {value: /^([a-zA-Z0-9]{8,15})$/gm, message:'Haz introducido caracteres erroneos'}
                            })
                        } 
                        required
                    />
                    
                </div>
                
                <div className='input-group'>
                    <label htmlFor="birthday">birthday</label>
                    <input 
                        type="date" 
                        name='birthday' 
                        id='birthday'
                        {...register('birthday',{
                            required: {value:true, message:'Este campo es obligatorio'}
                        })}
                        required
                    />
                </div>
                

                <input 
                    type="submit" 
                    value='Upload'
                />          

               
                
            </form>
        </div>
    )
}

export default UsersForm
