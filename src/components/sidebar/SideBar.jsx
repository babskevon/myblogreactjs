import './sidebar.css'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=" alt="mypic" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam libero cumque corporis quod, 
                    enim eos velit nulla maxime suscipit sequi iusto quae ex, dolorem minima ducimus. Accusantium 
                    voluptate possimus cupiditate.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Fashion</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Religion</li>
                    <li className="sidebarListItem">Relationships</li>
                    <li className="sidebarListItem">Technology</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOW US</div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}