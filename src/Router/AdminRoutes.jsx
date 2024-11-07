import { Navigate, useLocation } from "react-router"
import useAuth from "../hooks/useAuth"
import useRole from "../hooks/useRole"
import Loading from "../Components/Shared/Loading/Loading"

const AdminRoutes = ({children}) => {
    const {user,loading  }=useAuth()
    const [userRole,isAdminLoading]=useRole()
    const location=useLocation()
    if(loading){
        return <Loading/>
    }
    if(user){
        return children
    }

    return <Navigate to="/logIn" state={{from:location}}/>
  
}

export default AdminRoutes