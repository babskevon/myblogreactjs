import "./post.css"

export default function Post(props) {
    return (
        <div className="post">
            <img 
                className="postImg" 
                src="https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=" 
                alt="postimg" 
             />
             <div className="postInfo">
                 <div className="postCats">
                     <span className="postCat">{props.cat}</span>
                     {/* <span className="postCat"></span> */}
                 </div>
                 <span className="postTitle">
                     {props.title}
                 </span>
                 <hr />
                 <span className="postDate">1 hour ago</span>
             </div>
             <p className="postDesc">
                 {props.article}
             </p>
        </div>
    )
}
