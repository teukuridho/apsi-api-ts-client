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
import type { SchoolDto } from './SchoolDto';
import {
    SchoolDtoFromJSON,
    SchoolDtoFromJSONTyped,
    SchoolDtoToJSON,
    SchoolDtoToJSONTyped,
} from './SchoolDto';

/**
 * 
 * @export
 * @interface ScheduleDto
 */
export interface ScheduleDto {
    /**
     * 
     * @type {number}
     * @memberof ScheduleDto
     */
    id: number;
    /**
     * 
     * @type {SchoolDto}
     * @memberof ScheduleDto
     */
    school: SchoolDto;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDto
     */
    classRoomName: string;
    /**
     * 
     * @type {TeacherDto}
     * @memberof ScheduleDto
     */
    teacher: TeacherDto;
    /**
     * 
     * @type {SubjectDto}
     * @memberof ScheduleDto
     */
    subject: SubjectDto | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ScheduleDto
     */
    studentIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDto
     */
    startTime: string;
    /**
     * 
     * @type {string}
     * @memberof ScheduleDto
     */
    endTime: string;
    /**
     * 
     * @type {Date}
     * @memberof ScheduleDto
     */
    date?: Date;
}

/**
 * Check if a given object implements the ScheduleDto interface.
 */
export function instanceOfScheduleDto(value: object): value is ScheduleDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('school' in value) || value['school'] === undefined) return false;
    if (!('classRoomName' in value) || value['classRoomName'] === undefined) return false;
    if (!('teacher' in value) || value['teacher'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    if (!('studentIds' in value) || value['studentIds'] === undefined) return false;
    if (!('startTime' in value) || value['startTime'] === undefined) return false;
    if (!('endTime' in value) || value['endTime'] === undefined) return false;
    return true;
}

export function ScheduleDtoFromJSON(json: any): ScheduleDto {
    return ScheduleDtoFromJSONTyped(json, false);
}

export function ScheduleDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'school': SchoolDtoFromJSON(json['school']),
        'classRoomName': json['classRoomName'],
        'teacher': TeacherDtoFromJSON(json['teacher']),
        'subject': SubjectDtoFromJSON(json['subject']),
        'studentIds': json['studentIds'],
        'startTime': json['startTime'],
        'endTime': json['endTime'],
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
    };
}

export function ScheduleDtoToJSON(json: any): ScheduleDto {
    return ScheduleDtoToJSONTyped(json, false);
}

export function ScheduleDtoToJSONTyped(value?: ScheduleDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'school': SchoolDtoToJSON(value['school']),
        'classRoomName': value['classRoomName'],
        'teacher': TeacherDtoToJSON(value['teacher']),
        'subject': SubjectDtoToJSON(value['subject']),
        'studentIds': value['studentIds'],
        'startTime': value['startTime'],
        'endTime': value['endTime'],
        'date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
    };
}

