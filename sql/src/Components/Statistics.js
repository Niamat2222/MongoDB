import React from "react"

const Statistics =({name,statis}
    ) =>{
    return(
        <tr>
            <th>{name}</th>
            <td>{statis}</td>
        </tr>
    )
}

export default Statistics