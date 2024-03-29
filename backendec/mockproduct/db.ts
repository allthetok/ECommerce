/* eslint-disable quotes */
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
			]
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
				{ size: 'M 4.5', amount: 4 },
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
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60f94aa4ca62471eaa39af1600038cc2_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3f93892573de4e0485d9af160004127c_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1f8ec76490c048ac89a2af1600044d8b_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_02_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b844830395c4f88bf16af1600036906_9366/Ultraboost_1.0_Shoes_Grey_HQ4200_012_hover_standard.jpg']
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
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cf5e0fd2e184d26b746ad7800abed79_9366/Ultraboost_22_Shoes_Black_GZ0127_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/659a5eb44a8747c397dbad7800abe68f_9366/Ultraboost_22_Shoes_Black_GZ0127_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ae921bb08034aa2803fad7800abdd7f_9366/Ultraboost_22_Shoes_Black_GZ0127_02_standard_hover.jpg']
		},
		{
			color: 'Core Black / Core Black / Lucid Blue S23',
			images: [
				'https://assets.adidas.com/images/w_840,f_auto,q_auto/2ca56ffeb5554f9dad08af70010d84c3_9366/Ultraboost_22_Shoes_Black_HQ8593_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cca464eddf84df9a26aaf70010f1476_9366/Ultraboost_22_Shoes_Black_HQ8593_04_standard.jpg',
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
			images: [
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584670fb39cd4f1aa70fac5500914ec4_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c1fa86309c94e6594beac55009169ab_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8906fe0c2b3b48af9486ac55009162ba_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4df6a4c2c1a6459eb8a1ac5500915c8e_9366/Ultraboost_4.0_DNA_Shoes_Black_FY9121_02_standard_hover.jpg']
		},
		{
			color: 'Cloud White / Cloud White / Core Black'
			,
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b56f062b132c400ab494ac67011578a5_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/deaea76b47ee49cc9e3aac6701158cef_9366/Ultraboost_4.0_DNA_Shoes_White_FY9120_03_standard.jpg',
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
			images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3708ab90979a4ba59535aad6009a2fa8_9366/Superstar_Shoes_White_EG4958_03_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a358bcd5e3d453da815aad6009a249e_9366/Superstar_Shoes_White_EG4958_02_standard_hover.jpg']
		},
		{
			color: 'Core Black / Cloud White / Core Black',
			images: ['https://assets.adidas.com/images/w_840,f_auto,q_auto/af405adab99747708f01aad8011626ff_9366/Superstar_Shoes_Black_EG4957_01_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bc064f2ff6c4d848308aad801165d86_9366/Superstar_Shoes_Black_EG4957_04_standard.jpg',
				'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb33bd67c8c64ebd96f8aad801164853_9366/Superstar_Shoes_Black_EG4957_02_standard_hover.jpg',]
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

const Yeezy350Base: IndProduct = {
	id: 11,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 1,
	modelName: 'Yeezy Boost 350',
	name: 'Yeezy Boost 350 V2',
	releaseDate: '2022-03-21',
	colors: [
		{
			color: 'Bone/Bone/Bone',
			images: ['https://stayfresh.ca/cdn/shop/products/YEEZYBOOST350V2BONEaHQ6316_600x.jpg?v=1653542654',
				'https://stayfresh.ca/cdn/shop/products/YEEZYBOOST350V2BONEbHQ6316_600x.jpg?v=1653542654',
				'https://stayfresh.ca/cdn/shop/products/YEEZYBOOST350V2BONEcHQ6316_300x.jpg?v=1653542654']
		},
		{
			color: 	'Onyx/Onyx/Onyx',
			images: ['https://stayfresh.ca/cdn/shop/products/YEEZYBOOST350V2ONYX2022aHQ4540_600x.jpg?v=1657061101',
				'https://stayfresh.ca/cdn/shop/products/YEEZYBOOST350V2ONYX2022bHQ4540_600x.jpg?v=1657061101']
		},
		{
			color: 	'White/Core Black/Red',
			images: ['https://stayfresh.ca/cdn/shop/products/ADIDASYEEZYBOOST350V2BLACKREDbCP9652_600x.jpg?v=1667867388',
				'https://stayfresh.ca/cdn/shop/products/ADIDASYEEZYBOOST350V2BLACKREDaCP9652_600x.jpg?v=1667867388',
				'https://stayfresh.ca/cdn/shop/products/ADIDASYEEZYBOOST350V2BLACKREDbCP9652_300x.jpg?v=1667867388',]
		},
		{
			color: 	'Beluga Reflective/Steeple Gray/Solar Red',
			images: ['https://stayfresh.ca/cdn/shop/products/YeezyBoost350V2BelugaReflectiveaGW1229_600x.jpg?v=1659467371',
				'https://stayfresh.ca/cdn/shop/products/YeezyBoost350V2BelugaReflectivebGW1229_600x.jpg?v=1659467371']
		}

	],
	price: 450,
	description: `The YEEZY BOOST 350 V2 is the lifestyle runner from adidas and Kanye West. It features an upper composed of re-engineered Primeknit. The post-dyed 
	monofilament side stripe is woven into the upper. Reflective threads are woven into the laces. The midsole utilizes adidas’ innovative BOOST™ technology. The Yeezy Boost 350 V2 treats the lifestyle runner to a refined makeover. A monofilament side stripe adds a see-through element to the minimalist design, while a webbing pull tab at the heel provides easy on and off. Inside the shoe, three-stripe branding on the interior heel is accompanied by ‘Yeezy’ stamped on the sockliner. Responsive cushioning comes courtesy of a TPU-wrapped full-length Boost midsole.`,
	sizes: [
		{
			color: 			'Bone/Bone/Bone',
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
			color: 	'Onyx/Onyx/Onyx',
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
			color: 	'White/Core Black/Red',
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
			color: 	'Beluga Reflective/Steeple Gray/Solar Red',
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

const Yeezy500Base: IndProduct = {
	id: 12,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 2,
	modelName: 'Yeezy Boost 500',
	name: 'Yeezy Boost 500',
	releaseDate: '2018-07-07',
	colors: [
		{
			color: 'Utility Black/Utility Black/Utility Black',
			images: ['https://stayfresh.ca/cdn/shop/products/SF_Adidas_Yeezy_500_Utility_Black_F36640-1_600x.jpg?v=1571278055',
				'https://stayfresh.ca/cdn/shop/products/SF_Adidas_Yeezy_500_Utility_Black_F36640-4_600x.jpg?v=1571278055',]
		},
		{
			color: 	'Bone White/Bone White/Bone White',
			images: ['https://stayfresh.ca/cdn/shop/products/adidasYeezy500BoneWhiteFV3573-1_600x.jpg?v=1610674749',
				'https://stayfresh.ca/cdn/shop/products/adidasYeezy500BoneWhiteFV3573-4_600x.jpg?v=1610674761']
		}
	],
	price: 200,
	description: `In July 2018, Kanye West and adidas released the Yeezy 500. The retro-inspired silhouette counterbalances a sleek design with its bulky form. 
	What distinguishes this colorway from the standard triple-black finish is a unique use of tone – it's a semi-faded black that coats the combination of mesh 
	and upper suede, as opposed to the pitch-black variety more common in the firmament of the sneaker.`,
	sizes: [
		{
			color: 'Utility Black/Utility Black/Utility Black',
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
			color: 	'Bone White/Bone White/Bone White',
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

const Yeezy500Boot: IndProduct = {
	id: 13,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 2,
	modelName: 'Yeezy Boost 500',
	name: 'Yeezy Boost 500 High Boot',
	releaseDate: '2023-08-14',
	colors: [
		{
			color: 	'Tyrian/Tyrian/Tyrian',
			images: ['https://stayfresh.ca/cdn/shop/products/FY4269_600x.jpg?v=1591403009']
		}
	],
	price: 300,
	description: `The adidas Yeezy 500 Tactical Boot 'Utility Black' showcases a black ballistic mesh upper with matching suede overlays, and is fastened with speed 
		lacing for quick adjustments. The rubber mudguard seamlessly integrates with the podular adiPRENE+ midsole, which is borrowed from the original Yeezy 500 design. 
		The boot’s extended padded collar reaches up to the calf for optimal fit.`,
	sizes: [
		{
			color: 	'Tyrian/Tyrian/Tyrian',
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

const Yeezy500High: IndProduct = {
	id: 14,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 2,
	modelName: 'Yeezy Boost 500',
	name: 'Yeezy Boost 500 High',
	releaseDate: '2019-12-16',
	colors: [
		{
			color: 'Slate/Slate/Slate',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/160081/1.jpg']
		}
	],
	price: 220,
	description: `Celebrity Kanye West retools the 500 profile with the adidas Yeezy 500 High. Debuted in December 2019, this revamp boasts a Slate-colored neoprene base 
		layered with suede and tumbled leather elements. Utility laces secure the tongue and a patterned mudguard bolsters the sidewall. The molded midsole is supported by 
		Adiprene cushioning while the robust rubber outsole utilizes a wavy tread pattern.`,
	sizes: [
		{
			color: 'Slate/Slate/Slate',
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

const Yeezy700V2: IndProduct = {
	id: 15,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 3,
	modelName: 'Yeezy Boost 700',
	name: 'Yeezy Boost 700 V2 Tephra',
	releaseDate: '2019-06-15',
	colors: [
		{
			color: 'Tephra/Tephra/Tephra',
			images: ['https://stayfresh.ca/cdn/shop/products/SF_Yeezy_Boost_700_V2_Tephra_FU7914-1_600x.jpg?v=1571278647',
				'https://stayfresh.ca/cdn/shop/products/SF_Yeezy_Boost_700_V2_Tephra_FU7914-4_600x.jpg?v=1571278647',
				'https://stayfresh.ca/cdn/shop/products/SF_Yeezy_Boost_700_V2_Tephra_FU7914-5_600x.jpg?v=1571278647']
		}
	],
	price: 300,
	description: `The Yeezy Boost 700 V2 'Tephra' brings a subdued colorway to the second iteration of the Yeezy 700 line. The shoe's upper is built with a layered mix of mesh and suede, 
		finished in neutral hues. A darker look emerges on the signature bulky sole unit, which houses a full-length Boost midsole for cushioning. Underfoot, a gum rubber outsole provides 
		traction while offering an elevated finish.`,
	sizes: [
		{
			color: 'Tephra/Tephra/Tephra',
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

const Yeezy700V3: IndProduct = {
	id: 16,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 3,
	modelName: 'Yeezy Boost 700',
	name: 'Yeezy Boost 700 V3 Fade Carbon',
	releaseDate: '2022-05-21',
	colors: [
		{
			color: 			'Fade Carbon/Fade Carbon-Fade Carbon'
			,
			images: ['https://stayfresh.ca/cdn/shop/files/FRONT-WEB-ADIDAS-YEEZY-700-V3-FADE-CARBON_600x.jpg?v=1694542672',
				'https://stayfresh.ca/cdn/shop/files/SIDE-WEB-ADIDAS-YEEZY-700-V3-FADE-CARBON_600x.jpg?v=1694542672']
		}
	],
	price: 210,
	description: `Distinguished by a fade gradient that moves from a mauve hue to a bright magenta at the heel, the adidas Yeezy 700 V3 ‘Fade Carbon’ is a lifestyle runner in an eyecatching colorway.
		A translucent RPU cage overlays the engineered mesh upper. An interior bootie offers a snug, comfortable fit while traction and grip are assured from the herringbone-patterned rubber outsole.`,
	sizes: [
		{
			color: 			'Fade Carbon/Fade Carbon-Fade Carbon',
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

const Yeezy700HiRes: IndProduct = {
	id: 17,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 3,
	modelName: 'Yeezy Boost 700',
	name: 'Yeezy Boost 700 Hi-Res',
	releaseDate: '2022-08-02',
	colors: [
		{
			color: 	'Hi-Res Blue/Hi-Res Blue-Hi-Res Blue',
			images: ['https://stayfresh.ca/cdn/shop/products/ezgif-4-0dff0c086b_600x.jpg?v=1678130147']
		},
		{
			color: 	'Hi-Res Red/Hi-Res Red/Hi-Res Red',
			images: ['https://stayfresh.ca/cdn/shop/products/ezgif-4-0dff0c086b_600x.jpg?v=1678130147']
		},
	],
	price: 300,
	description: `The adidas Yeezy Boost 700 'Hi-Res Blue'/'Hi-Res Red' features a vibrant shade across most of the lifestyle runner designed by Kanye West. Hi-Res Blue/Red appears on parts of the upper and midsole, 
		contrasted by black suede overlays and grey near the front of the shoe and toe cap. The sculpted midsole features a hit of red near the front, while full-length Boost cushioning is embedded right 
		above the gum rubber outsole.`,
	sizes: [
		{
			color: 	'Hi-Res Blue/Hi-Res Blue-Hi-Res Blue',
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
			color: 	'Hi-Res Red/Hi-Res Red/Hi-Res Red',
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

const YeezyFoamRnr: IndProduct = {
	id: 18,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 4,
	modelName: 'Yeezy Foam Runner - Yeezy Slides',
	name: 'Yeezy Foam Runner',
	releaseDate: '2022-04-16',
	colors: [
		{
			color: 	'Slate Grey/Slate Grey/ Slate Grey',
			images: ['https://stayfresh.ca/cdn/shop/products/ezgif.com-gif-maker_32_600x.jpg?v=1654716126',]
		},
		{
			color: 	'Granite/Granite/Granite',
			images: ['https://stayfresh.ca/cdn/shop/products/ipad_adidas-yeezy-foam-runner-mx-sand-grey_600x.jpg?v=1648660004',]
		},
		{
			color: 	'Bone/Bone/Bone',
			images: ['https://stayfresh.ca/cdn/shop/files/ezgif-1-fe30e3d09a_600x.jpg?v=1691526188']
		},
	],
	price: 90,
	description: `The Yeezy Foam Runner features a unique look, utilizing a one-piece foam upper with a porous design, crafted from environmentally friendly algae. Kanye West and adidas unleashed a lifestyle slip-on with
		no shoelaces, arriving in many different colorways. Explore a selection of Foam RNRs including 'Carbon,' 'Stone Salt,' 'Stone Taupe' and 'Desert Sand.'`,
	sizes: [
		{
			color: 	'Slate Grey/Slate Grey/ Slate Grey',
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
			color: 	'Bone/Bone/Bone',
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

const YeezySlides: IndProduct = {
	id: 19,
	brand: 'Yeezy',
	brandId: 2,
	modelId: 4,
	modelName: 'Yeezy Foam Runner - Yeezy Slides',
	name: 'Yeezy Slides',
	releaseDate: '2022-03-07',
	colors: [
		{
			color: 	'Slate Grey/Slate Grey/ Slate Grey',
			images: ['https://stayfresh.ca/cdn/shop/files/adidas-yeezy-slides-slate-grey-ID2350-release-date-4_600x.jpg?v=1692392595']
		},
		{
			color: 	'Pure/Pure/Pure',
			images: ['https://stayfresh.ca/cdn/shop/products/YeezySlidePureAGZ5554_4476b59f-e892-4fd2-a085-8caa4143371c_600x.jpg?v=1642794272',
				'https://stayfresh.ca/cdn/shop/products/YeezySlidePureCGZ5554_876119bc-b976-454a-939c-1ddedd910aba_600x.jpg?v=1642794272',
				'https://stayfresh.ca/cdn/shop/products/YeezySlidePureDGZ5554_8ce2827f-aa1d-4fe9-9f80-a7b2bf906a0f_600x.jpg?v=1642794272',]
		},
		{
			color: 	'Azure/Azure/Azure',
			images: ['https://stayfresh.ca/cdn/shop/files/FRONT-WEB-ADIDAS-YEEZY-SLIDE-AZURE-2023_600x.jpg?v=1686890698',
				'https://stayfresh.ca/cdn/shop/files/SIDE-WEB-ADIDAS-YEEZY-SLIDE-AZURE-2023_600x.jpg?v=1686890698',
				'https://stayfresh.ca/cdn/shop/files/BACK-WEB-ADIDAS-YEEZY-SLIDE-AZURE-2023_600x.jpg?v=1686890911']
		},
	],
	price: 60,
	description: `As part of Yeezy’s sixth collection, Kanye West and adidas introduced the Yeezy Slide in 2018. Featuring monotone colorways, the Yeezy Slide is an elevated pool slide design, featuring injection-molded 
		construction, a shark-tooth outsole, and a forefoot strap. The Yeezy Slides maintain the look and feel of a classic sandal, but with a few design touches to set them apart. Key colorways of the Yeezy Slides include 
		“Bone,” “Sand” and “Azure.”`,
	sizes: [
		{
			color: 	'Slate Grey/Slate Grey/ Slate Grey',
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
			color: 	'Pure/Pure/Pure',
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
			color: 	'Azure/Azure/Azure',
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

const NikeAF1Base: IndProduct = {
	id: 20,
	brand: 'Nike',
	brandId: 3,
	modelId: 1,
	modelName: 'Nike Air Force 1',
	name: 'Nike Air Force 1 07',
	releaseDate: '2020-12-09',
	colors: [
		{
			color: 'White/White/White',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-rWtqPn.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-rWtqPn.png',]
		},
		{
			color: 	'Black/Black/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-shoes-rWtqPn.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c331ff82-87dd-453f-b6d4-1c81ef5e29aa/air-force-1-07-shoes-rWtqPn.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/900c2ac8-8a3e-45f7-aac7-c92ccce8505a/air-force-1-07-shoes-rWtqPn.png']
		},
	],
	price: 90,
	description: `Air Force 1s have come a long way since their debut as the first on-court shoe to feature Nike Air technology. But despite this, the cultural icon stays true to its roots with the same soft and springy 
		cushioning that changed sneaker history. This sneaker-head favourite delivers lasting comfort, while its padded ankle and tongue make for a soft ride. The rubber sole features the iconic circular pattern for durable 
		traction. Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.`,
	sizes: [
		{
			color: 'White/White/White',
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
			color: 	'Black/Black/Black',
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

const NikeAF1LV8: IndProduct = {
	id: 21,
	brand: 'Nike',
	brandId: 3,
	modelId: 1,
	modelName: 'Nike Air Force 1',
	name: 'Nike Air Force 1 07 LV8',
	releaseDate: '2023-01-03',
	colors: [
		{
			color: 'Anthracite/Cool Grey/Black/Wolf Grey',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5dd4d11f-44bb-4df5-aca5-5c44f1aec127/air-force-1-lv8-shoe-vXKF0h.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55e0cc58-a8b0-4c5d-9a74-9316e016f55d/air-force-1-lv8-shoe-vXKF0h.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f78d6c3d-4bc0-4979-9062-350b14cab780/air-force-1-lv8-shoe-vXKF0h.png',]
		},
		{
			color: 	'White/Platinum Tint/Sail',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-bf108f08-590a-4de7-94d2-f70b22b7f6b6/air-force-1-lv8-shoe-vXKF0h.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-d27b96a9-5426-46f0-8dfc-4ab05b18fbb3/air-force-1-lv8-shoe-vXKF0h.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-4c711cec-eb12-47ce-a454-f7f34db76e22/air-force-1-lv8-shoe-vXKF0h.png']
		},
	],
	price: 130,
	description: `Never mistaken, the Nike Air Force 1 LV8 is the hardwood classic that redefined basketball shoes and sneaker culture forever. Suede details atop synthetic leather on the upper deliver the iconic style 
		that landed it at the pinnacle of street, sport and culture for decades.`,
	sizes: [
		{
			color: 'Anthracite/Cool Grey/Black/Wolf Grey',
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
			color: 	'White/Platinum Tint/Sail',
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

const NikeAirMax97Base: IndProduct = {
	id: 22,
	brand: 'Nike',
	brandId: 3,
	modelId: 2,
	modelName: 'Nike Air Max 97',
	name: 'Nike Air Max 97',
	releaseDate: '2018-12-14',
	colors: [
		{
			color: 'White/White/White',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a25a1901-a687-4dd3-94f7-472e7af433aa/air-max-97-shoes-HdNjNN.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e98ecdc-f0d6-424f-9096-f077c2d561a4/air-max-97-shoes-HdNjNN.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/602edc9d-5992-45d2-bc6f-35b5b062b908/air-max-97-shoes-HdNjNN.png',]
		},
		{
			color: 	'Black/Black/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-shoes-z3TlrlVN.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a717540-b712-486d-8612-acd2a8905d5f/air-max-97-shoes-z3TlrlVN.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33aea626-bb43-4091-805c-ba12cf978f2d/air-max-97-shoes-z3TlrlVN.png',]
		},
		{
			color: 'Black/White/Opti Yellow',
			images:['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cj2jbeomutdbn0tcrbza/air-max-97-shoes-h6hqBR.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/kyjosqxnxtcmy9dhjazm/air-max-97-shoes-h6hqBR.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ngzqrjuoaghukvmgdn3d/air-max-97-shoes-h6hqBR.png'
			]
		}
	],
	price: 160,
	description: `Inspired by nature, the Air Max 97 ushered in a new era in footwear for a modern world. The silhouette was introduced with a full-length Air unit all around the midsole for maximum comfort for both 
		runners and everyday wear. Like the 95, it maintained its layered look, but the 3M detail was what sealed the deal. Browse our selection of AM97, including the latest releases.`,
	sizes: [
		{
			color: 'White/White/White',
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
			color: 	'Black/Black/Black',
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
			color: 'Black/White/Opti Yellow',
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

const NikeDunkHigh: IndProduct = {
	id: 23,
	brand: 'Nike',
	brandId: 3,
	modelId: 3,
	modelName: 'Nike Dunk',
	name: 'Nike Dunk High Retro',
	releaseDate: '2018-12-14',
	colors: [
		{
			color: 'White/Total Orange/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e7687f1-c13e-4bac-8ffa-a6f863ae9157/dunk-high-retro-shoe-1PhQRw.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac4c2d4d-06fc-4e92-9fec-c78cbb110c5f/dunk-high-retro-shoe-1PhQRw.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/811b9857-d626-46d0-b2ff-7a8858717fc6/dunk-high-retro-shoe-1PhQRw.png']
		}
	],
	price: 170,
	description: `Created for the hardwood but taken to the streets, the '80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, 
		the Nike Dunk High Retro channels '80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.`,
	sizes: [
		{
			color: 'White/Total Orange/Black',
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

const NikeDunkLow: IndProduct = {
	id: 24,
	brand: 'Nike',
	brandId: 3,
	modelId: 3,
	modelName: 'Nike Dunk',
	name: 'Nike Dunk Low',
	releaseDate: '2018-12-14',
	colors: [
		{
			color: 'Anthracite/Cool Grey/Industrial Blue/Pure Platinum',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/938273c4-d731-4fe6-b2c7-1a75002a1536/dunk-low-shoes-6NtmS9.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9323b98-8a90-4b2e-9051-6a508d053836/dunk-low-shoes-6NtmS9.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39f2357d-12b7-4e4c-89e0-f9f9f563abed/dunk-low-shoes-6NtmS9.png',]
		},
		{
			color: 'Midnight Navy/Desert Ochre/Sail/Midnight Navy',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f95fbcaa-aaa6-4c67-8e6c-779a75d1c692/sb-dunk-low-pro-shoes-Vl4NDZ.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/143c0d30-4138-48ff-90d7-92e4e2532d39/sb-dunk-low-pro-shoes-Vl4NDZ.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bad2cc5b-c91c-4300-b160-df8e47777c50/sb-dunk-low-pro-shoes-Vl4NDZ.png']
		}
	],
	price: 165,
	description: `Created for the hardwood but taken to the streets, the '80s basketball icon returns with classic details and throwback hoops flair. Durable leather and Ripstop textiles are paired 
		with reflective design details and a frosted blue outsole for a sturdy construction that helps you face harsh conditions. And its padded, low-cut collar lets you take your game anywhere—in comfort.`,
	sizes: [
		{
			color: 'Anthracite/Cool Grey/Industrial Blue/Pure Platinum',
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
			color: 'Midnight Navy/Desert Ochre/Sail/Midnight Navy',
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

const NikeBlazerMid: IndProduct = {
	id: 25,
	brand: 'Nike',
	brandId: 3,
	modelId: 4,
	modelName: 'Nike Blazer',
	name: `Nike Blazer Mid '77 Vintage`,
	releaseDate: '2020-09-18',
	colors: [
		{
			color: 'White/Total Orange/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-CBDjT0.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bc7d689-de2c-4b49-986c-b42153895bc0/blazer-mid-77-vintage-shoes-CBDjT0.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef4dbed6-c621-4879-8db3-f87296bfb570/blazer-mid-77-vintage-shoes-CBDjT0.png']
		},
		{
			color: 'White/Pure Platinum/Game Royal',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/889ef520-349a-49da-80d4-8d75f9651feb/blazer-mid-77-vintage-shoes-CBDjT0.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4fca072-a847-46f3-829b-e827eab1941d/blazer-mid-77-vintage-shoes-CBDjT0.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4f37b92-2f8c-4b14-8119-609eeb57e719/blazer-mid-77-vintage-shoes-CBDjT0.png']
		}
	],
	price: 140,
	description: `In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local
		 team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.`,
	sizes: [
		{
			color: 'White/Total Orange/Black',
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
			color: 'White/Pure Platinum/Game Royal',
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

const NikeBlazerLow: IndProduct = {
	id: 26,
	brand: 'Nike',
	brandId: 3,
	modelId: 4,
	modelName: 'Nike Blazer',
	name: `Nike Blazer Low '77 Jumbo`,
	releaseDate: '2018-12-14',
	colors: [
		{
			color: 'White/White/Sail/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bd81405-bbe2-4516-aecb-665e22981785/blazer-low-77-jumbo-shoes-gRBtmC.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7ab9fec-4ec9-4338-a2a7-97caabdd664c/blazer-low-77-jumbo-shoes-gRBtmC.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e594bc27-ebd3-4441-b4bd-77a6cd4c46e3/blazer-low-77-jumbo-shoes-gRBtmC.png']
		}
	],
	price: 165,
	description: `They say, "Don't fix what works". We say, "Perfect it". The classic, streetwear superstar gets rethought with the Nike Blazer Low '77 Jumbo. Harnessing the old-school look you love, it now features an oversized Swoosh design and jumbo laces. Its plush foam tongue and thicker stitching embolden the iconic look that's been praised by the streets since '77.`,
	sizes: [
		{
			color: 'White/White/Sail/Black',
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

const NikeBlazerOW: IndProduct = {
	id: 27,
	brand: 'Nike',
	brandId: 3,
	modelId: 4,
	modelName: 'Nike Blazer',
	name: `Nike X Off-White Blazer Mid`,
	releaseDate: '2018-10-03',
	colors: [
		{
			color: 'Canvas/Total Orange-Pale/Vanilla-Black',
			images: ['https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Pale_Vanilla_AA3832-700-1_600x.jpg?v=1571278187',
				'https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Pale_Vanilla_AA3832-700-6_600x.jpg?v=1571278187',
				'https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Pale_Vanilla_AA3832-700-2_600x.jpg?v=1571278187',]
		},
		{
			color: 'Black/White-Cone/Black',
			images: ['https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Grim_Reepers_AA3832-001-1_600x.jpg?v=1571278187',
				'https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Grim_Reepers_AA3832-001-2_600x.jpg?v=1571278187',
				'https://stayfresh.ca/cdn/shop/products/SF_Nike_The_10-_Nike_Blazer_Mid_Grim_Reepers_AA3832-001-6_600x.jpg?v=1571278187',]
		}
	],
	price: 450,
	description: `Don’t sleep because Virgil Abloh continues to give the shoe game a nightmare with the Nike Blazer Mid Off-White All Hallow’s Eve. This pumpkin inspired half of the "Spooky Pack" comes with a pale vanilla upper, total orange "Swoosh", and pale vanilla sole. These released in September 2018 and retailed at $130. Get in the holiday spirit and cop now on StockX.`
	,
	sizes: [
		{
			color: 'Canvas/Total Orange-Pale/Vanilla-Black',
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
			color: 'Black/White-Cone/Black',
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

const AJ1Low: IndProduct = {
	id: 28,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 1,
	modelName: 'Air Jordan 1',
	name: `Air Jordan 1 Low Shoes`,
	releaseDate: '2020-09-20',
	colors: [
		{
			color: 'Black/White/Yellow Ochre',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/525eacce-5bfe-48b5-b6de-4ce71c6ba657/air-jordan-1-low-mens-shoes-9xSzrW.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a48f0a03-6639-4452-bf10-3c362182adbd/air-jordan-1-low-mens-shoes-9xSzrW.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/11ed99b7-0486-4fee-bdf5-78dffda009b6/air-jordan-1-low-mens-shoes-9xSzrW.png']
		}
	],
	price: 115,
	description: `Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.`,
	sizes: [
		{
			color: 'Black/White/Yellow Ochre',
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

const AJ1Mid: IndProduct = {
	id: 29,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 1,
	modelName: 'Air Jordan 1',
	name: `Air Jordan 1 Mid Shoes`,
	releaseDate: '2023-08-29',
	colors: [
		{
			color: 'White/White/Black/Black',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/288a2235-54ce-4f8e-a133-0117cbc381b4/air-jordan-1-mid-mens-shoes-X5pM09.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/852a384c-a6ef-45af-9bf7-2ed47d64ae4f/air-jordan-1-mid-mens-shoes-X5pM09.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce623fbc-daeb-47ea-ae70-1ffa4847c569/air-jordan-1-mid-mens-shoes-X5pM09.png',]
		},
		{
			color: 'White/Black/Gym Red',
			images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-mens-shoes-X5pM09.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2838806d-22c6-4cba-b015-8478a6ce6d64/air-jordan-1-mid-mens-shoes-X5pM09.png',
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/82d26c28-58a2-464f-881e-b20d2b5eafa8/air-jordan-1-mid-mens-shoes-X5pM09.png']
		}
	],
	price: 125,
	description: `Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.`,
	sizes: [
		{
			color: 'White/White/Black/Black',
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
			color: 'White/Black/Gym Red',
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

const AJ1High: IndProduct = {
	id: 30,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 1,
	modelName: 'Air Jordan 1',
	name: `Air Jordan 1 Retro High OG`,
	releaseDate: '2023-07-22',
	colors: [
		{
			color: 'University Blue/Black/White',
			images: ['https://stayfresh.ca/cdn/shop/products/AIRJORDAN1RETROHIGHOGTAXIa555088-711_600x.jpg?v=1668543640',
				'https://stayfresh.ca/cdn/shop/products/AIRJORDAN1RETROHIGHOGTAXIb555088-711_600x.jpg?v=1668543640',
				'https://stayfresh.ca/cdn/shop/products/AIRJORDAN1RETROHIGHOGTAXIc555088-711_600x.jpg?v=1668545663',]
		},
		{
			color: 'Taxi/Black/Sail',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/358111/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/358111/3.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/358111/4.jpg',]
		}
	],
	price: 250,
	description: `The Air Jordan 1 Retro High OG pays homage to Michael Jordan’s college with a color scheme that recalls the 2018 ‘Bred Toe’ AJ1 release. The shoe features white quarter panels and black overlays on the Swoosh and forefoot against an all-leather base. The toe box, heel, and collar flap are adorned with University Blue accents, with a lateral-side classic Wings logo. The breathable nylon tongue has a retro Nike tag, and lightweight cushioning is provided by a white rubber midsole with an Air-sole heel unit within a polyurethane wedge. Underfoot, sturdy traction is ensured by the blue rubber outsole.`,
	sizes: [
		{
			color: 'University Blue/Black/White',
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
			color: 'Taxi/Black/Sail',
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

const AJ4CJ: IndProduct = {
	id: 31,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 2,
	modelName: 'Air Jordan 4',
	name: `Air Jordan 4 Retro Travis Scott Cactus Jack`,
	releaseDate: '2018-06-09',
	colors: [
		{
			color: 'University Blue/Black/Varsity Red',
			images: ['https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/tfcnf6xbezatpegexxx7/air-jordan-4-travis-scott-cactus-jack-release-date.jpg',
				'https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/zj7bmitm7dh80fxnayu9/air-jordan-4-travis-scott-cactus-jack-release-date.jpg',
				'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/hl5u7kku1dlurbgborm6/air-jordan-4-travis-scott-cactus-jack-release-date.jpg']
		}
	],
	price: 1200,
	description: `The only way to describe the Travis Scott Air Jordan 4 Retros properly would be to use the rappers own adlib: la flame. These Jordan 4s were made in collaboration with 
	rapper, Travis Scott and nicknamed the "Cactus Jack" edition. Similar in design to the infamous Eminem pair, these feature a lighter shade of blue suede on the upper. Black 
	accents, a red liner, paint splatter detailing, a white midsole and "Cactus Jack" branding on the back heel tab finish things off for this pair. These dropped in June of 2018 for $225 
	and came exclusively in men’s sizes. If you’re a fan of Travis Scott and the AJ 4, this pair is another must-have. Straight up!`,
	sizes: [
		{
			color: 'University Blue/Black/Varsity Red',
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

const AJ4Base: IndProduct = {
	id: 32,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 2,
	modelName: 'Air Jordan 4',
	name: `Air Jordan 4 Retro OG`,
	releaseDate: '2023-09-09',
	colors: [
		{
			color: 'White/Fire Red/Black/Neutral Grey',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/367078/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/367078/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/367078/3.jpg',]
		},
		{
			color: 'Black/Tour Yellow',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/353523/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/353523/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/353523/3.jpg']
		}
	],
	price: 300,
	description: `The Air Jordan 4 is a classic sneaker in the Air Jordan line. It was released in 1989 and designed by Nike designer Tinker Hatfield, paying homage to the original Air Jordan design while introducing new colorways and design features.
		The sneaker is known for its distinctive design, with visible Air unit technology and top-quality leather construction. The Air Jordan 4 was created to offer superior comfort, durability, and style to come up with an extraordinary product. In our opinion, one of the most notable features of the Air Jordan 4 is the “Wings” on the side of the shoe, which represent Michael Jordan's soaring abilities on the basketball court. The shoes also feature a unique lacing system with plastic Wing eyelets, which provide added support and durability.
		Over the years, the Air Jordan 4 has been released in a range of colors and collaborations, including the Jordan 4 Retro Undefeated (2018 Sample), which was released as part of a collaboration between Nike and LA-based streetwear brand Undefeated. These collaborations and limited-edition releases have only added to the sneaker's popularity.
		The brand comprises a range of other products, including clothing and accessories. The line includes t-shirts, hoodies, shorts, and hats, among other items. The Air Jordan 4 works best with other products in the Air Jordan. The brand's clothing and accessories are compatible with the shoe's style and design. A perfect example of this is the Air Jordan Hoodie, which perfectly complements the style and design of the Air Jordan 4.`,
	sizes: [
		{
			color: 'White/Fire Red/Black/Neutral Grey',
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
			color: 'Black/Tour Yellow',
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

const AJ5Base: IndProduct = {
	id: 33,
	brand: 'Air Jordan',
	brandId: 4,
	modelId: 3,
	modelName: 'Air Jordan 5',
	name: `Air Jordan 5 Retro Shoes`,
	releaseDate: '2023-03-04',
	colors: [
		{
			color: 'University Blue/Black/White',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/343845/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/343845/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/343845/3.jpg']
		},
		{
			color: 'Deep Burgundy/Light Graphite/Metallic Silver',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/365489/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/365489/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/365489/3.jpg',]
		},
		{
			color: 'Black/Racer Blue/Reflective Silver',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/284019/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/284019/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/284019/3.jpg']
		}
	],
	price: 275,
	description: `The Air Jordan 5 hit shelves in 1990. It maintained the mesh side panels with its predecessor and took another bold step with its look—it included the first appearance of a translucent sole on a Jordan signature sneaker. Tinker Hatfield drew inspiration from World War II era fighter planes when he implemented the infamous “shark-teeth” look into the sneaker's design along the midsole. The AJ5 was first brought back in 2000, with great retro colorways arriving including the 'UNC,'  A Ma Maniére 'Dawn' and A Ma Maniére 'Dusk' releases.`,
	sizes: [
		{
			color: 'University Blue/Black/White',
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
			color: 'Deep Burgundy/Light Graphite/Metallic Silver',
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
			color: 'Black/Racer Blue/Reflective Silver',
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

const NB2002RBase: IndProduct = {
	id: 34,
	brand: 'New Balance',
	brandId: 5,
	modelId: 1,
	modelName: 'New Balance 2002R',
	name: `New Balance 2002R Protection Shoes`,
	releaseDate: '2023-10-26',
	colors: [
		{
			color: 'Taupe/Angora/Silver Metallic',
			images: ['https://nb.scene7.com/is/image/NB/m2002rcc_nb_02_i?$pdpflexf2$&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rcc_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rcc_nb_04_i?$pdpflexf2$&wid=440&hei=440']
		},
		{
			color: 'Black/Phantom/Gunmetal',
			images: ['https://nb.scene7.com/is/image/NB/m2002rbk_nb_02_i?$pdpflexf2$&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rbk_nb_05_i?$pdpflexf2$&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rbk_nb_04_i?$pdpflexf2$&wid=440&hei=440',]
		},
		{
			color: 'Slate Grey/Raincloud/Black',
			images: ['https://nb.scene7.com/is/image/NB/m2002rsg_nb_02_i?$pdpflexf2$&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rsg_nb_05_i?$pdpflexf2$&wid=440&hei=440',
				'https://nb.scene7.com/is/image/NB/m2002rsg_nb_04_i?$pdpflexf2$&wid=440&hei=440']
		}
	],
	price: 180,
	description: `Launched in 2010, New Balance’s 2002R silhouette experienced a cultural rediscovery in the 2020s as “dad shoes” continued to exert influence across the footwear landscape.
	 Rooted in performance running, the mixed-material upper comprises leather, suede and mesh, with an ABZORB midsole and N-ergy outsole underfoot. Discover the New Balance 2002R, featuring styles created in collaboration with Salehe Bembury, Joe Freshgoods, atmos, JJJJound and more.`,
	sizes: [
		{
			color: 'Taupe/Angora/Silver Metallic',
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
			color: 'Black/Phantom/Gunmetal',
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
			color: 'Slate Grey/Raincloud/Black',
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

const NB530Base: IndProduct = {
	id: 35,
	brand: 'New Balance',
	brandId: 5,
	modelId: 2,
	modelName: 'New Balance 530',
	name: `New Balance 530 Shoes`,
	releaseDate: '2022-04-15',
	colors: [
		{
			color: 'Moonbeam/Sea Salt/White',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/265435/1.jpg']
		},
		{
			color: 'White/Natural Indigo',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/223935/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/223935/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/223935/3.jpg']
		},
		{
			color: 'Raincloud/Shadow Grey',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/370863/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/370863/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/370863/3.jpg']
		},
		{
			color: 'Grey Matter/Harbor Grey',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/359290/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/359290/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/359290/3.jpg']
		}
	],
	price: 160,
	description: `The 530 men’s sneaker is a throwback of one of our classic running shoes. This casual kick combines everyday style with modern tech. ABZORB cushioning underfoot adds
	 superior comfort. Put a retro spin on your step with the 530 men’s sneaker.`,
	sizes: [
		{
			color: 'Moonbeam/Sea Salt/White',
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
			color: 'White/Natural Indigo',
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
			color: 'Raincloud/Shadow Grey',
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
			color: 'Grey Matter/Harbor Grey',
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

const NB5740Base: IndProduct = {
	id: 36,
	brand: 'New Balance',
	brandId: 5,
	modelId: 3,
	modelName: 'New Balance 5740',
	name: `New Balance 5740 Shoes`,
	releaseDate: '2022-10-01',
	colors: [
		{
			color: 'White/Sea Salt/Silver Metallic',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/356116/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/356116/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/356116/3.jpg']
		},
		{
			color: 'Moonbeam/Sea Salt',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/291257/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/291257/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/291257/3.jpg']
		}
	],
	price: 120,
	description: `In 2021, New Balance debuted the 57/40, building on the iconic styling of the 574 silhouette. Exaggerated “N” logos and reflective accents adorn the suede uppers, with an undulating,
		 stacked foam midsole incorporated as a nod to the brand’s ’90s heritage. From 'Au Lait' to 'Sea Salt,' explore a selection of New Balance 57/40 sneakers.`,
	sizes: [
		{
			color: 'White/Sea Salt/Silver Metallic',
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
			color: 'Moonbeam/Sea Salt',
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

const NB5740Bape: IndProduct = {
	id: 37,
	brand: 'New Balance',
	brandId: 5,
	modelId: 3,
	modelName: 'New Balance 5740',
	name: `New Balance x BAPE 5740 Shoes`,
	releaseDate: '2022-07-30',
	colors: [
		{
			color: 'Multi-Color/Multi-Color',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/324605/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/324605/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/324605/3.jpg']
		},
		{
			color: 'Grey/White/Black',
			images: ['https://cdn.flightclub.com/750/TEMPLATE/325862/1.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/325862/2.jpg',
				'https://cdn.flightclub.com/750/TEMPLATE/325862/3.jpg']
		}
	],
	price: 300,
	description: `The BAPE x New Balance 57/40 is taken from the ‘Training Camp’ collection, featuring ‘pre-sport’ apparel and footwear intended to be worn on the way to the gym. This 
		modern interpretation of the classic 574 silhouette features a mesh upper with black suede overlays and an oversized ‘N’ logo in a camo print. ‘A BATHING APE’ is inscribed on the
		 lateral heel of the left shoe, while an Ape Head graphic adorns the right. Crimson shark tooth detailing on the heel tab delivers an unexpected pop of color. The lifestyle runner is mounted on a stacked EVA midsole that offers lightweight cushioning with each step.`,
	sizes: [
		{
			color: 'Multi-Color/Multi-Color',
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
			color: 'Grey/White/Black',
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

//Models:
const ultraBoost: Models = {
	id: 1,
	name: 'UltraBoost',
	brandId: 1,
	brand: 'Adidas',
	allProducts: [
		ultraBoostLight,
		ultraBoost1,
		ultraBoost22,
		ultraBoost4
	]
}

const superStar: Models = {
	id: 2,
	name: 'Superstar',
	brandId: 1,
	brand: 'Adidas',
	allProducts: [
		superStarOriginal,
		superStarGore
	]
}

const stanSmith: Models = {
	id: 3,
	name: 'Stan Smith',
	brandId: 1,
	brand: 'Adidas',
	allProducts: [
		stanSmithOriginal,
		stanSmithBape
	]
}

const NMD: Models = {
	id: 4,
	name: 'NMD',
	brandId: 1,
	brand: 'Adidas',
	allProducts: [
		NMDR1,
		NMDR2
	]
}

const Yeezy350: Models = {
	id: 1,
	name: 'Yeezy Boost 350',
	brandId: 2,
	brand: 'Yeezy',
	allProducts: [
		Yeezy350Base
	]
}

const Yeezy500: Models = {
	id: 2,
	name: 'Yeezy Boost 500',
	brandId: 2,
	brand: 'Yeezy',
	allProducts: [
		Yeezy500Base,
		Yeezy500Boot,
		Yeezy500High
	]
}

const Yeezy700: Models = {
	id: 3,
	name: 'Yeezy Boost 700',
	brandId: 2,
	brand: 'Yeezy',
	allProducts: [
		Yeezy700V2,
		Yeezy700V3,
		Yeezy700HiRes
	]
}

const YeezyOpen: Models = {
	id: 4,
	name: 'Yeezy Foam Runner - Yeezy Slides',
	brandId: 2,
	brand: 'Yeezy',
	allProducts: [
		YeezyFoamRnr,
		YeezySlides
	]
}

const NikeAF1: Models = {
	id: 1,
	name: 'Nike Air Force 1',
	brandId: 3,
	brand: 'Nike',
	allProducts: [
		NikeAF1Base,
		NikeAF1LV8
	]
}

const NikeAirMax97: Models = {
	id: 2,
	name: 'Nike Air Max 97',
	brandId: 3,
	brand: 'Nike',
	allProducts: [
		NikeAirMax97Base
	]
}

const NikeDunk: Models = {
	id: 3,
	name: 'Nike Dunk',
	brandId: 3,
	brand: 'Nike',
	allProducts: [
		NikeDunkHigh,
		NikeDunkLow
	]
}

const NikeBlazer: Models = {
	id: 4,
	name: 'Nike Blazer',
	brandId: 3,
	brand: 'Nike',
	allProducts: [
		NikeBlazerLow,
		NikeBlazerMid,
		NikeBlazerOW
	]
}

const AJ1: Models = {
	id: 1,
	name: 'Air Jordan 1',
	brandId: 4,
	brand: 'Air Jordan',
	allProducts: [
		AJ1Low,
		AJ1Mid,
		AJ1High
	]
}

const AJ4: Models = {
	id: 2,
	name: 'Air Jordan 4',
	brandId: 4,
	brand: 'Air Jordan',
	allProducts: [
		AJ4CJ,
		AJ4Base
	]
}

const AJ5: Models = {
	id: 3,
	name: 'Air Jordan 5',
	brandId: 4,
	brand: 'Air Jordan',
	allProducts: [
		AJ5Base
	]
}

const NB2002R: Models = {
	id: 1,
	name: 'New Balance 2002R',
	brandId: 5,
	brand: 'New Balance',
	allProducts: [
		NB2002RBase
	]
}

const NB530: Models = {
	id: 2,
	name: 'New Balance 530',
	brandId: 5,
	brand: 'New Balance',
	allProducts: [
		NB530Base
	]
}

const NB5740: Models = {
	id: 3,
	name: 'New Balance 5740',
	brandId: 5,
	brand: 'New Balance',
	allProducts: [
		NB5740Base,
		NB5740Bape
	]
}

//Brands:
const Adidas: Brands = {
	id: 1,
	name: 'Adidas',
	allModels: [
		ultraBoost,
		superStar,
		stanSmith,
		NMD
	]
}

const Yeezy: Brands = {
	id: 2,
	name: 'Yeezy',
	allModels: [
		Yeezy350,
		Yeezy500,
		Yeezy700,
		YeezyOpen
	]
}

const Nike: Brands = {
	id: 3,
	name: 'Nike',
	allModels: [
		NikeAF1,
		NikeAirMax97,
		NikeDunk,
		NikeBlazer
	]
}

const AirJordan: Brands = {
	id: 4,
	name: 'Air Jordan',
	allModels: [
		AJ1,
		AJ4,
		AJ5
	]
}

const NewBalance: Brands = {
	id: 5,
	name: 'New Balance',
	allModels: [
		NB2002R,
		NB530,
		NB5740
	]
}

const fullBrands: Brands[] = [
	Adidas,
	Yeezy,
	Nike,
	AirJordan,
	NewBalance
]

// const fullModels = {
// 	allModels: [
// 		ultraBoost,
// 		superStar,
// 		stanSmith,
// 		NMD,
// 		Yeezy350,
// 		Yeezy500,
// 		Yeezy700,
// 		YeezyOpen
// 	]
// }

export { ultraBoostLight, ultraBoost1, ultraBoost22, ultraBoost4, superStarOriginal, superStarGore, stanSmithOriginal, stanSmithBape, NMDR1, NMDR2, Yeezy350Base, Yeezy500Base, Yeezy500Boot,
	Yeezy500High, Yeezy700V2, Yeezy700V3, Yeezy700HiRes, YeezyFoamRnr, YeezySlides, NikeAF1Base, NikeAF1LV8, NikeAirMax97Base, NikeDunkHigh, NikeDunkLow, NikeBlazerMid, NikeBlazerLow,
	NikeBlazerOW, AJ1Low, AJ1Mid, AJ1High, AJ4CJ, AJ4Base, AJ5Base, NB2002RBase, NB530Base, NB5740Base, NB5740Bape,
	ultraBoost, superStar, stanSmith, NMD, Yeezy350, Yeezy500, Yeezy700, YeezyOpen, NikeAF1, NikeAirMax97, NikeDunk, NikeBlazer, AJ1, AJ4, AJ5, NB2002R, NB530, NB5740,
	Adidas, Yeezy, Nike, AirJordan, NewBalance, fullBrands }

