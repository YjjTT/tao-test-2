/*
 * @Author: yjjtt 
 * @Date: 2019-09-11 13:19:41 
 * @Last Modified by: yjjtt
 * @Last Modified time: 2019-09-11 13:22:45
 */
import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";

describe("button", () => {
  it("是个 div", () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
