import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';
import api from '../../services/api';

import {
  Container,
  Product,
  ProductImage,
  ProductQuantity,
  ProductQuantityText,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  AddToCartButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({products: data});
  };

  handleAddtoCart = product => {
    const {dispatch} = this.props;
    console.tron.log('HEY!');
    dispatch({type: '@cart/ADD_ITEM', product});
  };

  renderProductTile = ({item}) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.formattedPrice}</ProductPrice>
        <AddToCartButton onPress={() => this.handleAddtoCart(item)}>
          <ProductQuantity>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductQuantityText>1</ProductQuantityText>
          </ProductQuantity>
          <AddToCartButtonText>Add to cart</AddToCartButtonText>
        </AddToCartButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProductTile}
        />
      </Container>
    );
  }
}

export default connect()(Home);
