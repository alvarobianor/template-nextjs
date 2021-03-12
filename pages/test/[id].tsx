import { useRouter } from "next/router";
import styled from "styled-components";
export default function Post() {
  const route = useRouter();

  const { id } = route.query;

  return (
    <Container>
      <h1>My id is: {id ?? "Álvim"}</h1>;
    </Container>
  );
}

const Container = styled.div`
  background-color: tomato;
`;
