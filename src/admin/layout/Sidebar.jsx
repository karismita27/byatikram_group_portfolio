import { Link } from "react-router-dom";



export default function Sidebar({open, closeSidebar}){

return(

<div style={{
width:220,
background:"#0f2a44",
color:"white",
height:"100vh",
position:"fixed",
left: open ? 0 : -220,
top:0,
transition:"0.3s",
padding:"20px"
}}>

{/* Close button (mobile only) */}
{window.innerWidth<768 &&(
    <div style={{display:"flex", justifyContent:"flex-end",marginBottom:"20px"}}>
<button
onClick={closeSidebar}
style={{
background:"none",
border:"none",
color:"white",
fontSize:"20px",
cursor:"pointer",

}}
>
X
</button>
</div>
)}

<h2 style={{marginBottom:30}}>Admin</h2>

<a href="/admin/dashboard" style={link}>Dashboard</a>
<a href="/admin/slider" style={link}>Slider</a>
<a href="/admin/events" style={link}>Events</a>
<a href="/admin/gallery" style={link}>Gallery</a>
<a href="/admin/contacts" style={link}>Contacts</a>

</div>

)

}

const link={
display:"block",
color:"white",
textDecoration:"none",
marginBottom:"15px"
}