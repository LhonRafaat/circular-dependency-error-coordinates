/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./dto/create.order.dto"), { "createOrderDto": { coordinates: { required: true } } }], [import("./dto/order.type"), { "TOrder": { coordinates: { required: true } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }]] } };
};