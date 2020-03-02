import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductActions,
  ProductActionsButton,
  ProductQuantity,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Checkout,
  CheckoutText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart() {
  return (
    <Container>
      {products.length ? (
        <>
          <Products>
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{uri: product.image}} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => removeFromCart(product.id)}>
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductActions>
                  <ProductActionsButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductActionsButton>
                  <ProductQuantity value={String(product.amount)} />
                  <ProductActionsButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductActionsButton>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductActions>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Checkout>
              <CheckoutText>CHECKOUT</CheckoutText>
            </Checkout>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Your cart is empty.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

export default Cart;
