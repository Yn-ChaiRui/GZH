import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  import React from 'react';
  import styles from './IndexPage.css';
  import { connect } from 'dva';
  import Xuesheng from './xuesheng'
  import Jiazhang from './jiazhang'
  import Daoshi from './daoshi'
  import Guanliyuan from './guanliyuan'

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
 
  
  class Xinxi extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const {flag}=this.props
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
          
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {
            flag==1?<Xuesheng />:true
            
            }
          {
            flag==2?<Jiazhang />:true
          }
          {
            flag==3?<Daoshi />:true
          }
          {
            flag==4?<Guanliyuan />:true
          }
          {/* <Form.Item label="创建密码" labelAlign="left">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input placeholder="请填写密码" className={styles.shuru}/>)}
          </Form.Item>
          <Form.Item label="姓名" labelAlign="left">
          {getFieldDecorator('usernamea', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input className={styles.shuru} placeholder="请填写姓名"/>,
          )}
          </Form.Item>
          <Form.Item label="昵称" labelAlign="left">
          {getFieldDecorator('nickname', {
            rules: [{ required: false, message: 'Please input your nickname!', whitespace: true }],
          })(<Input className={styles.shuru} placeholder="请填写昵称(6个字符以内)"/>)}
        </Form.Item>
          <Form.Item label="加入班组" labelAlign="left">
          {getFieldDecorator('gender', {
            rules: [{ required: false, message: 'Please select your gender!' }],
          })(
            <Select 
              placeholder=""
              onChange={this.handleSelectChange}
              className={styles.shuru}
            >
              <Option value="xxbana">XX班级</Option>
              <Option value="xxbanb">XX班级</Option>
              <Option value="xxbanc">XX班级</Option>
              <Option value="xxband">XX班级</Option>
            </Select>,
          )}
        </Form.Item> */}
        </Form>
      );
    }
  }
  
  // const WrappedRegistrationForm = Form.create({ name: 'register' })(Xinxi);

  Xinxi = connect((state) => {
    return {
      ...state.example
    };
  })(Xinxi);

  export default Form.create({ name: 'register' })(Xinxi);