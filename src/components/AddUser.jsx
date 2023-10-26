import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto ;
   & > div {
     margin-top: 20px;
   }
`;

const initialValues = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChange} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={onValueChange} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChange} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChange} name="phone" />
      </FormControl>
      <FormControl>
        <Button onClick={addUserDetails} variant="contained">
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
