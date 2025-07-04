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
import type { PageInfoResponseStudentAssessmentDto } from './PageInfoResponseStudentAssessmentDto';
import {
    PageInfoResponseStudentAssessmentDtoFromJSON,
    PageInfoResponseStudentAssessmentDtoFromJSONTyped,
    PageInfoResponseStudentAssessmentDtoToJSON,
    PageInfoResponseStudentAssessmentDtoToJSONTyped,
} from './PageInfoResponseStudentAssessmentDto';

/**
 * 
 * @export
 * @interface ApiResponsePageInfoResponseStudentAssessmentDto
 */
export interface ApiResponsePageInfoResponseStudentAssessmentDto {
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentDto
     */
    error?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentDto
     */
    statusCode: number;
    /**
     * 
     * @type {PageInfoResponseStudentAssessmentDto}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentDto
     */
    data?: PageInfoResponseStudentAssessmentDto | null;
}

/**
 * Check if a given object implements the ApiResponsePageInfoResponseStudentAssessmentDto interface.
 */
export function instanceOfApiResponsePageInfoResponseStudentAssessmentDto(value: object): value is ApiResponsePageInfoResponseStudentAssessmentDto {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ApiResponsePageInfoResponseStudentAssessmentDtoFromJSON(json: any): ApiResponsePageInfoResponseStudentAssessmentDto {
    return ApiResponsePageInfoResponseStudentAssessmentDtoFromJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseStudentAssessmentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResponsePageInfoResponseStudentAssessmentDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'error': json['error'] == null ? undefined : json['error'],
        'statusCode': json['statusCode'],
        'data': json['data'] == null ? undefined : PageInfoResponseStudentAssessmentDtoFromJSON(json['data']),
    };
}

export function ApiResponsePageInfoResponseStudentAssessmentDtoToJSON(json: any): ApiResponsePageInfoResponseStudentAssessmentDto {
    return ApiResponsePageInfoResponseStudentAssessmentDtoToJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseStudentAssessmentDtoToJSONTyped(value?: ApiResponsePageInfoResponseStudentAssessmentDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'error': value['error'],
        'statusCode': value['statusCode'],
        'data': PageInfoResponseStudentAssessmentDtoToJSON(value['data']),
    };
}

