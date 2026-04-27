import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <section>
      <h2>Oops! Página não encontrada</h2>
      <p>{error?.statusText || error?.message || 'Erro desconhecido'}</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}
