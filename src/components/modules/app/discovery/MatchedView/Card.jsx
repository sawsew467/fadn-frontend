import { useCallback, useEffect, useState } from "react";
import * as S from "./MatchedView.styles";
import { calculateAge } from "@/utils/caculateAge";

function Card({ id }) {
  const [cardInfor, setCardInfor] = useState();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8088/api/v1/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response?.json();

      setCardInfor(data);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Card>
      <S.ImageCard
        src={cardInfor?.profileDTO?.avatar}
        alt=""
        width={300}
        height={400}
      ></S.ImageCard>
      <S.CardInfo>
        <p>
          {cardInfor?.lastName}, {`${calculateAge(cardInfor?.dob)} Tuổi`}
        </p>
      </S.CardInfo>
    </S.Card>
  );
}

export default Card;
