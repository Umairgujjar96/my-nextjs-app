"use client"
import { useState } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

const Menu = ({ categories }) => {
  return (
    <div>
      {/* Desktop Menu (Visible on md and larger screens) */}
      <div className="hidden md:flex">
        <DesktopMenu categories={categories} />
      </div>

      {/* Mobile Menu (Visible on small screens) */}
      <div className="md:hidden">
        <MobileMenu categories={categories} />
      </div>
    </div>
  );
};

/* ✅ Desktop Menu */
const DesktopMenu = ({ categories }) => {
  return (
    <div className="flex flex-row text-xs">
      {categories.map((category) => (
        <MenuItem key={category.id} item={category} />
      ))}
    </div>
  );
};

/* ✅ Mobile Menu */
const MobileMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Burger Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl p-4">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="block w-screen top-full shadow-lg rounded-lg p-2">
          {categories.map((category) => (
            <MobileMenuItem key={category.id} item={category} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ✅ Mobile Menu Item with Dropdowns */
const MobileMenuItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {/* Parent Item */}
      <div
        className="flex justify-between items-center px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {item.name}
        {item.subMenu?.length > 0 && <FaCaretDown />}
      </div>

      {/* Submenu (Dropdown when clicked) */}
      {isExpanded && item.subMenu?.length > 0 && (
        <div className="ml-4 border-l border-gray-300">
          {item.subMenu.map((subItem) => (
            <MobileMenuItem key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ✅ Desktop Menu Item */
const MenuItem = ({ item }) => {
  return (
    <div className="relative group">
      <p className="cursor-pointer px-4 py-2" role="button">{item.name}</p>

      {/* First-Level Submenu */}
      {item.subMenu?.length > 0 && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul>
            {item.subMenu.map((subItem) => (
              <li key={subItem.id} className="relative group/submenu">
                <a className="inline-flex w-full justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                  {subItem.name}
                  {subItem.subMenu?.length > 0 && <FaCaretDown />}
                </a>

                {/* Nested Submenu */}
                {subItem.subMenu?.length > 0 && (
                  <div className="absolute left-full top-0 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300">
                    <ul>
                      {subItem.subMenu.map((nestedItem) => (
                        <li key={nestedItem.id} className="relative group/deepmenu">
                          <a className="inline-flex w-full justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                            {nestedItem.name}
                            {nestedItem.subMenu?.length > 0 && <FaCaretDown />}
                          </a>

                          {/* Further Nested Submenu */}
                          {nestedItem.subMenu?.length > 0 && (
                            <div className="absolute left-full top-0 w-40 bg-white shadow-lg rounded opacity-0 invisible group-hover/deepmenu:opacity-100 group-hover/deepmenu:visible transition-all duration-300">
                              <ul>
                                {nestedItem.subMenu.map((deepItem) => (
                                  <li key={deepItem.id} className="inline-flex w-full justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    {deepItem.name}
                                    {deepItem.subMenu?.length > 0 && <FaCaretDown />}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
