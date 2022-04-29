import { getProductsList } from './../../../redux/selectors/products-selector';
import { AppStateType } from './../../../redux/store';
import { connect } from 'react-redux';
import { ProductsType } from '../../../redux/reducers/products-reducer';
import Catalog from './Calalog'

type MapStateToProps = {
	products: Array<ProductsType>
}

// type MapDispatchToProps {

// }

let mapStateToProps = (state: AppStateType) => {
	return {
		products: getProductsList(state)
	}
}

const mapDispatchToProps: any = {}

export const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog)