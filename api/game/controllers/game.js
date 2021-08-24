"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: (ctx) => {
    console.log("Starting to populate...");

    console.log(ctx);

    ctx.send("Finished populating!");
  },
};
