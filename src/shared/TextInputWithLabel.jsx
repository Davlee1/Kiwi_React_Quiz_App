import styled from 'styled-components'

const Input = styled.input`
margin: 0.5rem;
`;

function TextInputWithLabel({ elementId, label, elementName }) {
  return (
    <>
      <label htmlFor={elementId}>{label}</label>
      <Input
        type="text"
        id={elementId}
        name={elementName}

      />
    </>
  );
}

export default TextInputWithLabel;
