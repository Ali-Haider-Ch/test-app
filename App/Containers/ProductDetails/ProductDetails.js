import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Images, Colors} from '../../Themes';
import styles from './ProductDetailsStyle';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import getProduct from '../../Redux/GetProductsRedux';
import {SkypeIndicator} from 'react-native-indicators';
import NoRecord from '../../Components/NoRecord/NoRecord';
import {Icon} from 'react-native-elements';
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    const data = {
      barcode: this.props.navigation.state.params.barcode,
    };
    this.props.getProductRequest(data);
  }
  _renderItem = ({item, index}) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={styles.productImage}
      />
    );
  };
  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      const {product} = this.props.product;
      if (product) {
        this.setState({images: product.images});
      }
    }
  }

  render() {
    const {product} = this.props;
    const productData = product.product;
    const {width: viewportWidth} = Dimensions.get('window');
    if (product.fetching) {
      return <SkypeIndicator size={50} color={Colors.background} />;
    } else if (!productData) {
      return <NoRecord navigation={this.props.navigation} />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.images}
            renderItem={this._renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            autoplay={true}
            autoplayDelay={200}
            loop={true}
          />
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" type="ionicons" />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <ScrollView>
            <Text style={styles.title}>{productData.product_name}</Text>
            <Text style={styles.category}>{productData.category}</Text>

            <Text style={styles.subTitle}>Brand</Text>
            <Text style={styles.descrption}>
              {productData.brand ? productData.brand : 'NA'}
            </Text>

            <Text style={styles.subTitle}>Barcode</Text>
            <Text style={styles.descrption}>
              {productData.barcode_number ? productData.barcode_number : 'NA'}
            </Text>

            <Text style={styles.subTitle}>Description</Text>
            <Text style={styles.descrption}>
              {productData.description ? productData.description : 'NA'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => {
  return {
    getProductRequest: data => dispatch(getProduct.getProductRequest(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails);
