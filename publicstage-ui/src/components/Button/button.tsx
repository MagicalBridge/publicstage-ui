import React from 'react';
import classNames from 'classnames';

// 组件的大小枚举
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

// 组件的类型枚举
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode,
  href?: string
}
// Button 是一个函数类型的组件
const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href
  } = props

  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}
// 默认的属性
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;