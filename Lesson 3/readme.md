constructor()

- Được phép dùng
- nhớ có super(props)
- khai báo state
- định nghĩ properties của component

Class App() extends PureComponent {

    constructor(props){
        
        super(props)


        this.DEFAULT_MAX_LENGTH = 10

        this.state={
              
            productlist: []

        }

    }

}

componentDidMount()

- Được phép dùng
- Khởi tạo dữ liệu cho component: gọi API, biến đổi dữ liệu, cập nhật state
- gửi tracking page view    

class HomePage extends PureComponent{

    constructor(props){

        super(props)

        this.state = {

            loading: true
            productList: []

        }

    }

async componentDidMount(){

    try{

        analytics.page('Home page')

        const productList = await productApi.getAll()

        this.setState({

            productList,
            loading: false

        })



    }  catch (error) {

        console.log('Failed to fetch product list', error)

        this.setState({loading: false})

    }

}

    render(){

        const{loading, productList} = this.state

        if(loading) return <loader/>

        return <ProductList productList={productList}>
        
    }

}