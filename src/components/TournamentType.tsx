import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const TournamentTypeList: React.FC = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const TournamentTypeEdit: React.FC = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const TournamentTypeCreate: React.FC = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
