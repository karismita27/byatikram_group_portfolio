
export default function Topbar({toggleMenu,isMobile}){

return(

<div style={styles.topbar}>

{/* Show menu only on mobile */}

{isMobile && (

<button onClick={toggleMenu} style={styles.menu}>
☰
</button>

)}

<h3>Admin Panel</h3>

<button style={styles.logout}>Logout</button>

</div>

)

}

const styles={

topbar:{
height:60,
background:"#fff",
borderBottom:"1px solid #eee",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 20px"
},

menu:{
fontSize:20,
border:"none",
background:"none",
cursor:"pointer"
},

logout:{
background:"#e53935",
color:"white",
border:"none",
padding:"8px 14px",
borderRadius:"6px"
}

}