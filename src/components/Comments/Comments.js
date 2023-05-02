import {Component} from "react";
import {commentService} from "../../services/comments.service";
import {Comment} from "../Comment/Comment";

class Comments extends Component{

    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }
    componentDidMount() {
        commentService.getAll().then(({data})=>this.setState({comments: data}))
    }

    render() {
        return(
            <div>
                {
                    this.state.comments.map(value=> <Comment key={value.id} comment={value}/>)
                }
            </div>
        )
    }
}

export {Comments}
