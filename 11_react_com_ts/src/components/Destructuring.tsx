interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  /* 8. usando o enum
    O enum é uma forma interessante de formatar um objeto com chaves e valores;
    Onde podemos utilizar como props;
    Passando a chave pela prop, imprimimos o valor dela no componente
  */
  category: Category;
}

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python',
}

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </>
  );
};

export default Destructuring;
