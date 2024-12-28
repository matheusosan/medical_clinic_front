import { LogOut, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";

interface UserMenuProps {
  token: string | null;
  logout: () => void;
  className?: string;
}

const UserMenu = ({ token, logout, className }: UserMenuProps) => {
  return (
    <div className={`md:flex-row md:flex items-center gap-4 ${className}`}>
      <Link
        to={"/agendamento"}
        className="rounded-xl text-sm md:text-base md:px-6 py-2 text-[#0B4fff] md:text-white font-bold md:bg-[#0B4FFF] button-hover"
      >
        Agendar
      </Link>

      {!token && (
        <Link
          to={"/cadastrar"}
          className="rounded-xl text-sm text-center md:text-base md:px-6 py-2 text-[#0B4fff] font-bold md:border md:border-[#0B4FFF] button-hover"
        >
          Cadastrar-se
        </Link>
      )}

      {token ? (
        <Link to={"/perfil"}>
          <UserRound className="h-8 w-8 text-[#0B4FFF] button-hover" />
        </Link>
      ) : (
        <Link
          data-testid="login-btn"
          to={"/login"}
          className="rounded-xl text-sm text-center md:text-base md:px-6 py-2 text-[#0B4fff] font-bold md:border md:border-[#0B4FFF] button-hover"
        >
          Fazer login
        </Link>
      )}

      {token && <Button label={<LogOut color="#0B4FFF" />} onClick={logout} />}
    </div>
  );
};

export default UserMenu;
