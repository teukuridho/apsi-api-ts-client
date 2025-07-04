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
import type { SubjectDto } from './SubjectDto';
import {
    SubjectDtoFromJSON,
    SubjectDtoFromJSONTyped,
    SubjectDtoToJSON,
    SubjectDtoToJSONTyped,
} from './SubjectDto';

/**
 * 
 * @export
 * @interface PageInfoResponseSubjectDto
 */
export interface PageInfoResponseSubjectDto {
    /**
     * 
     * @type {number}
     * @memberof PageInfoResponseSubjectDto
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfoResponseSubjectDto
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfoResponseSubjectDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfoResponseSubjectDto
     */
    totalPages?: number;
    /**
     * 
     * @type {Array<SubjectDto>}
     * @memberof PageInfoResponseSubjectDto
     */
    content?: Array<SubjectDto>;
}

/**
 * Check if a given object implements the PageInfoResponseSubjectDto interface.
 */
export function instanceOfPageInfoResponseSubjectDto(value: object): value is PageInfoResponseSubjectDto {
    return true;
}

export function PageInfoResponseSubjectDtoFromJSON(json: any): PageInfoResponseSubjectDto {
    return PageInfoResponseSubjectDtoFromJSONTyped(json, false);
}

export function PageInfoResponseSubjectDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInfoResponseSubjectDto {
    if (json == null) {
        return json;
    }
    return {
        
        'size': json['size'] == null ? undefined : json['size'],
        'number': json['number'] == null ? undefined : json['number'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'content': json['content'] == null ? undefined : ((json['content'] as Array<any>).map(SubjectDtoFromJSON)),
    };
}

export function PageInfoResponseSubjectDtoToJSON(json: any): PageInfoResponseSubjectDto {
    return PageInfoResponseSubjectDtoToJSONTyped(json, false);
}

export function PageInfoResponseSubjectDtoToJSONTyped(value?: PageInfoResponseSubjectDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'size': value['size'],
        'number': value['number'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'content': value['content'] == null ? undefined : ((value['content'] as Array<any>).map(SubjectDtoToJSON)),
    };
}

