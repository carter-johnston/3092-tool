import prisma from '../src/lib/server/prisma';

async function main() {
	const cto1 = await prisma.cto3092.upsert({
		where: {
			id: 1
		},
		create: {
			groupingName: 'Test',
			certCardId: '12345',
			certPin: '1234',
			lastName: 'Mato',
			firstName: 'Dhori',
			addressLine1: '1234 Test Rd',
			addressLine2: 'Suite 200',
			addressLine3: 'Test',
			country: 'US',
			dob: '19900905',
			homePhone: '9047558285',
			officePhone: '9047558285',
			mobilePhone: '9047558285',
			ssn: '123456543',
			email: 'dhori.mato@usbank.com',
			city: 'jacksonville',
			state: 'FL',
			zip: '32221'
		},
		update: {}
	});

	const cto2 = await prisma.cto3092.upsert({
		where: {
			id: 2
		},
		create: {
			groupingName: 'Test',
			certCardId: '12345',
			certPin: '1234',
			lastName: 'Makic',
			firstName: 'Emmy',
			addressLine1: '1234 Test Rd',
			addressLine2: 'Suite 200',
			addressLine3: 'Test',
			country: 'US',
			dob: '19900905',
			homePhone: '9047558285',
			officePhone: '9047558285',
			mobilePhone: '9047558285',
			ssn: '123456543',
			email: 'emmy.makic@usbank.com',
			city: 'jacksonville',
			state: 'FL',
			zip: '32221'
		},
		update: {}
	});
	const cto3 = await prisma.cto3092.upsert({
		where: {
			id: 3
		},
		create: {
			groupingName: 'Test',
			certCardId: '12345',
			certPin: '1234',
			lastName: 'Test',
			firstName: 'Test',
			addressLine1: '1234 Test Rd',
			addressLine2: 'Suite 200',
			addressLine3: 'Test',
			country: 'US',
			dob: '19900905',
			homePhone: '9047558285',
			officePhone: '9047558285',
			mobilePhone: '9047558285',
			ssn: '123456543',
			email: 'test.mato@usbank.com',
			city: 'jacksonville',
			state: 'FL',
			zip: '32221'
		},
		update: {}
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
