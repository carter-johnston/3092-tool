import { z } from 'zod';

export const manualCtoSchema = z.object({
	certCardIds: z.string(),
	certPins: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	ssn: z.string(),
	dob: z.string(),
	email: z.string(),
	address1: z.string(),
	address2: z.string().nullable(),
	address3: z.string().nullable(),
	city: z.string(),
	state: z.string(),
	country: z.string(),
	zip: z.string(),
	homePhone: z.string(),
	officePhone: z.string().nullable(),
	mobilePhone: z.string()
});
