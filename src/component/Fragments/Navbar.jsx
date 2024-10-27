import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faExchangeAlt,
  faSignOutAlt,
  faFileInvoiceDollar, // Added for Bills
  faMoneyBillWave, // Added for Expenses
  faBullseye, // Added for Goals
  faCog, // Added for Settings
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Elements/Logo";

const Navbar = () => {
  return (
    <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-36 h-screen flex flex-col justify-between">
      <div>
        <Link to="/">
          <div className="flex justify-center mb-10">
            <Logo />
          </div>
          <div className="flex bg-primary text-white px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faHome} className="text-white" />
            <div className="ms-3 hidden sm:block">Overview</div>
          </div>
        </Link>

        <Link to="/balancer">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faDollarSign} className="text-white" />
            <div className="ms-3 hidden sm:block">Balances</div>
          </div>
        </Link>

        <Link to="/transactions">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faExchangeAlt} className="text-white" />
            <div className="ms-3 hidden sm:block">Transactions</div>
          </div>
        </Link>

        <Link to="/bills">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              className="text-white"
            />
            <div className="ms-3 hidden sm:block">Bills</div>
          </div>
        </Link>

        <Link to="/expenses">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-white" />
            <div className="ms-3 hidden sm:block">Expenses</div>
          </div>
        </Link>

        <Link to="/goals">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faBullseye} className="text-white" />
            <div className="ms-3 hidden sm:block">Goals</div>
          </div>
        </Link>

        <Link to="/settings">
          <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faCog} className="text-white" />
            <div className="ms-3 hidden sm:block">Settings</div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link to="/logout">
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-white" />
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </Link>
        <div className="border-b my-10 border-b-special-bg" />
        <div className="flex justify-between items-center">
          <div className="mx-auto sm:mx-0">foto</div>
          <div className="hidden sm:block text-center">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block">icon</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
