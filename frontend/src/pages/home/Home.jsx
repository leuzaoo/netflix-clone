import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";

export default function Home() {
  const user = false;

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
}
