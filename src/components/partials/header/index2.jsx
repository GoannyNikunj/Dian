import React from "react";
import Icon from "@/components/ui/Icon";
import HorizentalMenu from "./Tools/HorizentalMenu";
import useWidth from "@/hooks/useWidth";
import useSidebar from "@/hooks/useSidebar";
import useNavbarType from "@/hooks/useNavbarType";
import useMenulayout from "@/hooks/useMenulayout";
import useSkin from "@/hooks/useSkin";
import Logo from "./Tools/Logo";
import Profile from "./Tools/Profile";
import useRtl from "@/hooks/useRtl";
import useMobileMenu from "@/hooks/useMobileMenu";
import jance from "../../../assets/images/icon/Jancie.png";


import Button from "@/components/ui/Button";

import wbg9 from "@/assets/images/all-img/widget-bg-8.png";
import { color } from "framer-motion";

const Header = ({ className = "custom-class" }) => {
  const [collapsed, setMenuCollapsed] = useSidebar();
  const { width, breakpoints } = useWidth();
  const [navbarType] = useNavbarType();
  const navbarTypeClass = () => {
    switch (navbarType) {
      case "floating":
        return "floating  has-sticky-header";
      case "sticky":
        return "sticky top-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
      default:
        return "sticky top-0";
    }
  };
  const [menuType] = useMenulayout();
  const [skin] = useSkin();
  const [isRtl] = useRtl();

  const [mobileMenu, setMobileMenu] = useMobileMenu();

  const handleOpenMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const borderSwicthClass = () => {
    if (skin === "bordered" && navbarType !== "floating") {
      return "border-b border-slate-200 dark:border-slate-700";
    } else if (skin === "bordered" && navbarType === "floating") {
      return "border border-slate-200 dark:border-slate-700";
    } else {
      return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
    }
  };
  return (
    <header className={className + " " + navbarTypeClass()}>
      <div style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={` app-header md:px-6 px-[15px] dark:bg-slate-800 shadow-base dark:shadow-base3 bg-white
        ${borderSwicthClass()}
             ${menuType === "horizontal" && width > breakpoints.xl
            ? "py-1"
            : "md:py-6 py-3"
          }
        `}
      >
        <div className=" items-center h-full">
          {/* For Vertical  */}

          {menuType === "vertical" && (
            <div className="flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse">
              {collapsed && width >= breakpoints.xl && (
                <button
                  className="text-xl text-slate-900 dark:text-white"
                  onClick={() => setMenuCollapsed(!collapsed)}
                >
                  {isRtl ? (
                    <Icon icon="akar-icons:arrow-left" />
                  ) : (
                    <Icon icon="akar-icons:arrow-right" />
                  )}
                </button>
              )}
              {width < breakpoints.xl && <Logo />}
              {/* open mobile menu handlaer*/}
              {width < breakpoints.xl && width >= breakpoints.md && (
                <div
                  className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                  onClick={handleOpenMobileMenu}
                >
                  <Icon icon="heroicons-outline:menu-alt-3" />
                </div>
              )}
              {/* <SearchModal /> */}
            </div>
          )}
          {/* For Horizontal  */}
          {menuType === "horizontal" && (
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Logo />
              {/* open mobile menu handlaer*/}
              {width <= breakpoints.xl && (
                <div
                  className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                  onClick={handleOpenMobileMenu}
                >
                  <Icon icon="heroicons-outline:menu-alt-3" />
                </div>
              )}
            </div>
          )}
          {/*  Horizontal  Main Menu */}
          {menuType === "horizontal" && width >= breakpoints.xl ? (
            <HorizentalMenu />
          ) : null}
          {/* Nav Tools  */}

          <div className="flex justify-between items-center">
            {/* Left section */}
            <div className="flex items-center h-20 p-4">
              {/* Left side (image) */}
              <div className="flex-shrink-0 mr-4">
                <img className=" w-12 h-12 rounded-full" src={jance} alt="Profile" />
              </div>

              {/* Right side (text) */}
              <div>
                <div className="text-xl font-bold">
                  <span className="text-blue-500">Welcome</span> <span className="text-yellow-500 italic">Janice !</span>
                </div>

                <p className="text-gray-600 text-lg">January , 2023</p>

              </div>
            </div>

            {/* Right section */}
            <div className="space-y-5">
              <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5" style={{ height: "96px", alignItems: "center" }}>
                <div
                  className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
                  style={{ border: "1px solid #EAC035", height: "68px" }}
                >
                  <div className="max-w-[180px]">
                    <h4 className="text-2xl font-medium text-slate-900 mb-2">
                      <span className="block text-sm dark:text-slate-800">
                        <img src="src/assets/images/icon/Wallet.svg" alt="SVG Image" style={{ height: "30px" }} />
                      </span>
                    </h4>
                  </div>
                  <div className="flex-1" style={{ marginLeft: "20px" }}>
                    <div className="max-w-[180px]">
                      <h4 className="text-2xl font-medium text-slate-900 mb-2">
                        <span className="block text-sm dark:text-slate-800" style={{ fontSize: "16px", color: "#EAC035" }}>
                          Your Wallet Balance
                        </span>
                        <span className="block dark:text-slate-800" style={{ fontSize: "20px" }}>₹500</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
