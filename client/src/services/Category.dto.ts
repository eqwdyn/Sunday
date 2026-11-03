import { ICategory } from "../entities/Category.ent";

export type CreateDishDto = Omit<ICategory, "id">;
export type UpdateDishDto = Partial<CreateDishDto>;
