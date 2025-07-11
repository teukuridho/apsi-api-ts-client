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
import type { BookCategoryDto } from './BookCategoryDto';
import {
    BookCategoryDtoFromJSON,
    BookCategoryDtoFromJSONTyped,
    BookCategoryDtoToJSON,
    BookCategoryDtoToJSONTyped,
} from './BookCategoryDto';

/**
 * 
 * @export
 * @interface ApiResponseBookCategoryDto
 */
export interface ApiResponseBookCategoryDto {
    /**
     * 
     * @type {string}
     * @memberof ApiResponseBookCategoryDto
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiResponseBookCategoryDto
     */
    error?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ApiResponseBookCategoryDto
     */
    statusCode: number;
    /**
     * 
     * @type {BookCategoryDto}
     * @memberof ApiResponseBookCategoryDto
     */
    data?: BookCategoryDto;
}

/**
 * Check if a given object implements the ApiResponseBookCategoryDto interface.
 */
export function instanceOfApiResponseBookCategoryDto(value: object): value is ApiResponseBookCategoryDto {
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ApiResponseBookCategoryDtoFromJSON(json: any): ApiResponseBookCategoryDto {
    return ApiResponseBookCategoryDtoFromJSONTyped(json, false);
}

export function ApiResponseBookCategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResponseBookCategoryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'error': json['error'] == null ? undefined : json['error'],
        'statusCode': json['statusCode'],
        'data': json['data'] == null ? undefined : BookCategoryDtoFromJSON(json['data']),
    };
}

export function ApiResponseBookCategoryDtoToJSON(json: any): ApiResponseBookCategoryDto {
    return ApiResponseBookCategoryDtoToJSONTyped(json, false);
}

export function ApiResponseBookCategoryDtoToJSONTyped(value?: ApiResponseBookCategoryDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'error': value['error'],
        'statusCode': value['statusCode'],
        'data': BookCategoryDtoToJSON(value['data']),
    };
}

