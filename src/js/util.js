/**
 * Created by dongruihe on 2017/8/3.
 */

const success = (result) => {
  // dispatch({
  //   type: 'CREATE_POST_SUCCESS',
  //   payload: result
  // });
  console.log('result',result.json());
  return result
};

const fail = (err) => {
  // dispatch({
  //   type: 'CREATE_POST_FAIL',
  //   err
  // });
  return err
};
export const getData = async function () {
  console.log('start');
  const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
  try {
    const result = await fetch(url);
    return success(result)
  } catch (err) {
    return fail(err)
  }
};
