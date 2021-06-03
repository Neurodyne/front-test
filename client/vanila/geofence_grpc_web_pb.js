/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var Api_pb = require('./Api_pb.js')
const proto = {};
proto.api = require('./geofence_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.GeofenceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.GeofencePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.PingRequest,
 *   !proto.api.PingResponse>}
 */
const methodDescriptor_Geofence_Ping = new grpc.web.MethodDescriptor(
  '/api.Geofence/Ping',
  grpc.web.MethodType.UNARY,
  proto.api.PingRequest,
  proto.api.PingResponse,
  /**
   * @param {!proto.api.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.PingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.PingRequest,
 *   !proto.api.PingResponse>}
 */
const methodInfo_Geofence_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.PingResponse,
  /**
   * @param {!proto.api.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.PingResponse.deserializeBinary
);


/**
 * @param {!proto.api.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GeofenceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Geofence/Ping',
      request,
      metadata || {},
      methodDescriptor_Geofence_Ping,
      callback);
};


/**
 * @param {!proto.api.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.PingResponse>}
 *     Promise that resolves to the response
 */
proto.api.GeofencePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Geofence/Ping',
      request,
      metadata || {},
      methodDescriptor_Geofence_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.OrderInfoRequest,
 *   !proto.api.Order>}
 */
const methodDescriptor_Geofence_GetOrderInfo = new grpc.web.MethodDescriptor(
  '/api.Geofence/GetOrderInfo',
  grpc.web.MethodType.UNARY,
  proto.api.OrderInfoRequest,
  proto.api.Order,
  /**
   * @param {!proto.api.OrderInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Order.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.OrderInfoRequest,
 *   !proto.api.Order>}
 */
const methodInfo_Geofence_GetOrderInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.Order,
  /**
   * @param {!proto.api.OrderInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Order.deserializeBinary
);


/**
 * @param {!proto.api.OrderInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.Order)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.Order>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GeofenceClient.prototype.getOrderInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Geofence/GetOrderInfo',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetOrderInfo,
      callback);
};


/**
 * @param {!proto.api.OrderInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.Order>}
 *     Promise that resolves to the response
 */
proto.api.GeofencePromiseClient.prototype.getOrderInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Geofence/GetOrderInfo',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetOrderInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RouteVariantInfoRequest,
 *   !proto.api.RouteVariantInfo>}
 */
const methodDescriptor_Geofence_GetRouteVariantInfo = new grpc.web.MethodDescriptor(
  '/api.Geofence/GetRouteVariantInfo',
  grpc.web.MethodType.UNARY,
  proto.api.RouteVariantInfoRequest,
  proto.api.RouteVariantInfo,
  /**
   * @param {!proto.api.RouteVariantInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RouteVariantInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.RouteVariantInfoRequest,
 *   !proto.api.RouteVariantInfo>}
 */
const methodInfo_Geofence_GetRouteVariantInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.RouteVariantInfo,
  /**
   * @param {!proto.api.RouteVariantInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RouteVariantInfo.deserializeBinary
);


/**
 * @param {!proto.api.RouteVariantInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.RouteVariantInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.RouteVariantInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GeofenceClient.prototype.getRouteVariantInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Geofence/GetRouteVariantInfo',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetRouteVariantInfo,
      callback);
};


/**
 * @param {!proto.api.RouteVariantInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.RouteVariantInfo>}
 *     Promise that resolves to the response
 */
proto.api.GeofencePromiseClient.prototype.getRouteVariantInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Geofence/GetRouteVariantInfo',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetRouteVariantInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RouteVariantTracksRequest,
 *   !proto.api.RouteVariantTracks>}
 */
const methodDescriptor_Geofence_GetRouteVariantTracks = new grpc.web.MethodDescriptor(
  '/api.Geofence/GetRouteVariantTracks',
  grpc.web.MethodType.UNARY,
  proto.api.RouteVariantTracksRequest,
  proto.api.RouteVariantTracks,
  /**
   * @param {!proto.api.RouteVariantTracksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RouteVariantTracks.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.RouteVariantTracksRequest,
 *   !proto.api.RouteVariantTracks>}
 */
const methodInfo_Geofence_GetRouteVariantTracks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.RouteVariantTracks,
  /**
   * @param {!proto.api.RouteVariantTracksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RouteVariantTracks.deserializeBinary
);


/**
 * @param {!proto.api.RouteVariantTracksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.RouteVariantTracks)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.RouteVariantTracks>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GeofenceClient.prototype.getRouteVariantTracks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Geofence/GetRouteVariantTracks',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetRouteVariantTracks,
      callback);
};


/**
 * @param {!proto.api.RouteVariantTracksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.RouteVariantTracks>}
 *     Promise that resolves to the response
 */
proto.api.GeofencePromiseClient.prototype.getRouteVariantTracks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Geofence/GetRouteVariantTracks',
      request,
      metadata || {},
      methodDescriptor_Geofence_GetRouteVariantTracks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.RecalculateDeviceTracksRequest,
 *   !proto.api.RecalculateDeviceTracksResponse>}
 */
const methodDescriptor_Geofence_RecalculateDeviceTracks = new grpc.web.MethodDescriptor(
  '/api.Geofence/RecalculateDeviceTracks',
  grpc.web.MethodType.UNARY,
  proto.api.RecalculateDeviceTracksRequest,
  proto.api.RecalculateDeviceTracksResponse,
  /**
   * @param {!proto.api.RecalculateDeviceTracksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RecalculateDeviceTracksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.RecalculateDeviceTracksRequest,
 *   !proto.api.RecalculateDeviceTracksResponse>}
 */
const methodInfo_Geofence_RecalculateDeviceTracks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.RecalculateDeviceTracksResponse,
  /**
   * @param {!proto.api.RecalculateDeviceTracksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.RecalculateDeviceTracksResponse.deserializeBinary
);


/**
 * @param {!proto.api.RecalculateDeviceTracksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.RecalculateDeviceTracksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.RecalculateDeviceTracksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.GeofenceClient.prototype.recalculateDeviceTracks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Geofence/RecalculateDeviceTracks',
      request,
      metadata || {},
      methodDescriptor_Geofence_RecalculateDeviceTracks,
      callback);
};


/**
 * @param {!proto.api.RecalculateDeviceTracksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.RecalculateDeviceTracksResponse>}
 *     Promise that resolves to the response
 */
proto.api.GeofencePromiseClient.prototype.recalculateDeviceTracks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Geofence/RecalculateDeviceTracks',
      request,
      metadata || {},
      methodDescriptor_Geofence_RecalculateDeviceTracks);
};


module.exports = proto.api;

