const {cp} = require("../db/connection.js"); 
const {query} = require("../db/promise-mysql.js");
const mysql = require('mysql')



// Place a rental or purchase order
exports.createOrder = (purchaseInfo) => {
    let sqlQuery = `INSERT INTO owl_knack.Order (
                        idCustomer,
                        idArtwork,
                        orderType,
                        shippingCost,
                        dateCreation,
                        price,
                        taxes,
                        idPaymentMethod,
                        paymentDate,
                        ${purchaseInfo.rentalStartDate.length > 0 ? 'rentalStartDate,' : ''}
                        ${purchaseInfo.rentalEndDate.length > 0 ? 'rentalEndDate,' : ''}
                        paymentAmount
                    )
                    SELECT
                        ${mysql.escape(purchaseInfo.idCustomer)} AS idCustomer,
                        idArtwork,
                        ${mysql.escape(purchaseInfo.orderType)} AS orderType,
                        15 AS shippingCost,
                        NOW() AS dateCreation,
                        ${purchaseInfo.orderType == 'sale' ? 'listPrice' : 'rentPrice'} as price,
                        ${purchaseInfo.orderType == 'sale' ? 'listPrice' : 'rentPrice'} * 0.12 AS taxes,
                        ${mysql.escape(purchaseInfo.idPaymentMethod)} AS idPaymentMethod,
                        NOW() AS paymentDate,
                        ${purchaseInfo.rentalStartDate.length > 0 ? mysql.escape(purchaseInfo.rentalStartDate) + ',' : ''}
                        ${purchaseInfo.rentalEndDate.length > 0 ? mysql.escape(purchaseInfo.rentalEndDate) + ',' : ''}
                        ${purchaseInfo.orderType == 'sale' ? 'listPrice' : 'rentPrice'} + (${purchaseInfo.orderType == 'sale' ? 'listPrice' : 'rentPrice'} * 0.15) + 15 AS paymentAmount
                    FROM
                        Artwork
                    WHERE
                        idArtwork = ${mysql.escape(purchaseInfo.idArtwork)}`
                    // Hardcoding for the shipping cost needs to be avoided

    return query(cp, sqlQuery);
}