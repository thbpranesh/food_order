import { IoHomeSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function NavBar() {
    return (<div className="head">
        <img className="logo" src="logo.avif"></img>
        <p className="name"></p>
        <div className="topic">
            <div><IoHomeSharp />Home</div>
            <Link to="/About"><FcAbout />About</Link>
            <Link to="/Contact"><IoMdContact />Contact</Link>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>


    </div>)

}
export default NavBar;