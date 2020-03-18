import React,{useRef, useEffect} from "react";
import { Link } from "react-scroll";
import "./Menu.css";

const Menu = (props) => {

    const menuRef = useRef(null);
    const containerRef = useRef(null);
    const option = {
        rootMargin: "100px",
    };

    const observer = new IntersectionObserver(function
            (enteries,elmObsever){
                enteries.forEach(entery => {
                    if(!entery.isIntersecting){
                        menuRef.current.classList.add("menuScrolled")
                    }else{
                        menuRef.current.classList.remove("menuScrolled")
                    }
                    console.log("entery",entery)
                })
        },option);
        
        
        useEffect(() => {
            observer.observe(containerRef.current); 
            console.log('menu: ', menuRef.current)
        },[])
    return(
        <div ref={containerRef} className={"navContainer"}>
            <div ref={menuRef} className={"menu"}>
                <Link 
                    href={""}
                    className={"menuBtn"}
                    spy={true}
                    activeClass="active"
                    to="aboutMe"
                    smooth={true}
                    offset={0}
                    duration= {750}
                >ABOUT ME</Link>
                <Link 
                    href={""}
                    className={"menuBtn"}
                    spy={true}
                    activeClass="active"
                    to="devProjectsTitle"
                    smooth={true}
                    offset={-170}
                    duration= {750}
                >DEV PROJECTS</Link>
                <Link 
                    href={""}
                    className={"menuBtn"}
                    spy={true}
                    activeClass="active"
                    to="uxUiProjectsTitle"
                    smooth={true}
                    offset={-160}
                    duration= {750}
                >UX UI PROJECTS</Link>
                <Link 
                    href={""}
                    className={"menuBtn"}
                    spy={true}
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={0}
                    duration= {750}
                >CONTACT</Link>
            </div>
        </div>
    )
}

export default Menu