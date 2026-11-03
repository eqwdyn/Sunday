import { IDish } from "../entities/Dish.ent";

export type CreateDishDto = Omit<IDish, "id">;
export type UpdateDishDto = Partial<CreateDishDto>;
