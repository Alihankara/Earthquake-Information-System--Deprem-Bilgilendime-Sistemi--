import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true // İsteğe bağlı olarak withCredentials özelliğini burada ayarlayabilirsiniz
});

export const getDepremVerileri = async () => {
  try {
    const response = await api.get("/sondepremler"); // Sunucudan deprem verilerini alacak isteği yapın
    return response.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};
