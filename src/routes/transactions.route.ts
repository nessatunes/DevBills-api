import { Router } from "express";
import { ParamsType, validator } from "../middlewares/validator.middleware";
import { transactionsController } from "../controllers/transactions.controller";
import { TransactionsFactory } from "../factories/transactions.factory";
import { createTransactionSchema, getDashboardSchema, indexTransactionsSchema } from "../dtos/transactions.dto";

export const transactionsRoutes = Router();

const controller = new transactionsController(
  TransactionsFactory.getServiceInstance());


transactionsRoutes.post(
  '/', validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY
  }),
  controller.create);

transactionsRoutes.get('/',
  validator({
    schema: indexTransactionsSchema,
    type: ParamsType.QUERY,
  }),
  controller.index);

transactionsRoutes.get(
  '/dashboard',
  validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
  }),
  controller.getDashboard);