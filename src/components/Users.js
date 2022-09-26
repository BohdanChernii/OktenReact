import React, {Component} from 'react';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res=> this.setState({users:res}) )
  }
componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('update');
}

  render() {
    console.log(this.state.users);
    const users = this.state.users
    return (
      <div>
        {users.map(item=>(
          <p>{JSON.stringify(item.name)}</p>
        ))}
      </div>
    )
  }
}

export default Users;