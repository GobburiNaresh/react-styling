import React, {useState,useRef} from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button'; 
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();


    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName,enteredAge,enteredCollege);
        // setEnteredUsername('');
        // setEnteredUserAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';

    
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredUserAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text"  ref={nameInputRef}/>
                        <label htmlFor="age">Age(Years)</label>
                        <input id="age" type="number"  ref={ageInputRef}/>
                        <label htmlFor="college">College Name</label>
                        <input id="college" type="text"  ref={collegeInputRef}/>
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
        </div>
        

    );
}

export default AddUser;

