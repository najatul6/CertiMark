import DashboardTitle from "../../../../Components/Shared/DashboardTitle/DashboardTitle";
import useAuth from "../../../../hooks/useAuth";
import useMessages from "../../../../hooks/useMessages";

const UserSupport = () => {
  const [message, refetch, isPending] = useMessages();
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
                  <img
                    alt={user?.name}
                    src={user.photoURL}
                  />
                </div>
              </div>
              <div className="chat-bubble text-white">{msg?.message}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserSupport;
