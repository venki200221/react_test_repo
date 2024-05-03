import "./single.css"
import Sidebar from "../../components/sidebar/sidebar"
import Singlepost from "../../components/singlepost/singlepost"
import Footer from "../../components/footer/footer"


export default function single(){
return(
    <>
    <div className="single">
       {/* posts */}
       <Singlepost />
       {/* <Sidebar /> */}
       
    </div>
    <Footer />
    </>
)
}
