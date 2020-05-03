const contentful = require("contentful");

const spaceId = process.env.REACT_APP_SPACE_ID;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;


const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;