import http, { approve, formDataHttp } from "./http-common";

class PropertiesService {
  login(data) {
    return http.post("/auth/admin-login", {
      username: "admin",
      password: "12345678",
    });
  }
  getArticle(token) {
    return http.get("/admin/list-articles", {
      headers: { Authorization: "Bearer " + token },
    });
  }
  getUser(token) {
    return http.get("/admin/list-users", {
      headers: { Authorization: "Bearer " + token },
    });
  }
  getListReportUser(token) {
    return http.get("/admin/list-reports-user", {
      headers: { Authorization: "Bearer " + token },
    });
  }
  getListReportArticle(token) {
    return http.get("/admin/list-reports-article", {
      headers: { Authorization: "Bearer " + token },
    });
  }
  getTopic() {
    return http.get("/topics");
  }
  createTopic(data, token) {
    return http.post("/admin/create-topic", JSON.stringify(data), {
      headers: { Authorization: "Bearer " + token },
    });
  }
  deleteTopic(data, token) {
    return http.delete("/admin/delete-topic", {
      headers: { Authorization: "Bearer " + token },
      data: JSON.stringify(data),
    });
  }
  handleReportArticle(data, token) {
    return http.post("/admin/handle-reports-article", JSON.stringify(data), {
      headers: { Authorization: "Bearer " + token },
    });
  }
  banUser(data, token) {
    return http.post("/admin/ban-user", JSON.stringify(data), {
      headers: { Authorization: "Bearer " + token },
    });
  }
  hideArticle(data, token) {
    return http.post("/admin/hide-article", JSON.stringify(data), {
      headers: { Authorization: "Bearer " + token },
    });
  }
  getDataTextRule(data) {
    return approve.post("/badwords/get-data", JSON.stringify(data), {
      responseType: "blob",
    });
  }
  getClasslist() {
    return approve.get("/badwords/get-class-list");
  }
  postClassdata(data) {
    return approve.post("/badwords/add-data", JSON.stringify(data));
  }
  deleteClass(id) {
    return approve.delete(`/badwords/delete-class?classId=${id}`);
  }
  retrainClass(data) {
    let fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]);
    }
    return formDataHttp.post("/badwords/re-train", fd);
  }
  disabledClass(data){
    return approve.post("/badwords/change-class-status", JSON.stringify(data));
  }

}
export default new PropertiesService();
