"use client"

import React, { useState } from 'react';
import Kube1 from '../components/kube1/Kube1';
import Header from '../components/header/Header'; 
import Kube2 from '../components/kube2/Kube2';
import Kube3 from '../components/kube3/Kube3';

export default function Home() {

  const [currentKube, setCurrentKube] = useState("Kube 1");

  const handleKubeChange = (kube) => {

    setCurrentKube(kube);

  }


  return (


 <>
 
  <Header onKubeChange={handleKubeChange} />
 <main className=" m-4 h-screen w-screen">

{currentKube === "Kube 1" && <Kube1 />}
{currentKube === "Kube 2" && <Kube2 />}
{currentKube === "Kube 3" && <Kube3 />}




 </main>
 
 </>
  );
}
