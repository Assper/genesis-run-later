# GenesisRunLater

## Dependencies

Install dependencies by npm:

```sh
npm install
```

## Run tasks

To run the dev server for your app, use:

```sh
npm run docker
```

In separate tab run:

```sh
npm run producer:dev
```

In another separate tab run:

```sh
npm run consumer:dev
```

## Testing:

For test suite you should send POST request to http://localhost:3000/schedule

### Body:

```json
{
  "id": 1,
  "name": "hello"
}
```

### Example:

```sh
curl --location 'http://localhost:3000/schedule' \
--header 'Content-Type: application/json' \
--data '{
    "id": 1,
    "name": "hello"
}'

```

## Results:

Request should return status 200 and response

```json
{ "success": true }
```

And in Consumer tab you should see log:

```sh
LOG [AppRepo] Updating name for id 1 to hello successfully!
```
