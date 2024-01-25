/* eslint-disable quotes */
import { Adidas, AirJordan, NewBalance, Nike, Yeezy } from '../mockproduct/db'
import { Brands, IndProduct, Models } from './betypes'

const brandMap = new Map<string, Brands>([
	['Adidas', Adidas],
	['Yeezy', Yeezy],
	['Nike', Nike],
	['Air Jordan', AirJordan],
	['New Balance', NewBalance]
])

const modelMap = new Map<string, Models>([
	['UltraBoost', Adidas.allModels[0]],
	['Superstar', Adidas.allModels[1]],
	['Stan Smith', Adidas.allModels[2]],
	['NMD', Adidas.allModels[3]],
	['Yeezy Boost 350', Yeezy.allModels[0]],
	['Yeezy Boost 500', Yeezy.allModels[1]],
	['Yeezy Boost 700', Yeezy.allModels[2]],
	['Yeezy Foam Runner - Yeezy Slides', Yeezy.allModels[3]],
	['Nike Air Force 1', Nike.allModels[0]],
	['Nike Air Max 97', Nike.allModels[1]],
	['Nike Dunk', Nike.allModels[2]],
	['Nike Blazer', Nike.allModels[3]],
	['Air Jordan 1', AirJordan.allModels[0]],
	['Air Jordan 4', AirJordan.allModels[1]],
	['Air Jordan 5', AirJordan.allModels[2]],
	['New Balance 2002R', NewBalance.allModels[0]],
	['New Balance 530', NewBalance.allModels[1]],
	['New Balance 5740', NewBalance.allModels[2]]
])

const productMap = new Map<string, IndProduct>([
	['UltraBoost Light Shoes', Adidas.allModels[0].allProducts[0]],
	['UltraBoost 1.0 Shoes', Adidas.allModels[0].allProducts[1]],
	['UltraBoost 22 Shoes', Adidas.allModels[0].allProducts[2]],
	['UltraBoost 4.0 Shoes', Adidas.allModels[0].allProducts[3]],
	['Superstar Shoes', Adidas.allModels[1].allProducts[0]],
	['Superstar Gore-Tex Shoes', Adidas.allModels[1].allProducts[1]],
	['Stan Smith Shoes', Adidas.allModels[2].allProducts[0]],
	['Bape 30th Anniversary Black Stan Smith Shoes', Adidas.allModels[2].allProducts[1]],
	['NMD_R1 Shoes', Adidas.allModels[3].allProducts[0]],
	['NMD_R2 Shoes', Adidas.allModels[3].allProducts[1]],
	['Yeezy Boost 350 V2', Yeezy.allModels[0].allProducts[0]],
	['Yeezy Boost 500', Yeezy.allModels[1].allProducts[0]],
	['Yeezy Boost 500 High Boot', Yeezy.allModels[1].allProducts[1]],
	['Yeezy Boost 500 High', Yeezy.allModels[1].allProducts[2]],
	['Yeezy Boost 700 V2 Tephra', Yeezy.allModels[2].allProducts[0]],
	['Yeezy Boost 700 V3 Fade Carbon', Yeezy.allModels[2].allProducts[1]],
	['Yeezy Boost 700 Hi-Res', Yeezy.allModels[2].allProducts[2]],
	['Yeezy Foam Runner', Yeezy.allModels[3].allProducts[0]],
	['Yeezy Slides', Yeezy.allModels[3].allProducts[1]],
	['Nike Air Force 1 07', Nike.allModels[0].allProducts[0]],
	['Nike Air Force 1 07 LV8', Nike.allModels[0].allProducts[1]],
	['Nike Air Max 97', Nike.allModels[1].allProducts[0]],
	['Nike Dunk High Retro', Nike.allModels[2].allProducts[0]],
	['Nike Dunk Low', Nike.allModels[2].allProducts[1]],
	[`Nike Blazer Mid '77 Vintage`, Nike.allModels[3].allProducts[0]],
	[`Nike Blazer Low '77 Jumbo`, Nike.allModels[3].allProducts[1]],
	[`Nike X Off-White Blazer Mid`, Nike.allModels[3].allProducts[2]],
	['Air Jordan 1 Low Shoes', AirJordan.allModels[0].allProducts[0]],
	['Air Jordan 1 Mid Shoes', AirJordan.allModels[0].allProducts[1]],
	['Air Jordan 1 Retro High OG', AirJordan.allModels[0].allProducts[2]],
	[`Air Jordan 4 Retro Travis Scott Cactus Jack`, AirJordan.allModels[1].allProducts[0]],
	[`Air Jordan 4 Retro OG`, AirJordan.allModels[1].allProducts[1]],
	[`Air Jordan 5 Retro Shoes`, AirJordan.allModels[2].allProducts[0]],
	[`New Balance 2002R Protection Shoes`, NewBalance.allModels[0].allProducts[0]],
	[`New Balance 530 Shoes`, NewBalance.allModels[1].allProducts[0]],
	[`New Balance 5740 Shoes`, NewBalance.allModels[2].allProducts[0]],
	[`New Balance x BAPE 5740 Shoes`, NewBalance.allModels[2].allProducts[1]]
])

export { brandMap, modelMap, productMap }