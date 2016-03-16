# example-kb

Example usage of [Keycloak-js-Bower](https://github.com/keycloak/keycloak-js-bower)


# Idea

We have 3 pages:

home, items, form

The idea is to secure the **form** page.

From keycloak's documentation:

*...This makes it more important that you register valid redirect URLs...*

*To use this adapter, you must first configure an application (or client) through the Keycloak Admin
Console . You should select public for the Client Type field. As public clients can't be verified
with a client secret, you are required to configure one or more valid redirect uris. Once you've
configured the application, click on the Installation tab and download the keycloak.json file.*

[keycloak's documentation ](http://keycloak.github.io/docs/userguide/keycloak-server/html/ch08.html#javascript-adapter)

# setup keycloak

![Alt kc](https://github.com/bucharest-gold/example-kb/raw/master/keycloak-server.png)

# setup app

 ```
npm install
bower install --save keycloak
```

# run

```
npm start
 ```

Go to [http://localhost:3000](http://localhost:3000)

(This app was generated with express-generator)
