import React from "react";
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create } from "react-admin";

export const PlayerList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
    </Datagrid>
  </List>
);

export const PlayerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <TextInput source='email' />
    </SimpleForm>
  </Edit>
);

export const PlayerCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='email' />
    </SimpleForm>
  </Create>
);
