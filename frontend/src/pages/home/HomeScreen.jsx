import { useAuthStore } from "../../store/authUser.js";

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <div>
      teste
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default HomeScreen;
