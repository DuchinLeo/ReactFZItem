import { Spin } from 'antd';
import styled from 'styled-components';




export const SpinWrap = styled(Spin)`
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:300px;
  height:300px;
  /* width: 80%;
  height: 80%; */
  .ant-spin{
    width:300px;
    height:300px;
    .ant-spin-dot {
      width: 100% !important;
      height: 100% !important;
      .ant-spin-dot-item{
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
`;
