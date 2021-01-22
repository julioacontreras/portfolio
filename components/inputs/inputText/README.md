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
maxlength      | Number    | Max size in text
options        | Object    | options in text like `options.uppercase = true`

## Example usage

```html
<template>
  <InputText v-model="name" field="name" placeholder="Write your name" />
</template>

<script>
import InputText from '~/components/inputs/inputText'

export default {
  components: {
    InputText
  }
}
</script>
```
