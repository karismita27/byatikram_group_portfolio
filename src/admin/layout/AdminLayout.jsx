
import {useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({children}){

const [open,setOpen] = useState(true);
const [isMobile,setIsMobile] = useState(false);

useEffect(()=>{

const checkScreen = ()=>{

if(window.innerWidth < 768){
setIsMobile(true);
setOpen(false);
}else{
setIsMobile(false);
setOpen(true);
}

}

checkScreen();
window.addEventListener("resize",checkScreen)

},[])

const toggleMenu = ()=>{

if(isMobile){
setOpen(!open)
}

}

const closeSidebar = ()=>{
setOpen(false)
}

return(

<div style={{display:"flex"}}>

<Sidebar open={open} closeSidebar={closeSidebar}/>

<div style={{
flex:1,
marginLeft: isMobile ? 0 : 220
}}>

<Topbar toggleMenu={toggleMenu} isMobile={isMobile}/>

<div style={{
padding:"20px",
background:"#f5f6fa",
minHeight:"100vh"
}}>
{children}
</div>

</div>

</div>

)

}