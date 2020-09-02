import axios from "axios";

export class APIHandler {
  constructor(APIPrefix) {
    if (!process.env.REACT_APP_BACKEND_URL || !APIPrefix)
      throw new Error(
        "fournir API prefix + URL de base pour effectuer des appels AJAX"
      );

    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix,
    });
  }

  createOne(payload) {
    return this.instance.post("/", payload);
  }

  getAll() {
    return this.instance.get("/"); 
  }

  getById(id) {
    return this.instance.get("/" + id);
  }

  deleteOne(id) {
    return this.instance.delete("/" + id);
  }
}

