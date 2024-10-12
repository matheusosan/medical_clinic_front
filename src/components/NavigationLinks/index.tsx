interface NavigationLinksProps {
  className?: string;
  linkClassName?: string;
}

export default function NavigationLinks({
  className = "",
  linkClassName = "",
}: NavigationLinksProps) {
  return (
    <nav className={className}>
      <a className={linkClassName} href="/#home">
        Home
      </a>
      <a className={linkClassName} href="/#especialidades">
        Especialidades
      </a>
      <a className={linkClassName} href="/#sobre">
        Sobre Nós
      </a>
      <a className={linkClassName} href="/#contato">
        Contato
      </a>
    </nav>
  );
}
