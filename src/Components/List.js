import React from 'react';


const List = props => {
    return(
    <ul>
        {
            props.items.map((item, index) => 
            <li key= {index}>
                {item}<input type = "checkbox"/>
            </li>)
        }
    </ul>
    )
}

export default List;