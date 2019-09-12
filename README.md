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

For creating: app.get ~ "/api/id:/menu" (GET)

For posting: app.post ~ "/api/menu" (POST)

For updating: app.put ~ "/api/id:/menu" (PUT)

For deleting: app.delete ~ "/api/id:/menu" (DELETE)

Create/POST: Input: {mealOptions, foodCategories, meal} Reponse: {id}

Read/GET: Input: {id} Response: {menu}

Update/PUT: Input: {id} Reponse: {menu}

Delete/DELETE: Input: {id} Reponse: {success}
