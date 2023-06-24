import Sidebar from "../components/sideBar/sidebar";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
