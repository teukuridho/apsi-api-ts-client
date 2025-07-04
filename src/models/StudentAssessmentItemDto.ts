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
 * @interface StudentAssessmentItemDto
 */
export interface StudentAssessmentItemDto {
    /**
     * 
     * @type {boolean}
     * @memberof StudentAssessmentItemDto
     */
    correct?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StudentAssessmentItemDto
     */
    teacherNote?: string;
}

/**
 * Check if a given object implements the StudentAssessmentItemDto interface.
 */
export function instanceOfStudentAssessmentItemDto(value: object): value is StudentAssessmentItemDto {
    return true;
}

export function StudentAssessmentItemDtoFromJSON(json: any): StudentAssessmentItemDto {
    return StudentAssessmentItemDtoFromJSONTyped(json, false);
}

export function StudentAssessmentItemDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentAssessmentItemDto {
    if (json == null) {
        return json;
    }
    return {
        
        'correct': json['correct'] == null ? undefined : json['correct'],
        'teacherNote': json['teacherNote'] == null ? undefined : json['teacherNote'],
    };
}

export function StudentAssessmentItemDtoToJSON(json: any): StudentAssessmentItemDto {
    return StudentAssessmentItemDtoToJSONTyped(json, false);
}

export function StudentAssessmentItemDtoToJSONTyped(value?: StudentAssessmentItemDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'correct': value['correct'],
        'teacherNote': value['teacherNote'],
    };
}

