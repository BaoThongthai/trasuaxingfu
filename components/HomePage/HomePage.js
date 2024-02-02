import React from 'react';
import { Card } from 'react-bootstrap';
import productHomepage from '../image/3.jpg';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', marginLeft: '50px', display: 'flex', flexWrap: 'wrap',marginTop:'78px' }}>
      <div style={{ flex: '1', marginRight: '-30px' }}>
        <Card style={{ width: '380px' }}>
          <Card.Img
            variant="top"
            src={productHomepage}
            alt="productHomepage"
            style={{
              width: '380px',
              height: 'auto',
              borderRadius: '8px',
			  
            }}
          />
        </Card>
      </div>

      <div style={{ flex: '2' }}>
	  
        <h1 style={{ fontWeight: 'bold', color: 'red', textAlign: 'center' }}>Giới Thiệu Về Trà Sữa Xingfucha</h1>
        <p>
          Chào mừng bạn đến với trang giới thiệu của chúng tôi về trà sữa Xingfucha - một hành trình thưởng thức độc đáo và ngon miệng. Xingfucha mang đến cho bạn không chỉ là một đồ uống, mà còn là trải nghiệm đầy hương vị và sự độc đáo.
        </p>

        <h2 >Chất Lượng Nguyên Nguyên Chất</h2>
        <p>
          Trà sữa Xingfucha tự hào về chất lượng nguyên liệu nguyên chất. Chúng tôi lựa chọn những lá trà tươi ngon nhất và sử dụng sữa tươi chất lượng cao để tạo nên sự kết hợp hoàn hảo, đem lại hương vị tinh tế và độ phong phú mà bạn chưa từng trải nghiệm.
        </p>

        <h2 >Đa Dạng Hương Vị</h2>
        <p>
          Với một loạt các hương vị phong phú, từ trà sữa truyền thống đến những sáng tạo mới lạ, Xingfucha mang đến cho bạn sự đa dạng để bạn có thể tận hưởng và khám phá hương vị mỗi ngày.
        </p>

        
      </div>
    </div>
  );
};

export default HomePage;
