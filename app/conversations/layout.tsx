import getConversation from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sideBar/sidebar";
import ConversationList from "./components/conversationList";

const ConversationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversation();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationLayout;
