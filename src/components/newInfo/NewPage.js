// App.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewPage = () => (
  <div>
  <br/>
    <h2 style={{ textAlign: 'center',color:'red' }}>THÔNG TIN XING FU CHA</h2>

	<hr />
    <div style={{ display: 'flex' }}>
      <div style={{ float: 'left', marginRight: '20px' }}>
        <img src="https://s.net.vn/VpLS" alt="Image" style={{ width: '400px', height: '380px', borderRadius:'5px' }} />
      </div>
      <Card style={{ width: '60rem' }}>
        <Card.Body>
          <Card.Title>💥 𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢
   𝐀𝐧 𝐤𝐡𝐚𝐧𝐡 𝐭𝐡𝐢̣𝐧𝐡 𝐯𝐮̛𝐨̛̣𝐧𝐠🌟</Card.Title>
          <Card.Text>
            🥰Xingfucha kính chúc các quạt yêu một năm mới thật hạnh phúc bênh gia đình và bạn bè, năm sau ngày càng xinh gái xinh trai và nhớ đừng quên tui à nhen kaka
😘Cũng sẵn đây mình xin thông báo lịch nghỉ tết của các chi nhánh Xingfucha cho các quạt yêu. Mong năm mới các bạn sẽ ủng hộ mình nhiều hơn nữa để mình sẽ lên nhiều deal hơn để phục vụ các quạt của mình nè!!!
🤩Lịch cụ thể như trong hình nhan😍
😋Đà Nẵng
Chi nhánh 892 Trần Cao Vân, 107 Ngô Gia Tự mở xuyên tết trừ ngày mồng 1 (10/2)
Chi nhánh  180 Lê Thanh Nghị, 30 Ngô Thì Nhậm đóng cửa từ 27 âm lịch (6/2) và mở lại vào mồng 7 (16/2)
😋Hồ Chí Minh 
Chi nhánh 87B Lê Văn Duyệt mở xuyên tết
Chi nhánh 324 Lê Đức Thọ mở xuyên tết (trừ mồng 1 và mồng 2 hay 10-11/2)
          </Card.Text>
          <Button variant="primary">Click to see detail</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
);

export default NewPage;
