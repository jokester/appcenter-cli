/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Stacktrace class.
 * @constructor
 * a stacktrace in a processed and prettyfied way
 *
 * @member {string} [title]
 * 
 * @member {string} [reason]
 * 
 * @member {array} [threads]
 * 
 * @member {object} [exception]
 * 
 * @member {string} [exception.reason] Reason of the exception
 * 
 * @member {string} [exception.type] Type of the exception
 * (NSSomethingException, NullPointerException)
 * 
 * @member {array} [exception.frames] frames of the excetpion
 * 
 * @member {boolean} [exception.relevant] relevant exception (crashed)
 * 
 * @member {array} [exception.innerExceptions]
 * 
 * @member {string} [exception.platform] SDK/Platform this thread is beeing
 * generated from. Possible values include: 'ios', 'android', 'xamarin',
 * 'react-native', 'other'
 * 
 */
function Stacktrace() {
}

/**
 * Defines the metadata of Stacktrace
 *
 * @returns {object} metadata of Stacktrace
 *
 */
Stacktrace.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Stacktrace',
    type: {
      name: 'Composite',
      className: 'Stacktrace',
      modelProperties: {
        title: {
          required: false,
          serializedName: 'title',
          type: {
            name: 'String'
          }
        },
        reason: {
          required: false,
          serializedName: 'reason',
          type: {
            name: 'String'
          }
        },
        threads: {
          required: false,
          serializedName: 'threads',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ThreadElementType',
                type: {
                  name: 'Composite',
                  className: 'Thread'
                }
            }
          }
        },
        exception: {
          required: false,
          serializedName: 'exception',
          type: {
            name: 'Composite',
            className: 'Exception'
          }
        }
      }
    }
  };
};

module.exports = Stacktrace;
