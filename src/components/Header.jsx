import { Code2 } from "lucide-react"
import { Link } from "react-router-dom"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-1">
            {/* <Code2 className="h-6 w-6" /> */}
            <img src="/logo.png" alt="IDEate Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold">IDEate</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/review">
            New Review
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/dashboard">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}


{/* <Link to="/" className="flex items-center gap-2">
  <img src="/logo.png" alt="IDEate Logo" className="h-6 w-auto" />
  <span className="text-xl font-bold">IDEate</span>
</Link> */}



// import { Code2 } from "lucide-react"
// import { Link } from "react-router-dom";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// export default function Header() {
//   return (
//     <header className="border-b">
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <Code2 className="h-6 w-6" />
//             <span className="text-xl font-bold">IDEate</span>
//           </Link>
//         </div>
//         <nav className="hidden md:flex gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
//             New Review
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
//             Dashboard
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <Avatar>
//             <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </header>
//   )
// }


// import { Code2 } from "lucide-react"
// import { Link } from "react-router-dom"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// export function Header() {
//   return (
//     <header className="border-b">
//       <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center gap-2">
//             <Code2 className="h-6 w-6" />
//             <span className="text-xl font-bold">IDEate</span>
//           </Link>
//         </div>
//         <nav className="hidden md:flex gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
//             New Review
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
//             Dashboard
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <Avatar>
//             <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </header>
//   )
// }
