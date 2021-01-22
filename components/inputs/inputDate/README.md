# Input Date

Component input date

## 🔥 Features

- Validation customizable
- Error validation alert

## 🔎 Getting started

## Prop overview

Property     | Type      | Description
------------ | -------   | ---------------
placeholder  | String    | Placeholder text. Default empty.
value        | String    | Input value. Default empty.
validator    | Function  | Set a function to validate value. Default: `return true`

## Example usage

```html
<InputDate v-model="birthday" placeholder="Birthday" :validator="validateBirthday" />
```
