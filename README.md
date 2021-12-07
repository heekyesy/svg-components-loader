将svg当作组件使用
配置    {
            test: /\.svg$/,
            loader: 'babel-loader'
        }
使用及参数
    组件可传入宽高
    import Logo from './logo.svg';
    let Index = () => {
        return (
            <div>
            <Logo width={100} height={100}></Logo>
            </div>
        );
    }