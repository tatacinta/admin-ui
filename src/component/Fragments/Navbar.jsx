import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faExchangeAlt,
  faSignOutAlt,
  faFileInvoiceDollar,
  faMoneyBillWave,
  faBullseye,
  faCog,
  faUserCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Elements/Logo";
import { useState } from "react";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const [theme, setTheme] = useState(themes[0]);
  const [activeMenu, setActiveMenu] = useState("overview");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="bg-gray-800 text-special-bg2 sm:w-72 w-36 h-screen flex flex-col justify-between">
      <div className="flex-grow">
        <Link to="/">
          <div className="flex justify-center mb-10">
            <Logo />
          </div>
          <div
            onClick={() => handleMenuClick("overview")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "overview" ? `bg-[${theme.color}] text-white` : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} className="text-white" />
            <div className="ms-3 hidden sm:block">Overview</div>
          </div>
        </Link>

        <Link to="/balancer">
          <div
            onClick={() => handleMenuClick("balances")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "balances" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faDollarSign} className="text-white" />
            <div className="ms-3 hidden sm:block">Balances</div>
          </div>
        </Link>

        <Link to="/transactions">
          <div
            onClick={() => handleMenuClick("transactions")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "transactions"
                ? `bg-[${theme.color}] text-white`
                : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faExchangeAlt} className="text-white" />
            <div className="ms-3 hidden sm:block">Transactions</div>
          </div>
        </Link>

        <Link to="/bills">
          <div
            onClick={() => handleMenuClick("bills")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "bills" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              className="text-white"
            />
            <div className="ms-3 hidden sm:block">Bills</div>
          </div>
        </Link>

        <Link to="/expenses">
          <div
            onClick={() => handleMenuClick("expenses")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "expenses" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-white" />
            <div className="ms-3 hidden sm:block">Expenses</div>
          </div>
        </Link>

        <Link to="/goals">
          <div
            onClick={() => handleMenuClick("goals")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "goals" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faBullseye} className="text-white" />
            <div className="ms-3 hidden sm:block">Goals</div>
          </div>
        </Link>

        <Link to="/settings">
          <div
            onClick={() => handleMenuClick("settings")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "settings" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faCog} className="text-white" />
            <div className="ms-3 hidden sm:block">Settings</div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col">
        <Link to="/logout">
          <div
            onClick={() => handleMenuClick("logout")}
            className={`flex px-4 py-3 rounded-md ${
              activeMenu === "logout" ? `bg-[${theme.color}] text-white` : ""
            } hover:bg-[${theme.color}] hover:text-white`}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-white" />
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </Link>
        <div className="border-b my-10 border-b-special-bg" />
        <div className="flex justify-between items-center">
          <div className="mx-auto sm:mx-0">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-white text-3xl"
            />
          </div>
          <div className="hidden sm:block text-center">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block">
            <FontAwesomeIcon
              icon={faEllipsisV}
              className="text-white text-3xl"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-3 mt-6">
        <div className="text-white mb-2">Choose Theme:</div>
        <div className="flex space-x-2">
          {themes.map((t, index) => (
            <button
              key={index}
              onClick={() => handleThemeChange(t)}
              className={`w-8 h-8 rounded-full ${t.bgcolor}`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
