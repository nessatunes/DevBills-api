import { z } from "zod";
import { TransactionType } from '../entities/transactions.entity'

export const createTransactionSchema = {
  title: z.string(),
  amount: z.number().int().positive(),
  type: z.nativeEnum(TransactionType),
  date: z.coerce.date(),
  categoryId: z.string().length(24)
}

const createTransactionObject = z.object(createTransactionSchema);
export type CreateTransactionDTO = z.infer<typeof createTransactionObject>;

export const indexTransactionsSchema = {
  title: z.string().optional(),
  categoryId: z.string().length(24).optional(),
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
}
const indextransactionsObject = z.object(indexTransactionsSchema);
export type IndexTransactionsDTO = z.infer<typeof indextransactionsObject>

export const getDashboardSchema = {
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
}

const getDashboardObject = z.object(getDashboardSchema);
export type GetDashboardDTO = z.infer<typeof getDashboardObject>;

export const getFinancialEvolutionSchema = {
  year: z.string(),
};

const getFinancialEvolutionObject = z.object(getFinancialEvolutionSchema);
export type getFinancialEvolutionDTO = z.infer<typeof getFinancialEvolutionObject>;


