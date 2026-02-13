export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Fei Lu. Built with passion.
        </p>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a
            href="#hero"
            className="transition-colors hover:text-white"
          >
            Top
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#career"
            className="transition-colors hover:text-white"
          >
            Career
          </a>
          <a
            href="#future"
            className="transition-colors hover:text-white"
          >
            Future
          </a>
        </nav>
      </div>
    </footer>
  );
}
