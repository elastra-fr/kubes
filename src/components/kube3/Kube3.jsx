"use client";

import styles from "./Kube3.module.css";
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
                <div className={styles.cubeBox} id={styles.cubeBox}>
                    <div className={styles.cubeCard} id={styles.front}>
                        <img 
                            src="https://picsum.photos/300/300?random=1" 
                            alt="front"
                            className={styles.faceImage}
                        />

                    </div>
                    <div className={styles.cubeCard} id={styles.back}>
                        <img 
                            src="https://picsum.photos/300/300?random=2" 
                            alt="back"
                            className={styles.faceImage}
                        />
                    </div>    
                    <div className={styles.cubeCard} id={styles.left}>
                        <img 
                            src="https://picsum.photos/300/300?random=3" 
                            alt="left"
                            className={styles.faceImage}
                        />
                    </div>
                    <div className={styles.cubeCard} id={styles.right}>
                        <img 
                            src="https://picsum.photos/300/300?random=4" 
                            alt="right"
                            className={styles.faceImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}