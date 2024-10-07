import React, { Fragment, useEffect, useState } from "react";


const ListNames = () => {
    const [names, setNames] = useState([]);

    const getNames = async () => {
        try {
            const response = await fetch("https://pernproject-50c50a3581c8.herokuapp.com/getNames");
            const jsonData = await response.json();
            setNames(jsonData)
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getNames();
    }, [])

    return (
        <Fragment>
            <h1>List Names</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, index) => (
                        <tr key={index}>
                            <td>{name.users_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListNames;