import React, { useState } from "react";
function Form() {
    const [name, setName] = useState("");

    //we have to use useState[]
    const [students, setStudents] = useState(["Max", "Holly", "John"]);

    //conditionals
    const [showNotification, setShowNotification] = useState(false);

    //handlefunction
    const handleSubmit = (event) => {
        event.preventDefault();
        //currentStudent is stuents, so we have to use ... to connect the name with the student
        setStudents((currentStudent) => [...currentStudent, name]);
        setName("");
    };

    //on delete function
    const handleDelete = (deleteStudent) => {
        const newStudents = students.filter((student) => student !== deleteStudent);
        setStudents(newStudents);
    };

    //toggle function
    const toggleNotification = () => {
        setShowNotification(!showNotification);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Add Student</div>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input type="Submit" />
            </form>

            <br></br>

            <h1>All Students List</h1>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student} <button onClick={() => handleDelete(student)}>❌</button>
                    </li>
                ))}
            </ul>

            <br />

            {showNotification ? <div>This is notification </div> : ""}
            <button onClick={() => toggleNotification()}>Toggle Notification</button>
        </div>
    );
}

export default Form;

//we have to insert key and value on this list
//students.map((tempstudent) => <li>{tempstudent}<li/>)
