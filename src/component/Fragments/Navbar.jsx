import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

const themes = [
  { name: "theme-green", color: "#299D91" },
  { name: "theme-blue", color: "#1E90FF" },
  { name: "theme-purple", color: "#6A5ACD" },
  { name: "theme-pink", color: "#DB7093" },
  { name: "theme-brown", color: "#8B4513" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme-color") || themes[0].color
  );
  const [activeMenu, setActiveMenu] = useState("overview");
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", theme);
    localStorage.setItem("theme-color", theme);
  }, [theme]);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActiveMenu(currentPath || "overview");
  }, [location]);

  const handleThemeChange = (color) => {
    setTheme(color);
  };

  return (
    <nav
      className="fixed left-0 top-0 h-full text-white w-72 flex flex-col justify-between z-50 overflow-auto"
      style={{ backgroundColor: theme }}
    >
      <div className="flex-grow">
        <Link to="/">
          <div className="flex justify-center mb-10">
            <Logo />
          </div>
        </Link>
        {[
          { to: "/", label: "Overview", icon: faHome },
          { to: "/balancer", label: "Balances", icon: faDollarSign },
          { to: "/transactions", label: "Transactions", icon: faExchangeAlt },
          { to: "/bills", label: "Bills", icon: faFileInvoiceDollar },
          { to: "/expenses", label: "Expenses", icon: faMoneyBillWave },
          { to: "/goals", label: "Goals", icon: faBullseye },
          { to: "/settings", label: "Settings", icon: faCog },
        ].map((item) => (
          <Link to={item.to} key={item.label}>
            <div
              onClick={() => setActiveMenu(item.label.toLowerCase())}
              className={`flex px-4 py-3 rounded-md transition-all duration-300 ${
                activeMenu === item.label.toLowerCase()
                  ? "bg-white text-black"
                  : "hover:bg-opacity-80 hover:bg-white hover:text-black"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <div className="ms-3 hidden sm:block">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/logout">
        <div
          onClick={() => setActiveMenu("logout")}
          className={`flex px-4 py-3 rounded-md transition-all duration-300 ${
            activeMenu === "logout"
              ? "bg-white text-black"
              : "hover:bg-opacity-80 hover:bg-white hover:text-black"
          }`}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <div className="ms-3 hidden sm:block">Logout</div>
        </div>
      </Link>

      <div className="px-4 py-3">
        <div className="mb-2 text-white">Choose Theme:</div>
        <div className="flex space-x-2 justify-center">
          {themes.map((t, index) => (
            <button
              key={index}
              onClick={() => handleThemeChange(t.color)}
              className={`w-8 h-8 rounded-full border transition-all duration-300 hover:scale-110 ${
                theme === t.color ? "border-white" : ""
              }`}
              style={{ backgroundColor: t.color }}
            />
          ))}
        </div>
      </div>

      <div className="border-b my-4 border-white opacity-50" />
      <div className="px-4 py-3 flex flex-col items-center">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-white text-4xl mb-2"
        />
        <div className="text-center">
          <div className="font-bold">Username</div>
          <div className="text-sm opacity-80">View Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
