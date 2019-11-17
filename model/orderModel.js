const { cp } = require("../db/connection.js");
const { query } = require("../db/promise-mysql.js");
const mysql = require("mysql");

// Place a rental or purchase order
exports.createOrder = purchaseInfo => {
  let sqlQuery = `INSERT INTO owl_knack.Order (
                        idCustomer,
                        idArtwork,
                        orderType,
                        shippingCost,
                        dateCreation,
                        price,
                        taxes
                    )
                    SELECT
                        ${mysql.escape(purchaseInfo.idCustomer)} AS idCustomer,
                        idArtwork,
                        ${mysql.escape(purchaseInfo.orderType)} AS orderType,
                        15 AS shippingCost,
                        NOW() AS dateCreation,
                        ${
                          purchaseInfo.orderType == "sale"
                            ? "listPrice"
                            : "rentPrice"
                        } as price,
                        ${
                          purchaseInfo.orderType == "sale"
                            ? "listPrice"
                            : "rentPrice"
                        } * 0.12 AS taxes
                    FROM
                        Artwork
                    WHERE
                        idArtwork = ${mysql.escape(purchaseInfo.idArtwork)}`;
  // Hardcoding for the shipping cost needs to be avoided

  // console.log(sqlQuery);

  return query(cp, sqlQuery);
};

exports.getPaymentMethds = userID => {
  let sqlQuery = `select idPaymentMethod, substring(cardNumber, 13, 4) as last_4_digits
  from PaymentMethod
  where idCustomer=2`;

  return query(cp, sqlQuery);
};
