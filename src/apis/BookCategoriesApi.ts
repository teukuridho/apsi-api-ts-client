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


import * as runtime from '../runtime';
import type {
  ApiResponseBookCategoryDto,
  ApiResponsePageInfoResponseBookCategoryDto,
  ApiResponseVoid,
  CreateBookCategoryRequest,
  UpdateBookCategoryRequest,
} from '../models/index';
import {
    ApiResponseBookCategoryDtoFromJSON,
    ApiResponseBookCategoryDtoToJSON,
    ApiResponsePageInfoResponseBookCategoryDtoFromJSON,
    ApiResponsePageInfoResponseBookCategoryDtoToJSON,
    ApiResponseVoidFromJSON,
    ApiResponseVoidToJSON,
    CreateBookCategoryRequestFromJSON,
    CreateBookCategoryRequestToJSON,
    UpdateBookCategoryRequestFromJSON,
    UpdateBookCategoryRequestToJSON,
} from '../models/index';

export interface CreateBookCategoryOperationRequest {
    createBookCategoryRequest: CreateBookCategoryRequest;
}

export interface DeleteBookCategoryRequest {
    categoryId: number;
}

export interface GetBookCategoriesRequest {
    name?: string | null;
    page?: number;
    size?: number;
    sort?: Array<string>;
}

export interface GetBookCategoryRequest {
    categoryId: number;
}

export interface UpdateBookCategoryOperationRequest {
    categoryId: number;
    updateBookCategoryRequest: UpdateBookCategoryRequest;
}

/**
 * 
 */
export class BookCategoriesApi extends runtime.BaseAPI {

    /**
     * Create a book category
     */
    async createBookCategoryRaw(requestParameters: CreateBookCategoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBookCategoryDto>> {
        if (requestParameters['createBookCategoryRequest'] == null) {
            throw new runtime.RequiredError(
                'createBookCategoryRequest',
                'Required parameter "createBookCategoryRequest" was null or undefined when calling createBookCategory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/book_categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateBookCategoryRequestToJSON(requestParameters['createBookCategoryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResponseBookCategoryDtoFromJSON(jsonValue));
    }

    /**
     * Create a book category
     */
    async createBookCategory(requestParameters: CreateBookCategoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBookCategoryDto> {
        const response = await this.createBookCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a book category
     */
    async deleteBookCategoryRaw(requestParameters: DeleteBookCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseVoid>> {
        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling deleteBookCategory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/book_categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResponseVoidFromJSON(jsonValue));
    }

    /**
     * Delete a book category
     */
    async deleteBookCategory(requestParameters: DeleteBookCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseVoid> {
        const response = await this.deleteBookCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get book categories
     */
    async getBookCategoriesRaw(requestParameters: GetBookCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponsePageInfoResponseBookCategoryDto>> {
        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/book_categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResponsePageInfoResponseBookCategoryDtoFromJSON(jsonValue));
    }

    /**
     * Get book categories
     */
    async getBookCategories(requestParameters: GetBookCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponsePageInfoResponseBookCategoryDto> {
        const response = await this.getBookCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a book category by ID
     */
    async getBookCategoryRaw(requestParameters: GetBookCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBookCategoryDto>> {
        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling getBookCategory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/book_categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResponseBookCategoryDtoFromJSON(jsonValue));
    }

    /**
     * Get a book category by ID
     */
    async getBookCategory(requestParameters: GetBookCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBookCategoryDto> {
        const response = await this.getBookCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a book category
     */
    async updateBookCategoryRaw(requestParameters: UpdateBookCategoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResponseBookCategoryDto>> {
        if (requestParameters['categoryId'] == null) {
            throw new runtime.RequiredError(
                'categoryId',
                'Required parameter "categoryId" was null or undefined when calling updateBookCategory().'
            );
        }

        if (requestParameters['updateBookCategoryRequest'] == null) {
            throw new runtime.RequiredError(
                'updateBookCategoryRequest',
                'Required parameter "updateBookCategoryRequest" was null or undefined when calling updateBookCategory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/book_categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters['categoryId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateBookCategoryRequestToJSON(requestParameters['updateBookCategoryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResponseBookCategoryDtoFromJSON(jsonValue));
    }

    /**
     * Update a book category
     */
    async updateBookCategory(requestParameters: UpdateBookCategoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiResponseBookCategoryDto> {
        const response = await this.updateBookCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
