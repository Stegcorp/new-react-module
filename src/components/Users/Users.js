import {Component} from "react";
import {usersService} from "../../services/users.service";
import User from "../User/User";


class Users extends Component{
    constructor(props) {
        super(props);
        this.state ={
            users:[]
        }
    }
    componentDidMount() {
        usersService.getAll().then(({data}) => this.setState({users:data}))
    }


    render() {
        return(
            <div>

                {

                    this.state.users.map(value =>  <User key={value.id} user={value}/>)
                }
            </div>
        )
    }
}

export default Users
