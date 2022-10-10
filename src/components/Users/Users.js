import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../slices";
import {User} from "../User/User";

const Users = () => {
  const dispatch = useDispatch()

  const {users, loading, error, user, decidedUser} = useSelector(state => state.userReducer)

  useEffect(() => {
    // usersService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    dispatch(userActions.getAll())
    dispatch(userActions.getUser(users.find(item => item?.id === decidedUser?.id)))
  }, [])

  return (
    <>
      {loading && <h1>Loading........</h1>}
      {error && <h1>{error.message}</h1>}
      {(decidedUser?.email===user?.email) && <p>{decidedUser?.email}</p>}
      <div>
        {users.map(user => (
          <User key={user.id} user={user}/>
        ))}
      </div>
    </>
  );
};

export {Users};