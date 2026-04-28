import logo from '../assets/imgs/logogamer.png'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-7 py-6 text-sm text-[var(--text)] text-center">

      <div className="flex items-center justify-center gap-2 mb-2">
        <img
          src={logo}
          alt="Minha Loja"
          className="h-7 w-7 object-contain"
        />
        <strong className="text-[var(--text-h)]">
          GamerStore
        </strong>
      </div>

      <p className="text-xs opacity-70">
        © {new Date().getFullYear()} GamerStore — Projeto acadêmico fictício
      </p>

    </footer>
  )
}