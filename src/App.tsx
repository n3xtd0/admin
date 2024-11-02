import React from 'react';
import { Admin, Resource } from 'react-admin';
import { mockDataProvider } from './mockDataProvider';
import { TournamentTypeList, TournamentTypeEdit, TournamentTypeCreate } from './components/TournamentType';
import { TournamentEventList, TournamentEventEdit, TournamentEventCreate } from './components/TournamentEvent';

import { PlayerList, PlayerEdit, PlayerCreate } from './components/Player';
import { TournamentEventPlayersList, TournamentEventPlayersEdit, TournamentEventPlayersCreate } from './components/TournamentEventPlayers';

const App = () => (
  <Admin dataProvider={mockDataProvider}>
    <Resource name="tournamentTypes" list={TournamentTypeList} edit={TournamentTypeEdit} create={TournamentTypeCreate} />
    <Resource name="tournamentEvents" list={TournamentEventList} edit={TournamentEventEdit} create={TournamentEventCreate} />
    <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} />
    <Resource name="tournamentEventPlayers" list={TournamentEventPlayersList} edit={TournamentEventPlayersEdit} create={TournamentEventPlayersCreate} />
  </Admin>
);

export default App;
