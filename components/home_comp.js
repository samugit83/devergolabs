'use client'

import { useRef, useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { toggle_isDarkNav } from '../redux/reduxfeat/globalslice'
import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link'


const menu_links = [
    {
     label: "About",
     link: "/about"
    },
    {
     label: "Services",
     link: "/services"
    },
    {
    label: "Portfolio",
    link: "/portfolio"
    },
    {
    label: "Contact",
    link: "/contact"
    }
]




export default function HomeComp() {

    const OverLay = useRef(null)

    const openNav = () => {
        OverLay.current.style.height = "100%"
    };

    const closeNav = () => {
        OverLay.current.style.height = "0%"
    };





    const NavBar = () => {
        const isDarkNav = useSelector((state) => state.global.isDarkNav)

        const [shakeProps, shakeApi] = useSpring(
            () => ({
                from: {y: -70, x: 0},
                to: {y: 0, x: 0},
                config: {mass: 10, tension: 1000, friction: 40}
            })
        );


        const startShake = () => {
            shakeApi.start({
                from: {x: 0},
                to: {x: 30},
                reverse: true,
                config: {mass: 20, tension: 1000, friction: 40}}
            )
        };


        return (
            <nav>
                <div onClick={openNav} className="h-[80px] w-full flex justify-evenly items-center">
                    <animated.img style={shakeProps} src="images/logo.png" alt="logo" onMouseOver={startShake} className='devergologo' />
                    <div className={`${!isDarkNav ? 'pulse-anima' : ''} cursor-pointer text-white text-[30px] flex justify-center items-center w-12 h-12 rounded-full bg-primary`}>
                        <span className="mb-4">...</span>
                    </div>
                </div>
                <div className={`h-[80px] flex justify-evenly items-center fixed top-[-80px] right-0 left-0 bg-background_dark transition-transform
                                 transform duration-500 easy-in-out ${isDarkNav ? 'translate-y-[80px]' : 'translate-y-0'}`}>
                    <img src="images/logo.png" alt="logo" className='devergologo'/> 
                    <div id="aurora-nav" class="body-aurora-nav">
                        <div class="content-aurora">
                            <h1 class="title-aurora-nav">
                                <span id="text-inject" />
                                <div class="aurora-nav">
                                    <div class="aurora__item"></div>
                                    <div class="aurora__item"></div>
                                    <div class="aurora__item"></div>
                                    <div class="aurora__item"></div>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div onClick={openNav} className={`${isDarkNav ? 'pulse-anima' : ''} cursor-pointer text-white text-[30px] flex justify-center items-center w-12 h-12 rounded-full bg-primary`}>
                        <span className='mb-4'>...</span>
                    </div> 
                </div>
            </nav>

        )

    }


    let quotes_array = [
        "code.empowers.innovation",
        "code.unlocks.creativity",
        "code.shapes.tomorrow",
        "code.fuels.progress",
        "code.drives.technology",
        "code.powers.solutions",
        "code.sparks.genius",
        "code.creates.magic",
        "code.shapes.worlds",
        "code.fuels.dreams"]



    const SpringParallax = () => {

        const ScrollDiv = useRef(null);
        const dispatch = useDispatch();
        const store = useStore();

        useEffect(() => {
            ScrollDiv.current.addEventListener('scroll', handleScrollEvents)
            return () => {
                ScrollDiv.current.removeEventListener('scroll', handleScrollEvents)
            }
        }, [])

        const handleScrollEvents = () => {

            const isDarkNav = store.getState().global.isDarkNav


            

            
            if(ScrollDiv.current.scrollTop / ScrollDiv.current.offsetHeight > 0.2 && !isDarkNav) {
                dispatch(toggle_isDarkNav())
                document.querySelector('#text-inject').textContent = quotes_array[Math.round(Math.random() * (quotes_array.length - 1))]
            } else if(ScrollDiv.current.scrollTop / ScrollDiv.current.offsetHeight <= 0.2 && isDarkNav) {
                dispatch(toggle_isDarkNav())
            }


        }


        return (
            <>
                <div ref={ScrollDiv} className="fixed-container rounded-[1rem] bg-[lightgray]">
                    <div className="h-[100rem]">

                    </div>
                </div>
                <div ref={OverLay} className="flex items-center justify-center overlay fixed top-0 left-0 w-full h-0 bg-black bg-opacity-90 overflow-hidden transition-all duration-500 z-50">
                    <a href="" className="absolute top-10 right-10 text-[40px] text-[gray] hover:text-white" onClick={closeNav}>
                        &times;
                    </a>
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        {menu_links.map((item) => 
                            <Link className="text-[gray] text-3xl hover:text-white" key={item.label} href={item.link}>
                                {item.label}
                            </Link>
                        )}
                    </div>
                </div>
            </>
        )

    }


    return (
        <>
            <NavBar />
            <SpringParallax />
        </>

)

}
