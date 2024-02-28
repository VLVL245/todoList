'use client'
import 'materialize-css/dist/css/materialize.min.css'
import Link from "next/link"

export default function NavBar(){

	return (
	<nav>
    <div className="nav-wrapper">
      <Link href="/" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link href="/">Sass</Link></li>
        <li><Link href="/">Components</Link></li>
        <li><Link href="/">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
	)
}