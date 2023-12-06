import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <main>
        <Header />
        <h1>Posts</h1>
        <Post
          author="John Smith"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sequi possimus labore corporis libero. Doloremque exercitationem ad neque optio nesciunt recusandae corrupti alias fuga ex dignissimos, rem numquam voluptatibus perspiciatis?"
        />
        <Post
          author="Felipe Silva"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sequi possimus labore corporis libero. Doloremque exercitationem ad neque optio nesciunt recusandae corrupti alias fuga ex dignissimos, rem numquam voluptatibus perspiciatis?"
        />
        <Post
          author="Erika Bastos"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sequi possimus labore corporis libero. Doloremque exercitationem ad neque optio nesciunt recusandae corrupti alias fuga ex dignissimos, rem numquam voluptatibus perspiciatis?"
        />
      </main>
    </>
  );
}
