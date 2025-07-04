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
import type { PageInfoResponseStudentAssessmentItemDto } from './PageInfoResponseStudentAssessmentItemDto';
import {
    PageInfoResponseStudentAssessmentItemDtoFromJSON,
    PageInfoResponseStudentAssessmentItemDtoFromJSONTyped,
    PageInfoResponseStudentAssessmentItemDtoToJSON,
    PageInfoResponseStudentAssessmentItemDtoToJSONTyped,
} from './PageInfoResponseStudentAssessmentItemDto';

/**
 * 
 * @export
 * @interface ApiResponsePageInfoResponseStudentAssessmentItemDto
 */
export interface ApiResponsePageInfoResponseStudentAssessmentItemDto {
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentItemDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentItemDto
     */
    error?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentItemDto
     */
    statusCode: number;
    /**
     * 
     * @type {PageInfoResponseStudentAssessmentItemDto}
     * @memberof ApiResponsePageInfoResponseStudentAssessmentItemDto
     */
    data?: PageInfoResponseStudentAssessmentItemDto | null;
}

/**
 * Check if a given object implements the ApiResponsePageInfoResponseStudentAssessmentItemDto interface.
 */
export function instanceOfApiResponsePageInfoResponseStudentAssessmentItemDto(value: object): value is ApiResponsePageInfoResponseStudentAssessmentItemDto {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ApiResponsePageInfoResponseStudentAssessmentItemDtoFromJSON(json: any): ApiResponsePageInfoResponseStudentAssessmentItemDto {
    return ApiResponsePageInfoResponseStudentAssessmentItemDtoFromJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseStudentAssessmentItemDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResponsePageInfoResponseStudentAssessmentItemDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'error': json['error'] == null ? undefined : json['error'],
        'statusCode': json['statusCode'],
        'data': json['data'] == null ? undefined : PageInfoResponseStudentAssessmentItemDtoFromJSON(json['data']),
    };
}

export function ApiResponsePageInfoResponseStudentAssessmentItemDtoToJSON(json: any): ApiResponsePageInfoResponseStudentAssessmentItemDto {
    return ApiResponsePageInfoResponseStudentAssessmentItemDtoToJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseStudentAssessmentItemDtoToJSONTyped(value?: ApiResponsePageInfoResponseStudentAssessmentItemDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'error': value['error'],
        'statusCode': value['statusCode'],
        'data': PageInfoResponseStudentAssessmentItemDtoToJSON(value['data']),
    };
}

