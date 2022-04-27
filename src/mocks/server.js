import { setUpServer } from "msw/node";
import { handlers } from "./handlers";

const server = setUpServer(...handlers);

export default server;
