// create Controller class
import {User} from "../models/user.model";

export  class DemoController {
  // Search User by name
    async searchUserByName(name: string) {
        console.log('searchUserByName', name);
        let user = await User.findOne({name});
        return user ? user.toJSON() : {error: 'User not found'};
    }
}
