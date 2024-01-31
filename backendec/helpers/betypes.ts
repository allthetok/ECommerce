interface IndProduct {
	id: number,
	brand: string,
	brandId: number,
	modelId: number,
	modelName: string,
	name: string,
	releaseDate: Date | string,
	colors: Colors[],
	price: number,
	description: string,
	sizes: ColorSizes[]
}

interface Colors {
	color: string,
	images: string[]
}

interface ProductSizes {
	size: string,
	amount: number
}

interface ColorSizes {
	color: string,
	sizes: ProductSizes[]
}

interface Brands {
	id: number,
	name: string,
	allModels: Models[]
}

interface Models {
	id: number,
	name: string,
	brandId: number,
	brand: string,
	allProducts: IndProduct[]
}

interface SqlProduct {
	id: number,
	brand: string,
	brandid: number,
	modelid: number,
	modelname: string,
	name: string,
	releasedate: Date | string,
	colors: Colors[]
	price: number,
	description: string,
	sizes: ColorSizes[]
}

export { type IndProduct, type Brands, type Models, type Colors, type ColorSizes, type SqlProduct }