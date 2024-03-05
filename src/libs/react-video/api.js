//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwZDFiYWNlOS03MTEwLTQ3ZWItYjM1ZC1lNmEwNDFjZTUxNzUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwOTQ0ODU5MiwiZXhwIjoxNzEwMDUzMzkyfQ.DbaBzx-hC6Ohf-v-j_QMZRJTjjrTER0xs9Nb3v7ucAE";
// API call to create a meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
