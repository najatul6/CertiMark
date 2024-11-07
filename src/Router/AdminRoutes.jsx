import useAuth from "../hooks/useAuth"
import useRole from "../hooks/useRole"

const AdminRoutes = () => {
    const {user,isLoading  }=useAuth()
    const [userRole,isAdminLoading]=useRole()
  return (
    <div>AdminRoutes</div>
  )
}

export default AdminRoutes