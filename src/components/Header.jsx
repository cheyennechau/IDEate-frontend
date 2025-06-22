import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  return (
    <header className="border-b">
      <div className="relative w-full flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-1">
            <img src="/logo.png" alt="IDEate Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">IDEate</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
          <Link className="text-med font-medium hover:underline underline-offset-4" to="/review">
            New Review
          </Link>
          <Link className="text-med font-medium hover:underline underline-offset-4" to="/dashboard">
            Dashboard
          </Link>
        </nav>

        {/* Right: Avatar */}
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;