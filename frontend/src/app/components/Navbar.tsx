// frontend/src/app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            Join Quran
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#mission">
              Our Mission
            </Link>
          </li>
          <li>
            <Link href="#about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#courses">
              Courses
            </Link>
          </li>
          <li>
            <Link href="#how-we-teach">
              How we teach
            </Link>
          </li>
          <li>
            <Link href="#start-learning">
              Start Learning
            </Link>
          </li>
          <li>
            <Link href="#fees">
              Fees
            </Link>
          </li>
          <li>
            <Link href="#reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="#contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="text-sm">
          <a href="mailto:onlinequran50@gmail.com" className="mr-4">onlinequran50@gmail.com</a>
          <span>UK: +442081239145</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
