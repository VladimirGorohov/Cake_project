import { Link } from "react-router-dom";

interface LogoInterface {
  className: string;
}

function Logo({ className }: LogoInterface) {
  return (
    <Link className={className} to="/">
      EM_Cake56
    </Link>
  );
}

export default Logo;
