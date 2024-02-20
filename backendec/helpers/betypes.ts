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

interface BrandQueryResult {
	brandReq: Brands[]
}

interface ModelQueryResult {
	modelReq: Models
}

interface ProductQueryResult {
	productReq: IndProduct,
	similarProducts: IndProduct[]
}

interface SearchQueryResult {
	products: IndProduct[]
}

interface ProductPatch {
	name: string,
	id: number,
	color: string,
	size: string
}

interface SizesPatch {
	sizes: ColorSizes[],
	id: number
}

interface Mail {
	from: string,
	to: string,
	subject: string,
	text: string
}

interface Order {
	paymentid: number,
	userid: number,
	stripeid: string,
	productlist: string[],
	datecreated: Date
}

interface IndOrder {
	order: Order,
	productsOrder: IndProduct[]
}


export { type IndProduct, type Brands, type Models, type Colors, type ColorSizes, type ProductSizes, type SqlProduct, type SearchQueryResult, type ProductQueryResult, type BrandQueryResult, type ModelQueryResult, type ProductPatch, type SizesPatch, type Mail, type Order, type IndOrder }