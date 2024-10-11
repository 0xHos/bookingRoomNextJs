import { Client, Databases, Account, Storage } from "node-appwrite";

const createAdminClient = async () => {
  // const client = new Client()
  //   .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
  //   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) // Your project ID
  //   .setKey(process.env.NEXT_APPWRITE_KEY);
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67074d590029bc32f59b")
    .setKey(
      "standard_4972de822363fa8a80a8ea6cec27fdb13a947d1abb41a37ccdf26b775d3eef220d03b1dc30b95fc5aa6ea1cfb7cef446a92060090cc0d3c843cba4652f198a6895d243e5324f53ed66a525e74bbd9ba40dfeee5645d2e245985558aa120bfe589b00cc8edd3a1de917e6ebdcd9337bc95fda2f57ed920715317f93f22e503f85"
    );

  return {
    get account() {
      return new Account(client);
    },

    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT) // Your project ID
    .setKey(process.env.NEXT_APPWRITE_KEY);
  if (session) {
    client.setSession(session);
  }
  return {
    get account() {
      return new Account(client);
    },

    get databases() {
      return new Databases(client);
    },
  };
};

export { createSessionClient, createAdminClient };
