import Link from 'next/link'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  )
}

export default NavLink
