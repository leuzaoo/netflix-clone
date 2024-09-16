import { useAuthStore } from "../../store/authUser.js";
import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";

export default function Home() {
  const { user } = useAuthStore();

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
}
