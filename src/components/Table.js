import React from "react";

const Table = ({ data }) => {
    return (
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Hire Date</th>
                    <th>Is Active</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Projects Completed</th>
                    <th>Last Login</th>
                    <th>Access Level</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person) => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.role}</td>
                        <td>{new Date(person.hireDate).toLocaleDateString()}</td>
                        <td>{person.isActive ? "Yes" : "No"}</td>
                        <td>{person.salary}</td>
                        <td>{person.department}</td>
                        <td>{person.projectsCompleted}</td>
                        <td>{new Date(person.lastLogin).toLocaleString()}</td>
                        <td>{person.accessLevel}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
