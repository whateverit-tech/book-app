import http from "../http-common";

const getAll = () => {
  return http.get("/volumes?q=''");
};

const TutorialService = {
  getAll,
};

export default TutorialService;