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
 * @interface UpdateQuestionRequest
 */
export interface UpdateQuestionRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateQuestionRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuestionRequest
     */
    type?: UpdateQuestionRequestTypeEnum | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuestionRequest
     */
    explanation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateQuestionRequest
     */
    freeResponseCorrectAnswer?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateQuestionRequest
     */
    correctPoints?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateQuestionRequest
     */
    incorrectPoints?: number | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateQuestionRequest
     */
    multipleChoiceCorrectOptionId?: number | null;
}


/**
 * @export
 */
export const UpdateQuestionRequestTypeEnum = {
    FreeResponse: 'FREE_RESPONSE',
    MultipleChoice: 'MULTIPLE_CHOICE'
} as const;
export type UpdateQuestionRequestTypeEnum = typeof UpdateQuestionRequestTypeEnum[keyof typeof UpdateQuestionRequestTypeEnum];


/**
 * Check if a given object implements the UpdateQuestionRequest interface.
 */
export function instanceOfUpdateQuestionRequest(value: object): value is UpdateQuestionRequest {
    return true;
}

export function UpdateQuestionRequestFromJSON(json: any): UpdateQuestionRequest {
    return UpdateQuestionRequestFromJSONTyped(json, false);
}

export function UpdateQuestionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateQuestionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : json['type'],
        'explanation': json['explanation'] == null ? undefined : json['explanation'],
        'freeResponseCorrectAnswer': json['freeResponseCorrectAnswer'] == null ? undefined : json['freeResponseCorrectAnswer'],
        'correctPoints': json['correctPoints'] == null ? undefined : json['correctPoints'],
        'incorrectPoints': json['incorrectPoints'] == null ? undefined : json['incorrectPoints'],
        'multipleChoiceCorrectOptionId': json['multipleChoiceCorrectOptionId'] == null ? undefined : json['multipleChoiceCorrectOptionId'],
    };
}

export function UpdateQuestionRequestToJSON(json: any): UpdateQuestionRequest {
    return UpdateQuestionRequestToJSONTyped(json, false);
}

export function UpdateQuestionRequestToJSONTyped(value?: UpdateQuestionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'type': value['type'],
        'explanation': value['explanation'],
        'freeResponseCorrectAnswer': value['freeResponseCorrectAnswer'],
        'correctPoints': value['correctPoints'],
        'incorrectPoints': value['incorrectPoints'],
        'multipleChoiceCorrectOptionId': value['multipleChoiceCorrectOptionId'],
    };
}

