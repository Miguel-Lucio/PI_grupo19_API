import { DocumentService } from "../services/document.service";
import { LoginService } from "../services/login.service";
import { ProfileService } from "../services/profile.service";
import { UserService } from "../services/user.service";
import { DocumentController } from "./document.controller";
import { LoginController } from "./login.controller";
import { ProfileController } from "./profile.controller";
import { UserController } from "./user.controller";

const userService = new UserService();
export const userController = new UserController(userService);

const loginService = new LoginService();
export const loginController = new LoginController(loginService);

const profileService = new ProfileService();
export const profileController = new ProfileController(profileService);

const documentService = new DocumentService();
export const documentController = new DocumentController(documentService);
