import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Create,
  ListProps,
  EditProps,
  CreateProps,
} from "react-admin";

export const TournamentEventResultList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="tournamentEventId" reference="tournamentEvents">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="playerId" reference="players">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const TournamentEventResultEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="tournamentEventId" reference="tournamentEvents">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="playerId" reference="players">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const TournamentEventResultCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="tournamentEventId" reference="tournamentEvents">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="playerId" reference="players">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
