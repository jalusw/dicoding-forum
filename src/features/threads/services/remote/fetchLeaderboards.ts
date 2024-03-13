import client from "@/core/api/client";

const fetchLeaderboards  =  async () => {
  return await client.get("leaderboards");
}

export default fetchLeaderboards;
