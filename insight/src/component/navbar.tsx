import React from 'react'

type Prop = {
    title: string;
    nav_component: string[];
    links: string[];
}

const componentManager = (lenght: number) => {
    return lenght + 1;
}

function NavBar(props: Prop) {

    if (props.links.length !== props.nav_component.length) {
        throw Error("The number of links and navigation componanet must be the same");
    }

    return (
        <>
            <div className={`w-full h-20 bg-black items-center p-5 grid grid-cols-${componentManager(props.nav_component.length)}`}>
                <div>
                    <p className='text-white text-2xl font-semibold'>{props.title}</p>
                </div>
                {props.nav_component.map((item, idx) => {
                    return (
                        <div className='flex justify-end' key={idx}>
                            <a href={props.links[idx]}>
                                <p className='text-white text-xl font-thin'>{item}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default NavBar