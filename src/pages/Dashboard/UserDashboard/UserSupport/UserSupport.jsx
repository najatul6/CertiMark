import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAuth from "../../../../hooks/useAuth";
import useMessages from "../../../../hooks/useMessages";
import supportImg from "../../../../assets/support.png";

const UserSupport = () => {
  const [message, , isPending] = useMessages();
  const { user } = useAuth();
  return (
    <div>
      <DashboardTitle title="Support" />
      <div className="flex flex-col gap-4">
        {isPending && <p>Loading...</p>}
        {message.map((msg) => (
          <>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt={user?.name} src={user.photoURL} />
                </div>
              </div>
              <div className="chat-bubble text-white">{msg?.message}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Support Team" src={supportImg} />
                </div>
              </div>
              <div className={`chat-bubble text-white ${msg.status!=='Pending'?'bg-green-600':''}`}>{msg.status==='Pending'?'Checking....': msg?.status}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserSupport;
