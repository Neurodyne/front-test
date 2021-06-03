import google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb.js";
const { GreeterClient } = require("./hello_grpc_web_pb");
const { GeofenceClient } = require("./geofence_grpc_web_pb");
const { PingRequest } = require("./geofence_pb");

const client = new GreeterClient("https://grant.t1-group.ru:443");
const geo = new GeofenceClient("https://grant.t1-group.ru:443");

const emptyReq = new google_protobuf_empty_pb.Empty();
const helloReq = new PingRequest();

client.ping(emptyReq, {}, (err, resp) => {
  if (err) throw err;
  console.log(resp.getMessage());
});

geo.ping(helloReq, {}, (err, resp) => {
  if (err) throw err;
  console.log(resp.getMessage());
});
