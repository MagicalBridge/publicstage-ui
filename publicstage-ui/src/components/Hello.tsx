import React from 'react'

// 定义一个接口,接口定义了props属性 定义成一个可以选择的参数
interface IHelloProps {
  message?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  return (
    <h2>{props.message}</h2>
  )
}

Hello.defaultProps = {
  message: 'Hello world'
}

export default Hello