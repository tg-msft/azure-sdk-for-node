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
 * The parameters for updating a machine learning team account.
 *
 */
class AccountUpdateParameters {
  /**
   * Create a AccountUpdateParameters.
   * @member {object} [tags] The resource tags for the machine learning team
   * account.
   * @member {string} [description] The description of this workspace.
   * @member {string} [friendlyName] The friendly name for this workspace. This
   * will be the workspace name in the arm id when the workspace object gets
   * created
   * @member {string} [seats] The no of users/seats who can access this team
   * account. This property defines the charge on the team account.
   * @member {string} [storageAccountKey] The key for storage account
   * associated with this team account
   */
  constructor() {
  }

  /**
   * Defines the metadata of AccountUpdateParameters
   *
   * @returns {object} metadata of AccountUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccountUpdateParameters',
      type: {
        name: 'Composite',
        className: 'AccountUpdateParameters',
        modelProperties: {
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
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          seats: {
            required: false,
            serializedName: 'properties.seats',
            type: {
              name: 'String'
            }
          },
          storageAccountKey: {
            required: false,
            serializedName: 'properties.storageAccountKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccountUpdateParameters;