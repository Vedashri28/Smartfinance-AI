import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout({children}){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1">

<Navbar/>

{children}

</div>

</div>

)

}

export default MainLayout;
