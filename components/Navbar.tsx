import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold text-gray-800">My Blog</a>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-gray-800">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
