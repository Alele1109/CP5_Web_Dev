import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/"><h1>Minha Loja</h1></Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
      </nav>
    </header>
  )
}
