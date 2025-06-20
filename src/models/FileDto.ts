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
 * @interface FileDto
 */
export interface FileDto {
    /**
     * 
     * @type {number}
     * @memberof FileDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof FileDto
     */
    url?: string;
}

/**
 * Check if a given object implements the FileDto interface.
 */
export function instanceOfFileDto(value: object): value is FileDto {
    return true;
}

export function FileDtoFromJSON(json: any): FileDto {
    return FileDtoFromJSONTyped(json, false);
}

export function FileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function FileDtoToJSON(json: any): FileDto {
    return FileDtoToJSONTyped(json, false);
}

export function FileDtoToJSONTyped(value?: FileDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'url': value['url'],
    };
}

