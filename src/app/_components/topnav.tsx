import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full text-xl font-semibold border-b bg-slate-800 text-white p-4">
            <div>Gallery</div>
            <div>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
            </div>
        </nav>
    )
}

export default TopNav;