import { z } from 'zod';

export const cardholderSchema = z.object({
	firstName: z.string()
	// lastName: z.string(),
	// ssn: z.string(),
	// email: z.string().email(),
	// // country: z.string(),
	// address: z.string(),
	// city: z.string(),
	// state: z.string(),
	// zip: z.string()
});
