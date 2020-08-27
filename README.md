# Express TypeScript template

This is a customised version of the template.

* Dockernizable
* Logging using winston
* Database connection to postgresql using pg-promise
* Testing using mocha/chai/ndb
* Async handler for async/await syntax

```bash
cd to your project.
curl -vL https://api.github.com/repos/SpatialVision/express-ts-template/tarball/develop | \
tar xfz - && DIR=`ls |grep SpatialVision` && mv $DIR/* .; mv $DIR/.* .; rm -fr $DIR
```

# Pre-reqs
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- Build and run the project
```
npm run build
npm start
```
Navigate to `http://localhost:3000`

--------------------
Based on 
[TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Express Generator](https://github.com/expressjs/generator)