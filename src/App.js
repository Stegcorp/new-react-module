import './App.css';
import Posts from "./components/posts/Posts";
import FullPost from "./components/posts/FullPost";
import {useState} from "react";
import SpaceX from "./components/space/SpaceX";
import Users from "./components/users/Users";
import PostUser from "./components/posts/PostUser";

function App() {
    const [postFull, setFullPost] = useState(null);
    const infoPost = (objec) => {
        setFullPost(objec)
    }

    return (

        <div className="App">
            <Users userID={infoPost}/>
            <PostUser userId={postFull}/>
            {/*<SpaceX/>*/}
            {/*{*/}
            {/*    postFull && <FullPost post={postFull}/>}*/}
            {/*<Posts inf={infoPost}/>*/}
        </div>
    );
}

export default App;
