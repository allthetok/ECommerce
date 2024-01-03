/* eslint-disable @typescript-eslint/no-unused-vars */
import { IndProduct, Brands, Models } from '../helpers/betypes'

const ultraBoostLight: IndProduct = {
	id: 1,
	brand: 'Adidas',
	brandId: 1,
	modelId: 1,
	modelName: 'UltraBoost',
	name: 'UltraBoost Light Shoes',
	releaseDate: '2023-01-28',
	colors: [
		{
			color: 'Cloud White/Arctic Night/Lucid Lemon',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9fc33404c64d4b8db52af275add6b62e_9366/Ultraboost_Light_Shoes_White_IE1768_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/912e92ce71c54aea9392c5675fc6cd33_9366/Ultraboost_Light_Shoes_White_IE1768_02_standard_hover.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2174c34dbfd642419e986969823bdaab_9366/Ultraboost_Light_Shoes_White_IE1768_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f97d22f5b3af403ab63a5ba083e9edef_9366/Ultraboost_Light_Shoes_White_GY9350_HM3_hover.jpg']
		},
		{
			color: 'Dark Blue/Cream White/Core Black',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea6edbe456d3435e969eb28b1540c0ad_9366/Ultraboost_Light_Shoes_Blue_HP9203_HM1.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/433b72e099874fd5a5fdcdded897be8b_9366/Ultraboost_Light_Shoes_Blue_HP9203_HM3_hover.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb54aa0de68b4098a24c4ac30e20c940_9366/Ultraboost_Light_Shoes_Blue_HP9203_HM4.jpg']
		}
	],
	price: 260,
	description: `Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. 
	The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. 
	With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.`,
	sizes: [
		{
			color: 'Cloud White/Arctic Night/Lucid Lemon',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Dark Blue/Cream White/Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const ultraBoost1: IndProduct = {
	id: 2,
	brand: 'Adidas',
	brandId: 1,
	modelId: 1,
	modelName: 'UltraBoost',
	name: 'UltraBoost 1.0 Shoes',
	releaseDate: '2019-05-10',
	colors: [
		{
			color: 'Core Black/Core Black/Beam Green F22',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/c608f554cb3b4d12b392af000188c513_9366/Chaussure_Ultraboost_1.0_noir_HQ4199_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/333d70cd5438497e8171af4501038746_9366/Chaussure_Ultraboost_1.0_noir_HQ4199_010_hover_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf7846b566e24a318217af000188a4d4_9366/Chaussure_Ultraboost_1.0_noir_HQ4199_012_hover_standard.jpg']
		},
		{
			color: 'Grey Three/Grey Five/Core Black',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f93892573de4e0485d9af160004127c_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f8ec76490c048ac89a2af1600044d8b_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_02_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b844830395c4f88bf16af1600036906_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_012_hover_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60f94aa4ca62471eaa39af1600038cc2_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_01_standard.jpg']
		}
	],
	price: 260,
	description: `From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable. 
		An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the midsole cushions from the first step to the last mile. 
		The Stretchweb outsole flexes naturally for an energized ride, and Continental™ Rubber gives you the traction you need to keep that pep in your step.`,
	sizes: [
		{
			color: 'Core Black/Core Black/Beam Green F22',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Grey Three/Grey Five/Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const ultraBoost22: IndProduct = {
	id: 3,
	brand: 'Adidas',
	brandId: 1,
	modelId: 1,
	modelName: 'UltraBoost',
	name: 'UltraBoost 22 Shoes',
	releaseDate: '2021-12-06',
	colors: [
		{
			color: 'Core Black / Core Black / Core Black',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/2ca56ffeb5554f9dad08af70010d84c3_9366/Ultraboost_22_Shoes_Black_HQ8593_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cf5e0fd2e184d26b746ad7800abed79_9366/Ultraboost_22_Shoes_Black_GZ0127_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/659a5eb44a8747c397dbad7800abe68f_9366/Ultraboost_22_Shoes_Black_GZ0127_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/Ultraboost_22_Shoes_Black_GZ0127_02_standard_hover.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg']
		},
		{
			color: 'Core Black / Core Black / Lucid Blue S23',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cca464eddf84df9a26aaf70010f1476_9366/Ultraboost_22_Shoes_Black_HQ8593_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51c83ccaf9bc41278ae7af70010dfcad_9366/Ultraboost_22_Shoes_Black_HQ8593_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8379919489d477eb087af70010e375f_9366/Ultraboost_22_Shoes_Black_HQ8593_02_standard_hover.jpg']
		}
	],
	price: 175,
	description: `Even on your busiest days, running is a priority. These adidas trainers make every mile count, 
		thanks to the incredible energy return of BOOST cushioning. The Linear Energy Push system increases stability 
		for a smooth and steady stride, and the Stretchweb outsole delivers natural flex to keep you moving comfortably, no matter your distance or pace.`,
	sizes: [
		{
			color: 'Core Black / Core Black / Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Core Black / Core Black / Lucid Blue S23',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const ultraBoost4: IndProduct = {
	id: 4,
	brand: 'Adidas',
	brandId: 1,
	modelId: 1,
	modelName: 'UltraBoost',
	name: 'UltraBoost 4.0 Shoes',
	releaseDate: '2021-03-04',
	colors: [
		{
			color: 'Core Black / Core Black / Active Red',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b56f062b132c400ab494ac67011578a5_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c1fa86309c94e6594beac55009169ab_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8906fe0c2b3b48af9486ac55009162ba_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4df6a4c2c1a6459eb8a1ac5500915c8e_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_02_standard_hover.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584670fb39cd4f1aa70fac5500914ec4_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_01_standard.jpg']
		},
		{
			color: 'Cloud White / Cloud White / Core Black'
			,
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/deaea76b47ee49cc9e3aac6701158cef_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e465482f3bc548858192ac670115932a_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b6042e962b046d6a597ac670115868f_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_02_standard_hover.jpg']
		}
	],
	price: 200,
	description: `A young legend. The adidas Ultraboost debuted in 2015, and it became a go-to far beyond the realm of running. 
		These shoes have a soft knit upper that offers ventilation where you need it most. 
		They ride on our original tooling, with a Boost midsole for comfort you need to feel to believe`,
	sizes: [
		{
			color: 'Core Black / Core Black / Active Red',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Cloud White / Cloud White / Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const superStarOriginal: IndProduct = {
	id: 5,
	brand: 'Adidas',
	brandId: 1,
	modelId: 2,
	modelName: 'Superstar',
	name: 'Superstar Shoes',
	releaseDate: '2019-11-01',
	colors: [
		{
			color: 'Cloud White / Core Black / Cloud White',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3708ab90979a4ba59535aad6009a2fa8_9366/Superstar_Shoes_White_EG4958_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/Superstar_Shoes_White_EG4958_02_standard_hover.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',]
		},
		{
			color: 'Core Black / Cloud White / Core Black',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bc064f2ff6c4d848308aad801165d86_9366/Superstar_Shoes_Black_EG4957_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb33bd67c8c64ebd96f8aad801164853_9366/Superstar_Shoes_Black_EG4957_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/af405adab99747708f01aad8011626ff_9366/Superstar_Shoes_Black_EG4957_01_standard.jpg']
		},
		{
			color: 'Cloud White / Collegiate Green / Cloud White',
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51eb79c0f0f24d27808aada8003f5dee_9366/Superstar_Shoes_White_GZ3742_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a27c0d02125e43bfbe33ada800419eec_9366/Superstar_Shoes_White_GZ3742_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/0e48a33b2baa41beaceeada800413d50_9366/Superstar_Shoes_White_GZ3742_01_standard.jpg']
		}
	],
	price: 130,
	description: `Built for basketball, adopted by hip hop and skate, the classic leather Superstar changed the game the moment it stepped off the court. 
		The serrated 3-Stripes mark, iconic shell style toe, and box logo makes this one of the true Originals.`,
	sizes: [
		{
			color: 'Cloud White / Core Black / Cloud White',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Core Black / Cloud White / Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Cloud White / Collegiate Green / Cloud White',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const superStarGore: IndProduct = {
	id: 6,
	brand: 'Adidas',
	brandId: 1,
	modelId: 2,
	modelName: 'Superstar',
	name: 'Superstar Gore-Tex Shoes',
	releaseDate: '2023-11-02',
	colors: [
		{
			color: 'Core Black / Core Black / Cloud White',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/ca6f798521b344c8b16d744cd1bdce34_9366/Superstar_Gore-Tex_Shoes_Black_IF6162_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/dc80374d580b41fc946efa5d84c375b2_9366/Superstar_Gore-Tex_Shoes_Black_IF6162_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/452870ebe2fe4869a834c524a6861772_9366/Superstar_Gore-Tex_Shoes_Black_IF6162_03_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/8e9f8438797b412687ab7dca0d610ef1_9366/Superstar_Gore-Tex_Shoes_Black_IF6162_04_standard.jpg']
		}
	],
	price: 180,
	description: `Whether the day brings rain or snow, these adidas Superstar sneakers have you covered. A GORE-TEX membrane provides breathable protection 
		from the elements without sacrificing the classic style these shoes are known for. First hitting the court in 1970, the Superstar has spent decades exploring
		street culture. A fresh nubuck upper keeps this iconic shell-toe shoe ready for modern times. Waterproof and windproof, they'll keep your feet comfortable and
		your stride going strong no matter what's on the agenda outside.`,
	sizes: [
		{
			color: 'Core Black / Core Black / Cloud White',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const stanSmithOriginal: IndProduct = {
	id: 7,
	brand: 'Adidas',
	brandId: 1,
	modelId: 3,
	modelName: 'Stan Smith',
	name: 'Stan Smith Shoes',
	releaseDate: '2019-11-01',
	colors: [
		{
			color: 'Cloud White / Cloud White / Collegiate Navy',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/e01dea68cf93434bae5aac0900af99e8_9366/Stan_Smith_Shoes_White_FX5500_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/dcc8b21f893a457886d8ac0900afa80b_9366/Stan_Smith_Shoes_White_FX5500_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/7070d7f34b284c91ac1fac0900afb687_9366/Stan_Smith_Shoes_White_FX5500_04_standard.jpg']
		},
		{
			color: 	'Cloud White / Cloud White / Green',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/b47d77eba6f945ea8dabac210127b11e_9366/Stan_Smith_Shoes_White_FX5501_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/817c815ba1db46629f89ac210127bebb_9366/Stan_Smith_Shoes_White_FX5501_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/f633a0c9cb124e16914cac210127ca62_9366/Stan_Smith_Shoes_White_FX5501_04_standard.jpg',]
		},
		{
			color: 	'Cloud White / Cloud White / Core Black',
			images: [			'https://assets.adidas.com/images/w_840,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/ac706d8555244a6e8ea7ac1e00f521d1_9366/Stan_Smith_Shoes_White_FX5502_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/f86168171d2a4644a8eeac1e00f52f85_9366/Stan_Smith_Shoes_White_FX5502_04_standard.jpg']
		}
	],
	price: 130,
	description: `Timeless appeal. Effortless style. Everyday versatility. For over 50 years and counting, adidas Stan Smith Shoes have continued to hold their place as an icon. This pair shows off a fresh redesign as part of adidas' commitment to use only recycled polyester by 2024. With a vegan upper and an outsole made from rubber waste, they still have iconic style, they're just made with the planet in mind.
		This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester`,
	sizes: [
		{
			color: 'Cloud White / Cloud White / Collegiate Navy',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 	'Cloud White / Cloud White / Green',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Cloud White / Cloud White / Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const stanSmithBape: IndProduct = {
	id: 8,
	brand: 'Adidas',
	brandId: 1,
	modelId: 3,
	modelName: 'Stan Smith',
	name: 'Bape 30th Anniversary Black Stan Smith Shoes',
	releaseDate: '2023-11-18',
	colors: [
		{
			color: 'Core Black/Core Black/Gold Metallic',
			images: ['https://images.stockx.com/360/adidas-Stan-Smith-Bape-30th-Anniversary-Black/Images/adidas-Stan-Smith-Bape-30th-Anniversary-Black/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1700666677&h=384&q=57',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3uSqfo1qpUwDD8VNuyAS8SxDZQRBK3NRnw&usqp=CAU',
				'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/095/038/922/original/IG1116.png.png?action=crop&width=750']
		}
	],
	price: 160,
	description: `Sporting an immaculate Cloud White and Core Black, these renditions of the Stan Smith are an ode to understated sophistication with bursts of signature BAPE flair. The shoe's leather upper boasts an embossed BAPE camo print, offering a subtle nod to the brand's heritage. The heel tab proudly showcases BAPE's vibrant camo, contrasting the subtle detail.
		Glistening touches of metallic gold adorn the shoe, from the midfoot's Stan Smith inscription to the special 30th Anniversary BAPE lace dubrae. The iconic Stan Smith portrait on the tongue tag is replaced with BAPE's unmistakable APE logo, bathed in the same luxe gold. Complementary golden BAPE branding graces the heel tab and insole, while a rich creamy midsole and outsole seal the design's elegance.`,
	sizes: [
		{
			color: 'Core Black/Core Black/Gold Metallic',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const NMDR1: IndProduct = {
	id: 9,
	brand: 'Adidas',
	brandId: 1,
	modelId: 4,
	modelName: 'NMD',
	name: 'NMD_R1 Shoes',
	releaseDate: '2020-10-18',
	colors: [
		{
			color: 'Core Black / Core Black / Core Black',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/62d96641e799450fbbdfad0800cb06ed_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/3373d7a437dd4e6688ccad0800cb1291_9366/NMD_R1_Shoes_Black_GZ9256_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/8975c8cd84524d568552ad0800cb207e_9366/NMD_R1_Shoes_Black_GZ9256_04_standard.jpg',]
		},
		{
			color: 'White Tint / Glory Red / Semi Lucid Blue',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/76752172861843209f02aef900fd6858_9366/NMD_R1_Shoes_White_HQ4451_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/1c3d884f0e0043408142aef900fd8116_9366/NMD_R1_Shoes_White_HQ4451_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/256d930ec0ce4579aed3aef900fd99ca_9366/NMD_R1_Shoes_White_HQ4451_04_standard.jpg']
		}
	],
	price: 200,
	description: `Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed '80s runner from the adidas archive, these modern sneakers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort. Bold color and signature midsole plugs make a statement, so wherever you're headed, you're sure to show up in style.
		This product is made with a yarn that features 50% recycled polyester and 50% Parley Ocean Plastic — plastic waste which we intercepted from remote islands, beaches, coastal communities and shorelines in order to prevent it from polluting our oceans. In total, this product has 20% recycled content.`,
	sizes: [
		{
			color: 'Core Black / Core Black / Core Black',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'White Tint / Glory Red / Semi Lucid Blue',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}

const NMDR2: IndProduct = {
	id: 10,
	brand: 'Adidas',
	brandId: 1,
	modelId: 4,
	modelName: 'NMD',
	name: 'NMD_R2 Shoes',
	releaseDate: '2022-09-27',
	colors: [
		{
			color: 'Cloud White / Core Black / Cloud White',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/ba6af5f7bba845849d64ad6a0147888f_9366/NMD_R1_V2_Shoes_Black_GX6367_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/afbb213da7444aa38d9ead6a0147955c_9366/NMD_R1_V2_Shoes_Black_GX6367_04_standard.jpg']
		},
		{
			color: 'Core Black / Cloud White / Cloud White',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/aa6658fcf2c9436b882fae790049b298_9366/NMD_R1_V2_Shoes_White_GZ1999_01_standard.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/6d5a2166de314e92a9c1ae79004bdabe_9366/NMD_R1_V2_Shoes_White_GZ1999_02_standard_hover.jpg',
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/5b0629f79bea4e94a117ae79004cac3f_9366/NMD_R1_V2_Shoes_White_GZ1999_04_standard.jpg']
		}
	],
	price: 190,
	description: `Head into the future with confidence. Not to mention style. Inspired by running silhouettes from the '80s archive, NMD was born in 2015 to merge sleek style with modern technologies and comfort. These juniors' adidas NMD_R1 V2 shoes keep your feet cushioned with a responsive BOOST midsole. Chic transparent overlays add a cyberpunk vibe. The future is yours. Go and get it.
	This shoe's upper is made with a high-performance yarn which contains at least 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. The other 50% of the yarn is recycled polyester.`,
	sizes: [
		{
			color: 'Cloud White / Core Black / Cloud White',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		},
		{
			color: 'Core Black / Cloud White / Cloud White',
			sizes: [
				{ size: 'M 4.5', amount: 5 },
				{ size: 'M 5.0', amount: 5 },
				{ size: 'M 5.5', amount: 5 },
				{ size: 'M 6.0', amount: 5 },
				{ size: 'M 6.5', amount: 5 },
				{ size: 'M 7.0', amount: 5 },
				{ size: 'M 7.5', amount: 5 },
				{ size: 'M 8.0', amount: 5 },
				{ size: 'M 8.5', amount: 5 },
				{ size: 'M 9.0', amount: 5 },
				{ size: 'M 9.5', amount: 5 },
				{ size: 'M 10.0', amount: 5 },
				{ size: 'M 10.5', amount: 5 },
				{ size: 'M 11.0', amount: 5 },
				{ size: 'M 11.5', amount: 5 },
				{ size: 'M 12.0', amount: 5 },
				{ size: 'M 12.5', amount: 5 },
				{ size: 'M 13.0', amount: 5 },
				{ size: 'M 14.0', amount: 5 },
				{ size: 'M 15.0', amount: 5 },
				{ size: 'M 16.0', amount: 5 },
				{ size: 'M 17.0', amount: 5 },
				{ size: 'M 18.0', amount: 5 }
			]
		}
	]
}