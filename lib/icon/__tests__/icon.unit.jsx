/*
 * @Author: yjjtt
 * @Date: 2019-09-11 13:19:41
 * @Last Modified by: yjjtt
 * @Last Modified time: 2019-09-16 17:06:27
 */
import React from "react";
import renderer from "react-test-renderer";
import Icon from "../icon";
import { mount } from "enzyme";

describe("icon", () => {
  it("render success 是个 svg", () => {
    const json = renderer.create(<Icon />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("onClick", () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
