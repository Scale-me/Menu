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

For creating: GET ~ "/api/id:/menu"

For posting: POST ~ "/api/menu"

For updating: PUT ~ "/api/id:/menu"

For deleting: DELETE ~ "/api/id:/menu"

Create/POST: Input: {[food = {PrimaryCategory: value, SecondaryCategory: value}, food2, food3, ...]} Reponse: {'success'}

Read/GET: Input: {id} Response: {[food = {PrimaryCategory: value, SecondaryCategory: value}, food2, food3, ...]}

Update/PUT: Input: {id, [food = {PrimaryCategory: changedValue, SecondaryCategory: changedValue}, food2, ...]} Reponse: {'success}

Delete/DELETE: Input: {id} Reponse: {success}
