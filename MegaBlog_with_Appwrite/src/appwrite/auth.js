import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService { // FIX: Corrected spelling from AtuthSerive
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId); // FIX: Changed from duplicate setEndpoint to setProject
    this.account = new Account(this.client);
  }
async createAccount({ email, password, name }) {
    try {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (userAccount) {
            return await this.login({ email, password });
        }

        return userAccount;

    } catch (error) {
        console.error("Create Account Error:", error);
        throw error;
    }
}

async login({ email, password }) {
    try {
        return await this.account.createEmailSession(
            email,
            password
        );
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
}
  // async createAccount({ email, password, name }) {
  //   try {
  //     const userAccount = await this.account.create(
  //       ID.unique(),
  //       email,
  //       password,
  //       name
  //     );
  //     if (userAccount) {
  //       return this.login({ email, password });
  //     } else {
  //       return userAccount;
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // } // FIX: Added missing closing bracket here

  // async login({ email, password }) {
  //   try {
  //     return await this.account.createEmailPasswordSession(email, password);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async getCurrentUser() { // FIX: Changed 'sync' to 'async'
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      // FIX: Added 'current' target to terminate the active user session
      await this.account.deleteSession("current"); 
    } catch (error) {
      console.error("Appwrite service :: logout :: error", error);
    }
  }
}

// Instantiate the service 
const authService = new AuthService();

// Best Practice: Export the single instance, not the raw class blueprint
export default authService;
