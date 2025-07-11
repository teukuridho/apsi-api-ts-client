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
import type { PageInfoResponseBookCategoryDto } from './PageInfoResponseBookCategoryDto';
import {
    PageInfoResponseBookCategoryDtoFromJSON,
    PageInfoResponseBookCategoryDtoFromJSONTyped,
    PageInfoResponseBookCategoryDtoToJSON,
    PageInfoResponseBookCategoryDtoToJSONTyped,
} from './PageInfoResponseBookCategoryDto';

/**
 * 
 * @export
 * @interface ApiResponsePageInfoResponseBookCategoryDto
 */
export interface ApiResponsePageInfoResponseBookCategoryDto {
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseBookCategoryDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiResponsePageInfoResponseBookCategoryDto
     */
    error?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiResponsePageInfoResponseBookCategoryDto
     */
    statusCode: number;
    /**
     * 
     * @type {PageInfoResponseBookCategoryDto}
     * @memberof ApiResponsePageInfoResponseBookCategoryDto
     */
    data?: PageInfoResponseBookCategoryDto | null;
}

/**
 * Check if a given object implements the ApiResponsePageInfoResponseBookCategoryDto interface.
 */
export function instanceOfApiResponsePageInfoResponseBookCategoryDto(value: object): value is ApiResponsePageInfoResponseBookCategoryDto {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ApiResponsePageInfoResponseBookCategoryDtoFromJSON(json: any): ApiResponsePageInfoResponseBookCategoryDto {
    return ApiResponsePageInfoResponseBookCategoryDtoFromJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseBookCategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResponsePageInfoResponseBookCategoryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'error': json['error'] == null ? undefined : json['error'],
        'statusCode': json['statusCode'],
        'data': json['data'] == null ? undefined : PageInfoResponseBookCategoryDtoFromJSON(json['data']),
    };
}

export function ApiResponsePageInfoResponseBookCategoryDtoToJSON(json: any): ApiResponsePageInfoResponseBookCategoryDto {
    return ApiResponsePageInfoResponseBookCategoryDtoToJSONTyped(json, false);
}

export function ApiResponsePageInfoResponseBookCategoryDtoToJSONTyped(value?: ApiResponsePageInfoResponseBookCategoryDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'error': value['error'],
        'statusCode': value['statusCode'],
        'data': PageInfoResponseBookCategoryDtoToJSON(value['data']),
    };
}

