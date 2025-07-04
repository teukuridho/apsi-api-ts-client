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
 * @interface UpdateStudentAssessmentItemRequest
 */
export interface UpdateStudentAssessmentItemRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateStudentAssessmentItemRequest
     */
    correct?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateStudentAssessmentItemRequest
     */
    teacherNote?: string | null;
}

/**
 * Check if a given object implements the UpdateStudentAssessmentItemRequest interface.
 */
export function instanceOfUpdateStudentAssessmentItemRequest(value: object): value is UpdateStudentAssessmentItemRequest {
    return true;
}

export function UpdateStudentAssessmentItemRequestFromJSON(json: any): UpdateStudentAssessmentItemRequest {
    return UpdateStudentAssessmentItemRequestFromJSONTyped(json, false);
}

export function UpdateStudentAssessmentItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateStudentAssessmentItemRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'correct': json['correct'] == null ? undefined : json['correct'],
        'teacherNote': json['teacherNote'] == null ? undefined : json['teacherNote'],
    };
}

export function UpdateStudentAssessmentItemRequestToJSON(json: any): UpdateStudentAssessmentItemRequest {
    return UpdateStudentAssessmentItemRequestToJSONTyped(json, false);
}

export function UpdateStudentAssessmentItemRequestToJSONTyped(value?: UpdateStudentAssessmentItemRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'correct': value['correct'],
        'teacherNote': value['teacherNote'],
    };
}

