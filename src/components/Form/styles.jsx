import styled from "styled-components";

export const Container = styled.div`
  max-width: 1220px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #568afa;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  width: 140px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background-color: #2f6ef7;
  transition: 0.5s;

  &:hover {
    background-color: #0b58ff;
  }
`;
