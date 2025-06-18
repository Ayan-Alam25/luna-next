import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import NavLink from "../NavLink";

export default async function Navbar() {
  const user = await checkUser();
  console.log(user);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 bg-clip-text text-transparent">
                Luna
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden sm:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <div className="ml-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 hover:from-blue-500 hover:via-blue-800 hover:to-violet-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>

          {/* Mobile Sign In Button (visible only on mobile) */}
          <div className="sm:hidden">
            <SignedOut>
              <SignInButton>
                <button className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
