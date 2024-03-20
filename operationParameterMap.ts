type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/admin/calculation-concepts/{conceptId}-GET': {
        parameters: [
            {
                name: 'conceptId'
            },
        ]
    },
    '/v1/admin/calculation-concepts-GET': {
        parameters: [
        ]
    },
    '/v1/admin/selection-concepts/{conceptId}-GET': {
        parameters: [
            {
                name: 'conceptId'
            },
        ]
    },
    '/v1/admin/selection-concepts-GET': {
        parameters: [
        ]
    },
    '/v1/admin/calculation-concepts/{conceptId}/configure-PUT': {
        parameters: [
            {
                name: 'conceptId'
            },
            {
                name: 'perspectivesToMap'
            },
        ]
    },
    '/v1/admin/selection-concepts/{conceptId}/configure-PUT': {
        parameters: [
            {
                name: 'conceptId'
            },
            {
                name: 'analyticObjectFiltersToMap'
            },
        ]
    },
}