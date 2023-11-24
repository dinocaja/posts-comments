import { gateway } from "./baseEndpoints";

const usersEndpoint = `${gateway}/users`;

const getAllUsers = () => usersEndpoint;

const getUserById = (id: number) => `${usersEndpoint}/${id}`;

export const UsersApi = {
  getAllUsers,
  getUserById,
};
