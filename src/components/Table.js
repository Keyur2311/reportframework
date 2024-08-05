import React from "react";

const Table = ({ data, sortData }) => {

    return (
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th onClick={() => sortData('id')} className="dosort">id</th>
                    <th onClick={() => sortData('name')} className="dosort">name </th>
                    <th onClick={() => sortData('age')} className="dosort">age </th>
                    <th onClick={() => sortData('role')} className="dosort">role </th>
                    <th onClick={() => sortData('hireDate')} className="dosort">hiredate </th>
                    <th onClick={() => sortData('isActive')} className="dosort">isactive</th>
                    <th onClick={() => sortData('salary')} className="dosort">salary </th>
                    <th onClick={() => sortData('department')} className="dosort">department </th>
                    <th onClick={() => sortData('projectsCompleted')} className="dosort">total completed projects </th>
                    <th onClick={() => sortData('lastLogin')} className="dosort">lastlogin </th>
                    <th onClick={() => sortData('accessLevel')} className="dosort">accessLevel </th>

                </tr>
            </thead>
            <tbody>
                {data.map((person) => (
                    <tr columnvalue={person.id} key={person.id}>
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
