/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the InviteList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 * @param channelSid - The SID of the Channel the new resource belongs to
 */
declare function InviteList(version: V1, serviceSid: string, channelSid: string): InviteListInstance;

interface InviteListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): InviteContext;
  /**
   * create a InviteInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: InviteListInstanceCreateOptions, callback?: (error: Error | null, item: InviteInstance) => any): Promise<InviteInstance>;
  /**
   * Streams InviteInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: InviteInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams InviteInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: InviteListInstanceEachOptions, callback?: (item: InviteInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a invite
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): InviteContext;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: InviteInstance[]) => any): Promise<InviteInstance[]>;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: InviteListInstanceOptions, callback?: (error: Error | null, items: InviteInstance[]) => any): Promise<InviteInstance[]>;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: InviteListInstancePageOptions, callback?: (error: Error | null, items: InvitePage) => any): Promise<InvitePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property identity - The `identity` value that identifies the new resource's User
 * @property roleSid - The Role assigned to the new member
 */
interface InviteListInstanceCreateOptions {
  identity: string;
  roleSid?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface InviteListInstanceEachOptions {
  callback?: (item: InviteInstance, done: (err?: Error) => void) => void;
  done?: Function;
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface InviteListInstanceOptions {
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property identity - The `identity` value of the resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface InviteListInstancePageOptions {
  identity?: string | string[];
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface InvitePayload extends InviteResource, Page.TwilioResponsePayload {
}

interface InviteResource {
  account_sid: string;
  channel_sid: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  identity: string;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface InviteSolution {
  channelSid?: string;
  serviceSid?: string;
}


declare class InviteContext {
  /**
   * Initialize the InviteContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param channelSid - The SID of the Channel the resource to fetch belongs to
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InviteInstance) => any): Promise<InviteInstance>;
  /**
   * remove a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InviteInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class InviteInstance extends SerializableClass {
  /**
   * Initialize the InviteContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param channelSid - The SID of the Channel the new resource belongs to
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: InvitePayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: InviteContext;
  accountSid: string;
  channelSid: string;
  createdBy: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InviteInstance) => any): Promise<InviteInstance>;
  identity: string;
  /**
   * remove a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InviteInstance) => any): Promise<boolean>;
  roleSid: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class InvitePage extends Page<V1, InvitePayload, InviteResource, InviteInstance> {
  /**
   * Initialize the InvitePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: InviteSolution);

  /**
   * Build an instance of InviteInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InvitePayload): InviteInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { InviteContext, InviteInstance, InviteList, InviteListInstance, InviteListInstanceCreateOptions, InviteListInstanceEachOptions, InviteListInstanceOptions, InviteListInstancePageOptions, InvitePage, InvitePayload, InviteResource, InviteSolution }
