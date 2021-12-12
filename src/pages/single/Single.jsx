import "./single.css"
import Sidebar from "../../components/sidebar/SideBar"
import SinglePost from "../../components/singlepost/SinglePost.jsx"

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            {/* post */}
            <Sidebar/>
        </div>
    )
}
