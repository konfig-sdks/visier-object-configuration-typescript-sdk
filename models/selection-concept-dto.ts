/*
Visier Object Configuration APIs

Visier APIs for managing objects in studio experience

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SelectionConceptConfigurationDTO } from './selection-concept-configuration-dto';

/**
 * 
 * @export
 * @interface SelectionConceptDTO
 */
export interface SelectionConceptDTO {
    /**
     * The unique identifier associated with the selection concept.
     * @type {string}
     * @memberof SelectionConceptDTO
     */
    'uuid'?: string;
    /**
     * The display name of the selection concept.
     * @type {string}
     * @memberof SelectionConceptDTO
     */
    'name'?: string;
    /**
     * A list of objects representing the configuration for the selection concept.
     * @type {SelectionConceptConfigurationDTO}
     * @memberof SelectionConceptDTO
     */
    'configuration'?: SelectionConceptConfigurationDTO;
}

