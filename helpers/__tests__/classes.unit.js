import classes, {scopedClassMaker} from '../classes';

describe('classes', () => {
  it('接受一个className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受两个className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
});

describe('scopedClassMaker', () => {
  it('接受字符串或对象', function () {
    const sc = scopedClassMaker('tui-layout');
    expect(sc('')).toEqual('tui-layout');
    expect(sc('x')).toEqual('tui-layout-x');
    expect(sc({y: true, z: false})).toEqual('tui-layout-y');
    expect(sc({y: true, z: true})).toEqual('tui-layout-y tui-layout-z');
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('tui-layout-y tui-layout-z red');
  });
});