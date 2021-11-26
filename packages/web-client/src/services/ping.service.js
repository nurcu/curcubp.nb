import http from "./http-common";

class PingService {
  ping() {
    return http.get("/ping");
  }
}

export default new PingService();