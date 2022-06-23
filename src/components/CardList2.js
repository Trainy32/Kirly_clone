import React from "react";
import styled from 'styled-components';
import Card from './Card';
import { useDispatch, useSelector } from "react-redux";
import { customAxios } from "../shared/Request";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const CardList2 = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.post_list);
    console.log(data);

    const [item, setItem] = React.useState();
    
    React.useEffect(() => {
        customAxios.get('/api/category/003')
        .then(response => {
            console.log(response)
            setItem(response.data.productDto)
        })
    }, [])
    
    console.log(item);

    return (
        <React.Fragment>
            <Div>놓치면 후회할 가격&gt;</Div>
            <Swiper
                // 카드를 보여주는 개수
                slidesPerView={4}
                // 카드 사이 공백
                spaceBetween={0}
                slidesPerGroup={4}
                // 무한 루프를 돌릴 것인지
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <DivSt>
                {item?.map((v, i) => (
                        <Card className="card" 
                            key={i} 
                            id={v.id}
                            img={v.thumb}
                            name={v.name} 
                            price={v.price}
                            summary={v.summary}
                            /> 
                ))}
                </DivSt>
                </Swiper>
        </React.Fragment>
    );
};

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Div = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 20px;
    font-family: 'Noto Sans KR', sans-serif;
`;

export default CardList2;