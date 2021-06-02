import google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb.js";
const { GreeterClient } = require("./hello_grpc_web_pb");

const client = new GreeterClient("https://grant.t1-group.ru:443");

const req = new google_protobuf_empty_pb.Empty();

client.ping(req, {}, (err, resp) => {
  if (err) throw err;
  console.log(resp.getMessage());
});
