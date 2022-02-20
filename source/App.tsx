import Container from "@/bosons/Container";
import Profile from "@/components/Profile";
import Content from "@/components/Content";
import GlobalStyle from "@/assets/GlobalStyle";

export default function App() {
  return (
    <Container>
      <Profile />
      <Content />
      <GlobalStyle />
    </Container>
  );
}
