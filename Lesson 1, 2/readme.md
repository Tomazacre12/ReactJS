ReactJS - Props, State và Global State

PROPS

Không thay đổi được

Được truyền từ component cha

Tạo sự đa dạng cho component


function Box(props) {

  return (

    <div 

      style={{backgroundColor: props.color}}

    ></div>

  );

}


funtion App() {

  return (

    <div>

      <Box color="deeppink" />

      <Box color="green" />

    </div>

  );

}

STATE

Thay đổi được

Dùng khi chỉ được sử dụng bởi MỘT component hiện tại

Ví dụ:
 + Dữ liệu từ API chỉ dùng trong component.
 + currentSecond trong count down.
 + ...

Global State (redux)

Thay đổi được

NẾU được dùng bởi NHIỀU component

Ví dụ:
 + Thông tin logged in user
 + Thông tin của giỏ hàng
 + ...

ColorBox
 + Props: color
 + State: N/A
 + Render: a box with background color is props.color

Countdown
+ Props: seconds
+ State: currentSecond
+ Handle to update currentSecond per second.
+ Render: currentSecond value

- Props thì được truyền từ component cha.
- State thì được dùng trong MỘT component.
- Global State nếu dùng cho NHIỀU components.



