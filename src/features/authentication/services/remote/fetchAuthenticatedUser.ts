import client from "@/core/api/client";

const fetchAuthenticatedUser = async (token: string) => {
  return await client.get("/users/me",{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export default fetchAuthenticatedUser;
