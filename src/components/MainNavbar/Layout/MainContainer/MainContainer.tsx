// import React from 'react'
import { MainContainerProps } from "./types/types"

const MainContainer = (props:MainContainerProps) => {
  return (
    <div className="w-full max-w-screen m-1 mx-auto p-4 bg-base-200 rounded-lg shadow-lg">
  <h1 className="text-1xl font-bold text-right">{props.title}</h1>
  {/* <p className="text-gray-600 text-center">محتوای کانتینر شما در اینجا قرار می‌گیرد.</p> */}
  {
    props.children
  }

</div>
  )
}

export default MainContainer
