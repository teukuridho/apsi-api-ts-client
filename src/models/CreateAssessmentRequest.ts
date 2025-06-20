/* tslint:disable */
/* eslint-disable */
/**
 * APSI API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateAssessmentRequest
 */
export interface CreateAssessmentRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateAssessmentRequest
     */
    subjectId: number;
    /**
     * 
     * @type {string}
     * @memberof CreateAssessmentRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAssessmentRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAssessmentRequest
     */
    type: CreateAssessmentRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateAssessmentRequest
     */
    status?: CreateAssessmentRequestStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof CreateAssessmentRequest
     */
    startAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateAssessmentRequest
     */
    endAt: Date;
    /**
     * 
     * @type {number}
     * @memberof CreateAssessmentRequest
     */
    durationMinutes: number;
    /**
     * 
     * @type {number}
     * @memberof CreateAssessmentRequest
     */
    maxAttempts: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateAssessmentRequest
     */
    randomOrder: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateAssessmentRequest
     */
    maxScore: number;
}


/**
 * @export
 */
export const CreateAssessmentRequestTypeEnum = {
    Homework: 'HOMEWORK',
    Quiz: 'QUIZ',
    Uts: 'UTS',
    Uas: 'UAS',
    Remedial: 'REMEDIAL'
} as const;
export type CreateAssessmentRequestTypeEnum = typeof CreateAssessmentRequestTypeEnum[keyof typeof CreateAssessmentRequestTypeEnum];

/**
 * @export
 */
export const CreateAssessmentRequestStatusEnum = {
    Draft: 'DRAFT',
    Published: 'PUBLISHED',
    Archived: 'ARCHIVED'
} as const;
export type CreateAssessmentRequestStatusEnum = typeof CreateAssessmentRequestStatusEnum[keyof typeof CreateAssessmentRequestStatusEnum];


/**
 * Check if a given object implements the CreateAssessmentRequest interface.
 */
export function instanceOfCreateAssessmentRequest(value: object): value is CreateAssessmentRequest {
    if (!('subjectId' in value) || value['subjectId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('startAt' in value) || value['startAt'] === undefined) return false;
    if (!('endAt' in value) || value['endAt'] === undefined) return false;
    if (!('durationMinutes' in value) || value['durationMinutes'] === undefined) return false;
    if (!('maxAttempts' in value) || value['maxAttempts'] === undefined) return false;
    if (!('randomOrder' in value) || value['randomOrder'] === undefined) return false;
    if (!('maxScore' in value) || value['maxScore'] === undefined) return false;
    return true;
}

export function CreateAssessmentRequestFromJSON(json: any): CreateAssessmentRequest {
    return CreateAssessmentRequestFromJSONTyped(json, false);
}

export function CreateAssessmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAssessmentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'subjectId': json['subjectId'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'],
        'status': json['status'] == null ? undefined : json['status'],
        'startAt': (new Date(json['startAt'])),
        'endAt': (new Date(json['endAt'])),
        'durationMinutes': json['durationMinutes'],
        'maxAttempts': json['maxAttempts'],
        'randomOrder': json['randomOrder'],
        'maxScore': json['maxScore'],
    };
}

export function CreateAssessmentRequestToJSON(json: any): CreateAssessmentRequest {
    return CreateAssessmentRequestToJSONTyped(json, false);
}

export function CreateAssessmentRequestToJSONTyped(value?: CreateAssessmentRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subjectId': value['subjectId'],
        'title': value['title'],
        'description': value['description'],
        'type': value['type'],
        'status': value['status'],
        'startAt': ((value['startAt']).toISOString()),
        'endAt': ((value['endAt']).toISOString()),
        'durationMinutes': value['durationMinutes'],
        'maxAttempts': value['maxAttempts'],
        'randomOrder': value['randomOrder'],
        'maxScore': value['maxScore'],
    };
}

