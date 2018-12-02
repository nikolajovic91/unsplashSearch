import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID b0d459780e58bb167ec0915b7fbae76dfc61d79583ded48e87427243ff993fc1"
  }
});
