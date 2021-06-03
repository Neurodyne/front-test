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


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.api = require('./Api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.APIClient =
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
proto.api.APIPromiseClient =
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
 *   !proto.api.GetVehiclesRequest,
 *   !proto.api.GetVehiclesResponse>}
 */
const methodDescriptor_API_GetVehicles = new grpc.web.MethodDescriptor(
  '/api.API/GetVehicles',
  grpc.web.MethodType.UNARY,
  proto.api.GetVehiclesRequest,
  proto.api.GetVehiclesResponse,
  /**
   * @param {!proto.api.GetVehiclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetVehiclesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetVehiclesRequest,
 *   !proto.api.GetVehiclesResponse>}
 */
const methodInfo_API_GetVehicles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetVehiclesResponse,
  /**
   * @param {!proto.api.GetVehiclesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetVehiclesResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetVehiclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetVehiclesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetVehiclesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getVehicles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetVehicles',
      request,
      metadata || {},
      methodDescriptor_API_GetVehicles,
      callback);
};


/**
 * @param {!proto.api.GetVehiclesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetVehiclesResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getVehicles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetVehicles',
      request,
      metadata || {},
      methodDescriptor_API_GetVehicles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetDevicesRequest,
 *   !proto.api.GetDevicesResponse>}
 */
const methodDescriptor_API_GetDevices = new grpc.web.MethodDescriptor(
  '/api.API/GetDevices',
  grpc.web.MethodType.UNARY,
  proto.api.GetDevicesRequest,
  proto.api.GetDevicesResponse,
  /**
   * @param {!proto.api.GetDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetDevicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.GetDevicesRequest,
 *   !proto.api.GetDevicesResponse>}
 */
const methodInfo_API_GetDevices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.GetDevicesResponse,
  /**
   * @param {!proto.api.GetDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.GetDevicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetDevicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getDevices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetDevices',
      request,
      metadata || {},
      methodDescriptor_API_GetDevices,
      callback);
};


/**
 * @param {!proto.api.GetDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetDevicesResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getDevices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetDevices',
      request,
      metadata || {},
      methodDescriptor_API_GetDevices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsDataRangeRequest,
 *   !proto.api.ObjectsDataRangeResponse>}
 */
const methodDescriptor_API_GetObjectsDataRange = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsDataRange',
  grpc.web.MethodType.UNARY,
  proto.api.ObjectsDataRangeRequest,
  proto.api.ObjectsDataRangeResponse,
  /**
   * @param {!proto.api.ObjectsDataRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsDataRangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsDataRangeRequest,
 *   !proto.api.ObjectsDataRangeResponse>}
 */
const methodInfo_API_GetObjectsDataRange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ObjectsDataRangeResponse,
  /**
   * @param {!proto.api.ObjectsDataRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsDataRangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsDataRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ObjectsDataRangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectsDataRangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsDataRange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetObjectsDataRange',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataRange,
      callback);
};


/**
 * @param {!proto.api.ObjectsDataRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ObjectsDataRangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getObjectsDataRange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetObjectsDataRange',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsDataRangeRequest,
 *   !proto.api.ObjectData>}
 */
const methodDescriptor_API_GetObjectsDataRangeAsStream = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsDataRangeAsStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.ObjectsDataRangeRequest,
  proto.api.ObjectData,
  /**
   * @param {!proto.api.ObjectsDataRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsDataRangeRequest,
 *   !proto.api.ObjectData>}
 */
const methodInfo_API_GetObjectsDataRangeAsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ObjectData,
  /**
   * @param {!proto.api.ObjectsDataRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectData.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsDataRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectData>}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsDataRangeAsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsDataRangeAsStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataRangeAsStream);
};


/**
 * @param {!proto.api.ObjectsDataRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectData>}
 *     The XHR Node Readable Stream
 */
proto.api.APIPromiseClient.prototype.getObjectsDataRangeAsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsDataRangeAsStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataRangeAsStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsDataStreamRequest,
 *   !proto.api.DataPoint>}
 */
const methodDescriptor_API_GetObjectsDataStream = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsDataStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.ObjectsDataStreamRequest,
  proto.api.DataPoint,
  /**
   * @param {!proto.api.ObjectsDataStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DataPoint.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsDataStreamRequest,
 *   !proto.api.DataPoint>}
 */
const methodInfo_API_GetObjectsDataStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.DataPoint,
  /**
   * @param {!proto.api.ObjectsDataStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DataPoint.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsDataStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.DataPoint>}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsDataStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsDataStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataStream);
};


/**
 * @param {!proto.api.ObjectsDataStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.DataPoint>}
 *     The XHR Node Readable Stream
 */
proto.api.APIPromiseClient.prototype.getObjectsDataStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsDataStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsDataStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsStateRequest,
 *   !proto.api.ObjectsStateResponse>}
 */
const methodDescriptor_API_GetObjectsState = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsState',
  grpc.web.MethodType.UNARY,
  proto.api.ObjectsStateRequest,
  proto.api.ObjectsStateResponse,
  /**
   * @param {!proto.api.ObjectsStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsStateRequest,
 *   !proto.api.ObjectsStateResponse>}
 */
const methodInfo_API_GetObjectsState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ObjectsStateResponse,
  /**
   * @param {!proto.api.ObjectsStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsStateResponse.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ObjectsStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectsStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetObjectsState',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsState,
      callback);
};


/**
 * @param {!proto.api.ObjectsStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ObjectsStateResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getObjectsState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetObjectsState',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsEventsRequest,
 *   !proto.api.ObjectsEventsRangeResponse>}
 */
const methodDescriptor_API_GetObjectsEventsRange = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsEventsRange',
  grpc.web.MethodType.UNARY,
  proto.api.ObjectsEventsRequest,
  proto.api.ObjectsEventsRangeResponse,
  /**
   * @param {!proto.api.ObjectsEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsEventsRangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsEventsRequest,
 *   !proto.api.ObjectsEventsRangeResponse>}
 */
const methodInfo_API_GetObjectsEventsRange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ObjectsEventsRangeResponse,
  /**
   * @param {!proto.api.ObjectsEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsEventsRangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ObjectsEventsRangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectsEventsRangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsEventsRange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetObjectsEventsRange',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsEventsRange,
      callback);
};


/**
 * @param {!proto.api.ObjectsEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ObjectsEventsRangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getObjectsEventsRange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetObjectsEventsRange',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsEventsRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsEventsRequest,
 *   !proto.api.Event>}
 */
const methodDescriptor_API_GetObjectsEventsStream = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsEventsStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.ObjectsEventsRequest,
  proto.api.Event,
  /**
   * @param {!proto.api.ObjectsEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Event.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsEventsRequest,
 *   !proto.api.Event>}
 */
const methodInfo_API_GetObjectsEventsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.Event,
  /**
   * @param {!proto.api.ObjectsEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.Event.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsEventsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Event>}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsEventsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsEventsStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsEventsStream);
};


/**
 * @param {!proto.api.ObjectsEventsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.Event>}
 *     The XHR Node Readable Stream
 */
proto.api.APIPromiseClient.prototype.getObjectsEventsStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.API/GetObjectsEventsStream',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsEventsStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ObjectsInfoRequest,
 *   !proto.api.ObjectsInfoResponse>}
 */
const methodDescriptor_API_GetObjectsInfo = new grpc.web.MethodDescriptor(
  '/api.API/GetObjectsInfo',
  grpc.web.MethodType.UNARY,
  proto.api.ObjectsInfoRequest,
  proto.api.ObjectsInfoResponse,
  /**
   * @param {!proto.api.ObjectsInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ObjectsInfoRequest,
 *   !proto.api.ObjectsInfoResponse>}
 */
const methodInfo_API_GetObjectsInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ObjectsInfoResponse,
  /**
   * @param {!proto.api.ObjectsInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ObjectsInfoResponse.deserializeBinary
);


/**
 * @param {!proto.api.ObjectsInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ObjectsInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ObjectsInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getObjectsInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetObjectsInfo',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsInfo,
      callback);
};


/**
 * @param {!proto.api.ObjectsInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ObjectsInfoResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getObjectsInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetObjectsInfo',
      request,
      metadata || {},
      methodDescriptor_API_GetObjectsInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ModelUpdatesRequest,
 *   !proto.api.ModelUpdatesResponse>}
 */
const methodDescriptor_API_GetModelUpdates = new grpc.web.MethodDescriptor(
  '/api.API/GetModelUpdates',
  grpc.web.MethodType.UNARY,
  proto.api.ModelUpdatesRequest,
  proto.api.ModelUpdatesResponse,
  /**
   * @param {!proto.api.ModelUpdatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ModelUpdatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ModelUpdatesRequest,
 *   !proto.api.ModelUpdatesResponse>}
 */
const methodInfo_API_GetModelUpdates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ModelUpdatesResponse,
  /**
   * @param {!proto.api.ModelUpdatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ModelUpdatesResponse.deserializeBinary
);


/**
 * @param {!proto.api.ModelUpdatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ModelUpdatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ModelUpdatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getModelUpdates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetModelUpdates',
      request,
      metadata || {},
      methodDescriptor_API_GetModelUpdates,
      callback);
};


/**
 * @param {!proto.api.ModelUpdatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ModelUpdatesResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getModelUpdates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetModelUpdates',
      request,
      metadata || {},
      methodDescriptor_API_GetModelUpdates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ClosestPointsRequest,
 *   !proto.api.ClosestPointsResponse>}
 */
const methodDescriptor_API_GetClosestPoints = new grpc.web.MethodDescriptor(
  '/api.API/GetClosestPoints',
  grpc.web.MethodType.UNARY,
  proto.api.ClosestPointsRequest,
  proto.api.ClosestPointsResponse,
  /**
   * @param {!proto.api.ClosestPointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ClosestPointsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ClosestPointsRequest,
 *   !proto.api.ClosestPointsResponse>}
 */
const methodInfo_API_GetClosestPoints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ClosestPointsResponse,
  /**
   * @param {!proto.api.ClosestPointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ClosestPointsResponse.deserializeBinary
);


/**
 * @param {!proto.api.ClosestPointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ClosestPointsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ClosestPointsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.APIClient.prototype.getClosestPoints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.API/GetClosestPoints',
      request,
      metadata || {},
      methodDescriptor_API_GetClosestPoints,
      callback);
};


/**
 * @param {!proto.api.ClosestPointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ClosestPointsResponse>}
 *     Promise that resolves to the response
 */
proto.api.APIPromiseClient.prototype.getClosestPoints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.API/GetClosestPoints',
      request,
      metadata || {},
      methodDescriptor_API_GetClosestPoints);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.TagsDictionaryAPIClient =
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
proto.api.TagsDictionaryAPIPromiseClient =
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
 *   !proto.api.ResolveTagRequest,
 *   !proto.api.ResolveTagResponse>}
 */
const methodDescriptor_TagsDictionaryAPI_ResolveTag = new grpc.web.MethodDescriptor(
  '/api.TagsDictionaryAPI/ResolveTag',
  grpc.web.MethodType.UNARY,
  proto.api.ResolveTagRequest,
  proto.api.ResolveTagResponse,
  /**
   * @param {!proto.api.ResolveTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ResolveTagResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ResolveTagRequest,
 *   !proto.api.ResolveTagResponse>}
 */
const methodInfo_TagsDictionaryAPI_ResolveTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ResolveTagResponse,
  /**
   * @param {!proto.api.ResolveTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ResolveTagResponse.deserializeBinary
);


/**
 * @param {!proto.api.ResolveTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ResolveTagResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ResolveTagResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.TagsDictionaryAPIClient.prototype.resolveTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.TagsDictionaryAPI/ResolveTag',
      request,
      metadata || {},
      methodDescriptor_TagsDictionaryAPI_ResolveTag,
      callback);
};


/**
 * @param {!proto.api.ResolveTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ResolveTagResponse>}
 *     Promise that resolves to the response
 */
proto.api.TagsDictionaryAPIPromiseClient.prototype.resolveTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.TagsDictionaryAPI/ResolveTag',
      request,
      metadata || {},
      methodDescriptor_TagsDictionaryAPI_ResolveTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ResolveAllTagsMapRequest,
 *   !proto.api.ResolveAllTagsMapResponse>}
 */
const methodDescriptor_TagsDictionaryAPI_ResolveAllTagsMap = new grpc.web.MethodDescriptor(
  '/api.TagsDictionaryAPI/ResolveAllTagsMap',
  grpc.web.MethodType.UNARY,
  proto.api.ResolveAllTagsMapRequest,
  proto.api.ResolveAllTagsMapResponse,
  /**
   * @param {!proto.api.ResolveAllTagsMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ResolveAllTagsMapResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.ResolveAllTagsMapRequest,
 *   !proto.api.ResolveAllTagsMapResponse>}
 */
const methodInfo_TagsDictionaryAPI_ResolveAllTagsMap = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.ResolveAllTagsMapResponse,
  /**
   * @param {!proto.api.ResolveAllTagsMapRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ResolveAllTagsMapResponse.deserializeBinary
);


/**
 * @param {!proto.api.ResolveAllTagsMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.ResolveAllTagsMapResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ResolveAllTagsMapResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.TagsDictionaryAPIClient.prototype.resolveAllTagsMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.TagsDictionaryAPI/ResolveAllTagsMap',
      request,
      metadata || {},
      methodDescriptor_TagsDictionaryAPI_ResolveAllTagsMap,
      callback);
};


/**
 * @param {!proto.api.ResolveAllTagsMapRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ResolveAllTagsMapResponse>}
 *     Promise that resolves to the response
 */
proto.api.TagsDictionaryAPIPromiseClient.prototype.resolveAllTagsMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.TagsDictionaryAPI/ResolveAllTagsMap',
      request,
      metadata || {},
      methodDescriptor_TagsDictionaryAPI_ResolveAllTagsMap);
};


module.exports = proto.api;

