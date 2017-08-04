import React from 'react'
import PropTypes from 'prop-types'
import Immutable, { is, Map } from 'immutable'
import Cursor from 'immutable/contrib/cursor'

let hasOwnProperty = Object.prototype.hasOwnProperty;
function shallowEqual(objA, objB) {
  if (objA === objB || is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }
  let bHasOwnProperty = hasOwnProperty.bind(objB);
  for (let i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}



class HomeSlider extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      data: Map({ times: 0})
    };
    // ES6 类中函数必须手动绑定
    this.handleChange = this.handleChange.bind(this);


  }
  handleChange(event) {
    console.log('12');
    this.setState({
      data: this.state.data.update('times', v => 12)
    });
    // 这时的 times 并不会改变
    console.log('this.state.data.time:',this.state.data.get('times'));

    // this.setState(({data}) => ({
    //     data: data.update('times', v => v + 1) })
    // });
  }

  componentWillMount(){

  }
　
  componentDidMount(){


    // console.log('this.state:',this.state)
    //test immutable
    console.log('test immutable');
    let a = Map({
      select: 'users',
      filter: Map({ name: 'Cam'})
    });
    let b = a.set('select', 'people');
    console.log(a === b);  //false
    console.log(a.get('filter') === b.get('filter'));   //true
    //上面 a 和 b 共享了没有变化的 filter 节点。

    let data = Immutable.fromJS({ a: { b: { c: 1 } } });
    //让 cursor 指向 { c: 1 }
    let cursor = Cursor.from(data, ['a', 'b'], newData => {
      // 当 cursor 或其子 cursor 执行 update 时调用
      console.log('newData:',newData);
    });
    cursor.get('c'); // 1
    cursor = cursor.update('c', x => x + 1);
    cursor.get('c'); // 2


    //test immutable end
    console.log('test immutable end');



    // console.log('this.props:',this.props)
  }

  componentWillReceiveProps(nextProps){

  }




  shouldComponentUpdate(nextProps = {}, nextState = {}){

    return !(this.props === nextProps || is(this.props, nextProps)) ||
      !(this.state === nextState || is(this.state, nextState));



    // const thisProps = this.props || {}, thisState = this.state || {};
    // if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
    //   Object.keys(thisState).length !== Object.keys(nextState).length) {
    //   return true;
    // }
    //
    // for (const key in nextProps) {
    //   if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
    //     return true;
    //   }
    // }
    //
    // for (const key in nextState) {
    //   if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
    //     return true;
    //   }
    // }
    // return false;
  }

  componentWillUpdate(nextProps, nextState){

  }

  componentDidUpdate(){
      console.log('componentDidUpdate');
  }

  render() {
    return (
       <div style={{ margin: '0 auto' }} >
          <div>homeData: {this.props.homeData.result}</div>
          <div onClick={ this.handleChange }>text: { this.state.data.get('times') }</div>
       </div>
    );
  }

}

HomeSlider.propTypes = {
  homeData: PropTypes.object.isRequired,
};
HomeSlider.defaultProps = {
  defaultData: '',
};


export default HomeSlider
