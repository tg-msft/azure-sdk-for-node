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
 * A list of the managed Server's security alert policies.
 */
class ManagedServerSecurityAlertPolicyListResult extends Array {
  /**
   * Create a ManagedServerSecurityAlertPolicyListResult.
   * @property {string} [nextLink] Link to retrieve next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagedServerSecurityAlertPolicyListResult
   *
   * @returns {object} metadata of ManagedServerSecurityAlertPolicyListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedServerSecurityAlertPolicyListResult',
      type: {
        name: 'Composite',
        className: 'ManagedServerSecurityAlertPolicyListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ManagedServerSecurityAlertPolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ManagedServerSecurityAlertPolicy'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagedServerSecurityAlertPolicyListResult;