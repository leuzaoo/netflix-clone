import { useAuthStore } from "../../store/authUser.js";

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <div>
      HomeScreen
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default HomeScreen;
