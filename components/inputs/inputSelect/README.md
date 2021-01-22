# Input Phone

Component input select

## 🔥 Features

- Validation customizable
- Error validation alert

## 🔎 Getting started

## Prop overview

Property       | Type      | Description
------------   | -------   | ---------------
placeholder    | String    | Placeholder text. Default empty.
value          | String    | Input value. Default empty.
validator      | Function  | Set a function to validate value. Default: `return true`
componentClass | String    | Classes component
baseClass      | String    | Classes base component
inputClass     | String    | Classes input
optionClass    | String    | Classes for each option
iconClass      | String    | Classes to icon arrow in select
field          | String    | Field name

## Example usage

```html
<template>
  <InputSelect v-model="items" field="car" placeholder="Select your car" />
</template>

<script>
import InputSelect from '~/components/inputs/inputSelect'

export default {
  components: {
    InputSelect
  }
}
</script>
```

