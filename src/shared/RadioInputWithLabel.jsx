import styled from 'styled-components'

const Radio = styled.input`
justify-content: left;
margin: 0px;
padding: .5rem;
`;
const RadioContainer = styled.div`
justify-content: left;
margin: 0px;
padding: .5rem;
`;



function RadioInputWithLabel({ elementId, label, elementValue, valueChange}) {

const handleValueChange = (e) => {
    valueChange(e.target.value);
}

  return (
    <RadioContainer>
        <Radio type="radio" id={elementId} name="answer" value={elementValue} onChange={handleValueChange}/>
        <label htmlFor={elementId}> {label}</label>
</RadioContainer>
    
  );
}

export default RadioInputWithLabel;