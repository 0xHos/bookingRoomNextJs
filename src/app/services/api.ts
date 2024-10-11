import axios from "axios";
import { IRoom } from "../types/type";

const databaseId = "67074e7200011d0076b1";
const collectionId = "67074e94002f4ca853b7";
const projectId = "67074d590029bc32f59b";
const apiKey =
  "standard_4972de822363fa8a80a8ea6cec27fdb13a947d1abb41a37ccdf26b775d3eef220d03b1dc30b95fc5aa6ea1cfb7cef446a92060090cc0d3c843cba4652f198a6895d243e5324f53ed66a525e74bbd9ba40dfeee5645d2e245985558aa120bfe589b00cc8edd3a1de917e6ebdcd9337bc95fda2f57ed920715317f93f22e503f85"; // Your API Key
const databaseEndpoint = "https://cloud.appwrite.io/v1/databases/";
const accountEndpoint = "https://cloud.appwrite.io/v1/account/sessions";
const createUserEndpoint = "https://cloud.appwrite.io/v1/users";
const headers = {
  "X-Appwrite-Project": projectId,
  "X-Appwrite-Key": apiKey,
  "Content-Type": "application/json",
  // "X-Appwrite-JWT": "",
};
export default class API {
  static async register(name: string, email: string, password: string) {
    console.log("createUserEndpoint", createUserEndpoint);
    try {
      const response = await axios.post(
        createUserEndpoint,
        { userId: "unique()", name, email, password },
        { headers }
      );
      const userId = response.data.$id;
      console.log("signup:", response);
      return {
        userId,
      };
    } catch (err) {
      console.log("error signup ", err);
      return {
        error: "error create user please check email or password",
      };
    }
  }

  static async login(email: string, password: string) {
    const Endpoint = `${accountEndpoint}`;

    try {
      const response = await axios.post(
        Endpoint,
        { email, password },
        { headers }
      );
      const jwt = response.data.secret;
      const userId = response.data.userId;
      console.log("login:", response);
      return {
        jwt,
        userId,
      };
    } catch (err) {
      console.log("err login ");
      return {
        error: "Invalid email or password.",
      };
    }
  }
  static async getAllRooms() {
    const Endpoint = `${databaseEndpoint}${databaseId}/collections/${collectionId}/documents`;

    try {
      const response = await axios.get(Endpoint, { headers });
      return response.data.documents;
    } catch (err) {
      console.log("err get all rooms", err);
    }
  }

  static async getRoom(id: string) {
    const Endpoint = `${databaseEndpoint}${databaseId}/collections/${collectionId}/documents/${id}`;

    try {
      const response = await axios.get(Endpoint, { headers });
      return response.data;
    } catch (err) {
      console.log("err get  room ");
      return {
        error: "Room Not Found",
      };
    }
  }

  static async createRoom(jwt: string, room: IRoom) {
    // headers["X-Appwrite-JWT"] = jwt;
    const Endpoint = `${databaseEndpoint}${databaseId}/collections/${collectionId}/documents`;

    try {
      const response = await axios.post(
        Endpoint,
        {
          documentId: "unique()",
          data: {
            user_id: room.user_id,
            title: room.title,
            description: room.description,
            address: room.address,
            availability: room.availability,
            price: room.price,
          },
        },
        { headers }
      );
      console.log("create room:", response);
      return response.data;
    } catch (err) {
      console.log("err get  room ", err);
    }
  }

  static async getMyRoomsByUserId(user_id: string) {
    const config = {
      method: "get",
      url: `https://cloud.appwrite.io/v1/databases/67074e7200011d0076b1/collections/67074e94002f4ca853b7/documents?queries%5B0%5D=%7B%22method%22%3A%22limit%22%2C%22values%22%3A%5B12%5D%7D&queries%5B1%5D=%7B%22method%22%3A%22offset%22%2C%22values%22%3A%5B0%5D%7D&queries%5B2%5D=%7B%22method%22%3A%22orderDesc%22%2C%22attribute%22%3A%22%22%7D&queries%5B3%5D=%7B%22method%22%3A%22equal%22%2C%22attribute%22%3A%22user_id%22%2C%22values%22%3A%5B%22${user_id}%22%5D%7D`,
      headers: {
        "X-Appwrite-Project": "67074d590029bc32f59b",
        "X-Appwrite-Key":
          "standard_4972de822363fa8a80a8ea6cec27fdb13a947d1abb41a37ccdf26b775d3eef220d03b1dc30b95fc5aa6ea1cfb7cef446a92060090cc0d3c843cba4652f198a6895d243e5324f53ed66a525e74bbd9ba40dfeee5645d2e245985558aa120bfe589b00cc8edd3a1de917e6ebdcd9337bc95fda2f57ed920715317f93f22e503f85",
        "X-Appwrite-Response-Format": "1.6.0",
        "content-type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
        Referer:
          "https://cloud.appwrite.io/console/project-67074d590029bc32f59b/databases/database-67074e7200011d0076b1/collection-67074e94002f4ca853b7",
      },
    };

    const response = await axios(config);
    return response.data;
  }
}
