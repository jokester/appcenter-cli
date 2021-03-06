/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a CrashGroupModels.
 */
class CrashGroupModels {
  /**
   * Create a CrashGroupModels.
   * @member {number} [crashCount]
   * @member {array} [modelsProperty]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashGroupModels
   *
   * @returns {object} metadata of CrashGroupModels
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashGroupModels',
      type: {
        name: 'Composite',
        className: 'CrashGroupModels',
        modelProperties: {
          crashCount: {
            required: false,
            serializedName: 'crash_count',
            type: {
              name: 'Number'
            }
          },
          modelsProperty: {
            required: false,
            serializedName: 'models',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CrashGroupModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'CrashGroupModel'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CrashGroupModels;
