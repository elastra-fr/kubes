"use client"
import {useState} from "react";



export default function Header({onKubeChange}){ {

const [selectedKube, setSelectedKube] = useState("");


const handleSelectedKubeChange = (e) => {

setSelectedKube(e.target.value);
onKubeChange(e.target.value);

}

return(

<>

<header className="flex justify-between items-center p-4 bg-gray-800 text-white">

<div>

<span className="text-xl">Kubes</span>

</div>

<div>

<select className="p-2 bg-gray-900 text-white rounded-md"
value={selectedKube}
onChange={handleSelectedKubeChange}
>

<option>Kube 1</option>
<option>Kube 2</option>
<option>Kube 3</option>

</select>


</div>



</header>



</>



);





}

}