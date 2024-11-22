import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle"
import useMessages from "../../../../hooks/useMessages"

const UserSupport = () => {
  const [message,refetch,isPending]=useMessages()
  console.log(message);
  return (
    <div>
      <DashboardTitle title="Support"/>
      <div className="flex flex-col gap-4">
        {isPending && <p>Loading...</p>}
        {message.map((msg)=>(
          <div key={msg._id} className="bg-[#2B7A78] p-4 rounded-lg">
            <h1 className="text-white text-lg">Name: {msg.name}</h1>
            <h1 className="text-white text-lg">Email: {msg.email}</h1>
            <h1 className="text-white text-lg">Message: {msg.message}</h1>
            <h1 className="text-white text-lg">Status: {msg.status}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserSupport