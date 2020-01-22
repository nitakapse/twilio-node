/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V2 = require('../V2');

/**
 * Initialize the RegulatoryComplianceList
 *
 * @param version - Version of the resource
 */
declare function RegulatoryComplianceList(version: V2): RegulatoryComplianceListInstance;

interface RegulatoryComplianceListInstance {
  bundles?: object;
  endUserTypes?: object;
  endUsers?: object;
  supportingDocumentTypes?: object;
  supportingDocuments?: object;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface RegulatoryCompliancePayload extends RegulatoryComplianceResource, Page.TwilioResponsePayload {
}

interface RegulatoryComplianceResource {
}

interface RegulatoryComplianceSolution {
}

export { RegulatoryComplianceList, RegulatoryComplianceListInstance, RegulatoryCompliancePayload, RegulatoryComplianceResource, RegulatoryComplianceSolution }