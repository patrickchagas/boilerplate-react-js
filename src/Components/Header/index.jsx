import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return(
    <>
      <ul className="flex justify-center mt-5">
        <li>
          <Link to="/" className="p-2">Home</Link>
          <Link to="/sobre" className="p-2">Sobre</Link>
          <Link to="/contato" className="p-2">Contato</Link>
        </li>
      </ul>
    </>
  )
}