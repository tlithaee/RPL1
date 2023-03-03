import React from 'react'
import { ButtonLinkType } from './constant/Data'

type ButtonLinkType = {
    title: string;
    link?: string;
}

const ButtonLink = ({title, link}: ButtonLinkType) => {
  return (
    <button className='text-2xl py-2 px-9 hover:-translate-y-2 duration-300 rounded-full drop-shadow-lg opacity-80 text-center'>
        <a href={link}>
            {title}
        </a>
    </button>
  )
}

export default ButtonLink