<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for managing objects in studio experience

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierobjectconfiguration.objectConfiguration.getCalculationConcept`](#visierobjectconfigurationobjectconfigurationgetcalculationconcept)
  * [`visierobjectconfiguration.objectConfiguration.getCalculationConcepts`](#visierobjectconfigurationobjectconfigurationgetcalculationconcepts)
  * [`visierobjectconfiguration.objectConfiguration.getSelectionConcept`](#visierobjectconfigurationobjectconfigurationgetselectionconcept)
  * [`visierobjectconfiguration.objectConfiguration.getSelectionConcepts`](#visierobjectconfigurationobjectconfigurationgetselectionconcepts)
  * [`visierobjectconfiguration.objectConfiguration.mapCalculationConcept`](#visierobjectconfigurationobjectconfigurationmapcalculationconcept)
  * [`visierobjectconfiguration.objectConfiguration.mapSelectionConcept`](#visierobjectconfigurationobjectconfigurationmapselectionconcept)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=ObjectConfiguration&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierObjectConfiguration } from "visier-object-configuration-typescript-sdk";

const visierobjectconfiguration = new VisierObjectConfiguration({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const getCalculationConceptResponse =
  await visierobjectconfiguration.objectConfiguration.getCalculationConcept({
    conceptId: "conceptId_example",
  });

console.log(getCalculationConceptResponse);
```

## Reference<a id="reference"></a>


### `visierobjectconfiguration.objectConfiguration.getCalculationConcept`<a id="visierobjectconfigurationobjectconfigurationgetcalculationconcept"></a>

This API allows you to retrieve the configuration details of a calculation concept in production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCalculationConceptResponse =
  await visierobjectconfiguration.objectConfiguration.getCalculationConcept({
    conceptId: "conceptId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conceptId: `string`<a id="conceptid-string"></a>

The ID of the concept to retrieve the configuration for.

#### 🔄 Return<a id="🔄-return"></a>

[CalculationConceptDTO](./models/calculation-concept-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/calculation-concepts/{conceptId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierobjectconfiguration.objectConfiguration.getCalculationConcepts`<a id="visierobjectconfigurationobjectconfigurationgetcalculationconcepts"></a>

This API allows you to retrieve the calculation concepts available in production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCalculationConceptsResponse =
  await visierobjectconfiguration.objectConfiguration.getCalculationConcepts();
```

#### 🔄 Return<a id="🔄-return"></a>

[CalculationConceptListDTO](./models/calculation-concept-list-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/calculation-concepts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierobjectconfiguration.objectConfiguration.getSelectionConcept`<a id="visierobjectconfigurationobjectconfigurationgetselectionconcept"></a>

This API allows you to retrieve the configuration details of a selection concept in production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSelectionConceptResponse =
  await visierobjectconfiguration.objectConfiguration.getSelectionConcept({
    conceptId: "conceptId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conceptId: `string`<a id="conceptid-string"></a>

The ID of the concept to retrieve the configuration for.

#### 🔄 Return<a id="🔄-return"></a>

[SelectionConceptDTO](./models/selection-concept-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/selection-concepts/{conceptId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierobjectconfiguration.objectConfiguration.getSelectionConcepts`<a id="visierobjectconfigurationobjectconfigurationgetselectionconcepts"></a>

This API allows you to retrieve the selection concepts available in production.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSelectionConceptsResponse =
  await visierobjectconfiguration.objectConfiguration.getSelectionConcepts();
```

#### 🔄 Return<a id="🔄-return"></a>

[SelectionConceptListDTO](./models/selection-concept-list-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/selection-concepts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierobjectconfiguration.objectConfiguration.mapCalculationConcept`<a id="visierobjectconfigurationobjectconfigurationmapcalculationconcept"></a>

This API allows you to map dimension members to nodes in a calculation concept.
 The changes are applied in a new project and published to production.

 The body of this API is the source of truth for dimension members mapped to the concept. For example, if a node in
 the body does not have any dimension members, all existing dimension members mapped to that node will be removed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const mapCalculationConceptResponse =
  await visierobjectconfiguration.objectConfiguration.mapCalculationConcept({
    conceptId: "conceptId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conceptId: `string`<a id="conceptid-string"></a>

The UUID of the concept to configure.

##### perspectivesToMap: [`PerspectiveConfigurationDTO`](./models/perspective-configuration-dto.ts)[]<a id="perspectivestomap-perspectiveconfigurationdtomodelsperspective-configuration-dtots"></a>

A list of objects representing the list of perspectives in the calculation concept.

#### 🔄 Return<a id="🔄-return"></a>

[ConceptConfigurationResultDTO](./models/concept-configuration-result-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/calculation-concepts/{conceptId}/configure` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierobjectconfiguration.objectConfiguration.mapSelectionConcept`<a id="visierobjectconfigurationobjectconfigurationmapselectionconcept"></a>

This API allows you to map dimension members to a selection concept.
 The changes are applied to a new project and published to production.

 The body of this API is the source of truth for dimension members mapped to the concept. For example, if a node in
 the body does not have any dimension members, all existing dimension members mapped to that node will be removed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const mapSelectionConceptResponse =
  await visierobjectconfiguration.objectConfiguration.mapSelectionConcept({
    conceptId: "conceptId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conceptId: `string`<a id="conceptid-string"></a>

The UUID of the concept to configure.

##### analyticObjectFiltersToMap: [`AnalyticObjectFilterDTO`](./models/analytic-object-filter-dto.ts)[]<a id="analyticobjectfilterstomap-analyticobjectfilterdtomodelsanalytic-object-filter-dtots"></a>

A list of analytic object filters indicating the analytic object and dimension members used  for the selection concept.   Note: If this array is empty, all filters will be removed for the concept.

#### 🔄 Return<a id="🔄-return"></a>

[ConceptConfigurationResultDTO](./models/concept-configuration-result-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/selection-concepts/{conceptId}/configure` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
