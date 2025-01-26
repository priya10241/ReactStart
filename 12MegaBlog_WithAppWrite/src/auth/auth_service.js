import {Client, Account,ID} from "appwrite";
import conf from '../conf/conf.js'

class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
       try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login(email,password);
            }
            else{
                return null;
            }
        }
        catch(error){
            throw error;
        }
    }

    async login(email,password){
        try{
            return await this.account.createSession(email,password);
        }
        catch(error){
            return error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log(error);
        }
        return null;
    }
''
    async logOut(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            throw error;
        }
    }
};

const authService = new AuthService();

export default authService;
