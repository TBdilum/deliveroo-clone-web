import { z } from "zod";

export const emailSchema = z
  .string()
  .email("Invalid email format. Please enter a valid email.");
