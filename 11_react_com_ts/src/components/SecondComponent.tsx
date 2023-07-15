interface Props {
  name: string;
}

const SecondComponent = (props: Props) => {
  return (
    <>
      <p>Meu segundo component</p>
      <p>O nome dele é {props.name}</p>
    </>
  );
};

export default SecondComponent;
