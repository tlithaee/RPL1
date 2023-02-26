import React from 'react'

type ButtonLinkType = {
    title: string;
    Link?: string;
}

const ButtonLink = ({title, Link}: ButtonLinkType) => {
  return (
    <button className='text-2xl py-2 px-9 hover:-translate-y-2 duration-300 rounded-full drop-shadow-lg opacity-80 text-center'>
        <a href={Link}>
            {title}
        </a>
    </button>
  )
}

export default ButtonLink