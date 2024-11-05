import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  EditProps,
  CreateProps,
  ListProps,
} from "react-admin";

export const PlayerList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <DateField source="dateOfBirth" />
      <TextField source="phoneNumber" />
    </Datagrid>
  </List>
);

export const PlayerEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <DateInput source="dateOfBirth" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Edit>
);

export const PlayerCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="email" />
      <DateInput source="dateOfBirth" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Create>
);
