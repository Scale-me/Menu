# Project Name

> Scale-Me System Design

## Related Projects

  - https://github.com/Scale-me/Reviews
  - https://github.com/Scale-me/Reservations
  - https://github.com/Scale-me/Banner_Gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### API ROUTES

For reading: GET ~ "/api/id:/menu"

For creating: POST ~ "/api/menu"

For updating: PUT ~ "/api/id:/menu"

For deleting: DELETE ~ "/api/id:/menu"

Create/POST: Input:
```javascript
  menu = {
    name,
    category: [
      {
        name,
        subcategory: [
          {
            name,
            description,
            price}, ...], ...}, ...]}

  Reponse: {'success'}
```


Read/GET: Input:
```javascript
  {id}

  Response: menu = {name, category: [{name, subcategory: [{name, description, price}, ...], ...}, ...]}
```

Update/PUT: Input:
```javascript
  {
    id,
    menu = {name, category: [{name, subcategory: [{name, description, price}, ...], ...}, ...]}
  }

  Reponse: {'success}
```

Delete/DELETE: Input:
```javascript
  {id}
  Reponse: {success}
```
