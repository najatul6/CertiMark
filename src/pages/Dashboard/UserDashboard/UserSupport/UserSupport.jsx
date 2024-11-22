import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import useMessages from "../../../../hooks/useMessages"

const UserSupport = () => {
  const []=useMessages()
  return (
    <div>
      <DashboardTitle title="Support"/>
    </div>
  )
}

export default UserSupport