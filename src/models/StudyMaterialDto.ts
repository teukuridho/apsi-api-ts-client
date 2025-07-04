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
import type { TeacherDto } from './TeacherDto';
import {
    TeacherDtoFromJSON,
    TeacherDtoFromJSONTyped,
    TeacherDtoToJSON,
    TeacherDtoToJSONTyped,
} from './TeacherDto';
import type { SubjectDto } from './SubjectDto';
import {
    SubjectDtoFromJSON,
    SubjectDtoFromJSONTyped,
    SubjectDtoToJSON,
    SubjectDtoToJSONTyped,
} from './SubjectDto';
import type { BookDto } from './BookDto';
import {
    BookDtoFromJSON,
    BookDtoFromJSONTyped,
    BookDtoToJSON,
    BookDtoToJSONTyped,
} from './BookDto';

/**
 * 
 * @export
 * @interface StudyMaterialDto
 */
export interface StudyMaterialDto {
    /**
     * 
     * @type {number}
     * @memberof StudyMaterialDto
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StudyMaterialDto
     */
    title: string;
    /**
     * 
     * @type {TeacherDto}
     * @memberof StudyMaterialDto
     */
    teacher: TeacherDto;
    /**
     * 
     * @type {SubjectDto}
     * @memberof StudyMaterialDto
     */
    subject: SubjectDto | null;
    /**
     * 
     * @type {Set<BookDto>}
     * @memberof StudyMaterialDto
     */
    books: Set<BookDto>;
    /**
     * 
     * @type {Set<string>}
     * @memberof StudyMaterialDto
     */
    files: Set<string>;
}

/**
 * Check if a given object implements the StudyMaterialDto interface.
 */
export function instanceOfStudyMaterialDto(value: object): value is StudyMaterialDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('teacher' in value) || value['teacher'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    if (!('books' in value) || value['books'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    return true;
}

export function StudyMaterialDtoFromJSON(json: any): StudyMaterialDto {
    return StudyMaterialDtoFromJSONTyped(json, false);
}

export function StudyMaterialDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyMaterialDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'teacher': TeacherDtoFromJSON(json['teacher']),
        'subject': SubjectDtoFromJSON(json['subject']),
        'books': (new Set((json['books'] as Array<any>).map(BookDtoFromJSON))),
        'files': new Set(json['files']),
    };
}

export function StudyMaterialDtoToJSON(json: any): StudyMaterialDto {
    return StudyMaterialDtoToJSONTyped(json, false);
}

export function StudyMaterialDtoToJSONTyped(value?: StudyMaterialDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'title': value['title'],
        'teacher': TeacherDtoToJSON(value['teacher']),
        'subject': SubjectDtoToJSON(value['subject']),
        'books': (Array.from(value['books'] as Set<any>).map(BookDtoToJSON)),
        'files': Array.from(value['files'] as Set<any>),
    };
}

