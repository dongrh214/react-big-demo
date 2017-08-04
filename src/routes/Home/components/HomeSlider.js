import React from 'react'
import PropTypes from 'prop-types'
import Immutable, { is, Map } from 'immutable'
import Cursor from 'immutable/contrib/cursor'

import PureComponent from '../../../components/PureComponent';



class HomeSlider extends PureComponent {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      data: Map({
        times: 0,
        ads:Map({
          aaa:'bbb'
        })
      })
    };
    // ES6 类中函数必须手动绑定
    this.handleChange = this.handleChange.bind(this);


  }
  handleChange(event) {
    console.log('12');
    let ads = this.state.data.get('ads');
    ads = ads.update('aaa',v => 'ccc');
    let data = this.state.data;
    data = data.update('times', v => 12)
    data = data.update('ads',v => ads);
    this.setState({
      data: data
    });
    // 这时的 times 并不会改变
    console.log('this.state.data.time:',this.state.data.get('times'));
    console.log('this.state.data.time:',this.state.data.get('ads').get('aaa'));

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



  componentWillUpdate(nextProps, nextState){

  }

  componentDidUpdate(){
      console.log('componentDidUpdate');
  }

  render() {
    return (
       <div style={{ margin: '0 auto' }} >
          <div>homeData: {this.props.homeData.result}</div>
          <div onClick={ this.handleChange }>text: { this.state.data.get('times') } ==== { this.state.data.get('ads').get('aaa') }</div>
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
