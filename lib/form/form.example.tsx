import * as React from "react";
import Form, {FormValue} from "./form";
import {Fragment, useState} from "react";
import Validator, {noError} from "./validator";
import Button from "../button/button";

const usernames = ['frank', 'jack', 'bob'];
const checkUserName = (username: string, success: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('我现在知道用户名是否存在');
    if (usernames.indexOf(username) >= 0) {
      fail()
    } else {
      success()
    }
  }, 6000);
};

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {
        key: 'username', validator: {
          name: 'sss',
          validate(username: string) {
            return new Promise<void>((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          }
        }
      }
    ];
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
      if (noError(errors)) {
        console.log('无错误');
      }
    });
  };
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <Fragment>
          <Button type='submit' level='important'>提交</Button>
          <Button>返回</Button>
        </Fragment>
      }
      onSubmit={onSubmit}
      errors={errors}
      onChange={(newValue) => setFormData(newValue)}
    />
  );
};
export default FormExample;