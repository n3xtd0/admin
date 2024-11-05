import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create, ListProps, EditProps, CreateProps } from "react-admin";

export const TournamentTypeList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const TournamentTypeEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const TournamentTypeCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
