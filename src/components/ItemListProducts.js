import Item from './Item'
import './ItemList.css'

const ItemListProducts =(props) => {
const {prodListData} = props
return(

    <div className='itemList'>
       {prodListData.map((productData) => {

        return (
          <div>
            <Item key={productData.id} productData={productData}/>
          </div>
        );
      })}
      
    </div>
)

}

export default ItemListProducts;