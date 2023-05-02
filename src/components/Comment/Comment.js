import {Component} from "react";

class Comment extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {id,name,email} = this.props.comment;
        return(
            <div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <hr/>
            </div>
        )

    }
}
export {Comment}
