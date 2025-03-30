import React from 'react'

const ResidencyIcon = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#749bbd"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      // className="icon icon-tabler icons-tabler-outline icon-tabler-home">
      className="absolute left-1 top-1 h-5 w-5 text-indigo-600">
      {/*<g fill="none" fillRule="evenodd">*/}
      {/*  <g transform="translate(1 1)">*/}
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
        {/*</g>*/}
      {/*</g>*/}
    </svg>
  )
}
export default ResidencyIcon
