import React from 'react'

type Prop = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
}

function CustomTextField(props: Prop) {
    return (
        <div>
            <h3>{props.label}</h3>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className='border-2 border-slate-300 w-full p-1.5 rounded-sm' />
        </div>
    )
}

export default CustomTextField