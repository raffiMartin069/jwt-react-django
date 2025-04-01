import React from 'react'

type Prop = {
    type: 'button' | 'reset' | 'submit';
    label: string;
}

function CustomButton(props: Prop) {
    return (
        <div>
            <button type={props.type} className='bg-black text-white p-2 rounded-md w-full hover:bg-slate-800'>
                {props.label}
            </button>
        </div>
    )
}

export default CustomButton