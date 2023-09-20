import { SignedIn, UserButton, currentUser } from "@clerk/nextjs"
import Language from "./Language"

const Navbar = ({ value }: any) => {
  return (
    <div className="w-full h-[70px] bg-[#08becd] text-white flex justify-between items-center px-5">
      <div className="w-auto title text-2xl font-semibold">
        <span className="text-orange-300">Health</span>Insurance
      </div>
      <div className="w-auto h-auto flex justify-between items-center">
        <Language value={value} />
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
