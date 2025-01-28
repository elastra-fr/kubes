"use client";

import styles from "./Kube4.module.css";
import {useState, useEffect} from "react";




export default function Cube() {

const [rotation, setRotation] = useState({
        current: { x: -3, y: 30 },
        target: { x: -3, y: 30 }
    });

    const rotateCube = (x, y) => {
        setRotation(prev => ({
            current: prev.target,
            target: { x, y }
        }));
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target.getAttribute('data-section');
                        switch(section) {
                            case "hero":
                                rotateCube(0, 30);
                                break;

                            case "1":
                                rotateCube(-3, 0);
                                break;
                            case "2":
                                rotateCube(-3, 90);
                                break;
                            case "3":
                                rotateCube(-3, 180);
                                break;
                            case "4":
                                rotateCube(-3, 270);
                                break;
                            default:
                                rotateCube(-3, 30);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const cubeStyle = {
        transform: `rotateX(${rotation.target.x}deg) rotateY(${rotation.target.y}deg)`,
        transition: 'transform 0.8s ease-out',
     
    };





    return (
        <div className="grid grid-cols-2 h-screen w-screen">
            {/* Left Column - Fixed Cube */}
            <section className={styles.cubeContainer}
            style={cubeStyle}
            >
                <div className={styles.cubeBox} id={styles.cubeBox2}>
                    <div className={styles.cubeCard} id={styles.front}>Kube Inc</div>
                    <div className={styles.cubeCard} id={styles.back}>Section 1</div>    
                    <div className={styles.cubeCard} id={styles.left}>Section 2</div>
                    <div className={styles.cubeCard} id={styles.right}>Section 3</div>
                    <div className={styles.cubeCard} id={styles.top}>Section 4</div>
                    <div className={styles.cubeCard} id={styles.bottom}>Section 5</div>
                </div>
            </section>

            {/* Right Column - Scrollable Content */}
            <section className="h-screen overflow-y-auto">
                {/* Hero Section with CTA */}
                <div data-section="hero" className="h-screen flex flex-col items-center justify-center p-8">
                    <p className="text-xl mb-8">
                        Kube Inc is a company that specializes in creating cubes. We have been in business for over 20 years and have created thousands of cubes for our clients. Our cubes are made from the highest quality materials and are built to last. We offer a wide range of cube designs to choose from, or we can create a custom cube to meet your specific needs. Contact us today to learn more about our cube products and services.
                    </p>
                    <button className="rounded bg-black text-white text-3xl p-6">
                        Call to Action
                    </button>
                </div>

                {/* Scrollable Content */}
                <div data-section="1" className="p-8 space-y-8">

                    <img src="https://placehold.co/600x400" alt="random" className="w-full" />


                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-lg">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                     {/* Scrollable Content */}
                <div data-section="2" className="p-8 space-y-8 ">

                    <img src="https://placehold.co/600x400" alt="random" className="w-full" />

                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-lg">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                 {/* Scrollable Content */}
                <div data-section="3" className="p-8 space-y-8">

                    <img src="https://placehold.co/600x400" alt="random" className="w-full" />


                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-lg">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>


            </section>
        </div>
    );


}



