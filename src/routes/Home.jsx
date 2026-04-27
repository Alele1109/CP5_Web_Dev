import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h2>Bem-vindo!</h2>
      <p>Confira nossos <Link to="/produtos">produtos</Link>.</p>
    </section>
  )
}
