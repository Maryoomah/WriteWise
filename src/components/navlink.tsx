import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-blue-800 px-6 py-3 text-white hover:bg-blue-900 transition"
    >
      {children}{" "}
    </Link>
  );
}
