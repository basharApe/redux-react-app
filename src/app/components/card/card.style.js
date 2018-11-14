import styled from 'styled-components'

const CardWrapper = ComponentName => styled(ComponentName)`
    border-radius: 10px;
    overflow: hidden;
    cursor:pointer;
    &:hover{
        transform: scaleX(0.9) scaleY(0.8);
    }
    .ant-card-body{
        background-color: #0000ff;
        color: #fff;
        text-align: center;
    }
    .ant-card-head {
       background-color: #add8e6;
       text-align: center;
    }
`

export {CardWrapper}

