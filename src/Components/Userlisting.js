import React, { useEffect } from 'react'
import { FetchUserListData, Removeuser } from '../Redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Userlisting = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    const handleDelete = (code) => {
        if (window.confirm('Do You Want To Remove It')) {
            props.removeuser(code);
            props.loaduser();
            toast.success("User Removed Successfully")


        }
    }

    return (
        props.user.loading ? <div><h2>Loading</h2></div> : props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :



            <div>
                <div class="d-grid m-3 d-md-flex justify-content-md-end">
                    <Link to={'/user/add'} class="btn btn-success" type="button">Add User [+]</Link>
                </div>


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Role</th>

                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>



                        {props.user.userList && props.user.userList.map(item =>

                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>{item.role}</td>
                                <td> <Link to={'/user/edit/' + item.id} className='btn btn-primary' > Edit</Link>
                                    <button onClick={() => { handleDelete(item.id) }} className='btn btn-danger m-1'>Delete</button>

                                </td>
                            </tr>

                        )}



                    </tbody>
                </table></div>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchStateToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserListData()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Userlisting);