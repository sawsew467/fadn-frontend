import * as S from "./MatchedView.styles";

function Card({ info }) {
  return (
    <S.Card>
      <S.ImageCard
        src={info?.avatar}
        alt=""
        width={300}
        height={400}
      ></S.ImageCard>
      <S.CardInfo>
        <p>
          {info?.name}, {info?.age}
        </p>
      </S.CardInfo>
    </S.Card>
  );
}

export default Card;
