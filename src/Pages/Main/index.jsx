import React from "react"
import Popup from "../../Components/Popup"


export default function Main(){
  return (
    
    <div>
      <div className="text-center justify-center mt-10">
        <h1 className="text-blue-500">Página Inicial</h1>

        <div className="mt-20">
          <Popup />
        </div>
      </div>
    </div>
  )
}