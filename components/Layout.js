export default function Layout({ children, className }) {
  return (
    <div className="flex flex-col gap-16 max-w-2xl p-5 mx-auto my-6 my-1">
      <header>
        <a href="/">Mustafa Türk</a>
      </header>

      <main className={`flex flex-col ${className}`}>
        {children}
      </main>

      <footer className="text-center text-neutral-500 text-sm">© 2022 Mustafa Türk</footer>
    </div>
  )
}