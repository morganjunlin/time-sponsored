# Grubhub Mock-Up System Design Optimization
> Refactored DBMS for AWS EC2 Scalability

Time-Sponsored microservice inherited to optimize scalability. See original [here](https://github.com/hrla29-group-targaryen/time-sponsored).

## Related Projects

* [Nav, About service](https://github.com/matthewmata/nav-about)
* [Menu, Cart service](https://github.com/tormund-and-big-lady/menu_cart_SDC)
* [Review, Footer service](https://github.com/gabriellehong/systemDesign_HubGrub)

## Requirements
* [PostgreSQL] (https://www.postgresql.org/download/linux/ubuntu/)

## Usage

The `master` branch is for AWS EC2 deployment in mind. The `develop` branch is for local development.

```
git clone https://github.com/tormund-and-big-lady/time-sponsored.git
cd time-sponsored
npm install
npm run build
npm run server:start
```

To generate CSV/Table insertion:

```
npm run generate:csv
npm run psql:create
npm run seed:psql
```

## Development

* [react.js](https://www.npmjs.com/package/react) - The official React.js website
* [express.js](https://www.npmjs.com/package/express) - The official Express.js website
* [webpack](https://www.npmjs.com/package/webpack) - The official Webpack website

