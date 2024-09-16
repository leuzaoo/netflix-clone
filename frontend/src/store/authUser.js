import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Conta criada com sucesso.");
    } catch (error) {
      toast.error(error.response.data.message || "Um erro foi encontrado.");
      set({ isSigningUp: false, user: null });
    }
  },
  login: async () => {},
  logout: async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLoggingOut: false });
      toast.success("Você saiu da sua conta.");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(
        error.response.data.message || "Erro ao tentar sair da conta."
      );
    }
  },
  authCheck: async () => {
    try {
      const response = await axios.get("/api/v1/auth/authCheck");
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
      toast.error(error.response.data.message || "Foi encontrado um erro.");
    }
  },
}));
