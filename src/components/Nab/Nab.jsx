import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"
import Logo from "../../asset/logo2.png"
import { BiSolidDownArrow } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";


function Nab() {
    const navigate = useNavigate()
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    const toggleSubmenu2 = () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    let boxClassSubMenu2 = ["sub__menus2"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push("")
    }
    if (isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active2');
    } else {
        boxClassSubMenu2.push("")
    }


    return (
        <>
            <nav className="navbar" >
                <div className='d-flex w-100 justify-content-between'>
                    <img src={Logo} alt="" className='nav-logo' onClick={() => navigate("/")} />
                    <div>
                        <ul className="nav-list">

                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate("/software-development")}> HOME</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate("/software-development")}> WHO WE ARE</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text" >SERVICES <BiSolidDownArrow /></span>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}> Software Development</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}> Web Design and development</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>E-Commerce Solutions</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>Mobile App Development</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>Multimedia Solutions</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>Digital Marketing Services</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>Web Services</li>
                                    <li className="dropdown-item" onClick={() => navigate("/software-development")}>Other Services</li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text"> PRODUCTS <BiSolidDownArrow /> </span>
                                <div className="dropdown-menu kkkkk" >
                                    <div className="d-flex advoft-sw" id="drp">
                                        <ul>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Advosoft Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Automobile Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Bricks Management Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Bulk SMS Solution</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>CRM Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Textile FabPro</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Explosive Inventory Management System</li>
                                        </ul>
                                        <ul >

                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Gaushala Management Software </li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> GST Billing Software - General </li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>GST Billing Software - Petrol Pump</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Hotel Management Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Ingredient Management System</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Label Printing Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>Transport Booking Software</li>
                                        </ul>
                                        <ul >
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Library Management</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Laundry Management System</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> MLM Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}>RDMS Software</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Ready Made Garment</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Sono Soft</li>
                                            <li className="dropdown-item" onClick={() => navigate("/software-development")}> Water Can Supply</li>
                                        </ul>

                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate("/software-development")}>PROCESS</span>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate("/software-development")}>BLOG</span>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate("/software-development")}>CONTACT US</span>
                            </li>
                            <li className="nav-item dropdown jkkk">
                                <span className="dropdown-text j-and-k" onClick={() => navigate("/software-development")}>J&K</span>
                            </li>
                            <li>
                                <button class="chnnel-btn" onClick={() => navigate("/software-development")} >CHANNEL PARTNER</button>

                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

            {/* responsive */}
            <header className="header__middle">
                <div className="container">
                    <div className="row">

                        {/* Add Logo  */}
                        <div className="header__middle__logo">
                            <NavLink exact activeClassName='is-active' to="/">
                                <img src={Logo} alt="logo" />
                            </NavLink>
                        </div>

                        <div className="header__middle__menus">
                            <nav className="main-nav " >

                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                                </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                                </>}


                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item" >
                                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink>
                                    </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Who We Are </NavLink> </li>
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">Services <FiChevronDown /> </Link>
                                        <ul className={boxClassSubMenu.join(' ')} >
                                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Software Development </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Web Design and development </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> E-Commerce Solutions </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Mobile App Development </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Multimedia Solutions </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Digital Marketing Services </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Web Services </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Other Services </NavLink> </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Process </NavLink> </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Blog </NavLink> </li>
                                    <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Products <FiChevronDown /> </Link>
                                        <ul className={boxClassSubMenu2.join(' ')}>
                                            <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Advosoft Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Automobile Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Bricks Management Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Bulk SMS Solution </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> CRM Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Textile FabPro </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Explosive Inventory Management System </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Gaushala Management Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> GST Billing Software - General </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> GST Billing Software - Petrol Pump </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Hotel Management Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Ingredient Management System </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Label Printing Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Transport Booking Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}>  Library Management </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> MLM Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> RDMS Software </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Ready Made Garment </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}>  Sono Soft </NavLink> </li>
                                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Water Can Supply </NavLink> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Contact Us </NavLink> </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> J&K </NavLink> </li>
                                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/software-development`}> Channel Partner </NavLink> </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nab




// import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
// import logo from '../../asset/logo2.png';


// const Navbarmenu = () => {

//     const [isMenu, setisMenu] = useState(false);
//     const [isResponsiveclose, setResponsiveclose] = useState(false);
//     const toggleClass = () => {
//         setisMenu(isMenu === false ? true : false);
//         setResponsiveclose(isResponsiveclose === false ? true : false);
//     };

//     let boxClass = ["main-menu menu-right menuq1"];
//     if (isMenu) {
//         boxClass.push('menuq2');
//     } else {
//         boxClass.push('');
//     }

//     const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//     const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

//     const toggleSubmenu = () => {
//         setMenuSubMenu(isMenuSubMenu === false ? true : false);
//     };
//     const toggleSubmenu2 = () => {
//         setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
//     };

//     let boxClassSubMenu = ["sub__menus"];
//     let boxClassSubMenu2 = ["sub__menus2"];
//     if (isMenuSubMenu) {
//         boxClassSubMenu.push('sub__menus__Active');
//     } else {
//         boxClassSubMenu.push("")
//     }
//     if (isMenuSubMenu2) {
//         boxClassSubMenu2.push('sub__menus__Active2');
//     } else {
//         boxClassSubMenu2.push("")
//     }



//     return (
//         <header className="header__middle">
//             <div className="container">
//                 <div className="row">

//                     {/* Add Logo  */}
//                     <div className="header__middle__logo">
//                         <NavLink exact activeClassName='is-active' to="/">
//                             <img src={logo} alt="logo" />
//                         </NavLink>
//                     </div>

//                     <div className="header__middle__menus">
//                         <nav className="main-nav " >

//                             {/* Responsive Menu Button */}
//                             {isResponsiveclose === true ? <>
//                                 <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
//                             </> : <>
//                                 <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
//                             </>}


//                             <ul className={boxClass.join(' ')}>
//                                 <li className="menu-item" >
//                                     <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink>
//                                 </li>
//                                 <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>
//                                 <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop <FiChevronDown /> </Link>
//                                     <ul className={boxClassSubMenu.join(' ')} >
//                                         <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Online`}> Online Shop </NavLink> </li>
//                                         <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
//                                     </ul>
//                                 </li>
//                                 <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Shop newww <FiChevronDown /> </Link>
//                                     <ul className={boxClassSubMenu2.join(' ')}>
//                                         <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Online`}> Onine Shop </NavLink> </li>
//                                         <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Ofline Shop </NavLink> </li>
//                                         <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> O Shop </NavLink> </li>
//                                         <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Ofe Shop </NavLink> </li>
//                                         <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li>
//                                     </ul>
//                                 </li>
//                                 <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Navbarmenu
