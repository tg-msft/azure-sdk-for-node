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

const models = require('./index');

/**
 * Class representing a JobCollectionDefinition.
 */
class JobCollectionDefinition {
  /**
   * Create a JobCollectionDefinition.
   * @member {string} [id] Gets the job collection resource identifier.
   * @member {string} [type] Gets the job collection resource type.
   * @member {string} [name] Gets or sets the job collection resource name.
   * @member {string} [location] Gets or sets the storage account location.
   * @member {object} [tags] Gets or sets the tags.
   * @member {object} [properties] Gets or sets the job collection properties.
   * @member {object} [properties.sku] Gets or sets the SKU.
   * @member {string} [properties.sku.name] Gets or set the SKU. Possible
   * values include: 'Standard', 'Free', 'P10Premium', 'P20Premium'
   * @member {string} [properties.state] Gets or sets the state. Possible
   * values include: 'Enabled', 'Disabled', 'Suspended', 'Deleted'
   * @member {object} [properties.quota] Gets or sets the job collection quota.
   * @member {number} [properties.quota.maxJobCount] Gets or set the maximum
   * job count.
   * @member {number} [properties.quota.maxJobOccurrence] Gets or sets the
   * maximum job occurrence.
   * @member {object} [properties.quota.maxRecurrence] Gets or set the maximum
   * recurrence.
   * @member {string} [properties.quota.maxRecurrence.frequency] Gets or sets
   * the frequency of recurrence (second, minute, hour, day, week, month).
   * Possible values include: 'Minute', 'Hour', 'Day', 'Week', 'Month'
   * @member {number} [properties.quota.maxRecurrence.interval] Gets or sets
   * the interval between retries.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobCollectionDefinition
   *
   * @returns {object} metadata of JobCollectionDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCollectionDefinition',
      type: {
        name: 'Composite',
        className: 'JobCollectionDefinition',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'JobCollectionProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = JobCollectionDefinition;