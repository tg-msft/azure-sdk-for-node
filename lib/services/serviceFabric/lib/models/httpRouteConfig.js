/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Describes the hostname properties for http routing.
 *
 */
class HttpRouteConfig {
  /**
   * Create a HttpRouteConfig.
   * @property {string} name http route name.
   * @property {object} match Describes a rule for http route matching.
   * @property {object} [match.path] Path to match for routing.
   * @property {string} [match.path.value] Uri path to match for request.
   * @property {string} [match.path.rewrite] replacement string for matched
   * part of the Uri.
   * @property {array} [match.headers] headers and their values to match in
   * request.
   * @property {object} destination Describes destination endpoint for routing
   * traffic.
   * @property {string} [destination.applicationName] Name of the service
   * fabric Mesh application.
   * @property {string} [destination.serviceName] service that contains the
   * endpoint.
   * @property {string} [destination.endpointName] name of the endpoint in the
   * service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of HttpRouteConfig
   *
   * @returns {object} metadata of HttpRouteConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HttpRouteConfig',
      type: {
        name: 'Composite',
        className: 'HttpRouteConfig',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          match: {
            required: true,
            serializedName: 'match',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'HttpRouteMatchRule'
            }
          },
          destination: {
            required: true,
            serializedName: 'destination',
            type: {
              name: 'Composite',
              className: 'GatewayDestination'
            }
          }
        }
      }
    };
  }
}

module.exports = HttpRouteConfig;