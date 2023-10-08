import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"
import { toast } from "react-toastify"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST

    }
}
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err

    }
}

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data

    }
}

export const Deleteuser = () => {
    return {
        type: DELETE_USER

    }
}
export const Adduser = () => {
    return {
        type: ADD_USER

    }
}

export const updateuser = (data) => {
    return {
        type: UPDATE_USER
    }
}

export const getuserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data

    }
}






export const FetchUserListData = () => {

    return (dispatch) => {
        dispatch(makeRequest());
        axios.get("https://crud-json-api.onrender.com/user").then(res => {
            const userlist = res.data;
            dispatch(getUserList(userlist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}


export const Removeuser = (code) => {

    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete("https://crud-json-api.onrender.com/user/" + code).then(res => {
            dispatch(Deleteuser())
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}


export const Addnewuser = (userobj) => {

    return (dispatch) => {
        dispatch(makeRequest());
        axios.post("https://crud-json-api.onrender.com/user", userobj).then(res => {
            dispatch(Adduser())
            toast.success("User Added Successfully")
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}
export const FunctionUpdateuser = (userobj, code) => {
    console.log(userobj)

    return (dispatch) => {
        dispatch(makeRequest());
        axios.put("https://crud-json-api.onrender.com/user/" + code, userobj).then(res => {
            dispatch(updateuser())
            toast.success("User Updated Successfully")
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}

export const FetchUserObj = (code) => {

    return (dispatch) => {
        dispatch(makeRequest());
        axios.get("https://crud-json-api.onrender.com/user/"+code).then(res => {
            const userlist = res.data;
            dispatch(getuserObj(userlist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })

    }
}