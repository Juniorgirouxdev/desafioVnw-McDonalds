import sacolaMac from "../../assets/imgCard1.png";
import restaurante from "../../assets/imgCard2.png";
import sacMec from "../../assets/imgCard3.png";
import Card from "./Card";
import * as S from "./Main.styled";

export default function Main() {
  return (
    <S.Main>
      <section>
        <S.Title>
          <h2>Promoção</h2>
        </S.Title>
        <S.Center>
          <Card imagem={sacolaMac} texto={"Que tal um #MéquiNoSofá"} />
          <Card imagem={restaurante} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={sacMec} texto={"Que tal um #MéquiNoSofá"} />
        </S.Center>
      </section>
    </S.Main>
  );
}
