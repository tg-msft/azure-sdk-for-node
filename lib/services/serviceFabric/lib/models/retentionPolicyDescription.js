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
 * Describes the retention policy configured.
 *
 */
class RetentionPolicyDescription {
  /**
   * Create a RetentionPolicyDescription.
   * @property {string} retentionPolicyType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of RetentionPolicyDescription
   *
   * @returns {object} metadata of RetentionPolicyDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RetentionPolicyDescription',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'RetentionPolicyType',
          clientName: 'retentionPolicyType'
        },
        uberParent: 'RetentionPolicyDescription',
        className: 'RetentionPolicyDescription',
        modelProperties: {
          retentionPolicyType: {
            required: true,
            serializedName: 'RetentionPolicyType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RetentionPolicyDescription;