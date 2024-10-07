import React, { Fragment, useState } from "react";


const InputName = () => {

    const [name, setName] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { name }
            const response = await fetch("https://pernproject-50c50a3581c8.herokuapp.com/addName", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = "/";
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1>Input Name</h1>
            <form onSubmit={onSubmitForm}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button>Submit</button>
            </form>
        </Fragment>
    )
}

export default InputName;