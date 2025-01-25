"use client";

import styles from "./Kube1.module.css";
import {useState} from "react";

export default function Cube() {
    const [isExploded, setIsExploded] = useState(false);

    return (
        <>
            <button 
                id={styles.cubeButton} 
                className="rounded bg-black text-white p-4"
            >
                Explode Cube
            </button>

            <div className={styles.cubeContainer}>
                <div className={styles.cubeBox} id={styles.cubeBox1}>
                    <div className={styles.cubeCard} id={styles.front}>Front</div>
                    <div className={styles.cubeCard} id={styles.back}>Back</div>    
                    <div className={styles.cubeCard} id={styles.left}>Left</div>
                    <div className={styles.cubeCard} id={styles.right}>Right</div>
                    <div className={styles.cubeCard} id={styles.top}>Top</div>
                    <div className={styles.cubeCard} id={styles.bottom}>Bottom</div>
                </div>
            </div>
        </>
    );
}