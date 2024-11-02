import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  Create,
} from "react-admin";

export const TournamentEventList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <ReferenceField source='tournamentTypeId' reference='tournamentTypes'>
        <TextField source='name' />
      </ReferenceField>
      <DateField source='startDate' />
    </Datagrid>
  </List>
);

export const TournamentEventEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <ReferenceInput source='tournamentTypeId' reference='tournamentTypes'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <DateInput source='startDate' />
    </SimpleForm>
  </Edit>
);

export const TournamentEventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <ReferenceInput source='tournamentTypeId' reference='tournamentTypes'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <DateInput source='startDate' />
    </SimpleForm>
  </Create>
);
