import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import imgae from '../../../../assets/Certificate-of-Diploma-in-Engineering-1-2048.webp'
const Downloads = () => {
  return (
    <div>
      <DashboardTitle title={"Downloads"}/>
      <img src={imgae} alt="Transcript Certificate" className="w-full h-auto" />
    </div>
  )
}

export default Downloads