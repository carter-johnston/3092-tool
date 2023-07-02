import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

const firstNames: string[] = [
	'John',
	'Jane',
	'David',
	'Emma',
	'Michael',
	'Olivia',
	'Robert',
	'Sophia',
	'Liam',
	'Noah',
	'Oliver',
	'Elijah',
	'James',
	'William',
	'Benjamin',
	'Lucas',
	'Henry',
	'Theodore',
	'Jack',
	'Levi',
	'Alexander',
	'Jackson',
	'Mateo',
	'Daniel',
	'Michael',
	'Mason',
	'Sebastian',
	'Ethan',
	'Logan',
	'Robert',
	'John',
	'Michael',
	'David',
	'William',
	'Richard',
	'Joseph',
	'Thomas',
	'Christopher',
	'Charles',
	'Daniel',
	'Matthew',
	'Anthony',
	'Mark',
	'Donald',
	'Steven',
	'Andrew',
	'Paul',
	'Joshua',
	'Kenneth',
	'Kevin',
	'Brian',
	'George',
	'Timothy',
	'Ronald',
	'Jason',
	'Edward',
	'Jeffrey',
	'Ryan',
	'Jacob',
	'Gary',
	'Nicholas',
	'Eric',
	'Jonathan',
	'Stephen',
	'Larry',
	'Justin',
	'Scott',
	'Brandon',
	'Benjamin',
	'Samuel',
	'Gregory',
	'Alexander',
	'Patrick',
	'Frank',
	'Raymond',
	'Jack',
	'Dennis',
	'Jerry',
	'Tyler',
	'Aaron',
	'Jose',
	'Adam',
	'Nathan',
	'Henry',
	'Zachary',
	'Douglas',
	'Peter',
	'Kyle',
	'Noah',
	'Ethan',
	'Jeremy',
	'Walter',
	'Christian',
	'Keith',
	'Roger',
	'Terry',
	'Austin',
	'Sean',
	'Gerald',
	'Carl',
	'Harold',
	'Dylan',
	'Arthur',
	'Lawrence',
	'Jordan',
	'Jesse',
	'Bryan',
	'Billy',
	'Bruce',
	'Gabriel',
	'Joe',
	'Logan',
	'Alan',
	'Juan',
	'Albert',
	'Willie',
	'Elijah',
	'Wayne',
	'Randy',
	'Vincent',
	'Mason',
	'Roy',
	'Ralph',
	'Bobby',
	'Russell',
	'Bradley',
	'Philip',
	'Eugene',
	'Patricia',
	'Jennifer',
	'Linda',
	'Elizabeth',
	'Barbara',
	'Susan',
	'Jessica',
	'Sarah',
	'Karen',
	'Lisa',
	'Nancy',
	'Betty',
	'Sandra',
	'Margaret',
	'Ashley',
	'Kimberly',
	'Emily',
	'Donna',
	'Michelle',
	'Carol',
	'Amanda',
	'Melissa',
	'Deborah',
	'Stephanie',
	'Dorothy',
	'Rebecca',
	'Sharon',
	'Laura',
	'Cynthia',
	'Amy',
	'Kathleen',
	'Angela',
	'Shirley',
	'Brenda',
	'Emma',
	'Anna',
	'Pamela',
	'Nicole',
	'Samantha',
	'Katherine',
	'Christine',
	'Helen',
	'Debra',
	'Rachel',
	'Carolyn',
	'Janet',
	'Maria',
	'Catherine',
	'Heather',
	'Diane',
	'Olivia',
	'Julie',
	'Joyce',
	'Victoria',
	'Ruth',
	'Virginia',
	'Lauren',
	'Kelly',
	'Christina',
	'Joan',
	'Evelyn',
	'Judith',
	'Andrea',
	'Hannah',
	'Megan',
	'Cheryl',
	'Jacqueline',
	'Martha',
	'Madison',
	'Teresa',
	'Gloria',
	'Sara',
	'Janice',
	'Ann',
	'Kathryn',
	'Abigail',
	'Sophia',
	'Frances',
	'Jean',
	'Alice',
	'Judy',
	'Isabella',
	'Julia',
	'Grace',
	'Amber',
	'Denise',
	'Danielle',
	'Marilyn',
	'Beverly',
	'Charlotte',
	'Natalie',
	'Theresa',
	'Diana',
	'Brittany',
	'Doris',
	'Kayla',
	'Alexis',
	'Lori',
	'Marie'
];

const lastNames: string[] = [
	'Hauck',
	'Moore',
	'Hoeger',
	'Gerlach',
	'Anderson',
	'Smith',
	'Johnson',
	'Williams',
	'Brown',
	'Jones',
	'Miller',
	'Davis',
	'Garcia',
	'Smith',
	'Johnson',
	'Williams',
	'Brown',
	'Jones',
	'Garcia',
	'Miller',
	'Davis',
	'Rodriguez',
	'Martinez',
	'Hernandez',
	'Lopez',
	'Gonzales',
	'Wilson',
	'Anderson',
	'Thomas',
	'Taylor',
	'Moore',
	'Jackson',
	'Martin',
	'Lee',
	'Perez',
	'Thompson',
	'White',
	'Harris',
	'Sanchez',
	'Clark',
	'Ramirez',
	'Lewis',
	'Robinson',
	'Walker',
	'Young',
	'Allen',
	'King',
	'Wright',
	'Scott',
	'Torres',
	'Nguyen',
	'Hill',
	'Flores',
	'Green',
	'Adams',
	'Nelson',
	'Baker',
	'Hall',
	'Rivera',
	'Campbell',
	'Mitchell',
	'Carter',
	'Roberts',
	'Gomez',
	'Phillips',
	'Evans',
	'Turner',
	'Diaz',
	'Parker',
	'Cruz',
	'Edwards',
	'Collins',
	'Reyes',
	'Stewart',
	'Morris',
	'Morales',
	'Murphy',
	'Cook',
	'Rogers',
	'Gutierrez',
	'Ortiz',
	'Morgan',
	'Cooper',
	'Peterson',
	'Bailey',
	'Reed',
	'Kelly',
	'Howard',
	'Ramos',
	'Kim',
	'Cox',
	'Ward',
	'Richardson',
	'Watson',
	'Brooks',
	'Chavez',
	'Wood',
	'James',
	'Bennet',
	'Gray',
	'Mendoza',
	'Ruiz',
	'Hughes',
	'Price',
	'Alvarez',
	'Castillo',
	'Sanders',
	'Patel',
	'Myers',
	'Long',
	'Ross',
	'Foster',
	'Jimenez',
	'Caroline',
	'Henry',
	'Louis',
	'Mary',
	'Sophia',
	'William',
	'Elizabeth',
	'Henry',
	'Lena',
	'Charlotte',
	'Henry',
	'Henry',
	'Herman',
	'Mena',
	'Ann',
	'Anna',
	'Edward',
	'Elizabeth',
	'Mary J.',
	'William',
	'Harriet',
	'William',
	'Jack',
	'Nancy',
	'George',
	'Maria',
	'Mary F.',
	'Walter H.',
	'Benj G. Jr',
	'Sophia',
	'Wm. H',
	'John',
	'David',
	'John',
	'Mary',
	'John',
	'Caroline',
	'Mary',
	'Andrew',
	'Anna',
	'Frances',
	'Frances',
	'Jacob',
	'Jacob',
	'Sebastian',
	'Langdon',
	'Virginia',
	'William',
	'Virginia',
	'George',
	'John',
	'Leopold',
	'Mary Jo',
	'Caroline',
	'James',
	'Annie',
	'Bernard',
	'Bernhard',
	'Catherine',
	'Englebert',
	'Henry',
	'Severn',
	'Felix',
	'Isabella',
	'Julia',
	'Thomas',
	'Bridget',
	'John',
	'Lawrence',
	'Mary',
	'Mary',
	'Michael',
	'Patrick',
	'Thomas',
	'William',
	'William',
	'Anna',
	'Benard',
	'Christena',
	'Frank',
	'Mary',
	'Anna',
	'James',
	'John',
	'Timothy',
	'Tom',
	'William',
	'William',
	'Catherine',
	'Henry',
	'Mena',
	'Antone',
	'Alice',
	'Belle',
	'Josephine',
	'Julia',
	'Martin',
	'Mason',
	'Nancy',
	'Richard',
	'Virginia',
	'Cora',
	'John',
	'Lena A.',
	'Louis',
	'Louisa',
	'Rosa',
	'Andrew',
	'Henry',
	'James',
	'John',
	'John',
	'Mary',
	'Michael',
	'Ned',
	'Patrick',
	'Rebecca',
	'Thomas',
	'William',
	'Elizabeth',
	'Adeline',
	'Anna',
	'Eleanor',
	'Bridget',
	'Patrick',
	'Catherine',
	'John',
	'Julia',
	'Mary',
	'Thomas',
	'Benj',
	'Henry',
	'Mary L',
	'Nancy',
	'Samuel',
	'James',
	'James',
	'John',
	'Agnes',
	'John',
	'Mary',
	'Michael',
	'Nellie',
	'William',
	'David',
	'Adeline',
	'Chas',
	'Thomas',
	'Cora L.',
	'Emma',
	'Mary F.',
	'Ophelia',
	'William W.',
	'William',
	'Jeremiah',
	'Mary',
	'William',
	'Mary',
	'Peter',
	'Andrew',
	'Annie',
	'Ann',
	'John',
	'John',
	'Margaret',
	'Mary',
	'Patrick',
	'Catherine',
	'Thomas',
	'Benj. E.',
	'Isabella',
	'Jane',
	'John',
	'Thomas',
	'Thos A.',
	'Mary E.',
	'Michael',
	'Michael J',
	'Winnie',
	'Maggie',
	'Mary',
	'Philip',
	'Ellen',
	'J. Michael',
	'John',
	'Kate',
	'William',
	'Conrad',
	'Henry C.',
	'Hunter',
	'Isoline',
	'Issac D.',
	'Jane E.',
	'Sarah M.',
	'Maggie',
	'Anna',
	'John',
	'John',
	'Margaret',
	'Rose',
	'Alexander',
	'Chas H.',
	'Ellen',
	'George',
	'George',
	'Lucy',
	'Margaret',
	'William',
	'Mary',
	'William J'
];

const addresses1: string[] = [
	'123 Main St',
	'456 Elm St',
	'789 Oak St',
	'321 Maple Ave',
	'555 Pine Rd',
	'416 Jokre Street',
	'659 Vosse Place',
	'1385 Inicig Boulevard',
	'19 Evmuc Plaza',
	'47 Uvmaw Loop',
	'1542 Avwot Key',
	'732 Lesob Square',
	'406 Rizol Mill',
	'342 Pukno Terrace',
	'717 Tuoh Square',
	'107 Ihuav Lane',
	'449 Azezin Center',
	'365 Ecejen Lane',
	'1802 Ijpum Point',
	'1557 Kamase Drive',
	'1908 Obezep Pike',
	'1328 Towu Manor',
	'1559 Ojewe Park',
	'1053 Simuv Extension',
	'1852 Nacre Street',
	'752 Zorilu River',
	'1622 Ahoude Terrace',
	'875 Lusdih Loop',
	'1472 Nufobi Mill',
	'730 Uhinaj Pass',
	'1568 Tecuv Way',
	'1066 Nepah Highway',
	'713 Sakwel Heights',
	'1139 Doro Key',
	'228 Zaja Circle',
	'1455 Foil Trail',
	'342 Bokvod Lane',
	'484 Fifiji Extension',
	'1976 Juhibu Court',
	'1944 Zeciho Key',
	'44 Miule Road',
	'893 Janic Court',
	'201 Onrum Mill',
	'820 Ipnof Key',
	'1672 Hakfu Key',
	'504 Sisbe Circle',
	'365 Borbip Point',
	'17 Tamal Drive',
	'1010 Seksez Highway',
	'987 Bihu Mill',
	'579 Bedol Place',
	'182 Hezzaj Key',
	'1868 Mujje Boulevard',
	'1915 Segas Parkway',
	'998 Viguj View',
	'1671 Kizas Center',
	'1688 Ivsij Loop',
	'53 Uwanul View',
	'1576 Pobti River',
	'1616 Surpiw Turnpike',
	'404 Soovo Pike',
	'396 Dota Key',
	'1990 Siev Junction',
	'641 Lufnu Point',
	'1420 Jelgo Terrace',
	'956 Turow Avenue',
	'762 Cewdun Square',
	'749 Hedehu Heights',
	'309 Arudol Square',
	'999 Tihif Loop',
	'336 Agosep Path',
	'1981 Uwadut Lane',
	'1870 Love Mill',
	'252 Etaal Key',
	'491 Azpof Extension',
	'691 Jumov Extension',
	'37 CALLE MUNOZ RIVERA',
	'5 AVE NATIVO ALERS',
	'50 CARR 459 STE 1',
	'100 AVE BORINQUEN',
	'50 CARR 459 STE 1',
	'68 CALLE RAMON E BETANCES',
	'9 CALLE ZUZUARREGUI FRNT',
	'93 CALLE 65 INFANTERIA STE 1',
	'100 CARR 111',
	'10 AVE SAN PATRICIO',
	'442 AVE JUAN ROSADO STE 1',
	'22 CALLE CENTRO COMERCIAL',
	'10 AVE SAN PATRICIO',
	'100 CARR 656',
	'H1 CALLE 5',
	'300 CARR 101',
	'64 CALLE CARBONELL',
	'100 CARR 132',
	'2 CALLE CORREO',
	'135 CARR PRINCIPAL',
	'1 AVE VICENTE QUILINCHINI STE 4',
	'25 CARR 149',
	'41 AVE FERNANDO L RIBAS',
	'100 CARR 698',
	'6 CALLE SEGUNDA SUR',
	'66 CALLE MUNOZ RIVERA',
	'100 CARR 682',
	'39 CALLE 13 DE MARZO STE 101',
	'285 CALLE LUIS MUNOZ RIVERA',
	'192 AVE DR SUSONI',
	'250 CARR 344',
	'5 CALLE PINEIRO',
	'15 CALLE A BARCELO STE 2',
	'72 CALLE 65 DE INFANTERIA S',
	'100 AVE LOS PATRIOTAS STE 1',
	'78 AVE MATIAS BRUGMAN',
	'29 CALLE ELLIOT VELEZ',
	'13654 CARR 420',
	'212 AVE LA MOCA',
	'100 CARR 115',
	'64 CALLE JOSE L LINARES',
	'270 CALLE DE LA CANDELARIA',
	'60 CALLE MCKINLEY W',
	'270 CALLE DE LA CANDELARIA',
	'60 CALLE MCKINLEY W',
	'270 CALLE DE LA CANDELARIA',
	'181 AVE UNIV INTERAMERICANA',
	'1 CARR 111',
	'2 CARR 111',
	'211 CALLE RUIZ BELVIS',
	'200 CARR 155',
	'50 CARR 639',
	'1068 AVE GENERAL RAMEY',
	'100 CARR 677 INT',
	'100 CARR 2',
	'A10 CALLE 2',
	'A10 CALLE 2',
	'329 YAUCO PLAZA I',
	'13 CALLE PIO RECHANI',
	'100 CALLE PRINCIPAL',
	'20 CALLE IGNACIO LOPEZ',
	'184 AVE CALIMANO',
	'111 CALLE MORSE',
	'100 TURPEAUX IND PARK',
	'2340 AVE EDUARDO RUBERTE',
	'2340 AVE EDUARDO RUBERTE',
	'100 CARR 31',
	'40 CALLE GEORGETTI',
	'35 AVE ERNESTO RAMOS ANTONINI',
	'23 CALLE PRINCIPAL',
	'101 CARR 3',
	'225 CALLE GAUTIER BENITEZ',
	'555 CALLE EXT MUNOZ RIVERA STE 1',
	'225 CALLE GAUTIER BENITEZ',
	'555 CALLE EXT MUNOZ RIVERA STE 1',
	'225 CALLE GAUTIER BENITEZ',
	'555 CALLE EXT MUNOZ RIVERA STE 1',
	'2340 AVE EDUARDO RUBERTE',
	'18400 CARR 3 STE 136',
	'2340 AVE EDUARDO RUBERTE',
	'2340 AVE EDUARDO RUBERTE',
	'2250 BLVD LUIS A FERRE',
	'2340 AVE EDUARDO RUBERTE',
	'13 PASEO ATOCHA',
	'305 AVE LAURO PINERO',
	'11 AVE BALDORIOTY E',
	'11 AVE BALDORIOTY E',
	'113 CALLE GARRIDO MORALES W',
	'100 AVE INDUSTRIAL',
	'113 CALLE GARRIDO MORALES W',
	'477 CALLE UN',
	'122 CALLE FONT MARTELO',
	'15 CALLE ADUANA',
	'100 CARR 31',
	'99 CALLE PIMENTEL STE 1',
	'100 CARR PLAYA',
	'123 CALLE DE DIEGO',
	'36 CALLE LUIS MUNOZ RIVERA STE 1',
	'300 CALLE ANTONIO G MELLADO STE 1',
	'25 CALLE MUNOZ RIVERA',
	'100 CALLE CATALINA MORALES',
	'100 CALLE A STE 1',
	'77 CALLE JT PINERO STE 1',
	'64 CALLE SAN PATRICIO',
	'160 CALLE QUINTO CENTENARIO',
	'26 CALLE PEDRO MARQUEZ',
	'1 CALLE MUNOZ RIVERA',
	'106 CALLE ANGEL C MORALES E',
	'3007 AVE SAN CRISTOBAL',
	'37 CARR 778 STE 3',
	'100 COROZAL SHOP CTR STE 104',
	'80101 BO PALMARITO CARR 801 INT',
	'151 CALLE ASHFORD S',
	'151 CALLE ASHFORD S',
	'5 CARR 173',
	'122 CALLE FONT MARTELO',
	'122 CALLE FONT MARTELO',
	'41 CALLE MUNOZ RIVERA FRNT',
	'72 CALLE EXT MUNOZ RIVERA',
	'9846 ESTATE THOMAS',
	'9007 HAVENSIGHT SHOPP CTR STE D',
	'9846 ESTATE THOMAS',
	'6500 VETERANS DR',
	'6500 VETERANS DR',
	'5046 NORRE GADE',
	'4605 TUTU PARK MALL STE 179',
	'1104 ESTATE RICHMOND',
	'1104 ESTATE RICHMOND',
	'2119 MARKET SQ',
	'4500 SUNNY ISLE STE 53',
	'5027 ANCHOR WAY STE 1',
	'100 VESTER GADE',
	'100 VESTER GADE',
	'1 MARS HL',
	'1 MARS HL',
	'2 EST LA REINE',
	'2 EST LA REINE',
	'100 PASEO DE COLON STE 1',
	'100 PASEO DE COLON STE 1',
	'1959 CALLE LOIZA LBBY',
	'1108 AVE MAGDALENA STE 2',
	'800 AVE PONCE DE LEON STE A',
	'1959 CALLE LOIZA LBBY',
	'1498 AVE FERNANDEZ JUNCOS',
	'1959 CALLE LOIZA LBBY',
	'1959 CALLE LOIZA LBBY',
	'1959 CALLE LOIZA LBBY',
	'1959 CALLE LOIZA LBBY',
	'1959 CALLE LOIZA LBBY',
	'100 CALLE BELLA VIS',
	'361 CALLE JUAN CALAF',
	'361 CALLE JUAN CALAF',
	'361 CALLE JUAN CALAF',
	'361 CALLE JUAN CALAF',
	'361 CALLE JUAN CALAF',
	'1498 AVE FD ROOSEVELT STE 5B',
	'100 CALLE ALONDRA',
	'100 CALLE ALONDRA',
	'100 CALLE ALONDRA',
	'369 CALLE SAN CLAUDIO FRNT',
	'369 CALLE SAN CLAUDIO FRNT',
	'201 AVE DE DIEGO STE 10',
	'112 CALLE ARZUAGA STE 1',
	'100 CALLE ALONDRA',
	'112 CALLE ARZUAGA STE 1',
	'10 CALLE CASIA',
	'1498 AVE FD ROOSEVELT STE 5B',
	'585 AVE FD ROOSEVELT STE 202',
	'35 AVE JOSE A TONY SANTANA',
	'100 CENTRO GUBERNAMENTAL',
	'600 CALLE DR HERNAN CORTES STE 1',
	'600 CALLE DR HERNAN CORTES STE 1',
	'100 AVE LUIS MUNOZ RIVERA',
	'100 CARR 866',
	'125 CARR 165 STE 1',
	'125 CARR 165 STE 1',
	'585 AVE FD ROOSEVELT STE 202',
	'100 AVE RAMON L RODRIGUEZ',
	'100 VICTORY SHOPP CTR STE 1',
	'100 VICTORY SHOPP CTR STE 1',
	'100 AVE RAMON L RODRIGUEZ',
	'100 AVE RAMON L RODRIGUEZ',
	'40 CALLE BETANCES',
	'100 AVE RAMON L RODRIGUEZ',
	'131 AVE BARBOSA',
	'131 AVE BARBOSA',
	'59 AVE PONCE DE LEON STE 2',
	'131 AVE BARBOSA',
	'100 CALLE CECILIO URBINA',
	'100 CALLE CECILIO URBINA',
	'100 CALLE CECILIO URBINA',
	'100 CALLE CECILIO URBINA',
	'100 CALLE CECILIO URBINA',
	'100 CALLE BORINQUEN',
	'100 CALLE BORINQUEN',
	'300 CARR 848',
	'1000 AVE SANCHEZ OSORIO',
	'35 AVE JOSE A TONY SANTANA',
	'1000 AVE SANCHEZ OSORIO',
	'1000 AVE SANCHEZ OSORIO',
	'1000 AVE SANCHEZ OSORIO',
	'150 AVE LOS GOBERNADORES STE 230',
	'1000 AVE SANCHEZ OSORIO',
	'108 CALLE MUNOZ RIVERA S',
	'1000 AVE SANCHEZ OSORIO',
	'200 AVE FRAGOSO STE 322',
	'600 SUFFIELD ST',
	'145 UNIVERSITY DR',
	'145 UNIVERSITY DR',
	'141 N PLEASANT ST',
	'500 SOUTH ST',
	'35 MAIN ST',
	'102 MAIN ST',
	'3069 MAIN ST',
	'1 MAIN ST',
	'309 ROUTE 20',
	'16 RUSSELL RD',
	'6A SOUTH ST',
	'28 MAIN ST',
	'100 CENTER ST',
	'28 MAIN ST',
	'28 MAIN ST',
	'28 MAIN ST',
	'21 MAIN ST STE 103',
	'191 NORTHAMPTON ST',
	'119 INDUSTRIAL DR',
	'1722 E OTIS RD',
	'600 SUFFIELD ST',
	'1339 SPRINGFIELD ST',
	'39 NORTH ST',
	'33C MAIN ST',
	'63 W STATE ST',
	'467 MAIN RD',
	'145 UNIVERSITY DR',
	'186 RUSSELL ST',
	'534 MAIN ST',
	'14 BARRE RD',
	'7 SCHOOL ST',
	'140 MAIN ST',
	'1 WILLIAMS ST',
	'650 DWIGHT ST',
	'650 DWIGHT ST',
	'50 HOLYOKE ST',
	'16 RUSSELL RD',
	'24 MULBERRY ST',
	'7 MONTAGUE RD',
	'83 WINSOR ST',
	'40 POST OFFICE PARK',
	'109 MAIN ST',
	'15 MONTAGUE RD',
	'37 BRIDGE ST',
	'37 BRIDGE ST',
	'191 NORTHAMPTON ST',
	'123 MAIN ST',
	'162 DEPOT RD',
	'541 N BROOKFIELD RD',
	'1057 PARK ST',
	'6 S CENTRAL ST',
	'1 WILLIAMS ST',
	'58 MAIN ST',
	'8 WENDELL RD',
	'8 POMEROY MEADOW RD',
	'46 MAIN ST',
	'1 HADLEY ST',
	'653 COLLEGE HWY',
	'36 CHURCH ST',
	'1057 PARK ST',
	'2020 BRIDGE ST',
	'2 MONSON RD',
	'165 WEST ST',
	'16 MILTON O FOUNTAIN WAY',
	'85 WINTHROP TER',
	'6A SOUTH ST',
	'8 W SILVER ST',
	'8 W SILVER ST',
	'600 SUFFIELD ST',
	'74 ELM ST',
	'2282 MAIN ST',
	'196 CHESTNUT PLAIN RD',
	'60 CHURCH LN',
	'40 POST OFFICE PARK',
	'1 WILLIAMS ST',
	'2 PACKARD PARK',
	'1883 MAIN ST',
	'1883 MAIN ST',
	'1149 MAIN ST',
	'1883 MAIN ST',
	'1883 MAIN ST',
	'1883 MAIN ST',
	'119 INDUSTRIAL DR',
	'3065 MAIN ST STE 1',
	'1883 MAIN ST',
	'393 BELMONT AVE',
	'1883 MAIN ST',
	'1500 MAIN ST',
	'817 WILLIAMS ST',
	'119 INDUSTRIAL DR',
	'1883 MAIN ST',
	'119 INDUSTRIAL DR',
	'1883 MAIN ST',
	'393 BELMONT AVE',
	'914 STATE ST',
	'19 OAK ST',
	'40 POST OFFICE PARK',
	'212 FENN ST',
	'212 FENN ST',
	'1 CENTER ST',
	'1180 ASHLEY FALLS RD',
	'623 MAIN ST',
	'545 S MAIN ST',
	'214 CHURCH ST',
	'212 FENN ST',
	'609 MAIN ST',
	'1 ELM ST',
	'222 MAIN ST',
	'25 MAPLE ST',
	'11 DEPOT ST',
	'37 COREY RD',
	'545 S MAIN ST',
	'35 FRANK P CONSOLATI WAY',
	'68 MAIN ST STE A',
	'212 FENN ST',
	'42 CRYSTAL ST',
	'6 BELL RD',
	'8 MILL RIVER GT BARRINGTON RD',
	'444 MAIN RD',
	'67 SUMMER ST',
	'45 N MAIN RD',
	'2089 STATE RD',
	'45 N MAIN RD',
	'83 SANDISFIELD RD',
	'99 MAIN ST',
	'64 MAIN ST',
	'224 NORFOLK RD',
	'10 CHURCH ST',
	'1 ELM ST',
	'35 FRANK P CONSOLATI WAY',
	'4 CENTER ST',
	'56 SPRING ST',
	'609 MAIN ST',
	'25 MAPLE ST',
	'100 ADAMS RD',
	'442 MAIN ST',
	'258 MAIN ST',
	'242 MAIN ST',
	'9 CENTER ST',
	'67 UPPER ST',
	'90-3 MAIN ST',
	'16 MAIN RD',
	'38 RIVER ST',
	'75 OLD MAIN ST',
	'60 SUGARLOAF ST STE 1',
	'54 FRENCH KING HWY',
	'178 AVENUE A',
	'1 E MAIN ST',
	'54 FRENCH KING HWY',
	'178 AVENUE A',
	'53 MAIN ST',
	'178 AVENUE A',
	'178 AVENUE A',
	'410 DANIEL SHAYS HWY',
	'136 MAIN ST',
	'72 S MAIN ST',
	'242 MAIN ST',
	'32 SPRING ST',
	'90-3 MAIN ST',
	'321 ZOAR RD STE 1',
	'242 MAIN ST',
	'7 CHURCH ST',
	'60 SUGARLOAF ST STE 1',
	'60 SUGARLOAF ST STE 1',
	'12 GARAGE RD',
	'178 AVENUE A',
	'59 LOCKES VILLAGE RD',
	'466 WENDELL DEPOT RD',
	'881 MAIN ST STE E',
	'477 MAIN ST',
	'123 CENTRAL ST',
	'10 COMMON RD STE 2',
	'1 COLUMBIA ST',
	'1 COLUMBIA ST',
	'240 BARNUM RD',
	'38 ELM ST',
	'132B PATRIOTS RD',
	'69 PLEASANT ST',
	'80 BOSTON RD',
	'215 AYER RD',
	'6 MAIN ST',
	'68 MAIN ST',
	'7 TAYLOR ST',
	'451 KING ST',
	'945 MASSACHUSETTS AVE',
	'41 LOWELL RD',
	'23 MAIN ST',
	'215 AYER RD',
	'449 PATRIOTS RD',
	'227 MAIN ST',
	'6 PEPPERELL RD',
	'6 NICHOLS ST',
	'227 MAIN ST',
	'160 CENTRAL ST',
	'60 AUBURN ST',
	'260 PLEASANT ST',
	'149 MAIN ST',
	'67 SHREWSBURY ST',
	'5 POST RD',
	'58 N MAIN ST',
	'9 POWERSTATION RD',
	'58 N MAIN ST',
	'320 HIGH ST',
	'103 MECHANIC ST',
	'331 MAIN ST',
	'458 MAIN ST',
	'23 UPTON ST',
	'1037 MAIN ST',
	'458 MAIN ST',
	'140 PRINCETON ST',
	'771 MAIN ST',
	'1199 MAIN ST STE 1',
	'166 LINWOOD ST',
	'359 MANCHAUG RD',
	'119 ELM ST',
	'31 CENTRAL ST',
	'10 UTLEY RD',
	'10 CENTRAL ST',
	'235 W MAIN ST',
	'76 SUTTON ST STE 2',
	'357 N MAIN ST',
	'191 WORCESTER ST',
	'681 MAIN ST',
	'269 MAIN ST',
	'298 N MAIN ST',
	'269 MAIN ST',
	'206 WORCESTER RD',
	'1138 STAFFORD ST',
	'26 MAPLE AVE',
	'43 MAPLE AVE',
	'194 MAIN ST',
	'166 BOSTON TPKE',
	'235 MAIN ST',
	'17 FERRY ST',
	'93 SAWYER ST',
	'10 MECHANIC ST',
	'6 CLINTON RD',
	'316 MAIN ST',
	'116 MAIN ST',
	'287 MILLVILLE RD',
	'339 MAIN ST',
	'124 W MAIN ST',
	'339 MAIN ST',
	'150 E MAIN ST',
	'67 W BOYLSTON ST UNIT 5',
	'10 CENTRAL ST',
	'119 ELM ST',
	'44 CHURCH ST',
	'156 WORCESTER PROVIDENCE TPKE STE 12',
	'381 CHANDLER ST',
	'4 E CENTRAL ST',
	'1049 MAIN ST STE 5',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'560 LINCOLN ST STE 8',
	'4 E CENTRAL ST',
	'290 W BOYLSTON ST',
	'4 E CENTRAL ST',
	'347 GREENWOOD ST STE 1',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'707 PLEASANT ST',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'4 E CENTRAL ST',
	'330 COCHITUATE RD',
	'330 COCHITUATE RD',
	'855 WORCESTER RD',
	'43 PARK ST',
	'31 NICHOLAS RD',
	'7 POST OFFICE SQ',
	'7 POST OFFICE SQ',
	'7 POST OFFICE SQ',
	'241 ARLINGTON ST',
	'205 MAIN ST',
	'158 GREAT RD UNIT J',
	'5 BEDFORD ST',
	'5 BEDFORD ST',
	'1092 MAIN ST',
	'70 BEDFORD RD',
	'34 WALDEN ST',
	'35 BEHARRELL ST',
	'67 TURNPIKE RD',
	'1661 WASHINGTON ST',
	'80 HOPEDALE ST',
	'5 CEDAR ST',
	'25 CHURCH ST',
	'20 FLORENCE ST',
	'143 MAIN ST',
	'12 MAPLE ST',
	'2 CONGRESS ST STE 1',
	'330 COCHITUATE RD',
	'18 HURON DR',
	'15 COMMON ST',
	'29 N MAIN ST STE 3',
	'164 CORDAVILLE RD',
	'145 LINCOLN RD',
	'17 LINCOLN RD',
	'179 GREAT RD',
	'18 UNION AVE',
	'517 BOSTON POST RD',
	'148 COMMONWEALTH RD',
	'277 BOSTON POST RD',
	'234 WOOD ST',
	'2 ABBOTT ST',
	'462 WASHINGTON ST',
	'5 BEDFORD ST',
	'462 WASHINGTON ST',
	'10 STEVENS ST',
	'187 ANDOVER ST STE 1',
	'20 MAIN ST',
	'360 N MAIN ST',
	'460 BOSTON RD',
	'5 BRICK KILN RD',
	'460 BOSTON RD',
	'5 BRICK KILN RD',
	'45 ALPINE LN',
	'321 ACTON RD',
	'54 BROADWAY RD',
	'170 PLEASANT ST',
	'135 S MAIN ST',
	'2 WASHINGTON SQ',
	'2 WASHINGTON SQ',
	'135 S MAIN ST',
	'2 WASHINGTON SQ',
	'64 CENTRAL ST STE 9',
	'64 CENTRAL ST STE 9',
	'299 MAIN ST',
	'135 S MAIN ST',
	'2 WASHINGTON SQ',
	'19 CROSS RD',
	'431 COMMON ST',
	'431 COMMON ST',
	'431 COMMON ST',
	'431 COMMON ST',
	'163 HOWE ST',
	'431 COMMON ST',
	'272 BROADWAY',
	'431 COMMON ST',
	'131 MAIN ST',
	'54 BROADWAY RD',
	'1677 MIDDLESEX ST STE 6',
	'155 FATHER MORISSETTE BLVD',
	'5 BRICK KILN RD',
	'20 MARKET ST',
	'155 FATHER MORISSETTE BLVD',
	'155 FATHER MORISSETTE BLVD',
	'79 E MAIN ST',
	'5 BRICK KILN RD',
	'95 BOSTON RD STE 5',
	'3 KENNEDY DR',
	'174 PARK ST',
	'462 WASHINGTON ST',
	'612 MIDDLESEX TPKE',
	'880 BOSTON RD STE I',
	'123 HAVEN ST STE 2',
	'462 WASHINGTON ST',
	'1751 MAIN ST',
	'353 MIDDLESEX RD',
	'1179 MAIN ST STE 1',
	'321 MAIN ST',
	'462 WASHINGTON ST',
	'561 MAIN ST',
	'5 W PRESCOTT ST',
	'62 BROOKSIDE RD',
	'301 LITTLETON RD',
	'18 CHURCH ST',
	'462 WASHINGTON ST',
	'462 WASHINGTON ST',
	'48 WATERFIELD RD',
	'462 WASHINGTON ST',
	'51 WILLOW ST',
	'51 WILLOW ST',
	'51 WILLOW ST',
	'245 MAPLE ST',
	'51 WILLOW ST',
	'51 WILLOW ST',
	'55 SPENCER ST',
	'437 LINCOLN AVE',
	'49 ELMWOOD RD',
	'51 WILLOW ST',
	'332 NAHANT RD STE 2',
	'200 MAIN ST',
	'151 RANTOUL ST',
	'16 TOZER RD',
	'36 WEST ST STE 3',
	'100 CUMMINGS CTR STE 108F',
	'7 ELM ST STE 1',
	'2 CENTRAL ST',
	'17 CONANT ST',
	'4 ESSEX CENTER DR',
	'4 MARTIN ST',
	'15 DALE AVE',
	'1068 WASHINGTON ST',
	'10 LEXINGTON AVE',
	'3 HOLLY ST',
	'15 DALE AVE',
	'589 BAY RD',
	'496 MAPLE ST',
	'27 MARKET ST'
];

const addresses2: string[] = [
	'Apt 1B',
	'Suite 200',
	'Unit C',
	'Floor 5',
	'Office 1',
	'Office 2',
	'Office 3',
	'Office 4',
	'Office 5'
];

const addresses3: string[] = [
	'Bakery',
	'Suite 200',
	'Unit CB',
	'Floor 25',
	'Office 212',
	'James road',
	'Suite 200',
	'Suite 201',
	'Suite 202',
	'Suite 203',
	'Suite 204',
	'Suite 205',
	'Suite 206',
	'Suite 207',
	'Suite 208',
	'Suite 209',
	'Suite 210',
	'Suite 211',
	'Suite 212',
	'Suite 213',
	'Suite 214',
	'Suite 215',
	'Suite 216',
	'Suite 217',
	'Suite 218',
	'Suite 219',
	'Suite 220',
	'Suite 221',
	'Suite 222',
	'Suite 223',
	'Suite 224',
	'Suite 225',
	'Suite 226',
	'Suite 227',
	'Suite 228',
	'Suite 229',
	'Suite 230',
	'Suite 231',
	'Suite 232',
	'Suite 233',
	'Suite 234',
	'Suite 235',
	'Suite 236',
	'Suite 237',
	'Suite 238',
	'Suite 239',
	'Suite 240',
	'Suite 241',
	'Suite 242',
	'Suite 243',
	'Suite 244',
	'Suite 245',
	'Suite 246',
	'Suite 247',
	'Suite 248',
	'Suite 249',
	'Suite 250'
];

const cities: string[] = [
	'New York',
	'Los Angeles',
	'Chicago',
	'Houston',
	'Philadelphia',
	'Phoenix',
	'San Antonio',
	'San Diego',
	'Dallas',
	'San Jose',
	'Indianapolis',
	'Jacksonville',
	'San Francisco',
	'Austin',
	'Columbus',
	'Fort Worth',
	'Charlotte',
	'Detroit',
	'El Paso',
	'Memphis',
	'Baltimore',
	'Boston',
	'Seattle',
	'Washington',
	'Denver',
	'Milwaukee',
	'Portland',
	'Las Vegas',
	'Oklahoma City',
	'Albuquerque',
	'Nashville',
	'Tucson',
	'Fresno',
	'Sacramento',
	'Long Beach',
	'Kansas City',
	'Mesa',
	'Virginia Beach',
	'Atlanta',
	'Colorado Springs',
	'Omaha',
	'Raleigh',
	'Miami',
	'Cleveland',
	'Tulsa',
	'Oakland',
	'Minneapolis',
	'Wichita',
	'Honolulu',
	'Arlington',
	'Bakersfield',
	'New Orleans',
	'Anaheim',
	'Tampa',
	'Aurora',
	'Santa Ana',
	'Saint Louis',
	'Pittsburgh',
	'Corpus Christi',
	'Riverside',
	'Cincinnati',
	'Lexington',
	'Anchorage',
	'Stockton',
	'Toledo',
	'Saint Paul',
	'Newark',
	'Greensboro',
	'Buffalo',
	'Plano',
	'Lincoln',
	'Henderson',
	'Fort Wayne',
	'Jersey City',
	'Saint Petersburg',
	'Chula Vista',
	'Louisville',
	'Norfolk',
	'Orlando',
	'Chandler',
	'Laredo',
	'Madison',
	'Winston-Salem',
	'Lubbock',
	'Baton Rouge',
	'Durham',
	'Garland',
	'Glendale',
	'Lexington',
	'Reno',
	'Hialeah',
	'Paradise',
	'Chesapeake',
	'Scottsdale',
	'North Las Vegas',
	'Irving',
	'Fremont',
	'Birmingham',
	'Rochester',
	'San Bernardino'
];

const states: string[] = [
	'AL',
	'KY',
	'OH',
	'AK',
	'LA',
	'OK',
	'AZ',
	'ME',
	'OR',
	'AR',
	'MD',
	'PA',
	'AS',
	'MA',
	'PR',
	'CA',
	'MI',
	'RI',
	'CO',
	'MN',
	'SC',
	'CT',
	'MS',
	'SD',
	'DE',
	'MO',
	'TN',
	'DC',
	'MT',
	'TX',
	'FL',
	'NE',
	'TN',
	'GA',
	'NV',
	'UT',
	'GU',
	'NH',
	'VT',
	'HI',
	'NJ',
	'VA',
	'ID',
	'NM',
	'VI',
	'IL',
	'NY',
	'WA',
	'IN',
	'NC',
	'WV',
	'IA',
	'ND',
	'WI',
	'KS',
	'MP',
	'WY'
];

const countries: string[] = ['US'];

const postalCodes: string[] = [
	'10001',
	'90001',
	'60601',
	'77001',
	'75201',
	'33101',
	'94101',
	'98112',
	'98072',
	'98053',
	'98052',
	'98040',
	'98029',
	'98006',
	'98004',
	'95120',
	'95070',
	'95032',
	'94941',
	'94549',
	'94123',
	'94062',
	'94025',
	'94024',
	'94010',
	'92679',
	'92660',
	'92651',
	'92130',
	'91302',
	'90274',
	'90272',
	'90266',
	'90210',
	'90049',
	'90024',
	'78746',
	'77479',
	'77381',
	'77024',
	'77005',
	'75230',
	'75225',
	'75205',
	'75093',
	'75025',
	'75019',
	'63141',
	'60611',
	'60564',
	'60521',
	'60093',
	'60091',
	'60062',
	'60048',
	'60047',
	'60045',
	'60035',
	'60015',
	'60010',
	'55347',
	'46032',
	'37027',
	'33496',
	'33156',
	'32082',
	'30327',
	'30305',
	'30097',
	'30022',
	'22182',
	'22102',
	'22101',
	'20854',
	'20817',
	'20815',
	'19355',
	'19087',
	'19010',
	'11791',
	'11530',
	'11050',
	'10708',
	'10583',
	'10128',
	'10036',
	'10028',
	'10024',
	'10023',
	'10022',
	'10021',
	'72577',
	'72578',
	'72579',
	'72543',
	'72581',
	'72583',
	'72584',
	'72565',
	'72587',
	'72601',
	'72601',
	'72611',
	'72613',
	'72615',
	'72616',
	'72617',
	'72650',
	'72619',
	'72623',
	'72624',
	'72626',
	'72628',
	'72629',
	'72631',
	'72632',
	'72633',
	'72682',
	'72634',
	'72635',
	'72636',
	'72638',
	'72639',
	'72650',
	'72640',
	'72641',
	'72641',
	'72642',
	'72644',
	'72644',
	'72645',
	'72648',
	'72650',
	'72651',
	'72653',
	'72653',
	'72641',
	'72655',
	'72658',
	'72616',
	'72660',
	'72661',
	'72662',
	'72663',
	'72666',
	'72668',
	'72669',
	'72670',
	'72672',
	'72675',
	'72677',
	'72679',
	'72680',
	'72682',
	'72641',
	'72683',
	'72685',
	'72650',
	'72686',
	'72687',
	'72701',
	'72701',
	'72703',
	'72701',
	'72711',
	'72712',
	'72712',
	'72714',
	'72715',
	'72717',
	'72744',
	'72718',
	'72745',
	'72719',
	'72721',
	'72727',
	'72722',
	'72727',
	'72728',
	'72729',
	'72730',
	'72732',
	'72733',
	'72734',
	'72735',
	'72736',
	'72737',
	'72738',
	'72739',
	'72740',
	'72703',
	'72742',
	'72744',
	'72745',
	'72736',
	'72747',
	'72744',
	'72749',
	'72751',
	'72752',
	'72753',
	'72756',
	'72756',
	'72756',
	'72727',
	'72760',
	'72761',
	'72764',
	'72764',
	'72764',
	'72764',
	'72768',
	'72744',
	'72769',
	'72770',
	'72727',
	'72773',
	'72774',
	'72776',
	'72801',
	'72802',
	'72801',
	'72802',
	'72820',
	'72821',
	'72823',
	'72824',
	'72826',
	'72827',
	'72860',
	'72829',
	'72830',
	'72832',
	'72833',
	'72834',
	'72835',
	'72837',
	'72838',
	'72830',
	'72839',
	'72840',
	'72841',
	'72842',
	'72843',
	'72845',
	'72846',
	'72846',
	'72847',
	'72851',
	'72852',
	'72853',
	'72854',
	'72855',
	'72837',
	'72856',
	'72857',
	'72858',
	'72860',
	'72863',
	'72865',
	'72901',
	'72901',
	'72903',
	'72904',
	'72908',
	'72908',
	'72903',
	'72904',
	'72901',
	'72903',
	'72908',
	'72921',
	'72923',
	'72926',
	'72927',
	'72928',
	'72930',
	'72932',
	'72933',
	'72934',
	'72935',
	'72936',
	'72937',
	'72938',
	'72940',
	'72941',
	'72943',
	'72944',
	'72945',
	'72946',
	'72947',
	'72948',
	'72949',
	'72950',
	'72951',
	'72952',
	'72955',
	'72956',
	'72956',
	'72958',
	'72959',
	'73001',
	'73002',
	'73003',
	'73004',
	'73018',
	'73005',
	'73006',
	'73007',
	'73008',
	'73009',
	'73010',
	'73011',
	'73052',
	'73003',
	'73013',
	'73014',
	'73015',
	'73016',
	'73028',
	'73017',
	'73018',
	'73020',
	'73021',
	'73096',
	'73022',
	'73018',
	'73024',
	'73096',
	'73003',
	'73069',
	'73027',
	'73044',
	'73028',
	'73005',
	'73029',
	'73030',
	'73031',
	'73032',
	'73033',
	'73034',
	'73036',
	'73038',
	'73040',
	'73041',
	'73062',
	'73042',
	'73040',
	'73043',
	'73044',
	'73045',
	'73047',
	'73048',
	'73049',
	'73050',
	'73051',
	'73052',
	'73009',
	'73053',
	'73054',
	'73055',
	'73056',
	'73057',
	'73044',
	'73058',
	'73059',
	'73061',
	'73062',
	'73063',
	'73064',
	'73065',
	'73066',
	'73067',
	'73082',
	'73068',
	'73069',
	'73069',
	'73069',
	'73072',
	'73069',
	'73072',
	'73073',
	'73074',
	'73075',
	'73077',
	'73078',
	'73018',
	'73079',
	'73080',
	'73082',
	'73013',
	'73034',
	'73084',
	'73099',
	'73086',
	'73089',
	'73059',
	'73090',
	'73092',
	'73093',
	'73095',
	'73096',
	'73097',
	'73098',
	'73099',
	'73102',
	'73102',
	'73102',
	'73117',
	'73117',
	'73102',
	'73125',
	'73125',
	'73129',
	'73110',
	'73117',
	'73112',
	'73114',
	'73114',
	'73129',
	'73114',
	'73117',
	'73118',
	'73195',
	'73120',
	'73117',
	'73132',
	'73132',
	'73125',
	'73125',
	'73125',
	'73125',
	'73125',
	'73129',
	'73110',
	'73114',
	'73132',
	'73120',
	'73129',
	'73117',
	'73127',
	'73159',
	'73110',
	'73117',
	'73162',
	'73129',
	'73159',
	'73110',
	'73145',
	'73102',
	'73147',
	'73108',
	'73129',
	'73110',
	'73114',
	'73117',
	'73160',
	'73118',
	'73115',
	'73120',
	'73112',
	'73159',
	'73160',
	'73162',
	'73129',
	'73159',
	'73170',
	'73162',
	'73159',
	'73195',
	'73159',
	'73195',
	'73401',
	'73401',
	'73401',
	'73425',
	'73430',
	'73448',
	'73432',
	'73433',
	'73434',
	'73435',
	'73436',
	'73437',
	'73438',
	'73439',
	'73440',
	'73441',
	'73448',
	'73442',
	'73401',
	'73443',
	'73444',
	'73446',
	'73446',
	'73447',
	'73448',
	'73449',
	'73450',
	'73453',
	'73455',
	'73438',
	'73456',
	'73458',
	'73448',
	'73459',
	'73460',
	'73461',
	'73438',
	'73463',
	'73481',
	'73487',
	'73030',
	'73491',
	'73501',
	'73501',
	'73503',
	'73501',
	'73505',
	'73505',
	'73501',
	'73520',
	'73521',
	'73521',
	'73526',
	'73527',
	'73527',
	'73528',
	'73529',
	'73533',
	'73530',
	'73542',
	'73531',
	'73546',
	'73532',
	'73554',
	'73533',
	'73533',
	'73537',
	'73554',
	'73538',
	'73521',
	'73539',
	'73505',
	'73538',
	'73541',
	'73542',
	'73543',
	'73544',
	'73550',
	'73546',
	'73547',
	'73554',
	'73548',
	'73573',
	'73549',
	'73550',
	'73542',
	'73527',
	'73552',
	'73546',
	'73554',
	'73555',
	'73556',
	'73507',
	'73559',
	'73566',
	'73521',
	'73560',
	'73562',
	'73564',
	'73565',
	'73566',
	'73567',
	'73568',
	'73572',
	'73569',
	'73542',
	'73570',
	'73554',
	'73572',
	'73573',
	'73601',
	'73620',
	'73601',
	'73622',
	'73632',
	'73624',
	'73625',
	'73601',
	'73626',
	'73627',
	'73664',
	'73628',
	'73632',
	'73660',
	'73639',
	'73669',
	'73632',
	'73641',
	'73660',
	'73644',
	'73645',
	'73662',
	'73646',
	'73624',
	'73647',
	'73644',
	'73644',
	'73650',
	'73651',
	'73654',
	'73651',
	'73655',
	'73658',
	'73667',
	'73660',
	'73632',
	'73661',
	'73662',
	'73663',
	'73664',
	'73662',
	'73667',
	'73662',
	'73669',
	'73673',
	'73701',
	'73701',
	'73701',
	'73701',
	'73716',
	'73741',
	'73717',
	'73718',
	'73719',
	'73728',
	'73720',
	'73742',
	'73722',
	'73724',
	'73716',
	'73727',
	'73701',
	'73728',
	'73716',
	'73729',
	'73730',
	'73717',
	'73731',
	'73736',
	'73734',
	'73742',
	'73735',
	'73736',
	'73737',
	'73738',
	'73739',
	'73741',
	'73741',
	'73742',
	'73743',
	'73744',
	'73763',
	'73746',
	'73737',
	'73747',
	'73741',
	'73749',
	'73750',
	'73753',
	'73754',
	'73755',
	'73742',
	'73756',
	'73738',
	'73758',
	'73759',
	'73760',
	'73761',
	'73762',
	'73763',
	'73750',
	'73766',
	'73768',
	'73663',
	'73771',
	'73772',
	'73701',
	'73773',
	'73801',
	'73801',
	'73832',
	'73834',
	'73835',
	'73859',
	'73663',
	'73840',
	'73841',
	'73842',
	'73843'
];

type Data = {
	certCardID: string[];
	certPin: string[];
	email: string[];
	numCards: number;
	// firstName: string[];
	// lastName: string[];
	// address1: string[];
	// address2: string[];
	// address3: string[];
	// city: string[];
	// state: string[];
	// country: string[];
	// postalCode: string[];
};

type Entry = {
	ctoList: string[];
};

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');
	return {
		user
	};
};
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const data: Data = {
			certCardID: String(formData.get('cert-card')).split(','),
			certPin: String(formData.get('certPin')).split(','),
			email: String(formData.get('email')).split(','),
			numCards: Number(formData.get('cardNumber') - 1)
		};

		const randomList = [];

		for (let i = 0; i <= data.numCards; i++) {
			const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			const address1 = addresses1[Math.floor(Math.random() * addresses1.length)];
			const address2 = addresses2[Math.floor(Math.random() * addresses2.length)];
			const address3 = addresses3[Math.floor(Math.random() * addresses3.length)];
			const city = cities[Math.floor(Math.random() * cities.length)];
			const state = states[Math.floor(Math.random() * states.length)];
			const country = countries[Math.floor(Math.random() * countries.length)];
			const postalCode = postalCodes[Math.floor(Math.random() * postalCodes.length)];
			const dob = generateRandomDOB();
			const ssn = generateRandomSSN();
			const homePhone = randomPhoneNumber();
			const officePhone = randomPhoneNumber();
			const mobilePhone = randomPhoneNumber();
			for (let i = 0; i < data.certCardID.length; i++) {
				randomList.push(
					[
						'3092',
						data.certCardID[i],
						data.certPin[i],
						',',
						lastName,
						firstName,
						',',
						address1,
						address2,
						address3,
						city,
						state,
						country,
						postalCode,
						dob,
						ssn,
						'',
						'',
						'',
						data.email[i],
						homePhone,
						officePhone,
						mobilePhone,
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'1',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'Y',
						state,
						'',
						'',
						'',
						'Card Creation'
					].join(',')
				);
			}
		}

		console.log(randomList);

		function generateRandomDOB() {
			const startDate = new Date('1950-01-01');
			const endDate = new Date('2001-12-31');
			const timeDiff = endDate.getTime() - startDate.getTime();
			const randomTime = Math.random() * timeDiff;
			const randomDate = new Date(startDate.getTime() + randomTime);

			return randomDate.toISOString().slice(0, 10).replace(/-/g, '');
		}

		function generateRandomSSN() {
			const randomSSN = Math.floor(Math.random() * 900000000) + 100000000;

			return randomSSN;
		}

		function randomPhoneNumber() {
			const randomPhone = Math.floor(Math.random() * 9000000000) + 1000000000;

			return randomPhone;
		}

		return {
			success: true,
			ctoData: randomList
		};
	}
};
