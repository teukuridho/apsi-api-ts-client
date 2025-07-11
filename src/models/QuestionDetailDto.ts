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
import type { MultipleChoiceOptionDto } from './MultipleChoiceOptionDto';
import {
    MultipleChoiceOptionDtoFromJSON,
    MultipleChoiceOptionDtoFromJSONTyped,
    MultipleChoiceOptionDtoToJSON,
    MultipleChoiceOptionDtoToJSONTyped,
} from './MultipleChoiceOptionDto';

/**
 * 
 * @export
 * @interface QuestionDetailDto
 */
export interface QuestionDetailDto {
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailDto
     */
    type?: QuestionDetailDtoTypeEnum;
    /**
     * 
     * @type {Array<MultipleChoiceOptionDto>}
     * @memberof QuestionDetailDto
     */
    multipleChoiceOptions?: Array<MultipleChoiceOptionDto>;
    /**
     * 
     * @type {MultipleChoiceOptionDto}
     * @memberof QuestionDetailDto
     */
    multipleChoiceCorrectOption?: MultipleChoiceOptionDto;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailDto
     */
    freeResponseCorrectAnswer?: string;
    /**
     * 
     * @type {string}
     * @memberof QuestionDetailDto
     */
    explanation?: string;
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailDto
     */
    correctPoints?: number;
    /**
     * 
     * @type {number}
     * @memberof QuestionDetailDto
     */
    incorrectPoints?: number;
}


/**
 * @export
 */
export const QuestionDetailDtoTypeEnum = {
    FreeResponse: 'FREE_RESPONSE',
    MultipleChoice: 'MULTIPLE_CHOICE'
} as const;
export type QuestionDetailDtoTypeEnum = typeof QuestionDetailDtoTypeEnum[keyof typeof QuestionDetailDtoTypeEnum];


/**
 * Check if a given object implements the QuestionDetailDto interface.
 */
export function instanceOfQuestionDetailDto(value: object): value is QuestionDetailDto {
    return true;
}

export function QuestionDetailDtoFromJSON(json: any): QuestionDetailDto {
    return QuestionDetailDtoFromJSONTyped(json, false);
}

export function QuestionDetailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionDetailDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : json['type'],
        'multipleChoiceOptions': json['multipleChoiceOptions'] == null ? undefined : ((json['multipleChoiceOptions'] as Array<any>).map(MultipleChoiceOptionDtoFromJSON)),
        'multipleChoiceCorrectOption': json['multipleChoiceCorrectOption'] == null ? undefined : MultipleChoiceOptionDtoFromJSON(json['multipleChoiceCorrectOption']),
        'freeResponseCorrectAnswer': json['freeResponseCorrectAnswer'] == null ? undefined : json['freeResponseCorrectAnswer'],
        'explanation': json['explanation'] == null ? undefined : json['explanation'],
        'correctPoints': json['correctPoints'] == null ? undefined : json['correctPoints'],
        'incorrectPoints': json['incorrectPoints'] == null ? undefined : json['incorrectPoints'],
    };
}

export function QuestionDetailDtoToJSON(json: any): QuestionDetailDto {
    return QuestionDetailDtoToJSONTyped(json, false);
}

export function QuestionDetailDtoToJSONTyped(value?: QuestionDetailDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'description': value['description'],
        'type': value['type'],
        'multipleChoiceOptions': value['multipleChoiceOptions'] == null ? undefined : ((value['multipleChoiceOptions'] as Array<any>).map(MultipleChoiceOptionDtoToJSON)),
        'multipleChoiceCorrectOption': MultipleChoiceOptionDtoToJSON(value['multipleChoiceCorrectOption']),
        'freeResponseCorrectAnswer': value['freeResponseCorrectAnswer'],
        'explanation': value['explanation'],
        'correctPoints': value['correctPoints'],
        'incorrectPoints': value['incorrectPoints'],
    };
}

