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
 * SKU of a public IP prefix
 *
 */
class PublicIPPrefixSku {
  /**
   * Create a PublicIPPrefixSku.
   * @member {string} [name] Name of a public IP prefix SKU. Possible values
   * include: 'Standard'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PublicIPPrefixSku
   *
   * @returns {object} metadata of PublicIPPrefixSku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublicIPPrefixSku',
      type: {
        name: 'Composite',
        className: 'PublicIPPrefixSku',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PublicIPPrefixSku;